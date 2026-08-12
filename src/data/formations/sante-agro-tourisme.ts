import type { Formation } from "@/types/formation";

/**
 * Médecine, agro-industrie, hôtellerie-tourisme, création multimédia.
 * Entrées vérifiées sur les sites officiels (UCAD, ISEP Richard-Toll, ENFHT, ISEP Thiès).
 */
export const formationsSanteAgroTourisme: Formation[] = [
  {
    id: "ucad-medecine",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "≈ 200 000 F / an (étrangers, à confirmer)",
      detail:
        "Droits d'inscription historiquement rapportés à la FMPOS de l'UCAD : 200 000 FCFA par an en licence pour les étudiants étrangers, contre 25 000 FCFA pour les Sénégalais et boursiers, et 1 000 000 FCFA pour le doctorat. Ces montants ne sont plus republiés sur le site actuel de la faculté : confirmez le tarif en vigueur auprès de sinfo.fmpo@ucad.edu.sn avant de bâtir un budget. S'ajoutent le logement, la nourriture et le matériel médical.",
    },
    filiere: "Médecine",
    institut: "UCAD - Faculté de Médecine, Pharmacie et Odontostomatologie",
    bacsCompatibles: ["Scientifique"],
    description:
      "Cursus médical complet à la FMPOS, avec stages hospitaliers. Sélection très exigeante : mention fortement recommandée au baccalauréat.",
    debouches: ["Médecin généraliste", "Interne", "Chercheur en santé publique"],
    ville: "Dakar",
    dureeEnAnnees: 7,
    diplomePrepare: "Doctorat en médecine",
    competencesAcquises: [
      "Sciences fondamentales : anatomie, physiologie, biochimie, pharmacologie",
      "Sémiologie et démarche diagnostique",
      "Stages hospitaliers dans tous les grands services",
      "Urgences, pédiatrie, gynécologie, maladies tropicales",
      "Santé publique et épidémiologie de terrain",
    ],
    missionsConcretes: [
      "Consulter, diagnostiquer et prescrire en cabinet ou en hôpital",
      "Prendre en charge les urgences et les maladies courantes",
      "Se spécialiser ensuite (chirurgie, pédiatrie, cardiologie…)",
      "Mener des campagnes de prévention et de vaccination",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Le manque de médecins est structurel aux Comores, en particulier hors de Moroni. Un médecin formé revient avec la certitude de trouver un poste, mais dans des conditions de travail exigeantes : plateaux techniques limités, évacuations sanitaires fréquentes.",
      employeursPotentiels: [
        "Hôpital El-Maarouf et centres hospitaliers régionaux",
        "Centres de santé de district",
        "ONG médicales et organisations internationales",
        "Cabinet privé",
      ],
      conseil:
        "Cursus long et très sélectif : ne vous engagez que si les sciences vous passionnent vraiment. Renseignez-vous dès la 3e année sur les équivalences et l'inscription à l'Ordre aux Comores.",
    },
    sourceOfficielle: { libelle: "fmpos.ucad.sn", url: "https://fmpos.ucad.sn/" },
    noteDAdmission:
      "L'UCAD est ouverte aux étudiants étrangers dans la limite des places disponibles. Préinscription obligatoire en ligne sur preinscriptionenligne.ucad.sn.",
  },
  {
    id: "uidt-medecine",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "Deuxième faculté de médecine publique du Sénégal : le tarif applicable aux étudiants étrangers n'est pas publié en ligne. Contactez ufrsante@univ-thies.sn pour connaître le montant applicable aux candidats comoriens.",
    },
    filiere: "Médecine",
    institut: "UIDT - Université Iba Der Thiam de Thiès (UFR Santé)",
    bacsCompatibles: ["Scientifique"],
    description:
      "Deuxième école de médecine publique du Sénégal (UFR Santé créée en 2008, premiers diplômés en 2017). Propose aussi pharmacie, soins infirmiers et orthophonie. Cursus complet avec test d'entrée spécifique pour les candidats étrangers.",
    debouches: ["Médecin généraliste", "Interne", "Chercheur en santé publique"],
    ville: "Thiès",
    dureeEnAnnees: 8,
    diplomePrepare: "Doctorat en médecine",
    competencesAcquises: [
      "Sciences fondamentales : anatomie, physiologie, biochimie, pharmacologie",
      "Sémiologie et démarche diagnostique",
      "Stages hospitaliers dans les services régionaux de Thiès",
      "Urgences, pédiatrie, gynécologie, maladies tropicales",
      "Santé publique et épidémiologie de terrain",
    ],
    missionsConcretes: [
      "Consulter, diagnostiquer et prescrire en cabinet ou en hôpital",
      "Prendre en charge les urgences et les maladies courantes",
      "Se spécialiser ensuite (chirurgie, pédiatrie, cardiologie…)",
      "Mener des campagnes de prévention et de vaccination",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Alternative publique à UCAD, plus récente mais avec un test d'entrée spécifiquement ouvert aux étudiants étrangers. Le manque de médecins reste structurel aux Comores : les mêmes perspectives de placement s'appliquent qu'à la sortie de Dakar.",
      employeursPotentiels: [
        "Hôpital El-Maarouf et centres hospitaliers régionaux",
        "Centres de santé de district",
        "ONG médicales et organisations internationales",
        "Cabinet privé",
      ],
      conseil:
        "École plus jeune que la FMPOS de l'UCAD (premiers diplômés en 2017), donc moins de recul sur la reconnaissance internationale de son diplôme : renseignez-vous sur les équivalences avant de choisir entre les deux facultés publiques.",
    },
    sourceOfficielle: { libelle: "uidt.sn", url: "https://www.uidt.sn/medecine-generale/" },
    noteDAdmission:
      "Admission des étudiants étrangers par test d'entrée spécifique (contact : ufrsante@univ-thies.sn). Baccalauréat scientifique requis.",
  },
  {
    id: "isep-richard-toll-agro",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Frais publics réduits",
      detail:
        "Institut public créé par décret présidentiel n°2016-814 : scolarité largement subventionnée par l'État. Le tarif applicable aux étudiants étrangers n'est pas publié, à demander lors de la campagne de recrutement annuelle (isep@isep-rt.edu.sn, +221 33 964 20 16).",
    },
    filiere: "Production Agro-Industrielle",
    institut: "ISEP Richard-Toll",
    bacsCompatibles: ["Scientifique"],
    description:
      "Institut public créé en 2016, spécialisé en agriculture, élevage, aquaculture, agroalimentaire et tourisme. Formation de technicien supérieur en 2 ans.",
    debouches: [
      "Technicien qualité",
      "Responsable de production",
      "Technico-commercial agroalimentaire",
    ],
    ville: "Richard-Toll",
    dureeEnAnnees: 2,
    diplomePrepare: "Diplôme de technicien supérieur (Bac+2)",
    competencesAcquises: [
      "Procédés de transformation : séchage, conservation, conditionnement",
      "Microbiologie alimentaire et contrôle qualité",
      "Normes d'hygiène et HACCP",
      "Gestion d'une unité de production et chaîne du froid",
      "Commercialisation et logistique des produits agroalimentaires",
    ],
    missionsConcretes: [
      "Transformer une récolte en produit vendable et conservable",
      "Monter une petite unité de transformation (huile, confiture, séchage)",
      "Mettre en place les normes d'hygiène d'un atelier de production",
      "Améliorer la conservation de produits locaux périssables",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Les Comores exportent leurs produits phares (vanille, ylang-ylang, girofle) largement bruts et importent l'essentiel de leur alimentation transformée. Le potentiel est évident, mais les emplois salariés sont rares : cette filière relève surtout de l'entrepreneuriat.",
      employeursPotentiels: [
        "Coopératives agricoles et filières d'exportation",
        "ONG et projets de sécurité alimentaire",
        "Création de sa propre unité de transformation",
        "Contrôle qualité, services sanitaires",
      ],
      conseil:
        "Ne partez sur cette filière que si vous avez un projet entrepreneurial en tête. Utilisez vos stages pour étudier une filière comorienne précise et revenir avec un projet chiffré.",
    },
    sourceOfficielle: {
      libelle: "iseprichardtoll.sn",
      url: "https://iseprichardtoll.sn/",
    },
    noteDAdmission:
      "Institut public, recrutement par campagne annuelle. L'établissement propose plusieurs parcours agroalimentaires (production, commercialisation, logistique).",
  },
  {
    id: "ensa-thies-agronomie",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "École publique intégrée à l'UIDT : le tarif applicable aux étudiants étrangers n'est pas publié en ligne. Contactez info@uidt.sn ou +221 33 894 40 00 pour connaître le montant applicable.",
    },
    filiere: "Ingénierie Agricole (Ingénieur Agronome)",
    institut: "ENSA Thiès - École Nationale Supérieure d'Agriculture",
    bacsCompatibles: ["Scientifique"],
    description:
      "Principale école d'ingénieurs agronomes du Sénégal, fondée en 1981 et intégrée à l'Université de Thiès en 2006. Spécialisations en production végétale, production animale, foresterie, sciences du sol et environnement, ingénierie rurale et économie rurale.",
    debouches: [
      "Ingénieur agronome",
      "Responsable de production agricole",
      "Chargé de projet agricole ou rural",
      "Conseiller technique en coopérative",
    ],
    ville: "Thiès",
    dureeEnAnnees: 5,
    diplomePrepare: "Diplôme d'Ingénieur Agronome (Bac+5)",
    competencesAcquises: [
      "Agronomie générale et production végétale/animale",
      "Sciences du sol, irrigation et gestion de l'eau",
      "Foresterie et gestion de l'environnement",
      "Ingénierie rurale et économie agricole",
      "Conduite de projets de développement agricole",
    ],
    missionsConcretes: [
      "Concevoir et piloter un projet agricole ou d'élevage",
      "Améliorer les rendements d'une filière agricole locale",
      "Conseiller des coopératives sur les techniques de production",
      "Diriger un projet de sécurité alimentaire pour une ONG ou l'État",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Diplôme d'ingénieur plus poussé que le technicien supérieur d'ISEP Richard-Toll, utile pour piloter des projets agricoles à plus grande échelle. Comme pour l'agro-industrie, les emplois salariés directs restent rares aux Comores : cette filière relève surtout de l'entrepreneuriat ou des projets de développement.",
      employeursPotentiels: [
        "Coopératives agricoles et filières d'exportation",
        "ONG et projets de sécurité alimentaire",
        "Ministère de l'Agriculture, services techniques",
        "Création de sa propre exploitation ou unité agricole",
      ],
      conseil:
        "Cursus long (5 ans) : n'envisagez cette voie que si vous avez un vrai projet agricole ou souhaitez travailler pour de grands projets de développement rural. Pour un projet entrepreneurial plus rapide, ISEP Richard-Toll (Bac+2) reste une option plus courte.",
    },
    sourceOfficielle: { libelle: "uidt.sn", url: "https://www.uidt.sn/ensa/" },
    noteDAdmission:
      "École publique intégrée à l'UIDT depuis 2006. Modalités d'admission des étudiants étrangers non publiées en ligne : à demander directement à l'université.",
  },
  {
    id: "enfht-hotellerie-tourisme",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Frais publics réduits",
      detail:
        "École nationale publique sous tutelle du ministère du Tourisme : scolarité subventionnée. Le montant appliqué aux étudiants étrangers admis sur dossier n'est pas publié en ligne, à demander au secrétariat lors du dépôt du dossier.",
    },
    filiere: "Hôtellerie, Restauration et Tourisme",
    institut: "ENFHT - École Nationale de Formation Hôtelière et Touristique",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "École publique créée en 1959, seule structure d'Afrique subsaharienne francophone à délivrer un BTS du secteur. Elle a historiquement accueilli des étudiants comoriens aux côtés d'autres nationalités africaines.",
    debouches: [
      "Réceptionniste chef",
      "Agent de voyage",
      "Responsable de restauration",
      "Gestionnaire hôtelier",
    ],
    ville: "Dakar",
    dureeEnAnnees: 2,
    diplomePrepare: "BTS (3 ans en gestion hôtelière, année préparatoire incluse)",
    competencesAcquises: [
      "Gestion hôtelière : réception, réservation, gestion des chambres",
      "Techniques de restauration et de service",
      "Langues étrangères appliquées au tourisme",
      "Organisation de séjours et d'événements",
      "Gestion d'équipe et qualité de service",
    ],
    missionsConcretes: [
      "Gérer la réception et le remplissage d'un hôtel",
      "Concevoir et vendre des circuits touristiques",
      "Organiser séminaires, mariages et événements professionnels",
      "Ouvrir et gérer une petite structure d'hébergement",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Le tourisme comorien reste embryonnaire malgré un potentiel réel (plages, Karthala, plongée). Les emplois formels sont peu nombreux, mais l'écotourisme et l'hébergement de la diaspora ouvrent des créneaux pour qui sait se lancer.",
      employeursPotentiels: [
        "Hôtels et résidences de Grande Comore, Anjouan, Mohéli",
        "Agences de voyage et compagnies aériennes",
        "Projets d'écotourisme et parcs nationaux",
        "Création d'une maison d'hôtes ou d'une agence réceptive",
      ],
      conseil:
        "Les langues sont votre premier actif : anglais et arabe ou italien ouvrent plus de portes que le diplôme lui-même. Envisagez une première expérience à l'étranger avant le retour.",
    },
    sourceOfficielle: { libelle: "enfht.sn", url: "https://enfht.sn/" },
    noteDAdmission:
      "Les étudiants étrangers sont admis sur étude de dossier (les Sénégalais passent un concours national). Concours en avril-mai, inscriptions en février-mars ; confirmez les conditions d'âge en vigueur directement auprès de l'école.",
  },
  {
    id: "les-marmitons-hotellerie",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "L'école ne publie pas sa grille tarifaire complète en ligne. Consultez le site pour les modalités d'inscription ou contactez directement l'établissement.",
    },
    filiere: "Restauration, Hôtellerie et Tourisme",
    institut: "Institut Supérieur Les Marmitons",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "École privée dakaroise fondée en 2006 par le chef Sidy Diéme, devenue une référence pour les formations pratiques en cuisine, pâtisserie, boucherie, accueil hôtelier, service et tourisme.",
    debouches: [
      "Cuisinier",
      "Pâtissier",
      "Agent d'accueil hôtelier",
      "Guide touristique",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "BEP, CAP/DEP puis BTS (diplômes reconnus par l'État)",
    competencesAcquises: [
      "Techniques culinaires et pâtisserie",
      "Accueil et service en restauration",
      "Gestion d'un établissement hôtelier",
      "Bases du tourisme et du guidage",
      "Hygiène et sécurité alimentaire",
    ],
    missionsConcretes: [
      "Travailler en cuisine dans un restaurant ou un hôtel",
      "Gérer l'accueil et le service d'un établissement",
      "Organiser un service de restauration événementiel",
      "Ouvrir son propre restaurant ou service traiteur",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Formation très pratique, complémentaire de celle de l'ENFHT (plus généraliste). Le tourisme comorien reste à construire, mais les compétences culinaires et d'accueil sont directement mobilisables dans la restauration locale ou en indépendant.",
      employeursPotentiels: [
        "Hôtels et restaurants de Grande Comore, Anjouan, Mohéli",
        "Traiteurs et évènementiel",
        "Projets d'écotourisme",
        "Création de son propre restaurant ou service traiteur",
      ],
      conseil:
        "Formation courte et très pratique : idéale si vous voulez vous lancer rapidement dans la restauration ou l'hôtellerie sans passer par un cursus long.",
    },
    sourceOfficielle: {
      libelle: "ecolelesmarmitons.com",
      url: "https://ecolelesmarmitons.com/",
    },
  },
  {
    id: "isep-thies-multimedia",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Frais publics réduits",
      detail:
        "Institut public financé par l'État et la Banque mondiale : la scolarité est très largement subventionnée. Le montant applicable aux étudiants étrangers n'est pas publié en ligne, à demander lors de la campagne de recrutement.",
    },
    filiere: "Création Multimédia et Production Audiovisuelle",
    institut: "ISEP Thiès (Abdoulaye Ly)",
    bacsCompatibles: ["Scientifique", "Littéraire"],
    description:
      "Institut public formant des techniciens supérieurs. Département TIC : design graphique, multimédia, journalisme et production audiovisuelle.",
    debouches: [
      "Monteur vidéo",
      "Cadreur",
      "Designer graphique",
      "Journaliste reporter d'images",
    ],
    ville: "Thiès",
    dureeEnAnnees: 2,
    diplomePrepare: "Diplôme de technicien supérieur (Bac+2)",
    competencesAcquises: [
      "Écriture de scénario, storyboard et conduite d'un tournage",
      "Prise de vue, cadrage, lumière et prise de son",
      "Montage et étalonnage (Premiere, DaVinci Resolve, After Effects)",
      "Design graphique et habillage multimédia",
      "Diffusion et stratégie de contenu sur les réseaux sociaux",
    ],
    missionsConcretes: [
      "Réaliser un film institutionnel, un clip ou un documentaire",
      "Couvrir un mariage, une conférence ou une campagne électorale",
      "Produire du contenu vidéo pour une entreprise ou une ONG",
      "Travailler en indépendant dès la fin des études, avec son propre matériel",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "La demande de contenu vidéo explose aux Comores : institutions, ONG, commerces, artistes, événements familiaux. Peu de professionnels formés techniquement, beaucoup d'autodidactes : un diplômé qui maîtrise le son et l'étalonnage se distingue immédiatement.",
      employeursPotentiels: [
        "Chaînes et radios nationales, presse en ligne",
        "ONG et agences de coopération (films de projet)",
        "Agences de communication et entreprises",
        "Statut d'indépendant, studio personnel",
      ],
      conseil:
        "L'une des rares filières où l'on peut rentrer et facturer immédiatement, et le cursus est court (2 ans). Investissez tôt dans votre matériel et construisez une bande démo.",
    },
    sourceOfficielle: {
      libelle: "isep-thies.sn",
      url: "https://www.isep-thies.sn/formations/",
    },
    noteDAdmission:
      "Institut public : le recrutement se fait par campagne annuelle, places limitées. Formation courte et très pratique.",
  },
  {
    id: "kourtrajme-dakar-audiovisuel",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Gratuit",
      detail:
        "École gratuite, financée par l'Agence Française de Développement (AFD) et le collectif Kourtrajmé. Aucun frais d'inscription ni de scolarité. Places très limitées (environ 20 étudiants par promotion) et appel à candidatures fermé au moment de la vérification (2026) : surveillez la réouverture sur le site.",
    },
    filiere: "Cinéma et Audiovisuel",
    institut: "École Kourtrajmé Dakar",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Première école Kourtrajmé d'Afrique, ouverte en janvier 2022 par le collectif fondé par le réalisateur Ladj Ly ('Les Misérables'). Formation gratuite en scénario, réalisation, prise de son, prise de vue et post-production, sans condition de diplôme ni d'âge.",
    debouches: [
      "Réalisateur",
      "Scénariste",
      "Chef opérateur son ou image",
      "Monteur",
    ],
    ville: "Dakar",
    dureeEnAnnees: 1,
    diplomePrepare: "Formation professionnalisante (non diplômante au sens classique)",
    competencesAcquises: [
      "Écriture de scénario et structure narrative",
      "Réalisation et direction d'acteurs",
      "Prise de son et prise de vue professionnelles",
      "Post-production et montage",
      "Conduite de projet audiovisuel de bout en bout",
    ],
    missionsConcretes: [
      "Écrire et réaliser un court-métrage",
      "Opérer une caméra ou un dispositif son sur un tournage professionnel",
      "Monter un projet audiovisuel jusqu'à sa diffusion",
      "Intégrer un réseau de professionnels du cinéma ouest-africain",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Formation gratuite et intensive, mais très sélective et sans diplôme d'État classique : elle vaut surtout pour la pratique acquise et le réseau professionnel constitué. Utile pour qui veut se spécialiser en réalisation ou son plutôt qu'en polyvalence multimédia généraliste.",
      employeursPotentiels: [
        "Productions audiovisuelles indépendantes",
        "ONG et projets nécessitant des films de sensibilisation",
        "Chaînes et plateformes de contenu",
        "Statut d'indépendant, réalisateur ou technicien freelance",
      ],
      conseil:
        "Formation gratuite mais places très limitées et sans diplôme officiel : à envisager en complément d'un diplôme technique (ISEP Thiès par exemple), pas comme seule formation si vous avez besoin d'un titre reconnu à faire valoir aux Comores.",
    },
    sourceOfficielle: {
      libelle: "ecolekourtrajmedakar.com",
      url: "https://ecolekourtrajmedakar.com/",
    },
    noteDAdmission:
      "Aucune condition de diplôme, d'âge ou de qualification requise. Sélection sur motivation. Appels à candidatures ponctuels : vérifiez le calendrier d'ouverture sur le site officiel avant de postuler.",
  },
];
