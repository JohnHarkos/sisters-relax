/* ============================================================
   SISTERS RELAX — CONFIGURATION DU SITE
   Seul fichier à remplir. Clés des comptes propres à Sisters Relax.
   Les clés ci-dessous sont publiques par nature : la sécurité repose
   sur les règles RLS du fichier supabase-setup.sql.
   ============================================================ */

/* ---------- Supabase (Project Settings > API) ---------- */
const SUPABASE_URL      = 'https://aqjduxeagknfomacojxb.supabase.co';   // ex : https://abcdxyz.supabase.co
const SUPABASE_ANON_KEY = 'sb_publishable_wD2I0yqbNtkOBAkeG1mh6w_P89DwJM2';   // clé "anon public"

/* ---------- EmailJS ---------- */
const EMAILJS_PUBLIC_KEY       = 'eN_kyZl8vJ6vtuISX';
const EMAILJS_SERVICE_ID       = 'service_6pwthjr';
const EMAILJS_TEMPLATE_ID      = 'template_g7ii1xf';   // notification au salon
const EMAILJS_TEMPLATE_CLIENTE = 'template_ovd9mlk';   // confirmation à la cliente
const EMAIL_SALON = 'Nawel.essenhaji@gmail.com';

/* ---------- Tracking (vide = désactivé) ---------- */
const META_PIXEL_ID    = '1624323319313211';   // NOUVEAU pixel Sisters Relax
const GOOGLE_ADS_ID    = '';   // ex : AW-123456789
const GOOGLE_ADS_LABEL = '';   // ex : AW-123456789/AbCdEf
const TIKTOK_PIXEL_ID  = '';
const DEVISE = 'MAD';          // devise envoyée aux régies (dirham)

/* ---------- Salon ---------- */
const SALON = {
  nom: 'Sisters Relax',
  signature: 'By Huile Essentiel',
  adresse: 'Hay Youssef Ben Tachfine, Marrakech',
  ville: 'Marrakech',
  telephone: '+212715339294',        // bouton "Appeler"
  telephoneAffiche: '+212 7 15 33 92 94',
  whatsapp: '212715339294',          // format wa.me : chiffres uniquement
  email: 'Nawel.essenhaji@gmail.com',
  instagram: 'https://www.instagram.com/salon.sisters.relax/',
  tiktok: 'https://www.tiktok.com/@salon.sisters.relax',
  facebook: '',
  latitude: 31.6510625,
  longitude: -8.0183125,
  fuseau: 'Africa/Casablanca'
};

/* ---------- Avis Google (section masquée tant que c'est vide) ----------
   Recopier la note, le nombre d'avis et 2-3 VRAIS avis de la fiche Google. */
const GOOGLE_NOTE = 4.8;
const GOOGLE_NB_AVIS = 422;
const GOOGLE_FICHE_URL = 'https://share.google/H2aBinplHQXinbgpB';
const AVIS = [
  {"auteur": "Karima M.", "note": 5, "texte": "Je suis venue au salon avec ma fille pendant mon séjour à Marrakech. Hammam, manucure et brushing : tout était parfait. L’équipe est aux petits soins et l’ambiance permet de vraiment se détendre et se ressourcer. Un grand merci à Nawel et à sa maman pour leur accueil chaleureux, leur gentillesse et leur attention. Nous reviendrons sans hésiter lors de notre prochain séjour."},
  {"auteur": "Anaïs G.", "note": 5, "texte": "Une superbe expérience chez Sisters Relax. Un accueil chaleureux, une ambiance relaxante et des prix très raisonnables. Un grand merci à Fatima Zahra pour le hammam, et à Fati pour son excellent massage et sa pédicure impeccable. Je recommande vivement !"},
  {"auteur": "Salma A.", "note": 5, "texte": "Je me suis fait faire les ongles par Sara et je suis ravie du résultat ! Elle est adorable, douce et très professionnelle. Elle prend le temps de bien faire les choses et on se sent tout de suite à l’aise. J’ai aussi vécu une expérience formidable au hammam avec Nezha, qui s’est occupée de ma mère et de moi avec beaucoup de douceur et de professionnalisme."}
];

