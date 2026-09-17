// ============================================================
// API CONVERSIONS META — Canal serveur
// Reçoit les événements du site et les renvoie à Meta
// via le serveur, impossible à bloquer par AdBlock/iOS.
// ============================================================
const crypto = require('crypto');

// Pixel et token : variables d'environnement Netlify (jamais dans le code)
//   META_PIXEL_ID   = ID du pixel Sisters Relax
//   META_CAPI_TOKEN = token de l'API Conversions

function sha256(value) {
  if (!value) return null;
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

// Téléphone au format international sans "+" (exigence Meta).
// 06XXXXXXXX (Maroc) -> 2126XXXXXXXX ; +212 / 00212 -> 212... ; +33 -> 33...
function normaliserTel(tel) {
  let t = String(tel || '').replace(/[^0-9+]/g, '');
  if (t.startsWith('+')) return t.slice(1);
  if (t.startsWith('00')) return t.slice(2);
  if (t.startsWith('0')) return '212' + t.slice(1);
  return t;
}

exports.handler = async function(event) {
  // CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST' }, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const TOKEN = process.env.META_CAPI_TOKEN;
  const PIXEL_ID = process.env.META_PIXEL_ID;
  if (!TOKEN || !PIXEL_ID) {
    console.error('META_CAPI_TOKEN ou META_PIXEL_ID manquant dans les variables d\'environnement');
    return { statusCode: 500, body: 'Server config error' };
  }

  try {
    const body = JSON.parse(event.body);
    const { events } = body;

    if (!events || !events.length) {
      return { statusCode: 400, body: 'No events' };
    }

    const metaEvents = events.map(evt => {
      const serverEvent = {
        event_name: evt.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: evt.event_id, // Déduplication avec le pixel navigateur
        event_source_url: evt.source_url || '',
        action_source: 'website',
        user_data: {
          country: [sha256('ma')],
          client_ip_address: event.headers['x-nf-client-connection-ip'] || String(event.headers['x-forwarded-for'] || '').split(',')[0].trim(),
          client_user_agent: event.headers['user-agent'] || '',
        }
      };

      if (evt.user_data) {
        if (evt.user_data.em) serverEvent.user_data.em = [sha256(evt.user_data.em)];
        if (evt.user_data.ph) serverEvent.user_data.ph = [sha256(normaliserTel(evt.user_data.ph))];
        if (evt.user_data.fn) serverEvent.user_data.fn = [sha256(evt.user_data.fn)];
        if (evt.user_data.ln) serverEvent.user_data.ln = [sha256(evt.user_data.ln)];
        // fbp et fbc : Meta les attend en clair, surtout pas hachés
        if (evt.user_data.fbp) serverEvent.user_data.fbp = evt.user_data.fbp;
        if (evt.user_data.fbc) serverEvent.user_data.fbc = evt.user_data.fbc;
      }

      if (evt.custom_data) {
        serverEvent.custom_data = evt.custom_data;
      }

      return serverEvent;
    });

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: metaEvents })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI error:', JSON.stringify(result));
      return { statusCode: 502, body: JSON.stringify(result) };
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true, events_received: result.events_received })
    };

  } catch (err) {
    console.error('CAPI function error:', err);
    return { statusCode: 500, body: 'Internal error' };
  }
};
