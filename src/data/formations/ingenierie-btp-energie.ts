import type { Formation } from "@/types/formation";

/**
 * Génie civil/BTP, électrotechnique/énergies renouvelables, architecture.
 * "Génie Civil, Bâtiment et Travaux Publics" regroupe ESEBAT et BATISUP
 * (même filière, même niveau) ; "Architecture et Urbanisme" regroupe CUAD
 * et ARuBA-Sup. EPT (ingénieur Bac+5) et ISEP Thiès EnR restent distincts
 * car de niveau ou de nature différente.
 */
export const formationsIngenierieBtpEnergie: Formation[] = [
  {
    id: "genie-civil-batiment",
    filiere: "Génie Civil, Bâtiment et Travaux Publics",
    description:
      "Formation en structures, béton armé, topographie, métré et conduite de chantier, du BTS jusqu'à la licence professionnelle (diplôme d'ingénieur possible en poursuite d'études selon l'école).",
    debouches: [
      "Ingénieur travaux",
      "Conducteur de chantier",
      "Bureau d'études",
      "Métreur",
    ],
    competencesAcquises: [
      "Résistance des matériaux et calcul de structures en béton armé",
      "Lecture et production de plans, dessin technique assisté par ordinateur",
      "Topographie : implantation, nivellement, relevés de terrain",
      "Métré, devis quantitatif et estimatif, planification de chantier",
      "Réglementation, sécurité et contrôle qualité sur site",
    ],
    missionsConcretes: [
      "Suivre un chantier de A à Z et coordonner les équipes d'ouvriers",
      "Chiffrer le coût d'une construction avant de la lancer",
      "Vérifier qu'un bâtiment tient debout : fondations, dalles, poteaux",
      "Répondre à un appel d'offres public ou privé",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "La construction est l'un des secteurs les plus actifs de l'archipel : logements, routes, écoles, projets financés par les bailleurs et par la diaspora. Les techniciens qualifiés y sont recherchés, notamment pour encadrer des chantiers aujourd'hui souvent menés sans suivi technique.",
      employeursPotentiels: [
        "Entreprises de BTP locales",
        "Bureaux d'études et cabinets d'architecture",
        "Ministère des Infrastructures, communes",
        "Projets financés par les bailleurs internationaux",
        "Création de sa propre entreprise de construction",
      ],
      conseil:
        "Documentez chaque chantier suivi pendant vos stages : aux Comores, un portfolio de réalisations pèse souvent plus lourd que le diplôme seul. Comparez ESEBAT et BATISUP sur leurs taux de réussite et l'accréditation exacte de chaque niveau (souvent le master plutôt que la licence) avant de choisir.",
    },
    etablissements: [
      {
        institut: "ESEBAT",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle (BTS et diplôme d'ingénieur également proposés)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "ESEBAT ne publie pas sa grille tarifaire en ligne : les frais d'inscription et de scolarité sont communiqués par le service scolarité, sur demande d'une facture proforma (esebat@esebat.com, +221 33 825 36 74).",
        },
        sourceOfficielle: { libelle: "esebat.com", url: "https://esebat.com/" },
        noteDAdmission:
          "Campus à Dakar, Saint-Louis et Ziguinchor, formations à distance disponibles. Accréditation : ESEBAT figure sur la liste des écoles reconnues par le CAMES (arrêté 00152/2021), mais cette licence professionnelle n'apparaît pas séparément dans la base ANAQ-Sup consultée — seul le Master Génie Civil de l'école y est accrédité individuellement.",
      },
      {
        institut: "BATISUP - École Supérieure du Bâtiment",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "BTS puis Licence (Master possible)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "BATISUP ne publie pas sa grille tarifaire en ligne. Les inscriptions 2026-2027 ouvrent début août pour une rentrée en octobre : contactez l'école via son site pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "batisup.com", url: "https://www.batisup.com/" },
        noteDAdmission:
          "École fondée en 2006, habilitée par le Ministère de l'Enseignement Supérieur, une vingtaine de nationalités représentées, 91 % de réussite au BTS en 2025 selon l'école. Inscriptions à partir du 1er août (https://www.batisup.com/s-inscrire). Accréditation : seul le Master Génie Civil est accrédité individuellement sur la base ANAQ-Sup consultée, pas le BTS ni la licence.",
      },
    ],
  },
  {
    id: "ept-genie-civil",
    filiere: "Génie Civil",
    description:
      "Première école d'ingénieurs publique du Sénégal (1973). Cursus en 5 ans (2 ans de tronc commun puis 3 ans de spécialisation avec alternance école-entreprise croissante) menant au diplôme d'ingénieur de conception en génie civil.",
    debouches: [
      "Ingénieur structures",
      "Ingénieur travaux publics",
      "Bureau d'études techniques",
      "Chef de projet BTP",
    ],
    competencesAcquises: [
      "Résistance des matériaux et dimensionnement de structures",
      "Génie routier, hydraulique et ouvrages d'art",
      "Gestion de projet de construction en alternance école-entreprise",
      "Mécanique des sols et fondations",
      "Culture d'entreprise acquise dès la 2e année via les stages alternés",
    ],
    missionsConcretes: [
      "Concevoir et dimensionner un ouvrage (pont, bâtiment, route)",
      "Diriger un chantier d'infrastructure de A à Z",
      "Réaliser des études géotechniques avant construction",
      "Accéder à des postes d'ingénieur généraliste en Afrique francophone",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Diplôme d'ingénieur généraliste très reconnu en Afrique francophone (CAMES), avec un fort taux d'insertion professionnelle rapporté par l'école. Un atout pour encadrer de grands projets d'infrastructure aux Comores, au-delà du simple suivi de chantier.",
      employeursPotentiels: [
        "Entreprises de BTP et grands groupes de construction",
        "Bureaux d'études techniques",
        "Ministère des Infrastructures, projets financés par les bailleurs",
        "Création de son propre bureau d'études",
      ],
      conseil:
        "Cursus long et sélectif (concours), mais le tarif conventionné le rend très accessible si les Comores sont éligibles : vérifiez ce point en priorité auprès de l'EPT.",
    },
    etablissements: [
      {
        institut: "EPT - École Polytechnique de Thiès",
        ville: "Thiès",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 5,
        diplomePrepare: "Diplôme d'Ingénieur de Conception (Bac+5)",
        fraisDeScolarite: {
          montant: "50 000 F + 7 000 F de dossier (pays conventionnés)",
          detail:
            "École publique d'ingénieurs : 50 000 FCFA de scolarité annuelle + 7 000 FCFA de frais de dossier pour les candidats des pays ayant un accord avec le Sénégal, notamment la zone UEMOA. Les Comores n'étant pas membres de l'UEMOA, le statut tarifaire exact des candidats comoriens doit être confirmé directement auprès de l'EPT.",
        },
        sourceOfficielle: { libelle: "ept.edu.sn", url: "https://ept.edu.sn/" },
        noteDAdmission:
          "Admission sur concours national (candidats libres acceptés), réservé aux candidats de moins de 22 ans au 1er octobre de l'année d'entrée, sur la base d'un bac scientifique ou technique (S1, S2, S3, STIDD). Accréditation : habilitation ANAQ-Sup générale (2021-2022) et reconnaissance CAMES, mais ce diplôme précis (Génie Civil) n'apparaît pas séparément dans la base ANAQ-Sup consultée (le diplôme Génie Aéronautique de l'EPT y figure en revanche).",
      },
    ],
  },
  {
    id: "esebat-electrotechnique",
    filiere: "Électrotechnique et Énergies Renouvelables",
    description:
      "Électricité industrielle, génie électrique et efficacité énergétique. L'école propose également des parcours électromécanique et systèmes automatisés.",
    debouches: [
      "Technicien solaire",
      "Électricien industriel",
      "Automaticien",
      "Chef de projet EnR",
    ],
    competencesAcquises: [
      "Électricité générale, industrielle et normes de sécurité",
      "Dimensionnement et installation de systèmes photovoltaïques",
      "Stockage par batteries et systèmes hybrides",
      "Automatismes, moteurs et maintenance industrielle",
      "Diagnostic de pannes et maintenance préventive",
    ],
    missionsConcretes: [
      "Installer et dimensionner une centrale solaire pour une maison, une école ou un dispensaire",
      "Réaliser l'installation électrique complète d'un bâtiment",
      "Maintenir des groupes électrogènes et des équipements industriels",
      "Créer une entreprise d'installation solaire",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Les coupures d'électricité sont un problème quotidien aux Comores et le solaire s'installe massivement, chez les particuliers comme dans les institutions. Les techniciens capables de dimensionner correctement une installation (et pas seulement de la brancher) sont rares.",
      employeursPotentiels: [
        "Société nationale d'électricité, projets énergétiques",
        "Entreprises d'installation solaire",
        "ONG et projets d'électrification rurale",
        "Création de sa propre entreprise d'installation et de maintenance",
      ],
      conseil:
        "Probablement la filière technique avec le meilleur rapport durée d'études / employabilité immédiate aux Comores. Maîtrisez le dimensionnement et le stockage sur batteries.",
    },
    etablissements: [
      {
        institut: "ESEBAT",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "ESEBAT ne publie pas sa grille tarifaire en ligne : demandez une facture proforma au service scolarité avant de constituer votre dossier.",
        },
        sourceOfficielle: { libelle: "esebat.com", url: "https://esebat.com/" },
        noteDAdmission:
          "Accréditation : cette licence n'a été trouvée ni dans la base ANAQ-Sup ni dans les listes CAMES consultées, contrairement à la licence Génie Civil de la même école (reconnue CAMES au niveau institutionnel) : demandez le statut d'accréditation précis de ce diplôme avant de vous inscrire.",
      },
    ],
  },
  {
    id: "isep-thies-energies-renouvelables",
    filiere: "Énergies Renouvelables (photovoltaïque solaire)",
    description:
      "Formation de technicien supérieur en alternance école-entreprise, spécialisée dans le photovoltaïque solaire. L'institut propose aussi BTP-assainissement, transport-logistique, agro-entreprise, tourisme et management immobilier.",
    debouches: [
      "Technicien solaire",
      "Installateur photovoltaïque",
      "Technicien de maintenance énergétique",
      "Chargé de projet EnR",
    ],
    competencesAcquises: [
      "Dimensionnement et installation de systèmes photovoltaïques",
      "Stockage par batteries et systèmes hybrides solaire-réseau",
      "Maintenance préventive et diagnostic de pannes",
      "Sécurité électrique et normes d'installation",
      "Expérience pratique en entreprise via l'alternance",
    ],
    missionsConcretes: [
      "Installer et dimensionner une centrale solaire pour un particulier ou une institution",
      "Maintenir des installations photovoltaïques existantes",
      "Diagnostiquer une panne sur un système hybride solaire-réseau",
      "Accompagner l'électrification d'un site isolé",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Formation publique en alternance avec un fort taux d'insertion rapporté par l'école (environ 90 % en emploi moins de 6 mois après la sortie). Le solaire s'installe massivement aux Comores et les techniciens correctement formés au dimensionnement restent rares.",
      employeursPotentiels: [
        "Société nationale d'électricité, projets énergétiques",
        "Entreprises d'installation solaire",
        "ONG et projets d'électrification rurale",
        "Création de sa propre entreprise d'installation et de maintenance",
      ],
      conseil:
        "Formation publique courte (2 ans) et pratique, avec un excellent rapport durée/employabilité. Vérifiez les modalités d'admission des étudiants étrangers dès l'ouverture de la campagne annuelle.",
    },
    etablissements: [
      {
        institut: "ISEP Thiès (Abdoulaye Ly)",
        ville: "Thiès",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 2,
        diplomePrepare: "Diplôme de technicien supérieur (Bac+2, alternance)",
        fraisDeScolarite: {
          montant: "Frais publics réduits",
          detail:
            "Institut public inauguré en 2021 : la scolarité est largement subventionnée par l'État. Le montant applicable aux étudiants étrangers n'est pas publié en ligne, à demander lors de la campagne de recrutement annuelle.",
        },
        sourceOfficielle: {
          libelle: "isep-thies.sn",
          url: "https://isep-thies.sn/course/energies-renouvelables/",
        },
        noteDAdmission:
          "Institut public : recrutement par campagne annuelle, places limitées, formation en alternance école-entreprise. Accréditation : ISEP Thiès dispose d'une habilitation ANAQ-Sup confirmée et d'une reconnaissance CAMES au niveau institutionnel (premier ISEP autorisé à délivrer le DiSEP), mais ce parcours précis n'a pas d'accréditation individuelle confirmée séparément.",
      },
    ],
  },
  {
    id: "architecture-urbanisme",
    filiere: "Architecture et Urbanisme",
    description:
      "Licence puis Master en architecture, avec des spécialisations en architecture bioclimatique, patrimoine, urbanisme, paysage et arts appliqués selon l'école.",
    debouches: [
      "Architecte",
      "Urbaniste",
      "Dessinateur projeteur",
      "Architecte d'intérieur",
    ],
    competencesAcquises: [
      "Conception de projets architecturaux, de l'esquisse au permis de construire",
      "Logiciels métier : AutoCAD, Revit, SketchUp, rendu 3D",
      "Architecture bioclimatique et efficacité énergétique en climat chaud",
      "Urbanisme : lotissements, voirie, équipements publics",
      "Méthodologie de projet, du concept au dossier technique",
    ],
    missionsConcretes: [
      "Dessiner une maison, une école ou un commerce et en défendre le projet",
      "Monter un dossier de permis de construire complet",
      "Concevoir des bâtiments qui restent frais sans climatisation",
      "Participer à un plan d'aménagement de quartier ou de ville",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le nombre d'architectes diplômés reste faible aux Comores alors que la construction privée est intense, notamment portée par la diaspora. Le marché existe mais il faut souvent le créer soi-même : beaucoup de particuliers construisent encore sans architecte.",
      employeursPotentiels: [
        "Cabinets d'architecture (Moroni, Mutsamudu)",
        "Direction de l'urbanisme, collectivités",
        "Promoteurs immobiliers et clients de la diaspora",
        "Cabinet indépendant",
      ],
      conseil:
        "L'habitat bioclimatique et la construction parasismique sont deux spécialités très pertinentes pour l'archipel : orientez vos projets d'études dans cette direction. Comparez CUAD (accréditation ANAQ-Sup confirmée) et ARuBA-Sup (non trouvée dans les bases consultées) avant de choisir.",
    },
    etablissements: [
      {
        institut: "CUAD - Collège Universitaire d'Architecture de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 5,
        diplomePrepare: "Licence (3 ans) puis Master en architecture (2 ans)",
        fraisDeScolarite: {
          montant: "≈ 2 500 000 F pour la licence",
          detail:
            "Environ 520 000 FCFA de frais d'inscription et 1 980 000 FCFA de scolarité pour les 3 ans de licence, d'après l'annuaire SenCampus. Montant à confirmer directement auprès du CUAD, qui ne publie pas sa grille sur son site.",
        },
        sourceOfficielle: { libelle: "cuad.archi", url: "https://www.cuad.archi/" },
        noteDAdmission:
          "Seule école d'architecture reconnue au Sénégal depuis sa création en 2008. Admission sur dossier après le bac, ou après un Bac+2 pour une entrée en cours de cursus. Accréditation confirmée pour la Licence ET le Master (deux fiches distinctes) : anaqsup.sn/accreditations/cuad-college-universitaire-darchitecture-de-dakar/ et anaqsup.sn/accreditations/cuad-college-universitaire-darchitecture-de-dakar-2/.",
      },
      {
        institut: "ARuBA-Sup - École Supérieure d'Architecture, d'Urbanisme et des Beaux-Arts",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 5,
        diplomePrepare: "Licence (3 ans) puis Master (2 ans), reconnaissance LMD",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "ARuBA-Sup ne publie pas sa grille tarifaire en ligne. Les admissions 2026-2027 sont ouvertes : contactez l'école directement pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "arubasup.sn", url: "https://arubasup.sn/" },
        noteDAdmission:
          "Corps enseignant composé notamment d'architectes DPLG, partenariats internationaux (France, Maroc, Côte d'Ivoire). Admission sur dossier (lettre de motivation, attestation de bac, relevés de notes, photo) suivi d'un entretien oral d'environ 30 minutes devant un jury. Accréditation : école non trouvée dans la base ANAQ-Sup ni dans les listes CAMES consultées malgré une recherche approfondie — statut à clarifier impérativement avec l'école avant tout engagement financier.",
      },
    ],
  },
];