/* Photos : déposer hero.jpg (grande photo d'accueil) à la racine du site.
   Tant qu'elle n'existe pas, un fond uni est affiché. */

const COLLABORATRICES = [
  { id: 'sarah',  nom: 'Sarah'  },
  { id: 'soumia', nom: 'Soumia' },
  { id: 'nawel',  nom: 'Nawel'  }
];

/* Horaires de secours (la version à jour est dans l'admin).
   0 = dimanche … 6 = samedi. [ouverture, fermeture] en heures décimales, null = fermé. */
const HORAIRES = { 0:[10,20], 1:[10,20], 2:[10,20], 3:[10,20], 4:[10,20], 5:[10,20], 6:[10,20] };

/* ---------- Espaces du salon & capacité ----------
   places         : combien de clientes en même temps dans cet espace
   parPraticienne : combien de clientes une praticienne suit en même temps
                    (2 au hammam : elles chauffent ensemble, gommage à tour de rôle) */
const ESPACES = {
  hammam:   { nom: 'Hammam',           places: 4, parPraticienne: 2 },
  massage:  { nom: 'Salle de massage', places: 2, parPraticienne: 1 },
  manucure: { nom: 'Poste manucure',   places: 2, parPraticienne: 1 },
  pedicure: { nom: 'Poste pédicure',   places: 2, parPraticienne: 1 },
  regard:   { nom: 'Poste regard',     places: 2, parPraticienne: 1 },
  coiffure: { nom: 'Poste coiffure',   places: 4, parPraticienne: 1 }
};

/* Quel espace utilise chaque catégorie de prestations.
   Soins du corps et Massage partagent les 2 mêmes salles. */
const ESPACE_PAR_CATEGORIE = {
  'Spa & Bien-être':     'hammam',
  'Soins du corps':      'massage',
  'Massage':             'massage',
  'Ongles':              'manucure',
  'Beauté des pieds':    'pedicure',
  'Regard & Maquillage': 'regard',
  'Coiffure femme':      'coiffure'
};

/* Couleur de chaque catégorie dans l'agenda de l'espace pro.
   Teintes douces : le texte reste lisible par-dessus. */
const COULEUR_CATEGORIE = {
  'Spa & Bien-être':     '#EFD9C9',
  'Soins du corps':      '#DDE8DD',
  'Massage':             '#CFE0D6',
  'Ongles':              '#F3DAE1',
  'Beauté des pieds':    '#D9E3EC',
  'Regard & Maquillage': '#E6DBE8',
  'Coiffure femme':      '#F1E2BF'
};
const COULEUR_AUTRE = '#E8E0D6';

/* Nombre de praticiennes présentes par défaut.
   Modifiable dans l'admin les jours de renfort. */
const EFFECTIF_DEFAUT = 3;

const RESA = {
  pasMinutes: 30,        // un créneau toutes les 30 min
  delaiMinHeures: 2,     // pas de réservation à moins de 2h
  joursVisibles: 14,     // 14 jours affichés
  maxPrestations: 5      // prestations max par rendez-vous
};

/* Catalogue de secours, utilisé seulement si la base est injoignable.
   Le vrai catalogue se gère dans l'admin. */
