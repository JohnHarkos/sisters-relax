/* =============================================================
   LANGUES DU SITE — Sisters Relax
   -------------------------------------------------------------
   Ce fichier contient TOUS les textes fixes du site, langue par
   langue. Une phrase a changer se change ici, et nulle part ailleurs.

   AJOUTER UNE LANGUE :
     1. ajouter une ligne dans LANGUES ci-dessous ;
     2. recopier le bloc 'fr' de TRADUCTIONS sous le nouveau code
        et traduire les valeurs (jamais les cles, a gauche des ':').
   Une cle oubliee n'affiche pas un trou : le francais prend le relais.

   NE PAS TRADUIRE : le nom du salon, « By Huile Essentiel »,
   « WhatsApp », « Instagram », « TikTok », « DH ».
   ============================================================= */

/* 'sens' vaut 'rtl' pour une langue qui s'ecrit de droite a gauche
   (arabe, hebreu). La mise en page du site n'est pas encore prevue
   pour ce sens : ne pas ajouter une telle langue sans avoir adapte
   les feuilles de style. */
var LANGUES = [
  { code: 'fr', nom: 'Français', sens: 'ltr' },
  { code: 'en', nom: 'English',  sens: 'ltr' }
];
var LANGUE_DEFAUT = 'fr';

