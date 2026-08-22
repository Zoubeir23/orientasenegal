import type { Formation } from "@/types/formation";

/**
 * Gestion/management, comptabilité-audit, marketing digital, transport-logistique.
 * Chaque filière regroupe les établissements qui la proposent réellement
 * (même intitulé, même niveau) plutôt que de dupliquer une fiche par école.
 */
export const formationsGestionCommerce: Formation[] = [
  {
    id: "sciences-gestion-management",
    filiere: "Sciences de Gestion et Management",
    description:
      "Licence généraliste en gestion : comptabilité, marketing, ressources humaines et stratégie, avec stages en entreprise. Proposée par une business school privée (ISM) et par un établissement public interétatique (CESAG).",
    debouches: [
      "Contrôleur de gestion",
      "Chargé de marketing",
      "Responsable RH",
      "Entrepreneur",
    ],
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
        "Ne restez pas généraliste. Doublez la licence d'une compétence rare et vérifiable : comptabilité SYSCOHADA, marketing digital, gestion de projet ONG. Le CESAG (accréditation CAMES quasi intégrale) est une alternative publique sérieuse à l'ISM.",
    },
    etablissements: [
      {
        institut: "ISM - Institut Supérieur de Management",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en sciences de gestion (Master/MBA possibles)",
        fraisDeScolarite: {
          montant: "1 500 000 F la 1re année",
          detail:
            "Grille officielle ISM 2025-2026 : 450 000 FCFA d'inscription + 1 000 000 FCFA de scolarité (1 500 000 en 1re année, 1 400 000 en 2e, 1 425 000 en 3e). Paiement possible en 10 mensualités. Supplément obligatoire de 350 000 FCFA pour les programmes en double diplôme. Des bourses d'excellence existent.",
        },
        sourceOfficielle: {
          libelle: "groupeism.sn",
          url: "https://www.groupeism.sn/admission/admission",
        },
        noteDAdmission:
          "Business school présente sur 12 sites au Sénégal, membre du réseau AABS (Association of African Business Schools) — une adhésion de réseau, pas une accréditation académique CAMES/ANAQ-Sup. Admission : dossier, épreuve écrite de culture générale, entretien en anglais et entretien collectif. Accréditation : cette licence n'apparaît pas dans la base ANAQ-Sup consultée (une autre licence ISM, Droit des Affaires, y est en revanche accréditée).",
      },
      {
        institut: "CESAG - Centre Africain d'Études Supérieures en Gestion",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en gestion",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Établissement public international (sous supervision de la BCEAO, membre UEMOA) : les frais applicables aux candidats hors zone UEMOA, comme les Comores, ne sont pas publiés en ligne. Contactez le CESAG (courrier@cesag.sn, +221 33 839 73 60) pour un devis précis.",
        },
        sourceOfficielle: { libelle: "cesag.sn", url: "https://www.cesag.sn/" },
        noteDAdmission:
          "Établissement public interétatique de référence en Afrique de l'Ouest, avec plusieurs options de spécialisation (management, PME, comptabilité, finance). Admission sur concours d'entrée, deux sessions par an. Accréditation confirmée : le CESAG revendique 40 programmes sur 40 accrédités CAMES (cesag.sn, page accréditations qualité) — l'un des dossiers les plus solides de ce répertoire.",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (ISG Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Sciences de Gestion (LSG)",
        fraisDeScolarite: {
          montant: "80 000 F d'inscription + ≈ 580 500 F la 1re année (grille datée 2022)",
          detail:
            "Grille officielle publiée sur st-michel.sn (document daté 2022, toujours en ligne — demandez confirmation du tarif en vigueur avant inscription) : L1 = 80 000 FCFA de droits d'inscription + 25 000 FCFA de frais généraux + 20 000 FCFA de tenue à l'inscription, puis 6 tranches mensuelles (novembre à avril) incluant scolarité, tenue et accès aux ressources numériques, pour un total L1 d'environ 580 500 FCFA. L2 ≈ 630 500 FCFA (droits d'inscription 100 000 F), L3 ≈ 770 500 FCFA (droits d'inscription 120 000 F, frais de diplomation inclus). Un uniforme (60 000 FCFA) et un ordinateur ou une tablette (achat obligatoire, payable en 12 mois) s'ajoutent.",
        },
        sourceOfficielle: {
          libelle: "st-michel.sn",
          url: "https://www.st-michel.sn/wp-content/uploads/2022/07/LDEA-LSG_2022.pdf",
        },
        noteDAdmission:
          "Département Sciences de Gestion - Droit - Transport Logistique (chef de département : +221 77 185 08 30). Institut le plus ancien affilié à l'UCAO/UUZ, qui inaugura son enseignement supérieur en 1984 avec le DEC (Diplôme Elémentaire Comptable). Diplôme délivré par l'UCAO (système LMD), reconnu CAMES d'après le site de l'école. Quatre options possibles à partir de la 3e année (Micro Finance, Marketing, GRH, Management des Organisations) ; cours proposés en journée ou en soirée. Dossier : extrait de naissance, copie de la CNI ou du passeport, copie légalisée de l'attestation du Bac (L, STEG ou S), copie légalisée du relevé détaillé des notes du Bac, copie des bulletins de Terminale, 4 photos d'identité, puis entretien avec le chef de département. Adresse : 17, rue Saint Michel, BP 3402, Dakar.",
      },
    ],
  },
  {
    id: "comptabilite-controle-audit",
    filiere: "Comptabilité, Contrôle et Audit",
    description:
      "Licence spécialisée sur l'environnement comptable OHADA : comptabilité générale, contrôle de gestion et audit financier. Proposée par plusieurs écoles privées dakaroises, en présentiel ou à distance.",
    debouches: ["Comptable", "Auditeur junior", "Contrôleur de gestion", "Fiscaliste"],
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
        "Visez une expérience en cabinet pendant vos stages : l'audit de projets financés par les bailleurs est le créneau le mieux rémunéré au retour. IFAGE et ISI ont chacune une accréditation confirmée pour cette filière précise, contrairement à IDG.",
    },
    etablissements: [
      {
        institut: "IFAGE - Institut Interafricain de Formation en Assurance et Gestion",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle Comptabilité Contrôle Audit",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'IFAGE ne publie pas ses tarifs en ligne. Pour comparaison, les licences de gestion privées dakaroises se situent autour de 1 200 000 à 1 500 000 FCFA par an (ISM, IAM). Demandez la grille tarifaire par écrit au +221 33 867 91 10 avant de vous engager.",
        },
        sourceOfficielle: {
          libelle: "ifage.net",
          url: "https://www.ifage.net/",
        },
        noteDAdmission:
          "Accréditation CAMES et ANAQ-Sup confirmée pour cette filière précise (Licence professionnelle Comptabilité Contrôle Audit) — le dossier le plus solide des deux options.",
      },
      {
        institut: "IDG - Institut de Développement et de Gouvernance",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en finance, comptabilité et audit",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "IDG Dakar ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 77 671 02 02, admission@idgdakar.edu.sn) pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "idgdakar.com", url: "https://www.idgdakar.com/" },
        noteDAdmission:
          "École membre du Collège de Paris, hébergeant notamment le programme Ascencia Business School à Dakar. Admission sur dossier (diplômes, pièce d'identité, CV) après le baccalauréat. Accréditation : école non trouvée ni dans la base ANAQ-Sup ni dans les listes CAMES consultées — demandez explicitement le statut d'accréditation avant de vous engager.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique (Groupe ISI en Ligne)",
        ville: "Dakar (formation à distance)",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Comptabilité Finance (100 % à distance)",
        fraisDeScolarite: {
          montant: "À confirmer",
          detail:
            "La brochure officielle ISI, édition 2024-2025, ne détaille pas de tarif spécifique au format à distance. Les licences professionnelles en présentiel sont à 895 000 FCFA/an en L1-L2 (255 000 FCFA d'inscription, mensualités de 80 000 FCFA) et 1 155 000 FCFA/an en L3 (255 000 FCFA d'inscription, mensualités de 100 000 FCFA) : confirmez si ce tarif s'applique aussi au format à distance auprès du service admissions.",
        },
        sourceOfficielle: { libelle: "groupeisi.com", url: "https://www.groupeisi.com/" },
        noteDAdmission:
          "Proposée via « Groupe ISI en Ligne », le programme d'études à distance de l'ISI : utile pour étudier sans s'installer à Dakar. Accréditation confirmée : anaqsup.sn/accreditations/institut-superieur-dinformatique-isi-de-dakar-licence-professionnelle-en-comptabilite-finance/.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Sciences de Gestion, spécialité Finances-Comptabilité",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 60 000 F/mois en L1 (jusqu'à 130 000/70 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Droit & Gestion » : L1 = 110 000 FCFA d'inscription + 60 000 FCFA/mois (650 000 FCFA/an) ; L2 = 120 000 + 65 000/mois (705 000 FCFA/an) ; L3 = 130 000 + 70 000/mois (760 000 FCFA/an) — soit environ 2 115 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "uahb.sn",
          url: "https://www.uahb.sn/reconnaissance-cames/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019). D'après la page de reconnaissances de l'école, cette filière était habilitée mais son accréditation ANAQ-Sup restait en attente de résultats — à confirmer avant inscription. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (ISG Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence Professionnelle en Comptabilité et Finance (LPCF) — Hautes Etudes Comptables et Financières (HECF) également proposées",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'UCAO/ISG Saint Michel ne publie pas ses tarifs en ligne. Paiement fractionné : inscription et un quart de la scolarité à l'inscription, le solde en décembre, février et avril. Grille à demander au service scolarité (+221 33 823 08 40, stmichel@arc.sn).",
        },
        sourceOfficielle: {
          libelle: "st-michel.sn",
          url: "https://www.st-michel.sn/2025/10/06/accreditation-de-la-licence-hecf-par-lanaq-sup/",
        },
        noteDAdmission:
          "Département Comptabilité-Finance-Audit (chef de département : +221 76 223 21 99). Institut le plus ancien affilié à l'UCAO/UUZ, qui inaugura son enseignement supérieur en 1984 avec le DEC (Diplôme Elémentaire Comptable), sa formation historique. Diplôme délivré par l'UCAO (système LMD) ; la licence HECF a été accréditée ANAQ-Sup en octobre 2025. Admission sur dossier (extrait de naissance, copie de la CNI ou du passeport, copie certifiée de l'attestation du Bac, copie certifiée des bulletins de notes, 4 photos d'identité) puis entretien avec le chef de département. Adresse : 17, rue Saint Michel, BP 3402, Dakar.",
      },
    ],
  },
  {
    id: "banque-assurance-gestion",
    filiere: "Banque, Assurance et Gestion des Risques",
    description:
      "Licence professionnelle en sciences de gestion spécialisée banque et assurance : produits bancaires, techniques d'assurance, gestion des risques et du crédit. Proposée par l'Université Amadou Hampaté Ba (UAHB).",
    debouches: [
      "Chargé de clientèle bancaire",
      "Souscripteur ou gestionnaire de contrats d'assurance",
      "Analyste de crédit",
      "Gestionnaire de risques",
    ],
    competencesAcquises: [
      "Techniques bancaires : produits, crédit, moyens de paiement",
      "Techniques d'assurance : souscription, sinistres, réassurance",
      "Gestion des risques financiers et analyse de crédit",
      "Comptabilité et finance d'entreprise",
      "Marketing des services financiers et relation client",
    ],
    missionsConcretes: [
      "Instruire un dossier de crédit ou de souscription d'assurance",
      "Conseiller un client particulier ou une entreprise sur des produits financiers",
      "Évaluer et suivre un risque de crédit ou un sinistre",
      "Développer un portefeuille clients dans une agence bancaire ou une compagnie d'assurance",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le secteur bancaire et assurantiel comorien est restreint mais structuré (banques commerciales, institutions de microfinance, quelques assureurs). Contrairement à un profil juridique pur (IJBA), ce diplôme forme au volet commercial et gestion du risque : chargé de clientèle, souscription, recouvrement.",
      employeursPotentiels: [
        "Banques commerciales",
        "Institutions de microfinance",
        "Compagnies et courtiers d'assurance",
        "Sociétés de recouvrement et de gestion de crédit",
      ],
      conseil:
        "Ce diplôme complète bien un profil commercial ou gestionnaire pour l'entrée dans le secteur financier ; pour viser des postes de conseil juridique en banque-assurance, privilégiez plutôt une filière de droit spécialisée (IJBA à l'UDB, par exemple).",
    },
    etablissements: [
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Sciences de Gestion, spécialité Banque-Assurance",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 60 000 F/mois en L1 (jusqu'à 130 000/70 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Droit & Gestion » : L1 = 110 000 FCFA d'inscription + 60 000 FCFA/mois (650 000 FCFA/an) ; L2 = 120 000 + 65 000/mois (705 000 FCFA/an) ; L3 = 130 000 + 70 000/mois (760 000 FCFA/an) — soit environ 2 115 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/uahb-universite-amadou-hampate-ba/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019) et accréditée ANAQ-Sup pour cette filière précise. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
  {
    id: "marketing-communication-digitale",
    filiere: "Marketing et Communication Digitale",
    description:
      "Licence orientée marketing, communication et outils numériques, accessible aux profils littéraires. Proposée par plusieurs écoles privées dakaroises aux positionnements proches.",
    debouches: [
      "Chargé de marketing digital",
      "Community manager",
      "Chargé de communication",
      "Chef de projet évènementiel",
    ],
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
    etablissements: [
      {
        institut: "IAM - Institut Africain de Management",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en marketing et communication",
        fraisDeScolarite: {
          montant: "≈ 1 260 000 F / an",
          detail:
            "Environ 1 260 000 FCFA par an en licence d'après les annuaires de comparaison des écoles sénégalaises. Montant à confirmer auprès du service admissions du Groupe IAM (info@groupeiam.com, +221 77 698 39 66).",
        },
        sourceOfficielle: { libelle: "groupeiam.com", url: "https://groupeiam.com/" },
        noteDAdmission:
          "Grande école de management certifiée ISO 9001 (norme qualité, pas une accréditation académique). Le niveau exact du parcours (licence Bac+3 ou master Bac+5) peut varier selon les années : confirmez l'intitulé précis auprès du service admissions. L'IAM a des programmes accrédités ANAQ-Sup en administration des affaires, supply chain et banque/finance, mais cette filière précise n'apparaît pas séparément dans la base consultée.",
      },
      {
        institut: "AFI-l'UE - AFI, l'Université de l'Entreprise",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en marketing et communication digitale",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "AFI-l'UE ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 33 824 71 10, afi@afi-ue.sn) pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "afi-ue.sn", url: "https://afi-ue.sn/" },
        noteDAdmission:
          "École autorisée par le Ministère de l'Enseignement Supérieur sénégalais et membre de la Fédération Européenne des Écoles (FEDE), ce qui peut faciliter une poursuite d'études en France. Admission sur dossier complet, toutes séries de baccalauréat. Accréditation : AFI-l'UE a d'autres programmes accrédités ANAQ-Sup (affaires internationales, banque/assurance), mais cette filière précise n'apparaît pas séparément dans la base consultée.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Marketing et Communication Digitale",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 80 000 FCFA. L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: { libelle: "groupeisi.com", url: "https://www.groupeisi.com/" },
        noteDAdmission:
          "Proposée par le département Génie Informatique de l'ISI, qui combine marketing digital et outils numériques — un profil hybride rare chez les écoles de gestion classiques. Ouverte aux titulaires du bac, toutes séries. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
  {
    id: "transport-logistique",
    filiere: "Transport et Logistique",
    description:
      "Licence en transport, logistique et commerce international : chaîne d'approvisionnement, procédures douanières, gestion de stocks. Proposée par deux écoles privées dakaroises.",
    debouches: [
      "Responsable logistique",
      "Déclarant en douane",
      "Gestionnaire de stocks",
      "Chargé d'import-export",
    ],
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
        "Filière très concrète et directement transposable. Faites un stage chez un transitaire à Dakar : les procédures maritimes que vous y apprendrez sont les mêmes qu'à Moroni. Supdeco a l'accréditation CAMES confirmée pour cette filière précise.",
    },
    etablissements: [
      {
        institut: "Supdeco Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence / Bachelor en transport et logistique",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Supdeco ne publie pas sa grille tarifaire en ligne. Le positionnement est celui des grandes écoles privées dakaroises : demandez la fiche de tarifs sur https://admissions.supdeco.sn/.",
        },
        sourceOfficielle: { libelle: "supdeco.sn", url: "https://supdeco.sn/" },
        noteDAdmission:
          "Première business school du Sénégal (1993), certifiée ISO 9001 (norme qualité, distincte d'une accréditation académique), Centre d'excellence UEMOA, plus de 25 nationalités. Accréditation CAMES confirmée pour cette filière précise ; un Master Management du Transport aérien est également listé sur ANAQ-Sup.",
      },
      {
        institut: "ESMP - École Supérieure de Management Polytechnique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en transport et logistique",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "ESMP ne publie pas sa grille tarifaire en ligne. Contactez le service admissions (+221 33 860 50 54, contact@esmp.sn) pour connaître le montant applicable.",
        },
        sourceOfficielle: { libelle: "esmp.sn", url: "https://esmp.sn/" },
        noteDAdmission:
          "Admission après le baccalauréat ou en admission parallèle (BTS, DUT, L2), sur dossier et entretien, avec cours du soir en 2e et 3e année. Accréditation : l'ESMP n'apparaît sur ANAQ-Sup qu'au statut d'« habilitation » (étape préalable à l'accréditation complète), pas encore en accréditation confirmée pour cette filière.",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (ISG Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence Professionnelle en Transport Logistique (LPTL) — Commerce et Echanges Internationaux (LPCEI) également proposée",
        fraisDeScolarite: {
          montant: "80 000 F d'inscription + ≈ 583 500 F la 1re année (LPCEI, grille 2024-2025)",
          detail:
            "Grille officielle LPCEI 2024-2025 publiée sur st-michel.sn : L1 = 80 000 FCFA de droits d'inscription + 25 000 FCFA de frais généraux + 20 000 FCFA de tenue à l'inscription, puis 6 tranches (novembre à avril) incluant scolarité, tenue et ressources numériques, pour un total L1 d'environ 583 500 FCFA. L2 ≈ 633 500 FCFA (droits d'inscription 100 000 F), L3 ≈ 773 500 FCFA (droits d'inscription 120 000 F, diplomation incluse). Un uniforme (60 000 FCFA) s'ajoute. Cette grille est publiée pour la spécialité LPCEI ; le tarif LPTL n'a pas de PDF dédié retrouvé en ligne, mais suit vraisemblablement le même barème — à confirmer auprès du service scolarité.",
        },
        sourceOfficielle: {
          libelle: "st-michel.sn",
          url: "https://www.st-michel.sn/wp-content/uploads/2024/07/LPCEI-2024-2025.pdf",
        },
        noteDAdmission:
          "Département Sciences de Gestion - Droit - Transport Logistique (chef de département : +221 77 185 08 30). Institut le plus ancien affilié à l'UCAO/UUZ, qui inaugura son enseignement supérieur en 1984 avec le DEC (Diplôme Elémentaire Comptable). Diplôme délivré par l'UCAO (système LMD) ; aucune fiche ANAQ-Sup dédiée à cette filière précise n'a été retrouvée (seule l'habilitation institutionnelle de l'ISG Saint Michel est confirmée) — à faire confirmer avant inscription. Dossier : extrait de naissance, copie de la CNI ou du passeport, copie légalisée de l'attestation du Bac (L, G ou S), copie légalisée du relevé détaillé des notes du Bac, copie des bulletins de Terminale, 4 photos d'identité, puis entretien avec le chef de département. Adresse : 17, rue Saint Michel, BP 3402, Dakar.",
      },
    ],
  },
];
