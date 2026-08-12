import type { Formation } from "@/types/formation";

/**
 * Informatique, génie logiciel, réseaux et télécommunications.
 * Cinq établissements couverts pour donner un vrai choix : public (ESP, UAM, EPT)
 * et privé (ISM, ISI, UDB), avec un profil télécoms dédié (ESMT).
 */
export const formationsInformatiqueTelecoms: Formation[] = [
  {
    id: "esp-genie-logiciel",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "≈ 810 000 F / an (pays conventionnés)",
      detail:
        "École publique rattachée à l'UCAD. Le barème propre à l'ESP indique 90 000 FCFA d'inscription + 720 000 FCFA de scolarité (≈810 000 FCFA/an) pour les ressortissants des pays ayant un accord avec le Sénégal, notamment la zone UEMOA. Les Comores n'étant pas membres de l'UEMOA, le tarif exact applicable doit être confirmé sur admission.ucad.sn ou auprès du service scolarité de l'ESP ; à titre de repère, le tarif général UCAD pour étudiants étrangers hors convention est de 200 000 FCFA/an en faculté.",
    },
    filiere: "Génie Logiciel",
    institut: "ESP - École Supérieure Polytechnique (UCAD)",
    bacsCompatibles: ["Scientifique"],
    description:
      "Licence professionnelle du département Génie Informatique de l'ESP. Le département propose aussi des licences Systèmes, Réseaux & Télécoms et des masters en IA et cybersécurité.",
    debouches: [
      "Développeur fullstack",
      "Ingénieur logiciel",
      "Administrateur systèmes et réseaux",
      "Chef de projet IT",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle en génie logiciel",
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
    sourceOfficielle: {
      libelle: "esp.sn",
      url: "https://esp.sn/departement/genie-informatique/",
    },
    noteDAdmission:
      "Candidature via mycandidature.esp puis admission.ucad.sn. Filière scientifique exigeante en mathématiques. Confirmez la catégorie tarifaire applicable aux bacheliers comoriens avant de candidater. Accréditation : cette licence n'apparaît pas dans la base ANAQ-Sup consultée ; l'ESP a engagé une démarche d'accréditation de ses formations auprès de l'ANAQ-Sup (annoncée sur esp.sn), non finalisée à ce jour pour ce diplôme précis.",
  },
  {
    id: "ism-informatique-gestion",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "1 500 000 F la 1re année",
      detail:
        "Grille officielle ISM 2025-2026 : 450 000 FCFA de droits d'inscription + 1 000 000 FCFA de scolarité, soit 1 500 000 FCFA en 1re année, 1 400 000 en 2e et 1 425 000 en 3e (soutenance incluse). La scolarité peut être étalée sur 10 mensualités de 100 000 FCFA.",
    },
    filiere: "Informatique Appliquée à la Gestion des Entreprises",
    institut: "ISM - Institut Supérieur de Management",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "L'informatique sans être « fort en maths » : on y apprend à informatiser la gestion d'une entreprise. Filière historiquement ouverte aux bacs littéraires.",
    debouches: [
      "Analyste informatique de gestion",
      "Administrateur de bases de données",
      "Développeur d'applications de gestion",
      "Chef de projet digital",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en informatique appliquée à la gestion",
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
        "Excellente porte d'entrée dans le numérique pour un bachelier littéraire. Complétez par une certification technique (base de données, Excel avancé, développement web) pour ne pas rester uniquement sur le volet gestion.",
    },
    sourceOfficielle: {
      libelle: "groupeism.sn",
      url: "https://www.groupeism.sn/formation-ingenieur/license-informatique-gestion-entreprises",
    },
    noteDAdmission:
      "Ouverte aux bacs littéraires. Admission ISM sur dossier, tests écrits et entretien en anglais. Accréditation : l'ISM revendique une accréditation ANAQ-Sup, mais je n'ai pas trouvé cette filière précise confirmée sur la base officielle anaqsup.sn/accreditations/ (une autre licence ISM, Droit des Affaires, y est en revanche listée) — vérifiez directement sur le site avant de candidater.",
  },
  {
    id: "isi-genie-informatique",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "L'ISI ne publie pas sa grille tarifaire complète en ligne. Demandez un devis précis par filière et niveau au service admissions (+221 33 822 19 81, isi@isi.sn).",
    },
    filiere: "Génie Informatique, Réseaux et Cybersécurité",
    institut: "ISI - Institut Supérieur d'Informatique",
    bacsCompatibles: ["Scientifique"],
    description:
      "École privée fondée en 1994. Sa Licence professionnelle en Réseaux informatiques est accréditée ANAQ-Sup (vérifié sur anaqsup.sn). Plusieurs autres parcours en licence : génie informatique, réseaux et télécommunications, cybersécurité, science des données/IA, ainsi qu'un parcours MIAGE — leur accréditation individuelle n'a pas été confirmée séparément. Masters disponibles ensuite (cryptographie et sécurité, génie logiciel, réseaux).",
    debouches: [
      "Développeur",
      "Administrateur réseaux et systèmes",
      "Analyste cybersécurité",
      "Data analyst",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence (Master en 1 à 2 ans supplémentaires)",
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
    sourceOfficielle: { libelle: "groupeisi.com", url: "https://www.groupeisi.com/" },
    noteDAdmission:
      "École privée fondée en 1994. Le master est ouvert aux titulaires d'un Bac+3. Frais et modalités précises d'admission des étudiants étrangers non publiés en ligne : à demander directement au service admissions. Accréditation confirmée : anaqsup.sn/accreditations/isi-institut-superieur-dinformatique/.",
  },
  {
    id: "udb-genie-informatique",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "L'UDB ne publie pas sa grille tarifaire en ligne. Contactez le service scolarité (+221 33 825 36 11 / +221 33 825 36 16) pour connaître le montant applicable aux étudiants étrangers.",
    },
    filiere: "Génie Informatique et MIAGE",
    institut: "UDB - Université Dakar Bourguiba",
    bacsCompatibles: ["Scientifique"],
    description:
      "Université privée fondée en 1995. Sa Licence en MIAGE (méthodes informatiques appliquées à la gestion des entreprises) est accréditée ANAQ-Sup (vérifié sur anaqsup.sn) et reconnue CAMES. Le parcours génie informatique général et le master en génie logiciel n'ont pas d'accréditation individuelle confirmée séparément.",
    debouches: [
      "Développeur d'applications",
      "Ingénieur logiciel junior",
      "Administrateur de bases de données",
      "Analyste informatique de gestion",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence (Master en génie logiciel possible)",
    competencesAcquises: [
      "Programmation et développement d'applications",
      "Conception et administration de bases de données",
      "Méthodes informatiques appliquées à la gestion (MIAGE)",
      "Réseaux et systèmes d'exploitation",
      "Gestion de projet informatique",
    ],
    missionsConcretes: [
      "Développer et maintenir une application métier",
      "Informatiser les processus d'une entreprise ou d'une administration",
      "Administrer une base de données de gestion",
      "Poursuivre en master pour se spécialiser en génie logiciel",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Mêmes perspectives que les autres formations en informatique de gestion : les organisations comoriennes ont besoin de profils capables d'informatiser leurs processus, et le travail à distance pour des clients étrangers reste une option accessible depuis l'archipel.",
      employeursPotentiels: [
        "Banques et institutions de microfinance",
        "Administrations en cours de digitalisation",
        "Entreprises de commerce et d'import-export",
        "Clients internationaux en télétravail (freelance)",
      ],
      conseil:
        "Université privée établie depuis 1995, avec la licence MIAGE accréditée ANAQ-Sup : demandez la grille tarifaire par écrit avant de vous engager, les frais n'étant pas publiés en ligne.",
    },
    sourceOfficielle: { libelle: "udb-sn.com", url: "https://www.udb-sn.com" },
    noteDAdmission:
      "Faculté Sciences et Technologies : accès conditionné à un baccalauréat scientifique. Frais et modalités d'admission des étudiants étrangers non publiés en ligne, à demander directement à l'université. Accréditation MIAGE confirmée : anaqsup.sn/accreditations/universite-dakar-bourguiba-udb-licence-en-methodes-informatiques-appliquees-a-la-gestion-miage/.",
  },
  {
    id: "ept-genie-informatique-telecoms",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "50 000 F + 7 000 F de dossier (pays conventionnés)",
      detail:
        "École publique d'ingénieurs : 50 000 FCFA de scolarité annuelle + 7 000 FCFA de frais de dossier pour les candidats des pays ayant un accord avec le Sénégal, notamment la zone UEMOA. Les Comores n'étant pas membres de l'UEMOA, le statut tarifaire exact des candidats comoriens doit être confirmé directement auprès de l'EPT.",
    },
    filiere: "Génie Informatique et Télécommunications",
    institut: "EPT - École Polytechnique de Thiès",
    bacsCompatibles: ["Scientifique"],
    description:
      "Première école d'ingénieurs publique du Sénégal (1973). Cursus en 5 ans (2 ans de tronc commun puis 3 ans de spécialisation avec alternance école-entreprise croissante) menant au diplôme d'ingénieur de conception en génie informatique et télécommunications.",
    debouches: [
      "Ingénieur télécoms",
      "Ingénieur réseaux",
      "Développeur",
      "Chef de projet IT",
    ],
    ville: "Thiès",
    dureeEnAnnees: 5,
    diplomePrepare: "Diplôme d'Ingénieur de Conception (Bac+5)",
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
    sourceOfficielle: { libelle: "ept.edu.sn", url: "https://ept.edu.sn/" },
    noteDAdmission:
      "Admission sur concours national (candidats libres acceptés), réservé aux candidats de moins de 22 ans au 1er octobre de l'année d'entrée, sur la base d'un bac scientifique ou technique (S1, S2, S3, STIDD). Plus de 85 % des diplômés trouvent un emploi dans les 6 mois selon l'école. Accréditation : l'EPT dispose d'une habilitation ANAQ-Sup générale et d'une reconnaissance CAMES, mais ce diplôme précis (Génie Informatique et Télécommunications) n'apparaît pas séparément dans la base ANAQ-Sup consultée (d'autres diplômes d'ingénieur de l'EPT, comme Génie Aéronautique, y figurent).",
  },
  {
    id: "uam-informatique",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "≈ 1 200 000 F / an (étrangers)",
      detail:
        "Université publique récente : environ 120 000 FCFA par mois (soit ≈1 200 000 FCFA sur 10 mois) pour les étudiants étrangers, d'après les modalités d'admission communiquées par l'UAM. Le tarif exact par filière n'étant pas détaillé publiquement, confirmez-le lors de l'appel à candidatures annuel.",
    },
    filiere: "Informatique (licence professionnelle)",
    institut: "UAM - Université Amadou Mahtar Mbow",
    bacsCompatibles: ["Scientifique"],
    description:
      "Université publique du pôle urbain de Diamniadio, aux portes de Dakar. Licences professionnelles en informatique (rattachées à l'UFR Sciences, Technologies et Applications), télécoms, génie civil, énergies et agroalimentaire.",
    debouches: [
      "Développeur",
      "Administrateur systèmes et réseaux",
      "Technicien support",
      "Analyste de données",
    ],
    ville: "Diamniadio (Grand Dakar)",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence professionnelle en informatique",
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
    sourceOfficielle: { libelle: "uam.sn", url: "https://uam.sn/formations/" },
    noteDAdmission:
      "L'UAM lance chaque année un appel à candidatures dédié aux titulaires d'un baccalauréat étranger reconnu par l'État du Sénégal (contact : etude.dossier@uam.edu.sn). L'intitulé exact du parcours informatique peut varier selon les années : vérifiez-le lors de la candidature. L'accès à Polytech Diamniadio se fait par concours. Accréditation : un rapport d'évaluation externe ANAQ-Sup pour la Licence Ingénierie Informatique a été publié en avril 2025, ce qui indique une accréditation en cours d'instruction plutôt que finalisée à cette date.",
  },
  {
    id: "esmt-reseaux-telecoms",
    statutEtablissement: "Privé",
    fraisDeScolarite: {
      montant: "Non publié",
      detail:
        "École multinationale interétatique : les frais de dossier (10 000 à 20 000 FCFA selon le programme) sont publiés, mais la scolarité annuelle complète ne l'est pas et varie selon le cycle et le pays d'origine. Contactez directement le service scolarité (scolarite@esmt.sn, +221 33 869 03 00).",
    },
    filiere: "Réseaux et Télécommunications",
    institut: "ESMT - École Supérieure Multinationale des Télécommunications",
    bacsCompatibles: ["Scientifique"],
    description:
      "École créée en 1981 par sept États d'Afrique de l'Ouest avec le PNUD et l'UIT, reconnue CAMES. Le diplôme de licence est la Licence en Télécommunications et Informatique (LTI), avec une spécialisation Réseaux Télécoms (RT) ; d'autres parcours existent (administration et sécurité des réseaux, développement d'applications réparties, systèmes embarqués).",
    debouches: [
      "Technicien réseaux et télécoms",
      "Administrateur systèmes",
      "Ingénieur télécoms",
      "Technicien fibre optique",
    ],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en Télécommunications et Informatique (cycles TS, licence, master)",
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
    sourceOfficielle: { libelle: "esmt.sn", url: "https://esmt.sn/" },
    noteDAdmission:
      "L'école accueille en formation initiale ou continue des étudiants de tous les pays africains francophones, recrutés sur concours d'entrée (session annuelle, ex. fin juillet) ou sur dossier. Accréditation ANAQ-Sup confirmée pour la spécialité Administration et Sécurité des Réseaux (ASR) et plusieurs autres spécialités de la licence : anaqsup.sn/accreditations/esmt-licence-professionnelle-en-telecommunications-et-informatique-specialite-administration-et-securite-des-reseaux-asr/.",
  },
];
