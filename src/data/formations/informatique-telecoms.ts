import type { Formation } from "@/types/formation";

/**
 * Informatique, génie logiciel, réseaux et télécommunications.
 * "Informatique Appliquée à la Gestion" regroupe trois établissements qui
 * proposent la même filière (ISM, ISI, UDB) ; les autres fiches couvrent des
 * spécialités distinctes (génie logiciel, réseaux, télécoms, ingénieur).
 */
export const formationsInformatiqueTelecoms: Formation[] = [
  {
    id: "informatique-appliquee-gestion",
    filiere: "Informatique Appliquée à la Gestion des Entreprises (MIAGE)",
    description:
      "L'informatique sans être « fort en maths » : on y apprend à informatiser la gestion d'une entreprise (comptabilité, stocks, facturation, bases de données). Filière historiquement ouverte aux bacs littéraires, proposée sous des intitulés proches (Informatique Appliquée à la Gestion, MIAGE) par plusieurs écoles dakaroises.",
    debouches: [
      "Analyste informatique de gestion",
      "Administrateur de bases de données",
      "Développeur d'applications de gestion",
      "Chef de projet digital",
    ],
    competencesAcquises: [
      "Programmation appliquée à la gestion et développement de sites web",
      "Conception et administration de bases de données",
      "Analyse et informatisation des processus d'une entreprise",
      "Comptabilité, gestion et organisation de l'entreprise",
      "Sécurité des systèmes d'information et e-business",
    ],
    missionsConcretes: [
      "Informatiser la facturation, les stocks ou la paie d'une entreprise",
      "Faire le lien entre les informaticiens et les gestionnaires d'un projet",
      "Concevoir la base de données d'une administration ou d'une ONG",
      "Gérer le site et les outils numériques d'une organisation",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Beaucoup d'organisations comoriennes gèrent encore stocks, adhérents ou facturation sur papier ou sur Excel. Le profil hybride gestion + informatique est exactement celui qui manque : moins concurrentiel que le développement pur, et directement utile aux banques, ONG et commerces.",
      employeursPotentiels: [
        "Banques et institutions de microfinance",
        "ONG et projets de développement (systèmes de suivi)",
        "Entreprises de commerce et d'import-export",
        "Administrations en cours de digitalisation",
      ],
      conseil:
        "Trois écoles dakaroises proposent cette même filière (ISM, ISI, UDB) : comparez leurs frais, leur accréditation et leurs modalités d'admission avant de choisir, plutôt que de vous arrêter à la plus connue. Complétez ensuite par une certification technique (base de données, développement web) pour ne pas rester uniquement sur le volet gestion.",
    },
    etablissements: [
      {
        institut: "ISM - Institut Supérieur de Management",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en informatique appliquée à la gestion",
        fraisDeScolarite: {
          montant: "1 500 000 F la 1re année",
          detail:
            "Grille officielle ISM 2025-2026 : 450 000 FCFA de droits d'inscription + 1 000 000 FCFA de scolarité, soit 1 500 000 FCFA en 1re année, 1 400 000 en 2e et 1 425 000 en 3e (soutenance incluse). La scolarité peut être étalée sur 10 mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: {
          libelle: "groupeism.sn",
          url: "https://www.groupeism.sn/formation-ingenieur/license-informatique-gestion-entreprises",
        },
        noteDAdmission:
          "Ouverte aux bacs littéraires. Admission sur dossier, tests écrits et entretien en anglais. Accréditation : l'ISM revendique une accréditation ANAQ-Sup, mais cette filière précise n'apparaît pas confirmée sur la base officielle anaqsup.sn/accreditations/ (une autre licence ISM, Droit des Affaires, y est en revanche listée) — vérifiez directement sur le site avant de candidater.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique (campus Keur Massar)",
        ville: "Dakar (Keur Massar)",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en informatique appliquée à la gestion",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (dont 255 000 FCFA de droits d'inscription), mensualités de 80 000 FCFA. En L3 : 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. Tenue obligatoire en 1re et 2e année (70 000 FCFA), ordinateur portable obligatoire, aucun remboursement en cas d'abandon.",
        },
        sourceOfficielle: {
          libelle: "isikeurmassar.com",
          url: "https://isikeurmassar.com/licence-informatique-appliquee-gestion-entreprise/",
        },
        noteDAdmission:
          "Officiellement intitulée « Informatique Appliquée à la Gestion d'Entreprise » (180 crédits ECTS, 6 semestres). Admission sur dossier après le bac (toutes séries), ou en L2/L3 pour un Bac+2 équivalent. Accréditation : le volet Réseaux informatiques du groupe ISI est confirmé accrédité ANAQ-Sup, mais cette filière précise n'a pas été retrouvée séparément dans la base — à confirmer auprès de l'école.",
      },
      {
        institut: "UDB - Université Dakar-Bourguiba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en MIAGE (Master en génie logiciel possible)",
        fraisDeScolarite: {
          montant: "40 000 F d'inscription + 40 000 F/mois (tarif général Licence)",
          detail:
            "L'UDB ne publie pas de grille spécifique à cette filière, mais la plaquette 2026 du cycle Licence affiche un tarif général : 40 000 FCFA de droit d'inscription et 40 000 FCFA de mensualité, sur 10 mois de formation (dont un mois de rattrapage, session NAWET = ETE) — soit environ 440 000 FCFA/an. À confirmer que ce tarif générique s'applique bien à la Faculté Sciences et Technologies (MIAGE) auprès du service scolarité.",
        },
        sourceOfficielle: { libelle: "udb.sn", url: "https://www.udb.sn/" },
        noteDAdmission:
          "Faculté Sciences et Technologies : accès conditionné à un baccalauréat scientifique (contrairement à ISM et ISI, ouvertes aux littéraires). Accréditation confirmée sur anaqsup.sn/accreditations/universite-dakar-bourguiba-udb-licence-en-methodes-informatiques-appliquees-a-la-gestion-miage/ — la mieux documentée des trois options. École privée laïque, agréée par l'État du Sénégal (visa n° 004465/MEN/DES du 10/10/1995, agrément définitif du 18/05/2009, habilitation à délivrer des diplômes du système LMD depuis le 18/01/2023) et reconnue CAMES. Taux de réussite annoncé par l'école : 82% en cycle Licence, 95% en Master. Contact général (plaquette 2026) : 12 Avenue Bourguiba, BP 15744 Dakar-Fann, +221 33 825 36 11, contact@udb-sn.com — pour la scolarité MIAGE spécifiquement, une ligne alternative a été signalée par le passé (+221 33 825 36 16).",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (ISG Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Informatique de Gestion (LPIG)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'UCAO/ISG Saint Michel ne publie pas ses tarifs en ligne. Le paiement est fractionné : frais d'inscription et un quart de la scolarité au moment de l'inscription, le solde en décembre, février et avril. Demandez la grille au service scolarité (+221 33 823 08 40, stmichel@arc.sn).",
        },
        sourceOfficielle: {
          libelle: "st-michel.sn",
          url: "https://www.st-michel.sn/nos-formations/licence-professionnelle-en-informatique-de-gestion/",
        },
        noteDAdmission:
          "Département Informatique-Mathématiques (contact chef de département : +221 77 525 49 61). Institut le plus ancien affilié à l'UCAO/UUZ, qui inaugura son enseignement supérieur en 1984 avec le DEC (Diplôme Elémentaire Comptable). Diplôme délivré par l'UCAO (système LMD), accrédité ANAQ-Sup pour cette filière précise. Dossier : extrait de naissance, copie de la CNI ou du passeport, copie certifiée de l'attestation du Bac, copie certifiée des bulletins de notes, 4 photos d'identité (dossier standard observé sur les autres licences pro de l'école), puis entretien avec le chef de département. Adresse : 17, rue Saint Michel, BP 3402, Dakar.",
      },
      {
        institut: "ESCOA - École Supérieure de Commerce et d'Administration",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence / Bachelor en Informatique de Gestion",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Tarifs non publiés en ligne : à demander au service admissions de l'école, avenue Cheikh Anta Diop à Dakar.",
        },
        sourceOfficielle: { libelle: "escoa.edu.sn", url: "https://www.escoa.edu.sn/" },
        noteDAdmission:
          "École membre de la FEDE (Fédération Européenne des Écoles), orientée gestion, commerce, administration et informatique appliquée. Attention : l'adhésion à la FEDE est un réseau privé, pas une accréditation nationale — aucun statut ANAQ-Sup ni CAMES n'a été retrouvé dans les sources consultées, à faire confirmer avant inscription.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence Professionnelle en Sciences et Technologies de l'Information et de la Communication (STIC), spécialité Informatique",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 60 000 F/mois en L1 (jusqu'à 130 000/80 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « STIC » (mensualité versée sur 9 mois) : L1 = 110 000 FCFA d'inscription + 60 000 FCFA/mois (650 000 FCFA/an) ; L2 = 120 000 + 70 000/mois (750 000 FCFA/an) ; L3 = 130 000 + 80 000/mois (850 000 FCFA/an) — soit environ 2 250 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "uahb.sn",
          url: "https://www.uahb.sn/reconnaissance-cames/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019). D'après la page de reconnaissances de l'école, cette filière est accréditée ANAQ-Sup et CAMES depuis le 30/10/2021 (aucune fiche ANAQ-Sup dédiée à la licence, seul le Master de la même spécialité a été retrouvé séparément — à confirmer avant inscription). Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
  {
    id: "esp-genie-logiciel",
    filiere: "Génie Logiciel",
    description:
      "Licence professionnelle du département Génie Informatique de l'ESP. Le département propose aussi des licences Systèmes, Réseaux & Télécoms et des masters en IA et cybersécurité.",
    debouches: [
      "Développeur fullstack",
      "Ingénieur logiciel",
      "Administrateur systèmes et réseaux",
      "Chef de projet IT",
    ],
    competencesAcquises: [
      "Programmation et algorithmique (Python, Java, JavaScript)",
      "Développement web et applications mobiles",
      "Bases de données, SQL et modélisation",
      "Réseaux, systèmes et administration serveur",
      "Génie logiciel : versionnage, tests, méthodes agiles",
    ],
    missionsConcretes: [
      "Créer le site ou l'application d'une entreprise",
      "Concevoir un logiciel de gestion (stock, facturation, scolarité)",
      "Sécuriser et administrer le réseau d'une organisation",
      "Travailler à distance pour des clients étrangers, depuis n'importe où",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "La digitalisation des administrations, des banques et des opérateurs télécoms crée une demande réelle. Surtout, c'est la filière qui permet le mieux de travailler à distance : vous pouvez vivre aux Comores et être payé par des clients de l'étranger.",
      employeursPotentiels: [
        "Banques, microfinance, opérateurs télécoms",
        "Administrations en cours de digitalisation",
        "Startups et agences web locales",
        "Clients internationaux en télétravail (freelance)",
      ],
      conseil:
        "Construisez un portfolio public (GitHub, projets réels) dès la première année. Dans ce métier, le code que vous montrez compte plus que le nom de l'école.",
    },
    etablissements: [
      {
        institut: "ESP - École Supérieure Polytechnique (UCAD)",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en génie logiciel",
        fraisDeScolarite: {
          montant: "≈ 810 000 F / an (pays conventionnés)",
          detail:
            "École publique rattachée à l'UCAD. Le barème propre à l'ESP indique 90 000 FCFA d'inscription + 720 000 FCFA de scolarité (≈810 000 FCFA/an) pour les ressortissants des pays ayant un accord avec le Sénégal, notamment la zone UEMOA. Les Comores n'étant pas membres de l'UEMOA, le tarif exact applicable doit être confirmé sur admission.ucad.sn ou auprès du service scolarité de l'ESP ; à titre de repère, le tarif général UCAD pour étudiants étrangers hors convention est de 200 000 FCFA/an en faculté.",
        },
        sourceOfficielle: {
          libelle: "esp.sn",
          url: "https://esp.sn/departement/genie-informatique/",
        },
        noteDAdmission:
          "Candidature via mycandidature.esp puis admission.ucad.sn. Filière scientifique exigeante en mathématiques. Confirmez la catégorie tarifaire applicable aux bacheliers comoriens avant de candidater. Accréditation : cette licence n'apparaît pas dans la base ANAQ-Sup consultée ; l'ESP a engagé une démarche d'accréditation de ses formations auprès de l'ANAQ-Sup depuis 2023 (annoncée sur esp.sn), toujours non finalisée pour ce diplôme précis à la vérification la plus récente.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Génie Logiciel (Master en Génie Logiciel possible)",
        fraisDeScolarite: {
          montant: "1 055 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : le Génie Logiciel fait partie des filières à tarif majoré. L1-L2 = 1 055 000 FCFA/an (dont 255 000 FCFA de droits d'inscription), mensualités de 100 000 FCFA. En L3 : 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. Ordinateur portable obligatoire, aucun remboursement en cas d'abandon.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=47946",
        },
        noteDAdmission:
          "Formation en 6 semestres (1 800 heures), ouverte aux titulaires du bac ou d'un diplôme équivalent. Poursuite possible en Master Génie Logiciel au sein du même groupe. Accréditation confirmée : anaqsup.sn/accreditations/isi-institut-superieur-dinformatique-4/.",
      },
    ],
  },
  {
    id: "isi-genie-informatique",
    filiere: "Génie Informatique, Réseaux et Cybersécurité",
    description:
      "École privée fondée en 1994. Sa Licence professionnelle en Réseaux informatiques est accréditée ANAQ-Sup (vérifié sur anaqsup.sn). Plusieurs autres parcours en licence : génie informatique, réseaux et télécommunications, cybersécurité, science des données/IA. Masters disponibles ensuite (cryptographie et sécurité, génie logiciel, réseaux).",
    debouches: [
      "Développeur",
      "Administrateur réseaux et systèmes",
      "Analyste cybersécurité",
      "Data analyst",
    ],
    competencesAcquises: [
      "Programmation, structures de données et algorithmique",
      "Architecture réseaux, administration systèmes et virtualisation",
      "Bases de la cybersécurité : audit, détection, réponse à incident",
      "Introduction à la science des données et à l'intelligence artificielle",
      "Gestion de projet informatique et méthodes agiles",
    ],
    missionsConcretes: [
      "Développer une application ou un site pour une entreprise",
      "Sécuriser le système d'information d'une organisation",
      "Administrer un parc informatique et des serveurs",
      "Analyser des données pour appuyer une décision de gestion",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Mêmes perspectives que les autres cursus informatiques : digitalisation des banques, télécoms et administrations, et surtout possibilité de travailler à distance pour des clients étrangers depuis les Comores. La spécialisation cybersécurité reste un créneau rare et recherché.",
      employeursPotentiels: [
        "Banques, microfinance, opérateurs télécoms",
        "Administrations en cours de digitalisation",
        "Startups et agences web",
        "Clients internationaux en télétravail (freelance)",
      ],
      conseil:
        "École privée établie de longue date (1994) : vérifiez les frais réels et les modalités d'admission des étudiants étrangers directement auprès du service admissions avant de vous engager.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence (Master en 1 à 2 ans supplémentaires)",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3, 1 355 000 F en Master",
          detail:
            "Brochure officielle ISI, édition 2024-2025. Licence (Réseaux informatiques, Cybersécurité) : L1-L2 = 895 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 80 000 FCFA ; L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. Master Professionnel : 1 355 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 120 000 FCFA.",
        },
        sourceOfficielle: { libelle: "groupeisi.com", url: "https://www.groupeisi.com/" },
        noteDAdmission:
          "École privée accréditée ANAQ-Sup, fondée en 1994. Le master est ouvert aux titulaires d'un Bac+3. Frais et modalités précises d'admission des étudiants étrangers non publiés en ligne : à demander directement au service admissions. Accréditation confirmée : anaqsup.sn/accreditations/isi-institut-superieur-dinformatique/.",
      },
    ],
  },
  {
    id: "ept-genie-informatique-telecoms",
    filiere: "Génie Informatique et Télécommunications",
    description:
      "Première école d'ingénieurs publique du Sénégal (1973). Cursus en 5 ans (2 ans de tronc commun puis 3 ans de spécialisation avec alternance école-entreprise croissante) menant au diplôme d'ingénieur de conception en génie informatique et télécommunications.",
    debouches: [
      "Ingénieur télécoms",
      "Ingénieur réseaux",
      "Développeur",
      "Chef de projet IT",
    ],
    competencesAcquises: [
      "Mathématiques et sciences de l'ingénieur appliquées à l'informatique",
      "Réseaux, télécommunications et transmission de données",
      "Développement logiciel et architecture des systèmes",
      "Gestion de projet en alternance école-entreprise",
      "Culture d'entreprise acquise dès la 2e année via les stages alternés",
    ],
    missionsConcretes: [
      "Concevoir et déployer une infrastructure réseau ou télécoms",
      "Diriger un projet informatique en entreprise dès la formation",
      "Développer des systèmes et applications à forte exigence technique",
      "Accéder à des postes d'ingénieur généraliste en Afrique francophone",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Diplôme d'ingénieur généraliste très reconnu en Afrique francophone (CAMES), avec un fort taux d'insertion professionnelle rapporté par l'école. Utile aux Comores aussi bien pour les postes d'infrastructure télécoms que pour le développement logiciel à distance.",
      employeursPotentiels: [
        "Opérateurs de téléphonie et fournisseurs d'accès",
        "Banques et administrations (services informatiques)",
        "Entreprises d'installation et de maintenance réseau",
        "Clients internationaux en télétravail (freelance)",
      ],
      conseil:
        "Cursus long et sélectif (concours), mais le tarif conventionné le rend très accessible si les Comores sont éligibles : vérifiez ce point en priorité auprès de l'EPT avant de vous projeter sur ce tarif.",
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
          "Admission sur concours national (candidats libres acceptés), réservé aux candidats de moins de 22 ans au 1er octobre de l'année d'entrée, sur la base d'un bac scientifique ou technique (S1, S2, S3, STIDD). Plus de 85 % des diplômés trouvent un emploi dans les 6 mois selon l'école. Accréditation : l'EPT dispose d'une habilitation ANAQ-Sup générale (2021-2022) et d'une reconnaissance CAMES, mais ce diplôme précis n'apparaît pas séparément dans la base ANAQ-Sup consultée (le diplôme Génie Aéronautique de l'EPT y figure en revanche).",
      },
    ],
  },
  {
    id: "uam-informatique",
    filiere: "Informatique (licence professionnelle)",
    description:
      "Université publique du pôle urbain de Diamniadio, aux portes de Dakar. Licences professionnelles en informatique (rattachées à l'UFR Sciences, Technologies et Applications), télécoms, génie civil, énergies et agroalimentaire.",
    debouches: [
      "Développeur",
      "Administrateur systèmes et réseaux",
      "Technicien support",
      "Analyste de données",
    ],
    competencesAcquises: [
      "Programmation et structures de données",
      "Développement web et applications",
      "Bases de données et systèmes d'information",
      "Réseaux et systèmes d'exploitation",
      "Projets encadrés en lien avec les entreprises",
    ],
    missionsConcretes: [
      "Développer et maintenir une application métier",
      "Administrer le parc informatique d'une organisation",
      "Concevoir la base de données d'un service public",
      "Poursuivre en master ou en école d'ingénieur (Polytech Diamniadio)",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Mêmes perspectives que les autres cursus informatiques : digitalisation des administrations et des banques, et surtout possibilité de travailler à distance pour des clients étrangers depuis les Comores.",
      employeursPotentiels: [
        "Banques, microfinance, opérateurs télécoms",
        "Administrations en cours de digitalisation",
        "Startups et agences web",
        "Clients internationaux en télétravail",
      ],
      conseil:
        "L'option publique la moins coûteuse pour se former au numérique près de Dakar. Compensez la notoriété moindre par un portfolio de projets publics sur GitHub.",
    },
    etablissements: [
      {
        institut: "UAM - Université Amadou Mahtar Mbow",
        ville: "Diamniadio (Grand Dakar)",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en informatique",
        fraisDeScolarite: {
          montant: "≈ 1 200 000 F / an (étrangers)",
          detail:
            "Université publique récente : environ 120 000 FCFA par mois (soit ≈1 200 000 FCFA sur 10 mois) pour les étudiants étrangers, d'après les modalités d'admission communiquées par l'UAM. Le tarif exact par filière n'étant pas détaillé publiquement, confirmez-le lors de l'appel à candidatures annuel.",
        },
        sourceOfficielle: { libelle: "uam.sn", url: "https://uam.sn/formations/" },
        noteDAdmission:
          "L'UAM lance chaque année un appel à candidatures dédié aux titulaires d'un baccalauréat étranger reconnu par l'État du Sénégal (contact : etude.dossier@uam.edu.sn). L'intitulé exact du parcours informatique peut varier selon les années : vérifiez-le lors de la candidature. L'accès à Polytech Diamniadio se fait par concours. Accréditation : un rapport d'évaluation externe ANAQ-Sup pour la Licence Ingénierie Informatique a été publié en avril 2025, ce qui indique une accréditation en cours d'instruction plutôt que finalisée à cette date.",
      },
    ],
  },
  {
    id: "esmt-reseaux-telecoms",
    filiere: "Réseaux et Télécommunications",
    description:
      "École créée en 1981 par sept États d'Afrique de l'Ouest avec le PNUD et l'UIT, reconnue CAMES. Le diplôme de licence est la Licence en Télécommunications et Informatique (LTI), avec une spécialisation Réseaux Télécoms (RT) ; d'autres parcours existent (administration et sécurité des réseaux, développement d'applications réparties, systèmes embarqués).",
    debouches: [
      "Technicien réseaux et télécoms",
      "Administrateur systèmes",
      "Ingénieur télécoms",
      "Technicien fibre optique",
    ],
    competencesAcquises: [
      "Architecture des réseaux informatiques et protocoles",
      "Téléphonie mobile, transmission et fibre optique",
      "Administration de serveurs et virtualisation",
      "Cybersécurité et supervision de réseaux",
      "Gestion de projets télécoms",
    ],
    missionsConcretes: [
      "Installer et maintenir le réseau d'une entreprise ou d'un opérateur",
      "Déployer et raccorder de la fibre optique",
      "Superviser une infrastructure informatique et diagnostiquer les pannes",
      "Sécuriser les systèmes de communication d'une organisation",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Les opérateurs télécoms comoriens et le déploiement de la fibre créent un besoin continu de techniciens réseaux. C'est un métier d'infrastructure : il s'exerce forcément sur place, contrairement au développement logiciel qui se délocalise.",
      employeursPotentiels: [
        "Opérateurs de téléphonie et fournisseurs d'accès",
        "Banques et administrations (services informatiques)",
        "Entreprises d'installation et de maintenance réseau",
        "Projets de connectivité financés par les bailleurs",
      ],
      conseil:
        "Complétez le diplôme par des certifications constructeur (Cisco CCNA, Huawei) : elles sont reconnues partout et se vérifient en un coup d'œil par un employeur.",
    },
    etablissements: [
      {
        institut: "ESMT - École Supérieure Multinationale des Télécommunications",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Télécommunications et Informatique (cycles TS, licence, master)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "École multinationale interétatique : les frais de dossier (10 000 à 20 000 FCFA selon le programme) sont publiés, mais la scolarité annuelle complète ne l'est pas et varie selon le cycle et le pays d'origine. Contactez directement le service scolarité (scolarite@esmt.sn, +221 33 869 03 00).",
        },
        sourceOfficielle: { libelle: "esmt.sn", url: "https://esmt.sn/" },
        noteDAdmission:
          "L'école accueille en formation initiale ou continue des étudiants de tous les pays africains francophones, recrutés sur concours d'entrée (session annuelle, ex. fin juillet) ou sur dossier. Accréditation ANAQ-Sup confirmée pour la spécialité Administration et Sécurité des Réseaux (ASR) et plusieurs autres spécialités de la licence : anaqsup.sn/accreditations/esmt-licence-professionnelle-en-telecommunications-et-informatique-specialite-administration-et-securite-des-reseaux-asr/.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Réseaux et Télécommunications (Master possible)",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (dont 255 000 FCFA de droits d'inscription), mensualités de 80 000 FCFA. En L3 : 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. Master Professionnel Réseaux et Systèmes Informatiques ensuite : 1 355 000 FCFA/an. Ordinateur portable obligatoire, aucun remboursement en cas d'abandon.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=48034",
        },
        noteDAdmission:
          "Formation en 6 semestres (180 crédits ECTS), ouverte aux titulaires du bac ou d'un diplôme équivalent. Débouchés visés : ingénieur réseaux, administrateur systèmes et réseaux, technicien télécoms, consultant cybersécurité réseaux. Accréditation confirmée pour la Licence professionnelle en Réseaux informatiques du même groupe : anaqsup.sn/accreditations/isi-institut-superieur-dinformatique/.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence Professionnelle en Sciences et Technologies de l'Information et de la Communication (STIC), spécialité Réseaux et Télécommunications",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 60 000 F/mois en L1 (jusqu'à 130 000/80 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « STIC » (mensualité versée sur 9 mois) : L1 = 110 000 FCFA d'inscription + 60 000 FCFA/mois (650 000 FCFA/an) ; L2 = 120 000 + 70 000/mois (750 000 FCFA/an) ; L3 = 130 000 + 80 000/mois (850 000 FCFA/an) — soit environ 2 250 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/uahb-universite-amadou-hampate-ba-6/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019) et accréditée ANAQ-Sup pour cette filière précise. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (ISG Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Réseaux et Systèmes Informatiques (LRSI)",
        fraisDeScolarite: {
          montant: "≈ 583 500 F la 1re année, droits d'inscription inclus (grille 2024-2025)",
          detail:
            "Grille officielle LRSI 2024-2025 publiée sur st-michel.sn : L1 = 80 000 FCFA de droits d'inscription + 25 000 FCFA de frais généraux + 20 000 FCFA de tenue à l'inscription, puis 6 tranches (novembre à avril) incluant scolarité, tenue et ressources numériques, pour un total L1 d'environ 583 500 FCFA. L2 ≈ 633 500 FCFA (droits d'inscription 100 000 F), L3 ≈ 773 500 FCFA (droits d'inscription 120 000 F, diplomation incluse). Un uniforme (60 000 FCFA) s'ajoute ; préparation aux certifications CISCO, Microsoft et/ou Linux incluse dans le cursus.",
        },
        sourceOfficielle: {
          libelle: "st-michel.sn",
          url: "https://www.st-michel.sn/wp-content/uploads/2024/07/LRSI-2024-2025.pdf",
        },
        noteDAdmission:
          "Département Informatique-Mathématiques (contact chef de département : +221 77 525 49 61). Institut le plus ancien affilié à l'UCAO/UUZ, qui inaugura son enseignement supérieur en 1984 avec le DEC (Diplôme Elémentaire Comptable). Diplôme délivré par l'UCAO (système LMD), accrédité ANAQ-Sup pour cette filière précise. Dossier : extrait de naissance, copie de la CNI ou du passeport, copie légalisée de l'attestation ou du diplôme du Bac, copie légalisée du relevé détaillé des notes du Bac, copie des bulletins de Terminale, 4 photos d'identité, puis entretien avec le chef de département. Adresse : 17, rue Saint Michel, BP 3402, Dakar.",
      },
    ],
  },
  {
    id: "isi-cybersecurite",
    filiere: "Cybersécurité et Cyberdéfense",
    description:
      "Licence professionnelle du département Réseaux & Systèmes de l'ISI, centrée sur la sécurité des réseaux et des systèmes d'information : administration de la sécurité, analyse de risques, audit et réponse à incident.",
    debouches: [
      "Analyste cybersécurité",
      "Administrateur sécurité réseau",
      "Auditeur en sécurité des systèmes d'information",
      "Consultant en gestion des incidents",
    ],
    competencesAcquises: [
      "Identification des failles et vulnérabilités d'un réseau ou d'un système",
      "Conception de politiques de sécurité des données d'entreprise",
      "Protocoles réseau et sécurisation des communications",
      "Audit de sécurité et réponse à incident",
      "Sensibilisation et formation des utilisateurs à la sécurité informatique",
    ],
    missionsConcretes: [
      "Auditer la sécurité du système d'information d'une banque ou d'une administration",
      "Détecter et contenir une intrusion sur un réseau d'entreprise",
      "Mettre en place une politique de sécurité des données",
      "Former des équipes non techniques aux bons réflexes de cybersécurité",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "La cybersécurité reste un créneau quasi vierge aux Comores : très peu de professionnels formés, alors que banques, opérateurs télécoms et administrations digitalisent leurs services sans toujours les sécuriser. C'est l'une des spécialisations informatiques les plus rares et les mieux valorisées sur le marché régional.",
      employeursPotentiels: [
        "Banques et institutions de microfinance",
        "Opérateurs télécoms et fournisseurs d'accès",
        "Administrations en cours de digitalisation",
        "Cabinets de conseil en sécurité informatique (à distance ou en régional)",
      ],
      conseil:
        "Complétez la licence par des certifications reconnues (Cisco Certified CyberOps Associate, CEH, ISO 27001) : dans ce métier, la certification pèse souvent plus que le diplôme seul aux yeux des recruteurs.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Cybersécurité et Cyberdéfense",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (dont 255 000 FCFA de droits d'inscription), mensualités de 80 000 FCFA. En L3 : 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=48041",
        },
        noteDAdmission:
          "Formation en 6 semestres (180 crédits ECTS), ouverte aux titulaires du bac ou d'un diplôme équivalent. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée, contrairement à la Licence Réseaux informatiques et à la Licence Génie Logiciel du même groupe, elles bien accréditées — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
  {
    id: "isi-data-science-ia",
    filiere: "Data Science, Big Data et Intelligence Artificielle",
    description:
      "Licence (Bachelor) du département IA et Ingénierie des Données de l'ISI, centrée sur la collecte, le traitement et l'analyse de grands volumes de données. Poursuite possible en Master Data Science et Intelligence Artificielle.",
    debouches: [
      "Data analyst",
      "Data scientist",
      "Administrateur de bases de données Big Data",
      "Développeur fullstack spécialisé Big Data",
    ],
    competencesAcquises: [
      "Programmation (Python) et statistiques appliquées",
      "Collecte, nettoyage et modélisation de grands volumes de données",
      "Bases de données et infrastructures Big Data",
      "Introduction au machine learning et à l'intelligence artificielle",
      "Visualisation de données et aide à la décision (Power BI)",
    ],
    missionsConcretes: [
      "Analyser les données de vente ou d'usage d'une entreprise pour orienter ses décisions",
      "Construire un tableau de bord de pilotage pour une administration ou une ONG",
      "Nettoyer et structurer des jeux de données pour un projet de recherche",
      "Travailler à distance sur des projets de data pour des clients étrangers",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le marché comorien de la data est encore embryonnaire, mais bailleurs, banques et opérateurs télécoms commencent à réclamer des tableaux de bord et des analyses chiffrées. Le vrai potentiel de cette filière est le travail à distance pour des entreprises étrangères, où la demande en data analysts est forte.",
      employeursPotentiels: [
        "Banques et opérateurs télécoms (analyse client)",
        "ONG et bailleurs (suivi-évaluation de projets)",
        "Administrations (statistiques publiques)",
        "Clients internationaux en télétravail (freelance)",
      ],
      conseil:
        "Construisez un portfolio de projets data publics (Kaggle, GitHub) : c'est ce qui convainc un client étranger à distance, bien avant le nom de l'école.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence (Bachelor) en Data Science & Big Data Technology (Master Data Science et IA possible)",
        fraisDeScolarite: {
          montant: "1 055 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : filière à tarif majoré, comme le Génie Logiciel. L1-L2 = 1 055 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA. Le Master Data Science & Intelligence Artificielle qui suit est au tarif le plus élevé du groupe : 1 605 000 FCFA/an (255 000 FCFA d'inscription, mensualités de 150 000 FCFA).",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=49884",
        },
        noteDAdmission:
          "Formation en 6 semestres (1 800 heures), ouverte aux titulaires du bac ou d'un diplôme équivalent. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
  {
    id: "isi-systemes-embarques-iot",
    filiere: "Systèmes Embarqués et Internet des Objets (IoT)",
    description:
      "Licence du département Réseaux & Systèmes de l'ISI, à la frontière entre informatique et électronique : programmation de systèmes embarqués, objets connectés et automatismes industriels.",
    debouches: [
      "Technicien en systèmes embarqués",
      "Développeur IoT",
      "Technicien en automatisme et communication industrielle",
      "Intégrateur d'objets connectés",
    ],
    competencesAcquises: [
      "Programmation de microcontrôleurs et systèmes embarqués",
      "Réseaux de capteurs et objets connectés (IoT)",
      "Automatisme et communication industrielle",
      "Électronique appliquée à l'informatique",
      "Intégration matériel-logiciel de bout en bout",
    ],
    missionsConcretes: [
      "Concevoir un système de télérelève (eau, électricité) connecté",
      "Automatiser une chaîne de production ou un bâtiment (domotique)",
      "Développer un prototype d'objet connecté pour l'agriculture ou la santé",
      "Maintenir des équipements industriels pilotés par des automates",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "Filière de niche : il n'existe quasiment pas d'infrastructure industrielle lourde aux Comores, donc peu de débouchés salariés immédiats. Mais l'IoT appliqué à l'agriculture, l'eau ou l'énergie solaire est un terrain vierge pour qui veut créer sa propre activité plutôt que chercher un poste.",
      employeursPotentiels: [
        "Opérateurs télécoms et fournisseurs d'énergie",
        "Projets agricoles et environnementaux financés par les bailleurs",
        "Entreprises d'installation électrique et solaire",
        "Création d'entreprise (prototypage, importation de matériel)",
      ],
      conseil:
        "Filière à ne choisir que si vous êtes prêt à entreprendre : peu de postes salariés vous attendent au retour, mais les compétences sont rares et applicables à l'agriculture ou l'énergie solaire, deux secteurs porteurs aux Comores.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Systèmes Embarqués et IoT",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 80 000 FCFA. L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=48049",
        },
        noteDAdmission:
          "Formation destinée à former des techniciens en automatisme et réseaux de communication industrielle, ouverte aux titulaires du bac ou d'un diplôme équivalent. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
  {
    id: "isi-diti-ingenieur",
    filiere: "Diplôme d'Ingénieur en Techniques Informatiques (DITI)",
    description:
      "Diplôme d'ingénieur Bac+5 de l'ISI, accrédité ANAQ-Sup. Ne se choisit pas directement à la sortie du bac : il prolonge la licence professionnelle ISI (génie logiciel ou réseaux) de deux années supplémentaires, ou s'ouvre en admission parallèle aux titulaires d'un Bac+2 (BTS, DUT, L2).",
    debouches: [
      "Ingénieur informatique généraliste",
      "Chef de projet IT",
      "Architecte logiciel ou réseau",
      "Consultant en systèmes d'information",
    ],
    competencesAcquises: [
      "Approfondissement technique en génie logiciel et réseaux",
      "Gestion de projets informatiques complexes",
      "Architecture des systèmes d'information",
      "Certifications constructeur intégrées (CCNA, CCNP, DEVNET, Oracle)",
      "Culture d'ingénieur généraliste, au-delà d'une seule spécialité",
    ],
    missionsConcretes: [
      "Piloter un projet informatique de bout en bout dans une entreprise ou une administration",
      "Concevoir l'architecture technique d'un système d'information",
      "Encadrer une équipe de développeurs ou de techniciens réseau",
      "Accéder à des postes d'ingénieur généraliste, plus larges qu'un profil de licence",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Un diplôme d'ingénieur reste plus reconnu qu'une licence auprès des grandes structures (banques, télécoms, administrations) partout en Afrique francophone, y compris aux Comores. C'est un investissement en temps (5 ans au total depuis le bac) qui paie surtout pour l'accès à des postes d'encadrement.",
      employeursPotentiels: [
        "Banques et grandes administrations",
        "Opérateurs télécoms",
        "Cabinets de conseil en systèmes d'information",
        "Clients internationaux en télétravail (freelance senior)",
      ],
      conseil:
        "Ne vous engagez dans ce cycle qu'après avoir validé une licence professionnelle solide (génie logiciel ou réseaux) : le DITI prolonge un socle, ce n'est pas un point de départ. Vérifiez le tarif exact du cycle DITI, distinct de celui de la licence, avant de vous engager.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 5,
        diplomePrepare: "Diplôme d'Ingénieur en Techniques Informatiques (Bac+5)",
        fraisDeScolarite: {
          montant: "≈ 1 355 000 F/an (cycle ingénieur)",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : le tarif du Master Professionnel, palier auquel se situe le DITI, est de 1 355 000 FCFA/an (255 000 FCFA d'inscription, mensualités de 120 000 FCFA). Confirmez ce montant pour le cycle DITI précisément, la brochure ne le détaillant pas séparément du Master Génie Logiciel.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=47993",
        },
        noteDAdmission:
          "Diplôme accrédité ANAQ-Sup pour l'édition 2024-2025 : anaqsup.sn/accreditations/isi-institut-superieur-dinformatique-diplome-dingenieur-en-techniques-informatiques/. Accès en admission parallèle pour les titulaires d'un Bac+2, BTS, DUT ou Licence, ou en poursuite d'études après la licence professionnelle ISI. Ne se choisit donc pas directement à la sortie du bac.",
      },
    ],
  },
  {
    id: "isi-infographie-multimedia",
    filiere: "Infographie et Multimédia",
    description:
      "Licence du département Génie Informatique de l'ISI : conception graphique, animation 3D, montage vidéo et développement web, à la croisée du design et de l'informatique.",
    debouches: [
      "Infographiste / designer graphique",
      "Intégrateur web",
      "Monteur vidéo / motion designer",
      "Concepteur multimédia (jeux, publicité, contenus interactifs)",
    ],
    competencesAcquises: [
      "Logiciels de design graphique et de retouche d'image",
      "Modélisation et animation 3D",
      "Montage vidéo et narration visuelle",
      "Développement web et intégration de contenus multimédias",
      "Ergonomie et conception d'expériences interactives",
    ],
    missionsConcretes: [
      "Créer l'identité visuelle et les supports de communication d'une entreprise",
      "Concevoir le site web ou l'application d'une organisation",
      "Réaliser des animations ou vidéos publicitaires",
      "Travailler en freelance pour des clients locaux ou internationaux",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Les entreprises et institutions comoriennes ont besoin de supports visuels et de sites web, mais font souvent appel à des indépendants non formés faute d'offre locale structurée. Un profil qui allie design et compétences techniques (web, vidéo) se distingue facilement, surtout en freelance.",
      employeursPotentiels: [
        "Agences de communication",
        "Entreprises et ONG (supports visuels, sites web)",
        "Médias et production audiovisuelle",
        "Activité indépendante (freelance local ou international)",
      ],
      conseil:
        "Constituez un portfolio en ligne dès la 1re année : dans ce métier, ce que vous montrez compte plus que le diplôme. Les plateformes de freelance internationales sont accessibles depuis les Comores pour ce type de compétences.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Infographie et Multimédia",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 80 000 FCFA. L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=47953",
        },
        noteDAdmission:
          "Ouverte aux titulaires du bac ou d'un diplôme équivalent, toutes séries. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
  {
    id: "isi-geomatique-developpement",
    filiere: "Géomatique et Développement d'Applications",
    description:
      "Licence professionnelle du département Génie Informatique de l'ISI, qui combine systèmes d'information géographique (SIG), cartographie numérique et développement logiciel.",
    debouches: [
      "Développeur SIG",
      "Administrateur de bases de données géographiques",
      "Chargé d'études cartographiques",
      "Consultant en géomarketing",
    ],
    competencesAcquises: [
      "Systèmes d'information géographique (SIG) et télédétection",
      "Cartographie numérique, géodésie et topographie",
      "Développement d'applications liées à la donnée géographique",
      "Bases de données géospatiales",
      "Photogrammétrie et traitement d'images satellite",
    ],
    missionsConcretes: [
      "Cartographier le foncier ou les infrastructures d'une administration",
      "Développer une application de suivi géolocalisé (agriculture, urbanisme, réseaux)",
      "Appuyer un projet d'aménagement du territoire avec des données SIG",
      "Réaliser des études géomarketing pour une entreprise ou une ONG",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "À construire",
      resume:
        "La gestion du foncier, de l'urbanisme et des risques naturels aux Comores repose encore largement sur des méthodes manuelles, alors que les bailleurs internationaux financent de plus en plus de projets cartographiques et de SIG. Filière de niche, mais avec très peu de concurrence locale formée.",
      employeursPotentiels: [
        "Administrations (cadastre, urbanisme, environnement)",
        "ONG et bailleurs (cartographie de projets)",
        "Bureaux d'études en aménagement du territoire",
        "Entreprises de télécoms et d'énergie (planification de réseaux)",
      ],
      conseil:
        "Filière peu connue mais stratégique pour la gestion du territoire : rapprochez-vous des projets financés par les bailleurs (Banque mondiale, AFD) pendant vos études, c'est souvent leur porte d'entrée.",
    },
    etablissements: [
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Géomatique et Développement d'Applications",
        fraisDeScolarite: {
          montant: "895 000 F/an en L1-L2, 1 155 000 F en L3",
          detail:
            "Brochure officielle ISI, édition 2024-2025 : L1-L2 = 895 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 80 000 FCFA. L3 = 1 155 000 FCFA/an (255 000 FCFA d'inscription), mensualités de 100 000 FCFA.",
        },
        sourceOfficielle: {
          libelle: "groupeisi.com",
          url: "https://www.groupeisi.com/?page_id=47963",
        },
        noteDAdmission:
          "Formation en 6 semestres, ouverte aux titulaires du bac ou d'un diplôme équivalent. Passage en L2 possible dès 70 % des crédits de L1 validés. Accréditation : cette filière précise n'a pas été retrouvée dans la base ANAQ-Sup consultée — à faire confirmer auprès de l'école avant inscription.",
      },
    ],
  },
];