var TRADUCTIONS = {

/* ================= FRANÇAIS ================= */
fr: {
  'langue.choisir'      : 'Choisir la langue',

  /* Titre de l'onglet et description affichee par Google. */
  'meta.titre'          : 'Hammam, massage & beauté à Marrakech — Sisters Relax',
  'meta.description'    : 'Sisters Relax, salon de beauté et bien-être à Guéliz, Marrakech : hammam traditionnel, coiffure, massages, soins du corps, ongles, regard, maquillage. Réservation en ligne, paiement sur place.',


  'nav.soins'           : 'Les soins',
  'nav.carte'           : 'La carte',
  'nav.avis'            : 'Avis',
  'nav.salon'           : 'Le salon',
  'nav.reserver'        : 'Réserver',

  'hero.titre'          : 'Votre pause beauté',
  'hero.titre.em'       : '100 % femmes à Marrakech',
  'hero.sous'           : "Hammam, massages, ongles, regard et coiffure : l'exigence des salons parisiens, la douceur des rituels marocains.",
  'hero.cta'            : 'Réserver un soin',
  'hero.ecrire'         : 'Nous écrire',

  'stat.avis'           : 'avis Google',
  'stat.jours'          : '7j/7',
  'stat.jours.sous'     : 'Ouvert tous les jours',
  'stat.paiement'       : 'Sur place',
  'stat.paiement.sous'  : 'Paiement au salon',
  'stat.annulation'     : '24h',
  'stat.annulation.sous': 'Annulation gratuite',

  'univers.eyebrow'     : 'Les soins',
  'univers.titre'       : 'Composez votre rituel beauté & détente',
  'univers.sous'        : "Associez jusqu'à cinq soins : un hammam suivi d'un massage, une manucure avant un brushing, le tout en une seule visite.",

  'carte.eyebrow'       : 'La carte',
  'carte.titre'         : 'Soins & tarifs',
  'carte.sous'          : 'Prix en dirhams, réglés au salon. Les prestations sur mesure (hammam royal, mariées, extensions) se préparent ensemble sur WhatsApp.',
  'carte.des'           : 'dès',
  'carte.soins'         : '{n} soins',
  'carte.soins.1'       : '1 soin',
  'carte.surdevis'      : 'Sur devis',
  'carte.devis'         : 'Devis',
  'carte.choisir'       : 'Choisir',
  'carte.devis.wa'      : 'Bonjour Sisters Relax, je souhaite un devis pour : {nom}.',

  'avis.eyebrow'        : 'Avis Google',
  'avis.titre'          : 'Elles en parlent',
  'avis.n'              : '{n} avis Google',
  'avis.sans.n'         : 'Avis Google',
  'avis.tous'           : 'Voir tous les avis',
  'avis.fiche'          : 'Voir la fiche Google de Sisters Relax',
  'avis.source'         : 'Avis Google',
  'avis.etoiles'        : '{n} étoiles sur 5',

  'infos.eyebrow'       : 'Le salon',
  'infos.titre'         : 'Nous rendre visite',
  'infos.adresse'       : 'Adresse',
  'infos.itineraire'    : 'Itinéraire',
  'infos.appeler'       : 'Appeler',
  'infos.horaires'      : 'Horaires',
  'infos.ferme'         : 'Fermé',

  'jour.1'              : 'Lundi',
  'jour.2'              : 'Mardi',
  'jour.3'              : 'Mercredi',
  'jour.4'              : 'Jeudi',
  'jour.5'              : 'Vendredi',
  'jour.6'              : 'Samedi',
  'jour.0'              : 'Dimanche',

  'faq.eyebrow'         : 'Bon à savoir',
  'faq.titre'           : 'Questions fréquentes',
  'faq.1.q'             : 'Faut-il payer en ligne pour réserver ?',
  'faq.1.r'             : 'Non. La réservation est gratuite, sans carte bancaire. Vous réglez directement au salon.',
  'faq.2.q'             : 'Puis-je réserver plusieurs soins en même temps ?',
  'faq.2.r'             : "Oui, jusqu'à cinq prestations dans un même rendez-vous. Les créneaux proposés tiennent compte de la durée totale.",
  'faq.3.q'             : 'Comment annuler ou déplacer mon rendez-vous ?',
  'faq.3.r'             : "Prévenez-nous sur WhatsApp au moins 24h avant : l'annulation est gratuite et nous vous proposons un nouveau créneau.",
  'faq.4.q'             : 'Comment obtenir un devis ?',
  'faq.4.r'             : 'Hammam royal, mariage, extensions : ces prestations se préparent sur mesure. Cliquez sur « Devis » dans la carte : un message WhatsApp pré-rempli s\'ouvre.',

  'final.titre'         : 'Prenez le temps pour vous',
  'final.sous'          : 'Réservation en ligne en quelques instants. Paiement au salon.',

  'pied.mentions'       : 'Mentions légales',
  'pied.cookies'        : 'Cookies',

  /* ---------- Messages WhatsApp envoyes depuis l'admin ---------- */
  'm.bonjour'           : "Bonjour {prenom}, c'est {salon}.",
  'm.conf.creneau'      : 'Votre créneau est réservé :',
  'm.conf.pour'         : 'Pour {n} personnes',
  'm.conf.avec'         : 'Avec {collab} · {prix} DH, à régler sur place',
  'm.conf.demande'      : 'Merci de confirmer votre présence en répondant OUI. Nous bloquons alors la cabine à votre nom.',
  'm.conf.decaler'      : 'Si vous préférez décaler, écrivez-nous, nous vous trouverons un autre créneau.',
  'm.rap.titre'         : 'Rappel de votre rendez-vous {quand} à {heure} :',
  'm.rap.demain'        : 'demain {jour}',
  'm.rap.date'          : 'le {jour}',
  'm.rap.avance'        : "Merci d'arriver 5 minutes avant.",
  'm.rap.pret'          : "Tout est prêt pour vous accueillir. Merci de nous confirmer d'un mot.",
  'm.rap.annuler'       : 'Si vous ne pouvez plus venir, dites-le-nous dès maintenant, nous vous proposerons une autre date.',

  /* ---------- Categories et sous-familles ----------
     La cle est le nom exact tel qu'il existe en base. En francais la valeur
     est identique : c'est voulu, elle sert de reference pour la traduction.
     Une categorie creee dans l'admin et absente d'ici s'affiche telle quelle. */
  'cat.Spa & Bien-être'       : 'Spa & Bien-être',
  'cat.Soins du corps'        : 'Soins du corps',
  'cat.Massage'               : 'Massage',
  'cat.Beauté des pieds'      : 'Beauté des pieds',
  'cat.Ongles'                : 'Ongles',
  'cat.Regard & Maquillage'   : 'Regard & Maquillage',
  'cat.Coiffure femme'        : 'Coiffure femme',
  'cat.Offre du moment'       : 'Offre du moment',

  'sf.Brushing'               : 'Brushing',
  'sf.Coupe'                  : 'Coupe',
  'sf.Couleur'                : 'Couleur',
  'sf.Lissage'                : 'Lissage',
  'sf.Mèches & balayage'      : 'Mèches & balayage',
  'sf.Suppléments'            : 'Suppléments',
  'sf.Soins & extensions'     : 'Soins & extensions',
  'sf.Mariée'                 : 'Mariée',
  'sf.Autres'                 : 'Autres',

  /* ---------- Page de reservation ---------- */
  'confiance.feminin'   : 'Institut 100 % féminin',
  /* Signature sous l'avis cite dans le tunnel : en minuscules, car elle suit
     le prenom de la cliente dans la meme ligne. */
  'r.avis.signe'        : 'avis Google',
  'r.locale'            : 'fr-FR',
  'r.retour.site'       : '← Retour au site',
  'r.demo.titre'        : 'Mode démo',
  'r.demo.texte'        : 'la base de données n\'est pas encore connectée (app-config.js). Les réservations ne sont pas enregistrées.',

  'r.e1.titre'          : 'Choisissez vos soins',
  'r.e1.sous'           : 'Un ou plusieurs, comme vous voulez.',
  'r.e1.choisis'        : '{n} soins choisis.',
  'r.e1.choisi1'        : '1 soin choisi.',
  'r.e1.max'            : '{n} maximum par rendez-vous.',
  'r.groupe.phrase'     : 'Vous venez à plusieurs ? Indiquez le nombre de personnes sous chaque soin.',
  'r.groupe.plus'       : 'Plus de {n} ? Écrivez-nous sur WhatsApp',

  'r.equipe'            : 'L’équipe {salon}',

  'r.e3.titre'          : 'Date & heure',
  'r.jour.auj'          : 'Auj.',
  'r.creneaux.invite'   : 'Choisissez une date pour voir les horaires disponibles.',
  'r.creneaux.chargement':'Recherche des créneaux disponibles',
  'r.creneaux.panne'    : 'Les horaires ne se chargent pas en ce moment.',
  'r.creneaux.reessayer': 'Réessayer',
  'r.creneaux.ouwa'     : 'ou réservez sur WhatsApp :',
  'r.creneaux.aucun'    : 'Plus aucun créneau disponible ce jour-là pour cette durée.',
  'r.creneaux.autre'    : 'Essayez une autre date.',

  'r.e4.titre'          : 'Vos coordonnées',
  'r.e4.sous'           : 'Dernière étape. Paiement sur place.',
  'r.champ.nom'         : 'Prénom et nom',
  'r.champ.nom.ph'      : 'ex : Salma Alaoui',
  'r.champ.nom.err'     : 'Merci d\'indiquer votre nom',
  'r.champ.tel'         : 'Téléphone (WhatsApp de préférence)',
  'r.champ.tel.pays'    : 'Indicatif du pays',
  'r.champ.tel.ph'      : '6 12 34 56 78',
  'r.champ.tel.aide'    : 'Choisissez votre pays, puis tapez le numéro sans l\'indicatif.',
  'r.champ.tel.err'     : 'Numéro invalide. Vérifiez le pays et le numéro.',
  'r.champ.email'       : 'Email',
  'r.champ.email.fac'   : '(facultatif)',
  'r.champ.email.ph'    : 'ex : salma@email.com',
  'r.champ.email.aide'  : 'Pour recevoir votre confirmation par écrit. Sinon nous vous appelons.',
  'r.champ.email.err'   : 'Cet email semble mal écrit. Corrigez-le ou laissez le champ vide.',
  'r.cond.paiement'     : 'Paiement sur place',
  'r.cond.annulation'   : 'Annulation gratuite jusqu\'à 24h avant',
  'r.confirmer'         : 'Confirmer ma réservation',
  'r.enregistrement'    : 'Enregistrement en cours…',
  'r.mention'           : 'En confirmant, vous acceptez que vos coordonnées soient utilisées pour gérer votre rendez-vous, conformément à nos',
  'r.mention.lien'      : 'mentions légales',

  'r.retour.soins'      : '← Modifier mes soins',
  'r.retour.creneau'    : '← Changer de créneau',
  'r.retour.accueil'    : '← Retour à l\'accueil',

  'r.conf.titre'        : 'Rendez-vous confirmé',
  'r.conf.sous'         : 'Merci, votre créneau est réservé.',
  'r.conf.statut'       : 'Votre rendez-vous est confirmé. Vous recevez la confirmation par e-mail si vous l\'avez renseigné. En cas d\'empêchement, prévenez-nous au moins 24h avant.',
  'r.lbl.soins'         : 'Soins',
  'r.lbl.pour'          : 'Pour',
  'r.lbl.date'          : 'Date',
  'r.lbl.horaire'       : 'Horaire',
  'r.lbl.avec'          : 'Avec',
  'r.lbl.total'         : 'Total',
  'r.lbl.adresse'       : 'Adresse',
  'r.surplace'          : 'paiement sur place',
  'r.wa.confirm'        : 'Besoin de nous joindre ? Écrivez-nous sur WhatsApp',

  'r.panier.continuer'  : 'Continuer',
  'r.panier.voir'       : 'Voir le détail',
  'r.panier.masquer'    : 'Masquer',
  'r.panier.total'      : 'Total',
  'r.panier.ajouter'    : 'Ajouter une prestation à la suite',
  'r.panier.plus'       : '{n} personnes maximum pour {nom}. Vous êtes plus nombreuses ? Écrivez-nous',
  'r.personne'          : '1 personne',
  'r.mot.personne'      : 'personne',
  'r.mot.personnes'     : 'personnes',
  'r.personnes'         : '{n} personnes',
  'r.pers.court'        : '{n} pers.',
  'r.pq.max'            : '{n} maximum ici',
  'r.choisie'           : '1 choisie',
  'r.choisies'          : '{n} choisies',
  'r.aria.moins'        : 'Une personne de moins',
  'r.aria.plus'         : 'Une personne de plus',
  'r.aria.moins.de'     : 'Une personne de moins pour {nom}',
  'r.aria.plus.de'      : 'Une personne de plus pour {nom}',
  'r.aria.retirer'      : 'Retirer {nom}',

  'r.alerte.max'        : 'Vous pouvez choisir jusqu\'à {n} prestations par rendez-vous.',
  'r.alerte.collab'     : 'Aucune praticienne ne réalise toutes ces prestations dans le même rendez-vous. Merci de les réserver séparément ou de nous contacter sur WhatsApp.',
  'r.alerte.pris'       : 'Ce créneau vient d\'être réservé par une autre cliente. Merci d\'en choisir un autre.',
  'r.alerte.troptard'   : 'Ce créneau est maintenant trop proche : nous prenons les rendez-vous au moins {n} à l\'avance. Merci d\'en choisir un autre.',
  'r.delai.h'           : '{n}h',
  'r.delai.min'         : '{n} minutes',
  'r.alerte.erreur'     : 'Une erreur est survenue. Merci de réessayer ou de nous écrire sur WhatsApp.',

  'r.chargement.presta' : 'Chargement des prestations',
  'r.panne.titre'       : 'La réservation en ligne ne répond pas',
  'r.panne.texte'       : 'Rechargez la page dans un instant, ou réservez sur WhatsApp :',
  'r.ferme.titre'       : 'Réservation en ligne momentanément fermée',
  'r.ferme.texte'       : 'Écrivez-nous sur WhatsApp :',

  'r.wa.groupe'         : 'Bonjour {salon}, nous souhaitons réserver pour plus de {n} personnes.',
  'r.wa.groupe.soin'    : 'Bonjour {salon}, nous souhaitons réserver {nom} pour plus de {n} personnes.',
  'r.wa.secours'        : 'Bonjour {salon}, je voudrais réserver',
  'r.wa.secours.date'   : 'Date souhaitée : {date}',
  'r.wa.secours.fin'    : 'Le site n\'affichait pas les horaires. Merci de me dire ce qui est libre.',
  'r.wa.apres'          : 'Bonjour {salon}, je viens de réserver en ligne.',
  'r.wa.bientot'        : 'À très bientôt.',

  'r.mail.sujet'        : 'Votre rendez-vous du {date} est confirmé',
  'r.mail.message'      : 'Votre rendez-vous est confirmé. Nous vous attendons.',
  'r.mail.encadre'      : 'Votre rendez-vous',
  'r.mail.lignebas'     : 'Avec {collab} · Total {prix}, à régler sur place',
  'r.mail.pied'         : 'Un empêchement ? Prévenez-nous au moins 24h avant sur WhatsApp au {tel}. L\'annulation est gratuite.',
  'r.mail.nonrenseigne' : 'non renseigné',

  'r.apartir'           : 'à partir de',

  'r.jc.0' : 'Dim', 'r.jc.1' : 'Lun', 'r.jc.2' : 'Mar', 'r.jc.3' : 'Mer',
  'r.jc.4' : 'Jeu', 'r.jc.5' : 'Ven', 'r.jc.6' : 'Sam',
  'r.mc.0' : 'janv', 'r.mc.1' : 'févr', 'r.mc.2' : 'mars', 'r.mc.3' : 'avr',
  'r.mc.4' : 'mai',  'r.mc.5' : 'juin', 'r.mc.6' : 'juil', 'r.mc.7' : 'août',
  'r.mc.8' : 'sept', 'r.mc.9' : 'oct',  'r.mc.10': 'nov',  'r.mc.11': 'déc',

  'rgpd.titre'          : 'Bienvenue',
  'rgpd.texte'          : "Ce site utilise des cookies pour mesurer son audience et l’efficacité de nos campagnes. Vous pouvez les accepter ou les refuser.",
  'rgpd.savoir'         : 'En savoir plus',
  'rgpd.accepter'       : 'Accepter',
  'rgpd.refuser'        : 'Continuer sans accepter',

  'wa.bonjour'          : 'Bonjour Sisters Relax, ',

  'duree.min'           : '{n} min'
},

/* ================= ENGLISH ================= */
en: {
  'langue.choisir'      : 'Choose language',

  'meta.titre'          : 'Hammam, massage & beauty in Marrakech — Sisters Relax',
  'meta.description'    : 'Sisters Relax, a women-only beauty and wellness salon in Gueliz, Marrakech: traditional hammam, massage, body care, nails, brows, make-up and hair. Book online, pay at the salon.',


  'nav.soins'           : 'Treatments',
  'nav.carte'           : 'Price list',
  'nav.avis'            : 'Reviews',
  'nav.salon'           : 'The salon',
  'nav.reserver'        : 'Book',

  'hero.titre'          : 'Your beauty escape,',
  'hero.titre.em'       : '100 % women, in Marrakech',
  'hero.sous'           : 'Hammam, massage, nails, brows and hair: the standards of a Paris salon, the softness of Moroccan rituals.',
  'hero.cta'            : 'Book a treatment',
  'hero.ecrire'         : 'Message us',

  'stat.avis'           : 'Google reviews',
  'stat.jours'          : '7 days',
  'stat.jours.sous'     : 'Open every day',
  'stat.paiement'       : 'In salon',
  'stat.paiement.sous'  : 'Pay on arrival',
  'stat.annulation'     : '24h',
  'stat.annulation.sous': 'Free cancellation',

  'univers.eyebrow'     : 'Treatments',
  'univers.titre'       : 'Build your own beauty ritual',
  'univers.sous'        : 'Combine up to five treatments: a hammam then a massage, a manicure before a blow-dry, all in one visit.',

  'carte.eyebrow'       : 'Price list',
  'carte.titre'         : 'Treatments & prices',
  'carte.sous'          : 'Prices in dirhams, paid at the salon. Bespoke treatments (royal hammam, brides, extensions) are arranged together on WhatsApp.',
  'carte.des'           : 'from',
  'carte.soins'         : '{n} treatments',
  'carte.soins.1'       : '1 treatment',
  'carte.surdevis'      : 'On request',
  'carte.devis'         : 'Ask',
  'carte.choisir'       : 'Select',
  'carte.devis.wa'      : 'Hello Sisters Relax, I would like a quote for: {nom}.',

  'avis.eyebrow'        : 'Google reviews',
  'avis.titre'          : 'What they say',
  'avis.n'              : '{n} Google reviews',
  'avis.sans.n'         : 'Google reviews',
  'avis.tous'           : 'Read every review',
  'avis.fiche'          : 'See Sisters Relax on Google',
  'avis.source'         : 'Google review',
  'avis.etoiles'        : '{n} stars out of 5',

  'infos.eyebrow'       : 'The salon',
  'infos.titre'         : 'Come and see us',
  'infos.adresse'       : 'Address',
  'infos.itineraire'    : 'Directions',
  'infos.appeler'       : 'Call us',
  'infos.horaires'      : 'Opening hours',
  'infos.ferme'         : 'Closed',

  'jour.1'              : 'Monday',
  'jour.2'              : 'Tuesday',
  'jour.3'              : 'Wednesday',
  'jour.4'              : 'Thursday',
  'jour.5'              : 'Friday',
  'jour.6'              : 'Saturday',
  'jour.0'              : 'Sunday',

  'faq.eyebrow'         : 'Good to know',
  'faq.titre'           : 'Frequently asked questions',
  'faq.1.q'             : 'Do I have to pay online to book?',
  'faq.1.r'             : 'No. Booking is free and no card is needed. You pay at the salon.',
  'faq.2.q'             : 'Can I book several treatments at once?',
  'faq.2.r'             : 'Yes, up to five treatments in a single appointment. The times we offer already allow for the total duration.',
  'faq.3.q'             : 'How do I cancel or move my appointment?',
  'faq.3.r'             : 'Message us on WhatsApp at least 24h ahead: cancelling is free and we will offer you another time.',
  'faq.4.q'             : 'How do I get a quote?',
  'faq.4.r'             : 'Royal hammam, weddings, extensions: these are arranged individually. Tap "Ask" in the price list and a ready-written WhatsApp message opens.',

  'final.titre'         : 'Take the time for yourself',
  'final.sous'          : 'Book online in moments. Pay at the salon.',

  'pied.mentions'       : 'Legal notice',
  'pied.cookies'        : 'Cookies',

  /* ---------- WhatsApp messages sent from the admin ---------- */
  'm.bonjour'           : 'Hello {prenom}, this is {salon}.',
  'm.conf.creneau'      : 'Your slot is booked:',
  'm.conf.pour'         : 'For {n} people',
  'm.conf.avec'         : 'With {collab} · {prix} DH, paid at the salon',
  'm.conf.demande'      : 'Please confirm you will come by replying YES. We then hold the room in your name.',
  'm.conf.decaler'      : 'If you would rather move it, write to us and we will find you another time.',
  'm.rap.titre'         : 'A reminder of your appointment {quand} at {heure}:',
  'm.rap.demain'        : 'tomorrow, {jour}',
  'm.rap.date'          : 'on {jour}',
  'm.rap.avance'        : 'Please arrive 5 minutes early.',
  'm.rap.pret'          : 'Everything is ready for you. A quick word to confirm would help us.',
  'm.rap.annuler'       : 'If you can no longer come, tell us now and we will offer you another date.',

  /* ---------- Categories and sub-families ----------
     The key is the exact name as stored in the database. */
  'cat.Spa & Bien-être'       : 'Hammam & Spa',
  'cat.Soins du corps'        : 'Body treatments',
  'cat.Massage'               : 'Massage',
  'cat.Beauté des pieds'      : 'Foot care',
  'cat.Ongles'                : 'Nails',
  'cat.Regard & Maquillage'   : 'Brows, lashes & make-up',
  'cat.Coiffure femme'        : 'Hair',
  'cat.Offre du moment'       : 'This month\'s offer',

  'sf.Brushing'               : 'Blow-dry',
  'sf.Coupe'                  : 'Cuts',
  'sf.Couleur'                : 'Colour',
  'sf.Lissage'                : 'Straightening',
  'sf.Mèches & balayage'      : 'Highlights & balayage',
  'sf.Suppléments'            : 'Add-ons',
  'sf.Soins & extensions'     : 'Treatments & extensions',
  'sf.Mariée'                 : 'Bridal',
  'sf.Autres'                 : 'Other',

  /* ---------- Booking page ---------- */
  'confiance.feminin'   : 'Women-only salon',
  'r.avis.signe'        : 'Google review',
  'r.locale'            : 'en-GB',
  'r.retour.site'       : '← Back to the site',
  'r.demo.titre'        : 'Demo mode',
  'r.demo.texte'        : 'the database is not connected yet (app-config.js). Bookings are not being saved.',

  'r.e1.titre'          : 'Choose your treatments',
  'r.e1.sous'           : 'One or several, as you like.',
  'r.e1.choisis'        : '{n} treatments chosen.',
  'r.e1.choisi1'        : '1 treatment chosen.',
  'r.e1.max'            : '{n} maximum per appointment.',
  'r.groupe.phrase'     : 'Coming with others? Set the number of people under each treatment.',
  'r.groupe.plus'       : 'More than {n}? Message us on WhatsApp',

  'r.equipe'            : 'The {salon} team',

  'r.e3.titre'          : 'Date & time',
  'r.jour.auj'          : 'Today',
  'r.creneaux.invite'   : 'Pick a date to see the times available.',
  'r.creneaux.chargement':'Looking for available times',
  'r.creneaux.panne'    : 'The times are not loading right now.',
  'r.creneaux.reessayer': 'Try again',
  'r.creneaux.ouwa'     : 'or book on WhatsApp:',
  'r.creneaux.aucun'    : 'No times left on that day for this duration.',
  'r.creneaux.autre'    : 'Try another date.',

  'r.e4.titre'          : 'Your details',
  'r.e4.sous'           : 'Last step. You pay at the salon.',
  'r.champ.nom'         : 'First and last name',
  'r.champ.nom.ph'      : 'e.g. Salma Alaoui',
  'r.champ.nom.err'     : 'Please enter your name',
  'r.champ.tel'         : 'Phone (WhatsApp preferred)',
  'r.champ.tel.pays'    : 'Country code',
  'r.champ.tel.ph'      : '6 12 34 56 78',
  'r.champ.tel.aide'    : 'Pick your country, then type the number without the country code.',
  'r.champ.tel.err'     : 'That number is not valid. Check the country and the number.',
  'r.champ.email'       : 'Email',
  'r.champ.email.fac'   : '(optional)',
  'r.champ.email.ph'    : 'e.g. salma@email.com',
  'r.champ.email.aide'  : 'So we can send your confirmation in writing. Otherwise we call you.',
  'r.champ.email.err'   : 'That email looks wrong. Correct it or leave the field empty.',
  'r.cond.paiement'     : 'Pay at the salon',
  'r.cond.annulation'   : 'Free cancellation up to 24h before',
  'r.confirmer'         : 'Confirm my booking',
  'r.enregistrement'    : 'Saving…',
  'r.mention'           : 'By confirming, you agree that your details will be used to manage your appointment, in line with our',
  'r.mention.lien'      : 'legal notice',

  'r.retour.soins'      : '← Change my treatments',
  'r.retour.creneau'    : '← Change time',
  'r.retour.accueil'    : '← Back to home',

  'r.conf.titre'        : 'Appointment confirmed',
  'r.conf.sous'         : 'Thank you, your slot is booked.',
  'r.conf.statut'       : 'Your appointment is confirmed. You will get the confirmation by email if you gave one. If something comes up, let us know at least 24h ahead.',
  'r.lbl.soins'         : 'Treatments',
  'r.lbl.pour'          : 'For',
  'r.lbl.date'          : 'Date',
  'r.lbl.horaire'       : 'Time',
  'r.lbl.avec'          : 'With',
  'r.lbl.total'         : 'Total',
  'r.lbl.adresse'       : 'Address',
  'r.surplace'          : 'paid at the salon',
  'r.wa.confirm'        : 'Need to reach us? Message us on WhatsApp',

  'r.panier.continuer'  : 'Continue',
  'r.panier.voir'       : 'See details',
  'r.panier.masquer'    : 'Hide',
  'r.panier.total'      : 'Total',
  'r.panier.ajouter'    : 'Add another treatment',
  'r.panier.plus'       : '{n} people maximum for {nom}. More of you? Message us',
  'r.personne'          : '1 person',
  'r.mot.personne'      : 'person',
  'r.mot.personnes'     : 'people',
  'r.personnes'         : '{n} people',
  'r.pers.court'        : '{n} ppl',
  'r.pq.max'            : '{n} maximum here',
  'r.choisie'           : '1 chosen',
  'r.choisies'          : '{n} chosen',
  'r.aria.moins'        : 'One person fewer',
  'r.aria.plus'         : 'One person more',
  'r.aria.moins.de'     : 'One person fewer for {nom}',
  'r.aria.plus.de'      : 'One person more for {nom}',
  'r.aria.retirer'      : 'Remove {nom}',

  'r.alerte.max'        : 'You can choose up to {n} treatments per appointment.',
  'r.alerte.collab'     : 'No single therapist carries out all these treatments in one appointment. Please book them separately or message us on WhatsApp.',
  'r.alerte.pris'       : 'That slot has just been taken by another client. Please choose another one.',
  'r.alerte.troptard'   : 'That slot is now too close: we take appointments at least {n} ahead. Please choose another one.',
  'r.delai.h'           : '{n}h',
  'r.delai.min'         : '{n} minutes',
  'r.alerte.erreur'     : 'Something went wrong. Please try again or message us on WhatsApp.',

  'r.chargement.presta' : 'Loading treatments',
  'r.panne.titre'       : 'Online booking is not responding',
  'r.panne.texte'       : 'Reload the page in a moment, or book on WhatsApp:',
  'r.ferme.titre'       : 'Online booking is closed for now',
  'r.ferme.texte'       : 'Message us on WhatsApp:',

  'r.wa.groupe'         : 'Hello {salon}, we would like to book for more than {n} people.',
  'r.wa.groupe.soin'    : 'Hello {salon}, we would like to book {nom} for more than {n} people.',
  'r.wa.secours'        : 'Hello {salon}, I would like to book',
  'r.wa.secours.date'   : 'Preferred date: {date}',
  'r.wa.secours.fin'    : 'The site was not showing the times. Please tell me what is free.',
  'r.wa.apres'          : 'Hello {salon}, I have just booked online.',
  'r.wa.bientot'        : 'See you very soon.',

  'r.mail.sujet'        : 'Your appointment on {date} is confirmed',
  'r.mail.message'      : 'Your appointment is confirmed. We look forward to seeing you.',
  'r.mail.encadre'      : 'Your appointment',
  'r.mail.lignebas'     : 'With {collab} · Total {prix}, paid at the salon',
  'r.mail.pied'         : 'Something came up? Let us know at least 24h ahead on WhatsApp at {tel}. Cancelling is free.',
  'r.mail.nonrenseigne' : 'not given',

  'r.apartir'           : 'from',

  'r.jc.0' : 'Sun', 'r.jc.1' : 'Mon', 'r.jc.2' : 'Tue', 'r.jc.3' : 'Wed',
  'r.jc.4' : 'Thu', 'r.jc.5' : 'Fri', 'r.jc.6' : 'Sat',
  'r.mc.0' : 'Jan', 'r.mc.1' : 'Feb', 'r.mc.2' : 'Mar', 'r.mc.3' : 'Apr',
  'r.mc.4' : 'May', 'r.mc.5' : 'Jun', 'r.mc.6' : 'Jul', 'r.mc.7' : 'Aug',
  'r.mc.8' : 'Sep', 'r.mc.9' : 'Oct', 'r.mc.10': 'Nov', 'r.mc.11': 'Dec',

  'rgpd.titre'          : 'Welcome',
  'rgpd.texte'          : 'This site uses cookies to measure its audience and how well our campaigns perform. You can accept them or refuse them.',
  'rgpd.savoir'         : 'Read more',
  'rgpd.accepter'       : 'Accept',
  'rgpd.refuser'        : 'Continue without accepting',

  'wa.bonjour'          : 'Hello Sisters Relax, ',

  'duree.min'           : '{n} min'
}

};

