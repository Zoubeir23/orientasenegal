import type { Formation } from "@/types/formation";

/**
 * Gestion/management, comptabilité-audit, marketing digital, transport-logistique.
 * Entrées vérifiées sur les sites officiels (ISM, IFAGE, IAM, Supdeco).
 */
export const formationsGestionCommerce: Formation[] = [
  {
    id: "ism-management",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "1 500 000 F la 1re année",
      detail:
        "Grille officielle ISM 2025-2026 : 450 000 FCFA d'inscription + 1 000 000 FCFA de scolarité (1 500 000 en 1re année, 1 400 000 en 2e, 1 425 000 en 3e). Paiement possible en 10 mensualités. Supplément obligatoire de 350 000 FCFA pour les programmes en double diplôme. Des bourses d'excellence existent.",
    },
    filiere: "Sciences de Gestion et Management",
    institut: "ISM - Institut Supérieur de Management",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Business school accréditée AABS présente sur 12 sites au Sénégal. Comptabilité, marketing, ressources humaines et stratégie, avec stages en entreprise.",
    debouches: [
      "Contrôleur de gestion",
      "Chargé de marketing",
      "Responsable RH",
      "Entrepreneur",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en sciences de gestion (Master/MBA possibles)",
    competencesAcquises: [
      "Comptabilité générale et analyse financière",
      "Marketing, étude de marché et stratégie commerciale",
      "Gestion des ressources humaines et droit du travail",
      "Business plan, gestion de projet et pilotage par tableaux de bord",
      "Outils bureautiques avancés et logiciels de gestion",
    ],
    missionsConcretes: [
      "Monter le business plan d'un projet et convaincre un financeur",
      "Gérer la trésorerie, les achats et les stocks d'une entreprise",
      "Recruter et organiser une équipe",
      "Lancer sa propre activité commerciale",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Diplôme polyvalent, mais aussi le plus répandu : beaucoup de gestionnaires reviennent chaque année. Ceux qui s'en sortent le mieux ont une spécialité claire (finance, logistique, marketing digital) ou créent leur activité plutôt que d'attendre un poste.",
      employeursPotentiels: [
        "Banques et institutions de microfinance",
        "Import-export, commerce, hôtellerie",
        "ONG et projets de développement (gestion administrative)",
        "Création d'entreprise",
      ],
      conseil:
        "Ne restez pas généraliste. Doublez la licence d'une compétence rare et vérifiable : comptabilité SYSCOHADA, marketing digital, gestion de projet ONG.",
    },
    sourceOfficielle: {
      libelle: "groupeism.sn",
      url: "https://www.groupeism.sn/admission/admission",
    },
    noteDAdmission:
      "Admission : dossier, épreuve écrite de culture générale, entretien en anglais et entretien collectif.",
  },
  {
    id: "cesag-gestion",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "Établissement public international (sous supervision de la BCEAO, membre UEMOA) : les frais applicables aux candidats hors zone UEMOA, comme les Comores, ne sont pas publiés en ligne. Contactez le CESAG (courrier@cesag.sn, +221 33 839 73 60) pour un devis précis.",
    },
    filiere: "Licence en Gestion (management, PME, comptabilité, finance)",
    institut: "CESAG - Centre Africain d'Études Supérieures en Gestion",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Établissement public interétatique de référence en Afrique de l'Ouest pour les sciences de gestion, avec plusieurs options de spécialisation en licence (management, PME, comptabilité, finance).",
    debouches: [
      "Gestionnaire d'entreprise",
      "Contrôleur de gestion",
      "Analyste financier junior",
      "Entrepreneur",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en gestion",
    competencesAcquises: [
      "Comptabilité générale et analytique",
      "Gestion financière et analyse d'entreprise",
      "Management des petites et moyennes entreprises",
      "Outils de gestion et de pilotage",
      "Méthodologie de projet et esprit entrepreneurial",
    ],
    missionsConcretes: [
      "Analyser la santé financière d'une entreprise",
      "Accompagner la création ou la croissance d'une PME",
      "Mettre en place des outils de suivi de gestion",
      "Lancer et structurer sa propre activité",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Institution publique interétatique reconnue dans toute la sous-région, ce qui donne un poids particulier au diplôme. Les débouchés au retour restent proches des autres formations en gestion : utile mais à combiner avec une spécialité claire.",
      employeursPotentiels: [
        "Banques et institutions de microfinance",
        "Entreprises privées et PME",
        "ONG et projets de développement",
        "Création d'entreprise",
      ],
      conseil:
        "Établissement public à forte réputation régionale : vérifiez tôt les frais réels pour un candidat hors zone UEMOA, car ils ne sont pas affichés publiquement et peuvent différer sensiblement du tarif zone.",
    },
    sourceOfficielle: { libelle: "cesag.sn", url: "https://www.cesag.sn/" },
    noteDAdmission:
      "Admission sur concours d'entrée, deux sessions par an, inscription en ligne.",
  },
  {
    id: "ifage-comptabilite-controle-audit",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "L'IFAGE ne publie pas ses tarifs en ligne. Pour comparaison, les licences de gestion privées dakaroises se situent autour de 1 200 000 à 1 500 000 FCFA par an (ISM, IAM). Demandez la grille tarifaire par écrit au +221 33 867 91 10 avant de vous engager.",
    },
    filiere: "Comptabilité, Contrôle et Audit",
    institut: "IFAGE - Institut Interafricain de Formation en Assurance et Gestion",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Licence professionnelle en 3 ans, spécialisée sur l'environnement comptable OHADA : comptabilité générale, contrôle de gestion et audit financier. Accréditée CAMES et ANAQ-Sup.",
    debouches: ["Comptable", "Auditeur junior", "Contrôleur de gestion", "Fiscaliste"],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle Comptabilité Contrôle Audit",
    competencesAcquises: [
      "Comptabilité générale et analytique au référentiel SYSCOHADA",
      "Établissement des états financiers : bilan, compte de résultat",
      "Fiscalité des entreprises et déclarations obligatoires",
      "Audit financier, contrôle interne et détection des anomalies",
      "Logiciels comptables (Sage, Excel avancé)",
    ],
    missionsConcretes: [
      "Tenir la comptabilité complète d'une entreprise ou d'une association",
      "Produire un bilan annuel et le présenter à la direction",
      "Préparer les déclarations fiscales et sociales",
      "Auditer les comptes d'un projet financé par un bailleur",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Toute structure formelle a besoin d'un comptable, et les ONG comme les projets de bailleurs exigent une comptabilité auditable. Le référentiel OHADA appris à Dakar s'applique aux Comores : c'est l'une des rares filières transposable sans adaptation.",
      employeursPotentiels: [
        "Cabinets comptables et d'audit",
        "Banques et institutions de microfinance",
        "ONG et projets de développement (gestion financière)",
        "Entreprises privées, administration fiscale",
      ],
      conseil:
        "Visez une expérience en cabinet pendant vos stages : l'audit de projets financés par les bailleurs est le créneau le mieux rémunéré au retour.",
    },
    sourceOfficielle: {
      libelle: "ifage.net",
      url: "https://www.ifage.net/",
    },
    noteDAdmission:
      "D'autres établissements dakarois proposent un diplôme équivalent : IDG (Institut de Développement et de Gouvernance), Supdeco. Comparez les frais et l'accréditation ANAQ-Sup avant de choisir.",
  },
  {
    id: "idg-finance-comptabilite-audit",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "IDG Dakar ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 77 671 02 02, admission@idgdakar.edu.sn) pour connaître le montant applicable.",
    },
    filiere: "Finance, Comptabilité et Audit",
    institut: "IDG - Institut de Développement et de Gouvernance",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "École privée membre du Collège de Paris, hébergeant notamment le programme Ascencia Business School à Dakar. Licence orientée finance, comptabilité, audit et techniques de gestion.",
    debouches: [
      "Comptable",
      "Assistant contrôleur de gestion",
      "Analyste financier junior",
      "Auditeur junior",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en finance, comptabilité et audit",
    competencesAcquises: [
      "Comptabilité générale et techniques de gestion",
      "Analyse financière et gestion budgétaire",
      "Audit et contrôle interne",
      "Sciences du management appliquées à la finance",
      "Formation pratique orientée professionnalisation",
    ],
    missionsConcretes: [
      "Tenir la comptabilité d'une structure de taille moyenne",
      "Participer à une mission d'audit interne",
      "Analyser des indicateurs financiers pour la direction",
      "Préparer les déclarations fiscales courantes",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Mêmes perspectives que les autres formations en comptabilité/audit : toute structure formelle et tout projet financé par des bailleurs a besoin de ces compétences, directement transposables aux Comores.",
      employeursPotentiels: [
        "Cabinets comptables et d'audit",
        "Banques et institutions de microfinance",
        "ONG et projets de développement",
        "Entreprises privées",
      ],
      conseil:
        "École adossée à un réseau international (Collège de Paris) : demandez le détail des passerelles et de la reconnaissance du diplôme avant de vous engager, les frais n'étant pas publiés en ligne.",
    },
    sourceOfficielle: { libelle: "idgdakar.com", url: "https://www.idgdakar.com/" },
    noteDAdmission:
      "Admission sur dossier (diplômes, pièce d'identité, CV) après le baccalauréat.",
  },
  {
    id: "iam-marketing-digital",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "≈ 1 260 000 F / an",
      detail:
        "Environ 1 260 000 FCFA par an en licence d'après les annuaires de comparaison des écoles sénégalaises. Montant à confirmer auprès du service admissions du Groupe IAM (info@groupeiam.com, +221 77 698 39 66).",
    },
    filiere: "Marketing et Communication Digitale",
    institut: "IAM - Institut Africain de Management",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Grande école de management dakaroise, accréditée ISO 9001 et CAMES. Parcours orienté marketing, communication et outils numériques, accessible aux profils littéraires ; un master dédié au digital business existe aussi en poursuite d'études.",
    debouches: [
      "Chargé de marketing digital",
      "Community manager",
      "Chargé de communication",
      "Chef de projet évènementiel",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en marketing et communication",
    competencesAcquises: [
      "Étude de marché et comportement du consommateur",
      "Stratégie de marque et plan de communication",
      "Marketing digital : réseaux sociaux, référencement, publicité en ligne",
      "Production de contenus et relations presse",
      "Analyse des performances et outils de mesure",
    ],
    missionsConcretes: [
      "Construire la présence en ligne d'une entreprise ou d'une marque",
      "Lancer une campagne publicitaire et en mesurer les résultats",
      "Gérer les réseaux sociaux d'une institution ou d'une ONG",
      "Accompagner des commerçants dans leur passage au numérique",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Les commerces, hôtels et entrepreneurs comoriens vendent de plus en plus via les réseaux sociaux, mais presque personne n'en fait un métier structuré. Le marché salarié est étroit ; en revanche, la prestation de services à plusieurs petits clients fonctionne bien.",
      employeursPotentiels: [
        "Agences de communication et entreprises locales",
        "ONG et projets de développement",
        "Opérateurs télécoms et banques",
        "Activité indépendante auprès de commerces et d'hôtels",
      ],
      conseil:
        "Ne vendez pas « de la communication » mais des résultats mesurables. Constituez un portfolio de campagnes réelles pendant vos études, même bénévoles.",
    },
    sourceOfficielle: { libelle: "groupeiam.com", url: "https://groupeiam.com/" },
    noteDAdmission:
      "Le niveau exact du parcours marketing/communication (licence Bac+3 ou master Bac+5) peut varier selon les années : confirmez l'intitulé précis auprès du service admissions avant de candidater.",
  },
  {
    id: "afi-ue-marketing-digital",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "AFI-l'UE ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 33 824 71 10, afi@afi-ue.sn) pour connaître le montant applicable.",
    },
    filiere: "Marketing et Communication Digitale",
    institut: "AFI-l'UE - AFI, l'Université de l'Entreprise",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "École privée dakaroise autorisée par le Ministère de l'Enseignement Supérieur sénégalais et membre de la Fédération Européenne des Écoles (FEDE). Licence en marketing et communication digitale ouverte à tous les profils de bac.",
    debouches: [
      "Chargé de marketing digital",
      "Social media manager",
      "Web marketer",
      "Chargé d'évènementiel",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en marketing et communication digitale",
    competencesAcquises: [
      "Étude de marché et stratégie de marque",
      "Marketing digital : réseaux sociaux, référencement, e-commerce",
      "Production de contenus et gestion de campagnes",
      "Organisation d'évènements professionnels",
      "Relations presse et attaché de presse",
    ],
    missionsConcretes: [
      "Construire et animer la présence en ligne d'une entreprise",
      "Lancer et mesurer une campagne publicitaire digitale",
      "Organiser un évènement professionnel de A à Z",
      "Accompagner un commerçant dans sa transition numérique",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Même constat que pour les autres formations en marketing digital : marché salarié étroit aux Comores, mais la prestation de services (community management, campagnes ponctuelles) fonctionne bien auprès des commerces et hôtels locaux.",
      employeursPotentiels: [
        "Agences de communication et entreprises locales",
        "ONG et projets de développement",
        "Opérateurs télécoms et banques",
        "Activité indépendante auprès de commerces et d'hôtels",
      ],
      conseil:
        "École accréditée par un réseau européen (FEDE), ce qui peut faciliter une poursuite d'études en France. Vérifiez les frais réels avant de vous engager, ils ne sont pas publiés en ligne.",
    },
    sourceOfficielle: { libelle: "afi-ue.sn", url: "https://afi-ue.sn/" },
    noteDAdmission:
      "Admission sur dossier complet, toutes séries de baccalauréat, après sélection.",
  },
  {
    id: "supdeco-transport-logistique",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "Supdeco ne publie pas sa grille tarifaire en ligne. Le positionnement est celui des grandes écoles privées dakaroises : demandez la fiche de tarifs sur https://admissions.supdeco.sn/.",
    },
    filiere: "Transport et Logistique",
    institut: "Supdeco Dakar",
    bacsCompatibles: ["Scientifique", "Littéraire"],
    description:
      "Première business school du Sénégal (1993), certifiée ISO 9001, accréditée CAMES et Centre d'excellence UEMOA. Elle accueille plus de 25 nationalités.",
    debouches: [
      "Responsable logistique",
      "Déclarant en douane",
      "Gestionnaire de stocks",
      "Chargé d'import-export",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence / Bachelor en transport et logistique",
    competencesAcquises: [
      "Chaîne logistique : approvisionnement, stockage, distribution",
      "Transport maritime, aérien et procédures douanières",
      "Commerce international et incoterms",
      "Gestion des stocks et systèmes d'information logistiques",
      "Négociation avec transitaires et transporteurs",
    ],
    missionsConcretes: [
      "Organiser l'acheminement de marchandises depuis un fournisseur étranger",
      "Gérer les formalités douanières d'une importation",
      "Optimiser les stocks d'un commerce ou d'une ONG",
      "Créer une activité de transit ou de fret",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Les Comores importent l'essentiel de ce qu'elles consomment : tout passe par le port et le fret. Les métiers du transit, de la douane et de la gestion de stocks sont au cœur de l'économie de l'archipel, et rarement occupés par des profils formés.",
      employeursPotentiels: [
        "Transitaires, agences maritimes et de fret",
        "Importateurs et grandes surfaces",
        "Port de Moroni, douanes, administration",
        "ONG (logistique humanitaire) et création d'entreprise de transit",
      ],
      conseil:
        "Filière très concrète et directement transposable. Faites un stage chez un transitaire à Dakar : les procédures maritimes que vous y apprendrez sont les mêmes qu'à Moroni.",
    },
    sourceOfficielle: { libelle: "supdeco.sn", url: "https://supdeco.sn/" },
    noteDAdmission:
      "Le groupe est organisé en pôles spécialisés (management, transport-logistique, informatique, droit, langues, économie, management public) et dispose de campus à Dakar, Thiès, Saint-Louis, Banjul et Djibouti.",
  },
  {
    id: "esmp-transport-logistique",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "ESMP ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 33 860 50 54, contact@esmp.sn) pour connaître le montant applicable.",
    },
    filiere: "Transport et Logistique",
    institut: "ESMP - École Supérieure de Management Polytechnique",
    bacsCompatibles: ["Scientifique", "Littéraire"],
    description:
      "École privée dakaroise proposant une licence professionnelle en transport et logistique, accessible après le bac ou en admission parallèle (BTS/DUT/L2), avec cours du soir en 2e et 3e année.",
    debouches: [
      "Responsable d'entrepôt",
      "Coordinateur logistique",
      "Planificateur transport",
      "Analyste chaîne d'approvisionnement",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle en transport et logistique",
    competencesAcquises: [
      "Gestion d'entrepôt et de stocks",
      "Planification et optimisation du transport",
      "Procédures douanières et commerce international",
      "Systèmes d'information logistiques",
      "Négociation avec prestataires et transporteurs",
    ],
    missionsConcretes: [
      "Organiser la réception et le stockage de marchandises",
      "Planifier des tournées de livraison efficaces",
      "Suivre une chaîne d'approvisionnement de bout en bout",
      "Créer une petite activité de transit ou de fret",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Mêmes perspectives que les autres formations en logistique : le port et le fret sont au cœur de l'économie comorienne, avec un déficit de profils formés aux procédures modernes de chaîne d'approvisionnement.",
      employeursPotentiels: [
        "Transitaires, agences maritimes et de fret",
        "Importateurs et grandes surfaces",
        "Port de Moroni, douanes, administration",
        "ONG (logistique humanitaire) et création d'entreprise de transit",
      ],
      conseil:
        "Alternative privée à Supdeco pour la même filière : comparez les frais réels (non publiés dans les deux cas) et les taux d'insertion avant de choisir.",
    },
    sourceOfficielle: { libelle: "esmp.sn", url: "https://esmp.sn/" },
    noteDAdmission:
      "Admission après le baccalauréat ou en admission parallèle (BTS, DUT, L2), sur dossier et entretien.",
  },
];
