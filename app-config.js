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
const EMAILJS_TEMPLATE_CLIENTE = 'template_ovd9mlk';   // accusé de réception à la cliente
const EMAILJS_TEMPLATE_ANNULE  = '';                   // e-mail envoyé quand le salon annule un rendez-vous (vide = désactivé)
const EMAIL_SALON = 'Nawel.essenhaji@gmail.com';

/* ---------- Tracking (vide = désactivé) ---------- */
const META_PIXEL_ID    = '1060147363313479';   // pixel "salon sisters relax" (créé depuis le compte pub SSR)
const GOOGLE_ADS_ID    = '';   // ex : AW-123456789
const GOOGLE_ADS_LABEL = '';   // ex : AW-123456789/AbCdEf
const TIKTOK_PIXEL_ID  = '';
const DEVISE = 'MAD';          // devise envoyée aux régies (dirham)

/* ---------- Salon ---------- */
const SALON = {
  nom: 'Sisters Relax',
  signature: 'By Huile Essentiel',
  /* Adresse recopiee a l'identique de la fiche Google : Google recoupe le nom,
     l'adresse et le telephone entre les sites pour juger de la fiabilite d'un
     etablissement. Toute variation d'ecriture affaiblit ce recoupement. */
  adresse: 'Mag 18, Bloc C, Complexe Youssef Ibn Tachfine, 23 Av. Prince Moulay Abdellah, Marrakech',
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
  /* Identifiant Google de la fiche etablissement. Il fait autorite sur les
     coordonnees ci-dessus : l'itineraire et le plan pointent alors sur
     l'etablissement lui-meme, donc deplacer le repere sur la fiche Google se
     repercute ici sans toucher au site. Le vider fait retomber sur lat/long. */
  placeId: 'ChIJNzOJLwDtrw0Rgl11d4W6Ch4',
  fuseau: 'Africa/Casablanca'
};

/* Les deux liens Google de la page d'accueil sont fabriques ici, et pas dans la
   page, pour qu'il n'existe qu'une seule version de la regle. */
function lienItineraireSalon(){
  if(SALON.placeId)
    return 'https://www.google.com/maps/dir/?api=1&destination='
      + encodeURIComponent(SALON.nom + ', ' + SALON.adresse)
      + '&destination_place_id=' + encodeURIComponent(SALON.placeId);
  return 'https://www.google.com/maps/dir/?api=1&destination='
    + SALON.latitude + ',' + SALON.longitude;
}
function requetePlanSalon(){
  return SALON.placeId ? 'place_id:' + SALON.placeId
                       : SALON.latitude + ',' + SALON.longitude;
}

/* ---------- Avis Google (section masquée tant que c'est vide) ----------
   Recopier la note, le nombre d'avis et 2-3 VRAIS avis de la fiche Google. */
const GOOGLE_NOTE = 4.8;
const GOOGLE_NB_AVIS = 423;
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
  /* Une offre combinée occupe en réalité deux espaces (hammam + coiffure), mais
     une catégorie ne peut en désigner qu'un. On protège le plus rare : le hammam.
     Le poste de coiffure reste à surveiller côté salon. */
  'Offre du moment':     'hammam',
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
/* Une publicité en cours pointe vers l'ancien nom d'une prestation (?p=...).
   Renommer la prestation dans l'admin casserait ce lien : la cliente arriverait
   sur la page sans rien de sélectionné. Cette table relie l'ancien nom au nouveau.
   Clé = le nom tel qu'il est dans l'URL de la pub. Valeur = le nom actuel. */
const ALIAS_LIEN = {
  'Hammam beldi  + panier douche + brushing offert': 'Hammam beldi + brushing et panier offerts'
};

/* Carte mise en avant en tête de la page de réservation.
   'categorie' désigne la catégorie dont la première prestation visible est
   présentée en grand, photo à l'appui. C'est ce que la publicité promet :
   la cliente doit le retrouver sans chercher.
   Vider 'photo' retire l'image. Vider 'categorie' retire la carte. */
const OFFRE = {
  categorie: 'Offre du moment',
  photo:     'offre.webp'
};

