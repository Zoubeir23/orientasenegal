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
          montant: "Non publié",
          detail:
            "L'ISI ne publie pas sa grille tarifaire complète en ligne. Demandez un devis précis au campus Keur Massar ou au service admissions (+221 33 822 19 81, isi@isi.sn).",
        },
        sourceOfficielle: {
          libelle: "isikeurmassar.com",
          url: "https://isikeurmassar.com/licence-informatique-appliquee-gestion-entreprise/",
        },
        noteDAdmission:
          "Officiellement intitulée « Informatique Appliquée à la Gestion d'Entreprise » (180 crédits ECTS, 6 semestres). Admission sur dossier après le bac (toutes séries), ou en L2/L3 pour un Bac+2 équivalent. Accréditation : le volet Réseaux informatiques du groupe ISI est confirmé accrédité ANAQ-Sup, mais cette filière précise n'a pas été retrouvée séparément dans la base — à confirmer auprès de l'école.",
      },
      {
        institut: "UDB - Université Dakar Bourguiba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en MIAGE (Master en génie logiciel possible)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'UDB ne publie pas sa grille tarifaire en ligne. Contactez le service scolarité (+221 33 825 36 11 / +221 33 825 36 16) pour connaître le montant applicable aux étudiants étrangers.",
        },
        sourceOfficielle: { libelle: "udb-sn.com", url: "https://www.udb-sn.com" },
        noteDAdmission:
          "Faculté Sciences et Technologies : accès conditionné à un baccalauréat scientifique (contrairement à ISM et ISI, ouvertes aux littéraires). Accréditation confirmée sur anaqsup.sn/accreditations/universite-dakar-bourguiba-udb-licence-en-methodes-informatiques-appliquees-a-la-gestion-miage/ — la mieux documentée des trois options.",
      },
      {
        institut: "UCAO - Université Catholique de l'Afrique de l'Ouest (Institut Saint Michel)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence en Informatique de Gestion (Systèmes d'information et Réseaux également proposés)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'UCAO ne publie pas ses tarifs en ligne. Le paiement est fractionné : frais d'inscription et un quart de la scolarité au moment de l'inscription, le solde en décembre, février et avril. Demandez la grille à stmichel@ucao.edu.sn ou au +221 33 823 08 40.",
        },
        sourceOfficielle: { libelle: "st-michel.sn", url: "https://www.st-michel.sn/" },
        noteDAdmission:
          "Admission après examen du dossier puis entretien avec le responsable de département. Université confessionnelle présente dans quatre pays d'Afrique de l'Ouest. Accréditation : aucun statut ANAQ-Sup ni CAMES retrouvé pour cette filière dans les sources consultées — à faire confirmer par écrit avant inscription.",
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
          "Candidature via mycandidature.esp puis admission.ucad.sn. Filière scientifique exigeante en mathématiques. Confirmez la catégorie tarifaire applicable aux bacheliers comoriens avant de candidater. Accréditation : cette licence n'apparaît pas dans la base ANAQ-Sup consultée ; l'ESP a engagé une démarche d'accréditation de ses formations auprès de l'ANAQ-Sup (annoncée sur esp.sn), non finalisée à ce jour pour ce diplôme précis.",
      },
      {
        institut: "ISI - Institut Supérieur d'Informatique",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence professionnelle en Génie Logiciel (Master en Génie Logiciel possible)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'ISI ne publie pas sa grille tarifaire complète en ligne. Demandez un devis précis au service admissions (+221 33 822 19 81 / +221 76 644 85 44, contact@groupeisi.com).",
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
          montant: "Non publié",
          detail:
            "L'ISI ne publie pas sa grille tarifaire complète en ligne. Demandez un devis précis par filière et niveau au service admissions (+221 33 822 19 81, isi@isi.sn).",
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
    ],
  },
];
