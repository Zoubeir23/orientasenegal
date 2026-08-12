import type { Formation } from "@/types/formation";

/**
 * Informatique, génie logiciel, réseaux et télécommunications.
 * Entrées vérifiées sur les sites officiels (ESP, ISM, UAM, ESMT).
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
      "Candidature via mycandidature.esp puis admission.ucad.sn. Filière scientifique exigeante en mathématiques. Confirmez la catégorie tarifaire applicable aux bacheliers comoriens avant de candidater.",
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
      "Ouverte aux bacs littéraires. Admission ISM sur dossier, tests écrits et entretien en anglais.",
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
      "L'UAM lance chaque année un appel à candidatures dédié aux titulaires d'un baccalauréat étranger reconnu par l'État du Sénégal (contact : etude.dossier@uam.edu.sn). L'intitulé exact du parcours informatique peut varier selon les années : vérifiez-le lors de la candidature. L'accès à Polytech Diamniadio se fait par concours.",
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
      "L'école accueille en formation initiale ou continue des étudiants de tous les pays africains francophones, recrutés sur concours d'entrée (session annuelle, ex. fin juillet) ou sur dossier.",
  },
];
