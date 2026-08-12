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
];