/* =============================================================
   MECANIQUE — rien a modifier ici au quotidien.
   ============================================================= */

var LANGUE_CLE = 'sr_langue';

/* Une langue n'est retenue que si elle figure dans LANGUES. */
function langueConnue(code){
  for(var i = 0; i < LANGUES.length; i++) if(LANGUES[i].code === code) return LANGUES[i];
  return null;
}

/* Ordre de priorite : l'adresse de la page, puis le choix precedent,
   puis le francais. La langue du telephone n'entre PAS en jeu : le
   francais reste la langue par defaut, comme decide. */
function langueActive(){
  var url = null;
  try{ url = new URLSearchParams(window.location.search).get('lang'); }catch(e){}
  if(url && langueConnue(url)) return url;
  var gardee = null;
  try{ gardee = window.localStorage.getItem(LANGUE_CLE); }catch(e){}
  if(gardee && langueConnue(gardee)) return gardee;
  return LANGUE_DEFAUT;
}

function retenirLangue(code){
  try{ window.localStorage.setItem(LANGUE_CLE, code); }catch(e){}
}

/* Le texte d'une cle dans la langue courante.
   Une cle absente retombe sur le francais, puis sur la cle elle-meme :
   une traduction oubliee laisse une phrase lisible, jamais un trou. */