const COULEUR_CATEGORIE = {
  'Offre du moment':     '#E7CFA7',
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
const PRESTATIONS = [ {"id": "p01", "cat": "Spa & Bien-être", "nom": "Hammam Beldi", "n_en": "Beldi Hammam", "d_en": "Hammam + black soap scrub", "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": "Hammam + gommage au savon noir"}, {"id": "p02", "cat": "Spa & Bien-être", "nom": "Hammam Relax", "n_en": "Relax Hammam", "d_en": "Hammam + scrub + towel", "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": "Hammam + gommage + serviette"}, {"id": "p03", "cat": "Spa & Bien-être", "nom": "Hammam & Massage 30 min", "n_en": "Hammam & 30 min Massage", "d_en": "Hammam + scrub + clay wrap + 30 min massage", "prix": 350, "duree": 120, "apartir": false, "devis": false, "description": "Hammam + gommage + enveloppement argile + massage 30 min"}, {"id": "p04", "cat": "Spa & Bien-être", "nom": "Hammam Royal", "n_en": "Royal Hammam", "d_en": null, "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p05", "cat": "Spa & Bien-être", "nom": "Hammam Mariage / Anniversaire / Invités", "n_en": "Hammam for weddings / birthdays / guests", "d_en": null, "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p06", "cat": "Spa & Bien-être", "nom": "Hammam VIP 1 personne", "n_en": "VIP Hammam, 1 person", "d_en": "Hammam, scrub, soaping and 1h massage", "prix": 600, "duree": 120, "apartir": false, "devis": false, "description": "Hammam, gommage, savonnage et massage 1h"}, {"id": "p07", "cat": "Soins du corps", "nom": "Drainage lymphatique manuel", "n_en": "Manual lymphatic drainage", "d_en": null, "prix": 500, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p08", "cat": "Soins du corps", "nom": "Drainage lymphatique manuel (5 séances)", "n_en": "Manual lymphatic drainage (5 sessions)", "d_en": "Pack of 5 sessions", "prix": 2000, "duree": 60, "apartir": false, "devis": false, "description": "Pack de 5 séances"}, {"id": "p09", "cat": "Soins du corps", "nom": "Massage amincissant", "n_en": "Slimming massage", "d_en": null, "prix": 400, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p10", "cat": "Soins du corps", "nom": "Massage amincissant (5 séances)", "n_en": "Slimming massage (5 sessions)", "d_en": "Pack of 5 sessions", "prix": 1500, "duree": 45, "apartir": false, "devis": false, "description": "Pack de 5 séances"}, {"id": "p11", "cat": "Soins du corps", "nom": "Massage jambes lourdes", "n_en": "Heavy-legs massage", "d_en": null, "prix": 100, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p12", "cat": "Massage", "nom": "Massage tonifiant", "n_en": "Toning massage", "d_en": null, "prix": 550, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p13", "cat": "Massage", "nom": "Massage aux pierres", "n_en": "Hot stone massage", "d_en": null, "prix": 450, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p14", "cat": "Massage", "nom": "Modelage visage", "n_en": "Facial massage", "d_en": null, "prix": 150, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p15", "cat": "Massage", "nom": "Modelage pied / réflexologie", "n_en": "Foot massage / reflexology", "d_en": null, "prix": 100, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p16", "cat": "Massage", "nom": "Madérothérapie (3 séances)", "n_en": "Maderotherapy (3 sessions)", "d_en": "Pack of 3 sessions", "prix": 800, "duree": 45, "apartir": false, "devis": false, "description": "Pack de 3 séances"}, {"id": "p17", "cat": "Massage", "nom": "Massage relaxant aux huiles essentielles", "n_en": "Relaxing massage with essential oils", "d_en": null, "prix": 400, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p18", "cat": "Beauté des pieds", "nom": "Pédicure japonaise", "n_en": "Japanese pedicure", "d_en": null, "prix": 270, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p19", "cat": "Beauté des pieds", "nom": "Pédicure russe", "n_en": "Russian pedicure", "d_en": null, "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p20", "cat": "Beauté des pieds", "nom": "Pédicure spa royale", "n_en": "Royal spa pedicure", "d_en": null, "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p21", "cat": "Beauté des pieds", "nom": "Pédicure simple", "n_en": "Basic pedicure", "d_en": null, "prix": 150, "duree": 40, "apartir": false, "devis": false, "description": null}, {"id": "p22", "cat": "Beauté des pieds", "nom": "Semi-permanent pied", "n_en": "Gel polish, toes", "d_en": null, "prix": 200, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p23", "cat": "Beauté des pieds", "nom": "Semi-permanent french pied", "n_en": "French gel polish, toes", "d_en": null, "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p24", "cat": "Beauté des pieds", "nom": "BIAB couleur pied", "n_en": "BIAB colour, toes", "d_en": null, "prix": 300, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p25", "cat": "Beauté des pieds", "nom": "BIAB french pied", "n_en": "BIAB french, toes", "d_en": null, "prix": 400, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p26", "cat": "Beauté des pieds", "nom": "Gel pied + couleur", "n_en": "Gel toes + colour", "d_en": null, "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p27", "cat": "Beauté des pieds", "nom": "Faux ongles pied + couleur", "n_en": "Toe extensions + colour", "d_en": null, "prix": 350, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p28", "cat": "Beauté des pieds", "nom": "Bain de luxe + paraffine pied", "n_en": "Luxury soak + paraffin, feet", "d_en": null, "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p29", "cat": "Beauté des pieds", "nom": "Pédicure simple (ongles)", "n_en": "Basic pedicure (nails only)", "d_en": null, "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p30", "cat": "Beauté des pieds", "nom": "Pédicure royale", "n_en": "Royal pedicure", "d_en": null, "prix": 250, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p31", "cat": "Beauté des pieds", "nom": "Paraffine pied", "n_en": "Paraffin, feet", "d_en": null, "prix": 150, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p32", "cat": "Ongles", "nom": "Manucure simple", "n_en": "Basic manicure", "d_en": null, "prix": 70, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p33", "cat": "Ongles", "nom": "Manucure royale", "n_en": "Royal manicure", "d_en": null, "prix": 120, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p34", "cat": "Ongles", "nom": "Manucure + vernis simple", "n_en": "Manicure + regular polish", "d_en": null, "prix": 150, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p35", "cat": "Ongles", "nom": "Paraffine main", "n_en": "Paraffin, hands", "d_en": null, "prix": 100, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p36", "cat": "Ongles", "nom": "Faux ongles + semi", "n_en": "Extensions + gel polish", "d_en": null, "prix": 250, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p37", "cat": "Ongles", "nom": "Faux ongles gel", "n_en": "Gel extensions", "d_en": null, "prix": 400, "duree": 90, "apartir": false, "devis": false, "description": null}, {"id": "p38", "cat": "Ongles", "nom": "Pose vernis simple couleur", "n_en": "Regular polish, colour", "d_en": null, "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p39", "cat": "Ongles", "nom": "French simple main", "n_en": "French polish, hands", "d_en": null, "prix": 60, "duree": 25, "apartir": false, "devis": false, "description": null}, {"id": "p40", "cat": "Ongles", "nom": "Pose vernis semi-permanent main", "n_en": "Gel polish, hands", "d_en": null, "prix": 120, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p41", "cat": "Ongles", "nom": "Pose vernis semi-permanent pied", "n_en": "Gel polish, feet", "d_en": null, "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p42", "cat": "Ongles", "nom": "French pied", "n_en": "French, toes", "d_en": null, "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p43", "cat": "Ongles", "nom": "Design", "n_en": "Nail art", "d_en": null, "prix": 50, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p44", "cat": "Ongles", "nom": "Pose vernis french main semi", "n_en": "French gel polish, hands", "d_en": null, "prix": 150, "duree": 55, "apartir": false, "devis": false, "description": null}, {"id": "p45", "cat": "Ongles", "nom": "Pose vernis french pied", "n_en": "French polish, feet", "d_en": null, "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p46", "cat": "Ongles", "nom": "Dépose semi", "n_en": "Gel polish removal", "d_en": null, "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p47", "cat": "Ongles", "nom": "Dépose gel", "n_en": "Gel removal", "d_en": null, "prix": 100, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p48", "cat": "Regard & Maquillage", "nom": "Sourcils au fil", "n_en": "Brow threading", "d_en": null, "prix": 30, "duree": 10, "apartir": false, "devis": false, "description": null}, {"id": "p49", "cat": "Regard & Maquillage", "nom": "Sourcils à la cire", "n_en": "Brow waxing", "d_en": null, "prix": 30, "duree": 10, "apartir": false, "devis": false, "description": null}, {"id": "p50", "cat": "Regard & Maquillage", "nom": "Restructuration avec épilation", "n_en": "Brow reshaping with hair removal", "d_en": null, "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p51", "cat": "Regard & Maquillage", "nom": "Restructuration sans épilation", "n_en": "Brow reshaping without hair removal", "d_en": null, "prix": 80, "duree": 25, "apartir": false, "devis": false, "description": null}, {"id": "p52", "cat": "Regard & Maquillage", "nom": "Sans épilation + décoloration", "n_en": "No hair removal + bleaching", "d_en": null, "prix": 80, "duree": 20, "apartir": false, "devis": false, "description": null}, {"id": "p53", "cat": "Regard & Maquillage", "nom": "Sans épilation + décoloration + couleur", "n_en": "No hair removal + bleaching + tint", "d_en": null, "prix": 130, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p54", "cat": "Regard & Maquillage", "nom": "Teinture sourcils", "n_en": "Brow tint", "d_en": null, "prix": 60, "duree": 15, "apartir": false, "devis": false, "description": null}, {"id": "p55", "cat": "Regard & Maquillage", "nom": "Browlift avec teinture", "n_en": "Brow lift with tint", "d_en": null, "prix": 250, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p56", "cat": "Regard & Maquillage", "nom": "Browlift sans teinture", "n_en": "Brow lift without tint", "d_en": null, "prix": 200, "duree": 40, "apartir": false, "devis": false, "description": null}, {"id": "p57", "cat": "Regard & Maquillage", "nom": "Browlift + rehaussement", "n_en": "Brow lift + lash lift", "d_en": null, "prix": 400, "duree": 75, "apartir": false, "devis": false, "description": null}, {"id": "p58", "cat": "Regard & Maquillage", "nom": "Rehaussement", "n_en": "Lash lift", "d_en": null, "prix": 250, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p59", "cat": "Regard & Maquillage", "nom": "Rehaussement + teinture", "n_en": "Lash lift + tint", "d_en": null, "prix": 300, "duree": 60, "apartir": false, "devis": false, "description": null}, {"id": "p60", "cat": "Regard & Maquillage", "nom": "Pose faux cils naturels", "n_en": "Natural lash extensions", "d_en": null, "prix": 150, "duree": 30, "apartir": false, "devis": false, "description": null}, {"id": "p61", "cat": "Regard & Maquillage", "nom": "Pose faux cils mixte", "n_en": "Mixed lash extensions", "d_en": null, "prix": 200, "duree": 45, "apartir": false, "devis": false, "description": null}, {"id": "p62", "cat": "Regard & Maquillage", "nom": "Maquillage de jour", "n_en": "Daytime make-up", "d_en": null, "prix": 150, "duree": 45, "apartir": true, "devis": false, "description": null}, {"id": "p63", "cat": "Regard & Maquillage", "nom": "Maquillage de soirée", "n_en": "Evening make-up", "d_en": null, "prix": 300, "duree": 60, "apartir": true, "devis": false, "description": null}, {"id": "p64", "cat": "Regard & Maquillage", "nom": "Maquillage mariée", "n_en": "Bridal make-up", "d_en": null, "prix": 350, "duree": 90, "apartir": true, "devis": false, "description": null}, {"id": "p65", "cat": "Regard & Maquillage", "nom": "Maquillage + coiffure (mariée & invitée)", "n_en": "Make-up + hair (bride & guest)", "d_en": null, "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null}, {"id": "p66", "cat": "Coiffure femme", "nom": "Brushing simple (sans lavage)", "n_en": "Blow-dry (no wash)", "d_en": null, "prix": 50, "duree": 30, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p67", "cat": "Coiffure femme", "nom": "Brushing simple (avec lavage)", "n_en": "Blow-dry (with wash)", "d_en": null, "prix": 80, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p68", "cat": "Coiffure femme", "nom": "Brushing + soin + extensions", "n_en": "Blow-dry + treatment + extensions", "d_en": null, "prix": 180, "duree": 75, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p69", "cat": "Coiffure femme", "nom": "S/H + Brushing bouclé", "n_en": "Wash + curly blow-dry", "d_en": null, "prix": 80, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p70", "cat": "Coiffure femme", "nom": "S/H + Brushing plaqué", "n_en": "Wash + sleek blow-dry", "d_en": null, "prix": 100, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p71", "cat": "Coiffure femme", "nom": "S/H + Brushing + Wavy plaqué", "n_en": "Wash + blow-dry + sleek waves", "d_en": null, "prix": 150, "duree": 60, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p72", "cat": "Coiffure femme", "nom": "S/H + Coupe + Brushing", "n_en": "Wash + cut + blow-dry", "d_en": null, "prix": 200, "duree": 60, "apartir": false, "devis": false, "description": null, "sf": "Coupe"}, {"id": "p73", "cat": "Coiffure femme", "nom": "S/H + Coupe + Brushing bouclé", "n_en": "Wash + cut + curly blow-dry", "d_en": null, "prix": 180, "duree": 75, "apartir": false, "devis": false, "description": null, "sf": "Coupe"}, {"id": "p74", "cat": "Coiffure femme", "nom": "Coupe pointe", "n_en": "Trim", "d_en": null, "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null, "sf": "Coupe"}, {"id": "p75", "cat": "Coiffure femme", "nom": "Coupe frange", "n_en": "Fringe trim", "d_en": null, "prix": 50, "duree": 15, "apartir": false, "devis": false, "description": null, "sf": "Coupe"}, {"id": "p76", "cat": "Coiffure femme", "nom": "Shampoing spécifique", "n_en": "Specialist shampoo", "d_en": null, "prix": 50, "duree": 20, "apartir": false, "devis": false, "description": null, "sf": "Soins & extensions"}, {"id": "p77", "cat": "Coiffure femme", "nom": "Supplément cheveux épais", "n_en": "Thick hair supplement", "d_en": null, "prix": 80, "duree": 15, "apartir": false, "devis": false, "description": null, "sf": "Suppléments"}, {"id": "p78", "cat": "Coiffure femme", "nom": "Supplément cheveux longs", "n_en": "Long hair supplement", "d_en": null, "prix": 30, "duree": 15, "apartir": false, "devis": false, "description": null, "sf": "Suppléments"}, {"id": "p79", "cat": "Coiffure femme", "nom": "Supplément cheveux extra longs", "n_en": "Extra-long hair supplement", "d_en": null, "prix": 50, "duree": 30, "apartir": false, "devis": false, "description": null, "sf": "Suppléments"}, {"id": "p80", "cat": "Coiffure femme", "nom": "Extensions adhésives", "n_en": "Tape-in extensions", "d_en": "Depending on volume", "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": "Selon volume", "sf": "Soins & extensions"}, {"id": "p81", "cat": "Coiffure femme", "nom": "Pack mariée (complet)", "n_en": "Full bridal package", "d_en": null, "prix": 2500, "duree": 270, "apartir": false, "devis": false, "description": null, "sf": "Mariée"}, {"id": "p82", "cat": "Coiffure femme", "nom": "Lissage indien", "n_en": "Indian straightening", "d_en": null, "prix": 1500, "duree": 225, "apartir": false, "devis": false, "description": null, "sf": "Lissage"}, {"id": "p83", "cat": "Coiffure femme", "nom": "Lissage spécial couleur", "n_en": "Straightening for coloured hair", "d_en": null, "prix": 1800, "duree": 180, "apartir": false, "devis": false, "description": null, "sf": "Lissage"}, {"id": "p84", "cat": "Coiffure femme", "nom": "Lissage 4K", "n_en": "4K straightening", "d_en": null, "prix": 0, "duree": 60, "apartir": false, "devis": true, "description": null, "sf": "Lissage"}, {"id": "p85", "cat": "Coiffure femme", "nom": "Supplément lissage cheveux épais", "n_en": "Straightening supplement, thick hair", "d_en": null, "prix": 200, "duree": 30, "apartir": false, "devis": false, "description": null, "sf": "Lissage"}, {"id": "p86", "cat": "Coiffure femme", "nom": "Supplément lissage cheveux longs", "n_en": "Straightening supplement, long hair", "d_en": null, "prix": 200, "duree": 30, "apartir": false, "devis": false, "description": null, "sf": "Lissage"}, {"id": "p87", "cat": "Coiffure femme", "nom": "Supplément lissage cheveux extra longs", "n_en": "Straightening supplement, extra-long hair", "d_en": null, "prix": 400, "duree": 60, "apartir": false, "devis": false, "description": null, "sf": "Lissage"}, {"id": "p88", "cat": "Coiffure femme", "nom": "S/H + Racine (2cm) + brushing", "n_en": "Wash + roots (2cm) + blow-dry", "d_en": null, "prix": 300, "duree": 90, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p89", "cat": "Coiffure femme", "nom": "S/H + Racine (4cm) + brushing", "n_en": "Wash + roots (4cm) + blow-dry", "d_en": null, "prix": 400, "duree": 90, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p90", "cat": "Coiffure femme", "nom": "S/H + Couleur tête entière + brushing + soin", "n_en": "Wash + full-head colour + blow-dry + treatment", "d_en": null, "prix": 500, "duree": 120, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p91", "cat": "Coiffure femme", "nom": "Gommage + couleur + brushing + soin", "n_en": "Scalp scrub + colour + blow-dry + treatment", "d_en": null, "prix": 800, "duree": 150, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p92", "cat": "Coiffure femme", "nom": "Poudre L'Oréal", "n_en": "L'Oréal bleach powder", "d_en": null, "prix": 300, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p93", "cat": "Coiffure femme", "nom": "Blond (clair / beige / polaire)", "n_en": "Blonde (light / beige / platinum)", "d_en": null, "prix": 1800, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p94", "cat": "Coiffure femme", "nom": "Patine", "n_en": "Toner", "d_en": null, "prix": 300, "duree": 45, "apartir": false, "devis": false, "description": null, "sf": "Couleur"}, {"id": "p95", "cat": "Coiffure femme", "nom": "S/H + 3D + soin", "n_en": "Wash + 3D highlights + treatment", "d_en": null, "prix": 500, "duree": 150, "apartir": false, "devis": false, "description": null, "sf": "Mèches & balayage"}, {"id": "p96", "cat": "Coiffure femme", "nom": "Mèches + patine + brushing + soin", "n_en": "Highlights + toner + blow-dry + treatment", "d_en": null, "prix": 1600, "duree": 180, "apartir": false, "devis": false, "description": null, "sf": "Mèches & balayage"}, {"id": "p97", "cat": "Coiffure femme", "nom": "Balayage + patine + brushing + soin", "n_en": "Balayage + toner + blow-dry + treatment", "d_en": null, "prix": 1500, "duree": 210, "apartir": false, "devis": false, "description": null, "sf": "Mèches & balayage"}, {"id": "p98", "cat": "Coiffure femme", "nom": "Ombré hair + patine + brushing + soin", "n_en": "Ombré + toner + blow-dry + treatment", "d_en": null, "prix": 1200, "duree": 240, "apartir": false, "devis": false, "description": null, "sf": "Mèches & balayage"}, {"id": "p99", "cat": "Coiffure femme", "nom": "Contouring + patine + brushing + soin", "n_en": "Hair contouring + toner + blow-dry + treatment", "d_en": null, "prix": 600, "duree": 150, "apartir": false, "devis": false, "description": null, "sf": "Mèches & balayage"}, {"id": "p100", "cat": "Coiffure femme", "nom": "Boucle", "n_en": "Curls", "d_en": null, "prix": 50, "duree": 30, "apartir": false, "devis": false, "description": null, "sf": "Brushing"}, {"id": "p101", "cat": "Offre du moment", "nom": "Hammam beldi + brushing et panier offerts", "n_en": "Beldi hammam + blow-dry, gift basket included", "d_en": null, "prix": 200, "duree": 90, "apartir": false, "devis": false, "description": null} ];