const PRESTATIONS = [ {"id": "p01", "cat": "Spa & Bien-être", "nom": "Hammam Beldi", "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": "Hammam + gommage au savon noir"}, {"id": "p02", "cat": "Spa & Bien-être", "nom": "Hammam Relax", "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": "Hammam + gommage + serviette"}, {"id": "p03", "cat": "Spa & Bien-être", "nom": "Hammam & Massage 30 min", "prix": 350, "duree": 120, "apartir": false, "devis": false, "description": "Hammam + gommage + enveloppement argile + massage 30 min"}, {"id": "p04", "cat": "Spa & Bien-être", "nom": "Hammam Royal", "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p05", "cat": "Spa & Bien-être", "nom": "Hammam Mariage / Anniversaire / Invités", "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p06", "cat": "Spa & Bien-être", "nom": "Hammam VIP 1 personne", "prix": 600, "duree": 120, "apartir": false, "devis": false, "description": "Hammam, gommage, savonnage et massage 1h"}, {"id": "p07", "cat": "Soins du corps", "nom": "Drainage lymphatique manuel", "prix": 500, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p08", "cat": "Soins du corps", "nom": "Drainage lymphatique manuel (5 séances)", "prix": 2000, "duree": 60, "apartir": false, "devis": false, "description": "Pack de 5 séances"}, {"id": "p09", "cat": "Soins du corps", "nom": "Massage amincissant", "prix": 400, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p10", "cat": "Soins du corps", "nom": "Massage amincissant (5 séances)", "prix": 1500, "duree": 45, "apartir": false, "devis": false, "description": "Pack de 5 séances"}, {"id": "p11", "cat": "Soins du corps", "nom": "Massage jambes lourdes", "prix": 100, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p12", "cat": "Massage", "nom": "Massage tonifiant", "prix": 550, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p13", "cat": "Massage", "nom": "Massage aux pierres", "prix": 450, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p14", "cat": "Massage", "nom": "Modelage visage", "prix": 150, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p15", "cat": "Massage", "nom": "Modelage pied / réflexologie", "prix": 100, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p16", "cat": "Massage", "nom": "Madérothérapie (3 séances)", "prix": 800, "duree": 45, "apartir": false, "devis": false, "description": "Pack de 3 séances"}, {"id": "p17", "cat": "Massage", "nom": "Massage relaxant aux huiles essentielles", "prix": 400, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p18", "cat": "Beauté des pieds", "nom": "Pédicure japonaise", "prix": 270, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p19", "cat": "Beauté des pieds", "nom": "Pédicure russe", "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p20", "cat": "Beauté des pieds", "nom": "Pédicure spa royale", "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p21", "cat": "Beauté des pieds", "nom": "Pédicure simple", "prix": 150, "duree": 40, "apartir": false, "devis": false, "description": null}, {"id": "p22", "cat": "Beauté des pieds", "nom": "Semi-permanent pied", "prix": 200, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p23", "cat": "Beauté des pieds", "nom": "Semi-permanent french pied", "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p24", "cat": "Beauté des pieds", "nom": "BIAB couleur pied", "prix": 300, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p25", "cat": "Beauté des pieds", "nom": "BIAB french pied", "prix": 400, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p26", "cat": "Beauté des pieds", "nom": "Gel pied + couleur", "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p27", "cat": "Beauté des pieds", "nom": "Faux ongles pied + couleur", "prix": 350, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p28", "cat": "Beauté des pieds", "nom": "Bain de luxe + paraffine pied", "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p29", "cat": "Beauté des pieds", "nom": "Pédicure simple (ongles)", "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p30", "cat": "Beauté des pieds", "nom": "Pédicure royale", "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p31", "cat": "Beauté des pieds", "nom": "Paraffine pied", "prix": 150, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p32", "cat": "Ongles", "nom": "Manucure simple", "prix": 70, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p33", "cat": "Ongles", "nom": "Manucure royale", "prix": 120, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p34", "cat": "Ongles", "nom": "Manucure + vernis simple", "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p35", "cat": "Ongles", "nom": "Paraffine main", "prix": 100, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p36", "cat": "Ongles", "nom": "Faux ongles + semi", "prix": 250, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p37", "cat": "Ongles", "nom": "Faux ongles gel", "prix": 400, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p38", "cat": "Ongles", "nom": "Pose vernis simple couleur", "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p39", "cat": "Ongles", "nom": "French simple main", "prix": 60, "duree": 25, "apartir": false, "devis": false, "description": null}, {"id": "p40", "cat": "Ongles", "nom": "Pose vernis semi-permanent main", "prix": 120, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p41", "cat": "Ongles", "nom": "Pose vernis semi-permanent pied", "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p42", "cat": "Ongles", "nom": "French pied", "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p43", "cat": "Ongles", "nom": "Design", "prix": 50, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p44", "cat": "Ongles", "nom": "Pose vernis french main semi", "prix": 150, "duree": 55, "apartir": false, "devis": false, "description": null}, {"id": "p45", "cat": "Ongles", "nom": "Pose vernis french pied", "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p46", "cat": "Ongles", "nom": "Dépose semi", "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p47", "cat": "Ongles", "nom": "Dépose gel", "prix": 100, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p48", "cat": "Regard & Maquillage", "nom": "Sourcils au fil", "prix": 30, "duree": 10, "apartir": false, "devis": false, "description": null}, {"id": "p49", "cat": "Regard & Maquillage", "nom": "Sourcils à la cire", "prix": 30, "duree": 10, "apartir": false, "devis": false, "description": null}, {"id": "p50", "cat": "Regard & Maquillage", "nom": "Restructuration avec épilation", "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p51", "cat": "Regard & Maquillage", "nom": "Restructuration sans épilation", "prix": 80, "duree": 25, "apartir": false, "devis": false, "description": null}, {"id": "p52", "cat": "Regard & Maquillage", "nom": "Sans épilation + décoloration", "prix": 80, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p53", "cat": "Regard & Maquillage", "nom": "Sans épilation + décoloration + couleur", "prix": 130, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p54", "cat": "Regard & Maquillage", "nom": "Teinture sourcils", "prix": 60, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p55", "cat": "Regard & Maquillage", "nom": "Browlift avec teinture", "prix": 250, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p56", "cat": "Regard & Maquillage", "nom": "Browlift sans teinture", "prix": 200, "duree": 40, "apartir": false, "devis": false, "description": null}, {"id": "p57", "cat": "Regard & Maquillage", "nom": "Browlift + rehaussement", "prix": 400, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p58", "cat": "Regard & Maquillage", "nom": "Rehaussement", "prix": 250, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p59", "cat": "Regard & Maquillage", "nom": "Rehaussement + teinture", "prix": 300, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p60", "cat": "Regard & Maquillage", "nom": "Pose faux cils naturels", "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p61", "cat": "Regard & Maquillage", "nom": "Pose faux cils mixte", "prix": 200, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p62", "cat": "Regard & Maquillage", "nom": "Maquillage de jour", "prix": 150, "duree": 45, "apartir": true, "devis": false, "description": null}, {"id": "p63", "cat": "Regard & Maquillage", "nom": "Maquillage de soirée", "prix": 300, "duree": 60, "apartir": true, "devis": false, "description": null}, {"id": "p64", "cat": "Regard & Maquillage", "nom": "Maquillage mariée", "prix": 350, "duree": 90, "apartir": true, "devis": false, "description": null}, {"id": "p65", "cat": "Regard & Maquillage", "nom": "Maquillage + coiffure (mariée & invitée)", "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p66", "cat": "Coiffure femme", "nom": "Brushing simple (sans lavage)", "prix": 50, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p67", "cat": "Coiffure femme", "nom": "Brushing simple (avec lavage)", "prix": 80, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p68", "cat": "Coiffure femme", "nom": "Brushing + soin + extensions", "prix": 180, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p69", "cat": "Coiffure femme", "nom": "S/H + Brushing bouclé", "prix": 80, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p70", "cat": "Coiffure femme", "nom": "S/H + Brushing plaqué", "prix": 100, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p71", "cat": "Coiffure femme", "nom": "S/H + Brushing + Wavy plaqué", "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p72", "cat": "Coiffure femme", "nom": "S/H + Coupe + Brushing", "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p73", "cat": "Coiffure femme", "nom": "S/H + Coupe + Brushing bouclé", "prix": 180, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p74", "cat": "Coiffure femme", "nom": "Coupe pointe", "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p75", "cat": "Coiffure femme", "nom": "Coupe frange", "prix": 50, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p76", "cat": "Coiffure femme", "nom": "Shampoing spécifique", "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p77", "cat": "Coiffure femme", "nom": "Supplément cheveux épais", "prix": 80, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p78", "cat": "Coiffure femme", "nom": "Supplément cheveux longs", "prix": 30, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p79", "cat": "Coiffure femme", "nom": "Supplément cheveux extra longs", "prix": 50, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p80", "cat": "Coiffure femme", "nom": "Extensions adhésives", "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": "Selon volume"}, {"id": "p81", "cat": "Coiffure femme", "nom": "Pack mariée (complet)", "prix": 2500, "duree": 270, "apartir": false, "devis": false, "description": null} ];