function tDans(langue, cle, valeurs){
  var table = TRADUCTIONS[langue] || {};
  var texte = table[cle];
  if(texte === undefined) texte = (TRADUCTIONS[LANGUE_DEFAUT] || {})[cle];
  if(texte === undefined) return cle;
  if(valeurs) for(var k in valeurs) texte = texte.split('{' + k + '}').join(valeurs[k]);
  return texte;
}
/* Dans une langue imposee : l'admin ecrit a chaque cliente dans SA langue,
   pas dans celle de la personne qui tient la caisse. */
function t(cle, valeurs){ return tDans(langueActive(), cle, valeurs); }

/* Nom d'une categorie ou d'une sous-famille dans la langue courante.
   La valeur francaise reste la cle partout dans le code et en base : seul
   l'affichage change. Un nom absent de la table s'affiche tel quel, ce qui
   laisse le salon creer une categorie sans rien casser. */
function trCategorie(nom){
  const l = langueActive();
  if(l === LANGUE_DEFAUT) return nom;
  const table = TRADUCTIONS[l] || {};
  return table['cat.' + nom] || nom;
}
function trFamille(nom){
  const l = langueActive();
  if(l === LANGUE_DEFAUT) return nom;
  const table = TRADUCTIONS[l] || {};
  return table['sf.' + nom] || nom;
}
/* Nom ou description d'une prestation. La colonne anglaise peut etre vide
   en base : on retombe alors sur le francais plutot que sur un blanc. */
