import type { Formation } from "@/types/formation";

/**
 * Agro-industrie, hôtellerie-tourisme, création multimédia et cinéma.
 * Les filières de santé sont regroupées à part, dans sante.ts.
 * "Hôtellerie, Restauration et Tourisme" regroupe ENFHT et Les Marmitons.
 * ISEP Richard-Toll/ENSA Thiès et ISEP Thiès/Kourtrajmé restent distincts :
 * niveaux de diplôme et natures de formation trop différents pour fusionner.
 * "Agronomie et Production Végétale" (UAHB) reste distincte de l'ingénieur
 * agronome ENSA Thiès : Licence Bac+3 professionnalisante, pas Bac+5.
 */
export const formationsAgroTourismeAudiovisuel: Formation[] = [
  {
    id: "isep-richard-toll-agro",
    filiere: "Production Agro-Industrielle",
    description:
      "Institut public créé en 2016, spécialisé en agriculture, élevage, aquaculture, agroalimentaire et tourisme. Formation de technicien supérieur en 2 ans.",
    debouches: [
      "Technicien qualité",
      "Responsable de production",
      "Technico-commercial agroalimentaire",
    ],
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
    etablissements: [
      {
        institut: "ISEP Richard-Toll",
        ville: "Richard-Toll",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 2,
        diplomePrepare: "Diplôme de technicien supérieur (Bac+2)",
        fraisDeScolarite: {
          montant: "Frais publics réduits",
          detail:
            "Institut public créé par décret présidentiel n°2016-814 : scolarité largement subventionnée par l'État. Le tarif applicable aux étudiants étrangers n'est pas publié, à demander lors de la campagne de recrutement annuelle (isep@isep-rt.edu.sn, +221 33 964 20 16).",
        },
        sourceOfficielle: {
          libelle: "iseprichardtoll.sn",
          url: "https://iseprichardtoll.sn/",
        },
        noteDAdmission:
          "Recrutement par campagne annuelle. L'établissement propose plusieurs parcours agroalimentaires (production, commercialisation, logistique). Accréditation : ce diplôme n'apparaît pas séparément dans la base ANAQ-Sup consultée — l'habilitation trouvée concerne le réseau ISEP (via ISEP Thiès), pas le site de Richard-Toll individuellement.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Sciences Agroalimentaires, spécialité Industries Agroalimentaires",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 90 000 F/mois en L1 (jusqu'à 130 000/90 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Agro » : L1 = 110 000 FCFA d'inscription + 90 000 FCFA/mois (920 000 FCFA/an) ; L2 = 120 000 + 90 000/mois (930 000 FCFA/an) ; L3 = 130 000 + 90 000/mois (940 000 FCFA/an) — soit environ 2 790 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/uahb-universite-amadou-hampate-ba-4/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019), accréditée ANAQ-Sup et CAMES pour cette filière depuis le 30/10/2021. Licence Bac+3 en présentiel à Dakar, à distinguer du diplôme d'ingénieur (Bac+5) de l'ENSA Thiès. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
  {
    id: "uahb-agronomie-production-vegetale",
    filiere: "Agronomie et Production Végétale",
    description:
      "Licence professionnelle en sciences agroalimentaires, spécialité agronomie et production végétale : techniques culturales, protection des plantes, amélioration des rendements. Formation Bac+3 professionnalisante, à distinguer du diplôme d'ingénieur agronome (Bac+5) de l'ENSA Thiès. Proposée par l'Université Amadou Hampaté Ba (UAHB).",
    debouches: [
      "Technicien agricole",
      "Conseiller agricole",
      "Responsable de production végétale",
      "Chargé de projet agricole",
    ],
    competencesAcquises: [
      "Agronomie générale et techniques culturales",
      "Physiologie végétale et amélioration des plantes",
      "Protection des cultures et gestion des sols",
      "Irrigation et gestion de l'eau agricole",
      "Suivi et évaluation de projets agricoles",
    ],
    missionsConcretes: [
      "Conseiller des exploitants sur les techniques de culture",
      "Améliorer le rendement d'une parcelle ou d'une coopérative agricole",
      "Mettre en place un système d'irrigation adapté",
      "Suivre un projet agricole pour une ONG ou une administration",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Les Comores dépendent largement de l'agriculture vivrière et de quelques cultures d'exportation (vanille, ylang-ylang, girofle), mais les emplois salariés techniques restent rares. Ce diplôme, plus court que celui d'ingénieur agronome, convient à qui veut se rendre utile rapidement sur le terrain plutôt que piloter de grands projets.",
      employeursPotentiels: [
        "Coopératives agricoles et filières d'exportation",
        "ONG et projets de sécurité alimentaire",
        "Services techniques agricoles",
        "Création de sa propre exploitation",
      ],
      conseil:
        "Filière plus courte et plus opérationnelle que l'ingénieur agronome ENSA Thiès (Bac+5) : un bon choix si vous voulez revenir vite sur le terrain plutôt que viser des postes de pilotage de grands projets.",
    },
    etablissements: [
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Sciences Agroalimentaires, spécialité Agronomie et Production Végétale",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 90 000 F/mois en L1 (jusqu'à 130 000/90 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Agro » : L1 = 110 000 FCFA d'inscription + 90 000 FCFA/mois (920 000 FCFA/an) ; L2 = 120 000 + 90 000/mois (930 000 FCFA/an) ; L3 = 130 000 + 90 000/mois (940 000 FCFA/an) — soit environ 2 790 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/uahb-universite-amadou-hampate-ba-3/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019), accréditée ANAQ-Sup pour cette filière précise. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
  {
    id: "ensa-thies-agronomie",
    filiere: "Ingénierie Agricole (Ingénieur Agronome)",
    description:
      "Principale école d'ingénieurs agronomes du Sénégal, fondée en 1981 et intégrée à l'Université de Thiès en 2006. Spécialisations en production végétale, production animale, foresterie, sciences du sol et environnement, ingénierie rurale et économie rurale.",
    debouches: [
      "Ingénieur agronome",
      "Responsable de production agricole",
      "Chargé de projet agricole ou rural",
      "Conseiller technique en coopérative",
    ],
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
    etablissements: [
      {
        institut: "ENSA Thiès - École Nationale Supérieure d'Agriculture",
        ville: "Thiès",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 5,
        diplomePrepare: "Diplôme d'Ingénieur Agronome (Bac+5)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "École publique intégrée à l'UIDT : le tarif applicable aux étudiants étrangers n'est pas publié en ligne. Contactez info@uidt.sn ou +221 33 894 40 00 pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "uidt.sn", url: "https://www.uidt.sn/ensa/" },
        noteDAdmission:
          "École intégrée à l'UIDT depuis 2006. Modalités d'admission des étudiants étrangers non publiées en ligne : à demander directement à l'université. Accréditation : ce diplôme d'ingénieur ne figure pas séparément dans la base ANAQ-Sup consultée ; il dépend de l'habilitation institutionnelle de l'UIDT plutôt que d'une accréditation individuelle confirmée.",
      },
    ],
  },
  {
    id: "hotellerie-restauration-tourisme",
    filiere: "Hôtellerie, Restauration et Tourisme",
    description:
      "Formations en gestion hôtelière, restauration et tourisme, du niveau BEP jusqu'au BTS. Une école publique historique (ENFHT) et une école privée très pratique (Les Marmitons) couvrent ce domaine à Dakar.",
    debouches: [
      "Réceptionniste chef",
      "Agent de voyage",
      "Responsable de restauration",
      "Gestionnaire hôtelier",
    ],
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
        "Les langues sont votre premier actif : anglais et arabe ou italien ouvrent plus de portes que le diplôme lui-même. L'ENFHT offre la formation la plus généraliste, Les Marmitons la plus pratique (cuisine, pâtisserie) : choisissez selon votre projet précis.",
    },
    etablissements: [
      {
        institut: "ENFHT - École Nationale de Formation Hôtelière et Touristique",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "BTS en gestion hôtelière (3 ans, année préparatoire incluse)",
        fraisDeScolarite: {
          montant: "Frais publics réduits",
          detail:
            "École nationale publique sous tutelle du ministère du Tourisme : scolarité subventionnée. Le montant appliqué aux étudiants étrangers admis sur dossier n'est pas publié en ligne, à demander au secrétariat lors du dépôt du dossier.",
        },
        sourceOfficielle: { libelle: "enfht.sn", url: "https://enfht.sn/" },
        noteDAdmission:
          "École créée en 1959, seule structure d'Afrique subsaharienne francophone à délivrer un BTS du secteur, avec un historique d'accueil d'étudiants comoriens. Les étrangers sont admis sur étude de dossier (les Sénégalais passent un concours national). Concours en avril-mai, inscriptions en février-mars. Accréditation : malgré son ancienneté, ce BTS n'a été trouvé ni dans la base ANAQ-Sup ni dans les listes CAMES consultées — sa reconnaissance tient à son statut d'école nationale sous tutelle ministérielle.",
      },
      {
        institut: "Institut Supérieur Les Marmitons",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "BEP, CAP/DEP puis BTS (diplômes reconnus par l'État)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'école ne publie pas sa grille tarifaire complète en ligne. Consultez le site pour les modalités d'inscription ou contactez directement l'établissement.",
        },
        sourceOfficielle: {
          libelle: "ecolelesmarmitons.com",
          url: "https://ecolelesmarmitons.com/",
        },
        noteDAdmission:
          "École fondée en 2006 par le chef Sidy Diéme, référence pour les formations pratiques en cuisine, pâtisserie, boucherie, accueil hôtelier, service et tourisme. Accréditation : école non trouvée dans la base ANAQ-Sup ni dans les listes CAMES consultées ; les diplômes délivrés sont présentés comme reconnus par l'État sénégalais, à faire confirmer directement auprès de l'école.",
      },
    ],
  },
  {
    id: "isep-thies-multimedia",
    filiere: "Création Multimédia et Production Audiovisuelle",
    description:
      "Institut public formant des techniciens supérieurs. Département TIC : design graphique, multimédia, journalisme et production audiovisuelle.",
    debouches: [
      "Monteur vidéo",
      "Cadreur",
      "Designer graphique",
      "Journaliste reporter d'images",
    ],
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
    etablissements: [
      {
        institut: "ISEP Thiès (Abdoulaye Ly)",
        ville: "Thiès",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 2,
        diplomePrepare: "Diplôme de technicien supérieur (Bac+2)",
        fraisDeScolarite: {
          montant: "Frais publics réduits",
          detail:
            "Institut public financé par l'État et la Banque mondiale : la scolarité est très largement subventionnée. Le montant applicable aux étudiants étrangers n'est pas publié en ligne, à demander lors de la campagne de recrutement.",
        },
        sourceOfficielle: {
          libelle: "isep-thies.sn",
          url: "https://www.isep-thies.sn/formations/",
        },
        noteDAdmission:
          "Recrutement par campagne annuelle, places limitées. Formation courte et très pratique. Accréditation : ISEP Thiès dispose d'une habilitation ANAQ-Sup confirmée et d'une reconnaissance CAMES au niveau institutionnel (premier ISEP autorisé à délivrer le DiSEP), mais ce parcours multimédia précis n'a pas d'accréditation individuelle confirmée séparément.",
      },
    ],
  },
  {
    id: "kourtrajme-dakar-audiovisuel",
    filiere: "Cinéma et Audiovisuel",
    description:
      "Première école Kourtrajmé d'Afrique, ouverte en janvier 2022 par le collectif fondé par le réalisateur Ladj Ly ('Les Misérables'). Formation gratuite en scénario, réalisation, prise de son, prise de vue et post-production, sans condition de diplôme ni d'âge.",
    debouches: [
      "Réalisateur",
      "Scénariste",
      "Chef opérateur son ou image",
      "Monteur",
    ],
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
    etablissements: [
      {
        institut: "École Kourtrajmé Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 1,
        diplomePrepare: "Formation professionnalisante (non diplômante au sens classique)",
        fraisDeScolarite: {
          montant: "Gratuit",
          detail:
            "École gratuite, financée par l'Agence Française de Développement (AFD) et le collectif Kourtrajmé. Aucun frais d'inscription ni de scolarité. Places très limitées (environ 20 étudiants par promotion) et appel à candidatures fermé au moment de la vérification (2026) : surveillez la réouverture sur le site.",
        },
        sourceOfficielle: {
          libelle: "ecolekourtrajmedakar.com",
          url: "https://ecolekourtrajmedakar.com/",
        },
        noteDAdmission:
          "Aucune condition de diplôme, d'âge ou de qualification requise. Sélection sur motivation. Appels à candidatures ponctuels : vérifiez le calendrier d'ouverture sur le site officiel avant de postuler. Accréditation : formation libre, explicitement hors système ANAQ-Sup/CAMES (pas de diplôme d'État délivré) ; un partenariat avec l'INA (Institut National de l'Audiovisuel, France) encadre la certification pédagogique, ce qui n'équivaut pas à une accréditation académique sénégalaise.",
      },
    ],
  },
];
