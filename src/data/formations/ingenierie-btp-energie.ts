import type { Formation } from "@/types/formation";

/**
 * Génie civil/BTP, électrotechnique/énergies renouvelables, architecture.
 * Entrées vérifiées sur les sites officiels (ESEBAT, CUAD).
 */
export const formationsIngenierieBtpEnergie: Formation[] = [
  {
    id: "esebat-genie-civil",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "ESEBAT ne publie pas sa grille tarifaire en ligne : les frais d'inscription et de scolarité sont communiqués par le service scolarité, sur demande d'une facture proforma (esebat@esebat.com, +221 33 825 36 74).",
    },
    filiere: "Génie Civil, Bâtiment et Travaux Publics",
    institut: "ESEBAT",
    bacsCompatibles: ["Scientifique"],
    description:
      "Formation en structures, béton armé, topographie, métré et conduite de chantier, du BTS jusqu'au diplôme d'ingénieur. École reconnue par le Ministère de l'Enseignement Supérieur ; l'accréditation ANAQ-Sup/CAMES spécifique à chaque filière est à confirmer auprès de l'école.",
    debouches: [
      "Ingénieur travaux",
      "Conducteur de chantier",
      "Bureau d'études",
      "Métreur",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle (BTS et diplôme d'ingénieur également proposés)",
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
        "Documentez chaque chantier suivi pendant vos stages : aux Comores, un portfolio de réalisations pèse souvent plus lourd que le diplôme seul.",
    },
    sourceOfficielle: { libelle: "esebat.com", url: "https://esebat.com/" },
    noteDAdmission:
      "ESEBAT dispose de campus à Dakar, Saint-Louis et Ziguinchor, et propose aussi des formations à distance.",
  },
  {
    id: "esebat-electrotechnique",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "ESEBAT ne publie pas sa grille tarifaire en ligne : demandez une facture proforma au service scolarité avant de constituer votre dossier.",
    },
    filiere: "Électrotechnique et Énergies Renouvelables",
    institut: "ESEBAT",
    bacsCompatibles: ["Scientifique"],
    description:
      "Électricité industrielle, génie électrique et efficacité énergétique. L'école propose également des parcours électromécanique et systèmes automatisés.",
    debouches: [
      "Technicien solaire",
      "Électricien industriel",
      "Automaticien",
      "Chef de projet EnR",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle",
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
    sourceOfficielle: { libelle: "esebat.com", url: "https://esebat.com/" },
  },
  {
    id: "cuad-architecture",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "≈ 2 500 000 F pour la licence",
      detail:
        "Environ 520 000 FCFA de frais d'inscription et 1 980 000 FCFA de scolarité pour les 3 ans de licence, d'après l'annuaire SenCampus. Montant à confirmer directement auprès du CUAD, qui ne publie pas sa grille sur son site.",
    },
    filiere: "Architecture et Urbanisme",
    institut: "CUAD - Collège Universitaire d'Architecture de Dakar",
    bacsCompatibles: ["Scientifique"],
    description:
      "Licence puis Master en architecture, avec des spécialisations en architecture bioclimatique, patrimoine, urbanisme et paysage. Établissement accrédité ANAQ-Sup, seule école d'architecture reconnue au Sénégal depuis sa création en 2008.",
    debouches: [
      "Architecte",
      "Urbaniste",
      "Dessinateur projeteur",
      "Architecte d'intérieur",
    ],
    ville: "Dakar",
    dureeEnAnnees: 5,
    diplomePrepare: "Licence (3 ans) puis Master en architecture (2 ans)",
    competencesAcquises: [
      "Conception de projets architecturaux, de l'esquisse au permis de construire",
      "Logiciels métier : AutoCAD, Revit, SketchUp, rendu 3D",
      "Architecture bioclimatique et efficacité énergétique en climat chaud",
      "Patrimoine, architecture traditionnelle et contemporaine africaine",
      "Urbanisme : lotissements, voirie, équipements publics",
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
        "L'habitat bioclimatique et la construction parasismique sont deux spécialités très pertinentes pour l'archipel : orientez vos projets d'études dans cette direction.",
    },
    sourceOfficielle: { libelle: "cuad.archi", url: "https://www.cuad.archi/" },
    noteDAdmission:
      "Admission sur dossier après le bac, ou après un Bac+2 pour une entrée en cours de cursus.",
  },
];