function trChamp(valeurFr, valeurEn){
  if(langueActive() === LANGUE_DEFAUT) return valeurFr;
  const v = (valeurEn === null || valeurEn === undefined) ? '' : String(valeurEn).trim();
  return v ? valeurEn : valeurFr;
}

/* Ajoute la langue courante a une adresse interne, pour qu'elle
   survive au passage d'une page a l'autre. */
function avecLangue(url){
  var l = langueActive();
  if(l === LANGUE_DEFAUT) return url;
  if(/^(https?:|mailto:|tel:|#)/i.test(url)) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'lang=' + encodeURIComponent(l);
}

/* Remplace le contenu de tout element porteur de data-t.
   data-t      -> le texte de l'element
   data-t-html -> idem, mais le texte peut contenir des balises
   data-t-attr -> "attribut:cle" (plusieurs separes par |) */
function appliquerTraductions(racine){
  var zone = racine || document;
  zone.querySelectorAll('[data-t]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-t'));
  });
  zone.querySelectorAll('[data-t-html]').forEach(function(el){
    el.innerHTML = t(el.getAttribute('data-t-html'));
  });
  zone.querySelectorAll('[data-t-attr]').forEach(function(el){
    el.getAttribute('data-t-attr').split('|').forEach(function(paire){
      var i = paire.indexOf(':');
      if(i > 0) el.setAttribute(paire.slice(0, i).trim(), t(paire.slice(i + 1).trim()));
    });
  });
}

/* Le menu deroulant. Il se construit depuis LANGUES : ajouter une
   langue la-haut suffit a la faire apparaitre ici. */
function monterSelecteurLangue(hote){
  if(!hote) return;
  var active = langueActive();
  var courante = langueConnue(active) || LANGUES[0];
  var liste = LANGUES.map(function(l){
    var choisie = l.code === active;
    return '<a role="option" aria-selected="' + (choisie ? 'true' : 'false') + '"'
      + (choisie ? ' class="on"' : '')
      + ' href="' + (l.code === LANGUE_DEFAUT ? '?' : '?lang=' + encodeURIComponent(l.code)) + '"'
      + ' data-langue="' + l.code + '" lang="' + l.code + '">'
      + l.nom + '<span class="code">' + l.code.toUpperCase() + '</span></a>';
  }).join('');

  hote.innerHTML =
    '<button type="button" class="sel-bt" id="btLangue" aria-haspopup="listbox" aria-expanded="false"'
    + ' aria-label="' + t('langue.choisir') + '">' + courante.code.toUpperCase()
    + '<svg width="9" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>'
    + '</button>'
    + '<div class="sel-menu" id="menuLangue" role="listbox" hidden>' + liste + '</div>';

  var bouton = hote.querySelector('#btLangue');
  var menu   = hote.querySelector('#menuLangue');

  function fermer(){ menu.hidden = true; bouton.setAttribute('aria-expanded', 'false'); }
  function basculer(){
    var ouvert = menu.hidden;
    menu.hidden = !ouvert;
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  }
  bouton.addEventListener('click', function(e){ e.stopPropagation(); basculer(); });
  document.addEventListener('click', function(e){ if(!hote.contains(e.target)) fermer(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') fermer(); });

  /* Le changement de langue recharge la page : tout ce que le site
     fabrique en JavaScript (catalogue, horaires, avis) repart alors
     dans la bonne langue, sans demi-mesure. */
  menu.addEventListener('click', function(e){
    var lien = e.target.closest('[data-langue]');
    if(!lien) return;
    e.preventDefault();
    var code = lien.getAttribute('data-langue');
    retenirLangue(code);
    var u = new URL(window.location.href);
    if(code === LANGUE_DEFAUT) u.searchParams.delete('lang');
    else u.searchParams.set('lang', code);
    window.location.href = u.toString();
  });
}

/* A appeler une fois par page, le plus tot possible. */
function demarrerLangues(idHoteSelecteur){
  var l = langueActive();
  var def = langueConnue(l) || LANGUES[0];
  document.documentElement.setAttribute('lang', def.code);
  document.documentElement.setAttribute('dir', def.sens || 'ltr');
  retenirLangue(def.code);
  appliquerTraductions(document);
  monterSelecteurLangue(document.getElementById(idHoteSelecteur || 'choixLangue'));
  /* Les liens internes gardent la langue en traversant les pages. */
  document.querySelectorAll('a[href]').forEach(function(a){
    var h = a.getAttribute('href');
    if(!h || /^(https?:|mailto:|tel:|#|javascript:)/i.test(h)) return;
    a.setAttribute('href', avecLangue(h));
  });
}
