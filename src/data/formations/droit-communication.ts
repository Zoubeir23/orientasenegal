import type { Formation } from "@/types/formation";

/**
 * Droit, journalisme et communication.
 * "Droit" (licence généraliste) regroupe UCAD et ISDD, qui proposent la même
 * filière. UGB Droit Privé reste distincte car explicitement spécialisée.
 * IJBA et SGDAI (UDB) sont les deux parcours de spécialisation en L3 du
 * cycle Licence Génie Juridique de l'Université Dakar-Bourguiba : même
 * tronc commun en L1-L2, fiches séparées car débouchés et masters distincts.
 */
export const formationsDroitCommunication: Formation[] = [
  {
    id: "udb-ijba",
    filiere: "Ingénierie Juridique Banque-Assurance (IJBA)",
    description:
      "Licence de droit spécialisée banque, assurance et crédit : tronc commun juridique en L1-L2 (droit civil, droit public, institutions judiciaires), puis spécialisation en L3 (droit bancaire, droit des assurances, droit des sûretés, fiscalité des affaires). Proposée par l'Université Dakar-Bourguiba (UDB), au sein de l'Unité de Formation et de Recherche Génie Juridique.",
    debouches: [
      "Juriste de banque",
      "Juriste des assurances",
      "Analyste de crédit",
      "Conseiller juridique",
    ],
    competencesAcquises: [
      "Droit civil, droit des obligations et droit des biens (tronc commun L1-L2)",
      "Droit bancaire, droit du crédit et droit des sûretés",
      "Droit des assurances, techniques bancaires et techniques des assurances",
      "Fiscalité des affaires, finance et gestion financière",
      "Anglais juridique et techniques d'expression professionnelle",
    ],
    missionsConcretes: [
      "Sécuriser juridiquement des opérations bancaires et des contrats d'assurance",
      "Instruire un dossier de crédit ou évaluer un risque assurantiel",
      "Conseiller une banque, une compagnie d'assurance ou une entreprise sur ses obligations",
      "Poursuivre en Master (IJBA, Ingénierie Juridique Bancaire, Ingénierie Juridique des Assurances)",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le secteur bancaire et assurantiel comorien est restreint mais structuré (banques commerciales, institutions de microfinance, quelques assureurs), avec un besoin réel de juristes spécialisés en conformité et en gestion du risque de crédit. Les postes existent surtout dans les rares établissements financiers formels du pays.",
      employeursPotentiels: [
        "Banques commerciales",
        "Institutions de microfinance",
        "Compagnies et courtiers d'assurance",
        "Cabinets de conseil juridique et fiscal",
      ],
      conseil:
        "Un Master reste quasi indispensable pour accéder aux postes de juriste bancaire ou d'assurance : le nombre d'employeurs financiers formels aux Comores est restreint mais stable, et une expérience régionale en Afrique de l'Ouest reste une option à envisager avant le retour.",
    },
    etablissements: [
      {
        institut: "UDB - Université Dakar-Bourguiba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Ingénierie Juridique Banque-Assurance (IJBA)",
        fraisDeScolarite: {
          montant: "40 000 F d'inscription + 40 000 F/mois",
          detail:
            "Grille publiée sur la plaquette UDB du cycle Licence Génie Juridique (2026) : 40 000 FCFA de droit d'inscription et 40 000 FCFA de mensualité, sur 10 mois de formation (dont un mois de rattrapage, session NAWET = ETE) — soit environ 440 000 FCFA/an. Un régime particulier existe pour les étudiants travailleurs, à préciser auprès de l'établissement.",
        },
        sourceOfficielle: { libelle: "udb.sn", url: "https://www.udb.sn/" },
        noteDAdmission:
          "Admission sur dossier : extrait de naissance, carte nationale d'identité, diplôme ou attestation de BAC, relevé de notes du BAC, relevé de notes de la classe de Terminale (documents à photocopier et légaliser), 2 photos d'identité. École privée laïque, agréée par l'État du Sénégal (visa n° 004465/MEN/DES du 10/10/1995, agrément définitif du 18/05/2009, habilitation à délivrer des diplômes du système LMD depuis le 18/01/2023) et reconnue CAMES. Accréditation ANAQ-Sup annoncée sur la plaquette de l'école — à confirmer sur anaqsup.sn avant inscription, cette filière n'ayant pas été retrouvée séparément dans la base consultée. Taux de réussite annoncé par l'école : 82% en cycle Licence, 95% en Master. Contact : 12 Avenue Bourguiba, BP 15744 Dakar-Fann, +221 33 825 36 11, contact@udb-sn.com.",
      },
    ],
  },
  {
    id: "udb-sgdai",
    filiere: "Sciences de Gestion et Droit des Affaires Internationales (SGDAI)",
    description:
      "Licence de droit des affaires à dimension internationale : tronc commun juridique en L1-L2 (droit civil, droit public, institutions judiciaires), puis spécialisation en L3 (droit international public et privé, droit communautaire, propriété industrielle, relations internationales). Proposée par l'Université Dakar-Bourguiba (UDB), au sein de l'Unité de Formation et de Recherche Génie Juridique.",
    debouches: [
      "Juriste d'affaires",
      "Avocat d'affaires",
      "Conseiller juridique",
      "Administrateur de société",
    ],
    competencesAcquises: [
      "Droit civil, droit des obligations et droit des biens (tronc commun L1-L2)",
      "Droit international public et privé, droit communautaire",
      "Droit des sûretés, droit des procédures collectives et propriété industrielle",
      "Fiscalité des affaires, gestion financière et économie de l'entreprise",
      "Anglais juridique et relations internationales",
    ],
    missionsConcretes: [
      "Rédiger et sécuriser des contrats internationaux",
      "Conseiller une entreprise sur ses opérations transfrontalières et communautaires",
      "Suivre le contentieux et les procédures collectives d'une société",
      "Poursuivre en Master (SGDAI, Gestion Juridique des Affaires, Droit Maritime)",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le droit des affaires internationales trouve peu de débouchés institutionnels directs aux Comores, mais reste utile pour accompagner les entreprises exportatrices, les organismes régionaux (COI, coopération) et les rares filiales de groupes internationaux présentes dans le pays.",
      employeursPotentiels: [
        "Organismes régionaux et de coopération (COI, agences internationales)",
        "Entreprises d'import-export",
        "Cabinets d'avocats d'affaires",
        "Administration et douanes",
      ],
      conseil:
        "Un Master reste indispensable pour la plupart des débouchés. Le droit maritime, accessible via le Master Droit Maritime, peut être une spécialisation différenciante pour un pays insulaire comme les Comores.",
    },
    etablissements: [
      {
        institut: "UDB - Université Dakar-Bourguiba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Licence en Sciences de Gestion et Droit des Affaires Internationales (SGDAI)",
        fraisDeScolarite: {
          montant: "40 000 F d'inscription + 40 000 F/mois",
          detail:
            "Grille publiée sur la plaquette UDB du cycle Licence Génie Juridique (2026) : 40 000 FCFA de droit d'inscription et 40 000 FCFA de mensualité, sur 10 mois de formation (dont un mois de rattrapage, session NAWET = ETE) — soit environ 440 000 FCFA/an. Un régime particulier existe pour les étudiants travailleurs, à préciser auprès de l'établissement.",
        },
        sourceOfficielle: { libelle: "udb.sn", url: "https://www.udb.sn/" },
        noteDAdmission:
          "Admission sur dossier : extrait de naissance, carte nationale d'identité, diplôme ou attestation de BAC, relevé de notes du BAC, relevé de notes de la classe de Terminale (documents à photocopier et légaliser), 2 photos d'identité. École privée laïque, agréée par l'État du Sénégal (visa n° 004465/MEN/DES du 10/10/1995, agrément définitif du 18/05/2009, habilitation à délivrer des diplômes du système LMD depuis le 18/01/2023) et reconnue CAMES. Accréditation ANAQ-Sup annoncée sur la plaquette de l'école — à confirmer sur anaqsup.sn avant inscription, cette filière n'ayant pas été retrouvée séparément dans la base consultée. Taux de réussite annoncé par l'école : 82% en cycle Licence, 95% en Master. Contact : 12 Avenue Bourguiba, BP 15744 Dakar-Fann, +221 33 825 36 11, contact@udb-sn.com.",
      },
    ],
  },
  {
    id: "droit-licence-generaliste",
    filiere: "Droit",
    description:
      "Licence généraliste en droit (droit civil, public, des affaires), avec poursuite en master conseillée pour la plupart des débouchés. Proposée aussi bien en faculté publique qu'en école privée à Dakar.",
    debouches: ["Avocat", "Juriste d'entreprise", "Notaire", "Administrateur civil"],
    competencesAcquises: [
      "Droit civil, droit des obligations et droit des biens",
      "Droit public, constitutionnel et administratif",
      "Droit des affaires et droit régional OHADA",
      "Méthodologie juridique et argumentation",
      "Procédure et institutions judiciaires",
    ],
    missionsConcretes: [
      "Rédiger et sécuriser des contrats",
      "Conseiller une entreprise, une famille ou une administration",
      "Préparer les concours de la magistrature et de l'administration",
      "Poursuivre en master, condition d'accès à la plupart des métiers",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le droit foncier, les successions et le droit OHADA des affaires sont des besoins permanents aux Comores. Les postes institutionnels restent rares et disputés, mais un diplôme de droit dakarois y bénéficie d'une bonne reconnaissance.",
      employeursPotentiels: [
        "Cabinets d'avocats et études notariales",
        "Banques, assurances, entreprises",
        "Administration, justice, collectivités",
        "ONG (gouvernance, droits humains)",
      ],
      conseil:
        "Comparez la faculté publique (UCAD, peu coûteuse mais amphithéâtres surchargés) à l'école privée (ISDD, frais publiés et effectifs plus resserrés) selon votre capacité à travailler en autonomie. Le droit foncier et le droit OHADA sont les spécialisations les plus utiles au retour ; prévoyez un master.",
    },
    etablissements: [
      {
        institut: "UCAD - Faculté des Sciences Juridiques et Politiques",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en droit (privé ou public)",
        fraisDeScolarite: {
          montant: "25 000 à 200 000 F / an selon la source",
          detail:
            "Le portail d'orientation CAMPUSEN affiche 25 000 FCFA d'inscription + 500 FCFA de frais de transfert pour la procédure de candidature, tandis que des sources antérieures mentionnent 200 000 FCFA/an de scolarité pour les étudiants étrangers en faculté (contre 25 000 FCFA pour les Sénégalais et boursiers). Ces deux montants ne se recoupent pas clairement : confirmez le tarif exact applicable auprès de la DAP (dap@ucad.edu.sn) avant de bâtir un budget. Frais de dossier de 5 000 FCFA non remboursables.",
        },
        sourceOfficielle: {
          libelle: "ucad.sn",
          url: "https://www.ucad.sn/titulaire-de-baccalaureats-etrangers",
        },
        noteDAdmission:
          "Procédure spécifique pour les titulaires d'un baccalauréat étranger via le portail CAMPUSEN (orientation.campusen.sn) : création de compte, dépôt des relevés de notes et de l'attestation de baccalauréat, puis classement des vœux. Effectifs très nombreux : l'autonomie de travail est indispensable. Accréditation : cette licence n'apparaît pas séparément dans la base ANAQ-Sup consultée (diplôme public reconnu nationalement).",
      },
      {
        institut: "ISDD - Institut Supérieur de Droit de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en droit, accréditée ANAQ-Sup (Master possible)",
        fraisDeScolarite: {
          montant: "165 000 F d'inscription + mensualités (470 000 à 620 000 F/an)",
          detail:
            "Grille publiée par l'ISDD : 165 000 FCFA d'inscription à chaque niveau, puis une scolarité payable en 8 mensualités croissantes selon l'année : environ 470 000 FCFA de scolarité totale en L1, 570 000 FCFA en L2 et 620 000 FCFA en L3 (montants annuels globaux, à confirmer précisément auprès de l'école pour l'année en cours).",
        },
        sourceOfficielle: { libelle: "isdd.edu.sn", url: "https://isdd.edu.sn/licence-en-droit/" },
        noteDAdmission:
          "École privée fondée en 2005 par le professeur Babacar Guèye, avec plus de 1 000 étudiants de 18 nationalités. Admission sur dossier après le baccalauréat, toutes séries. Pré-inscription en ligne sur le site de l'école (contact : +221 33 827 48 36, contact@isdd.edu.sn). Accréditation ANAQ-Sup confirmée (liste officielle des programmes accrédités) ; l'école est par ailleurs reconnue CAMES au niveau institutionnel.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Sciences Juridiques (spécialité Droit Public ou Droit Privé)",
        fraisDeScolarite: {
          montant: "110 000 F d'inscription + 60 000 F/mois en L1 (jusqu'à 130 000/70 000 en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Droit & Gestion » : L1 = 110 000 FCFA d'inscription + 60 000 FCFA/mois (650 000 FCFA/an) ; L2 = 120 000 + 65 000/mois (705 000 FCFA/an) ; L3 = 130 000 + 70 000/mois (760 000 FCFA/an) — soit environ 2 115 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/uahb-universite-amadou-hampate-ba-16/",
        },
        noteDAdmission:
          "Troisième établissement du Groupe Scolaire Jean de la Fontaine (SUARL dirigée par Michel Claver Gbaya), université privée laïque depuis 2006, habilitée à délivrer des diplômes LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019). Le parcours Droit Public est accrédité ANAQ-Sup et CAMES depuis le 30/10/2021 ; le parcours Droit Privé est habilité mais son accréditation ANAQ-Sup était encore en attente de résultats d'après le site de l'école — à confirmer avant inscription. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
  {
    id: "ugb-droit-prive",
    filiere: "Droit Privé",
    description:
      "Licence en droit privé de l'UFR Sciences Juridiques et Politiques, avec deux parcours de spécialisation (judiciaire/contentieux, entreprise/affaires). Campus universitaire public avec logement étudiant à Saint-Louis.",
    debouches: ["Avocat", "Juriste d'entreprise", "Notaire", "Magistrat"],
    competencesAcquises: [
      "Droit civil : contrats, famille, successions, biens",
      "Droit des affaires et droit du travail",
      "Procédure civile et pénale, techniques de plaidoirie",
      "Méthodologie juridique : consultation, note de synthèse, commentaire d'arrêt",
      "Droit régional des affaires (OHADA)",
    ],
    missionsConcretes: [
      "Rédiger et sécuriser des contrats",
      "Conseiller une entreprise ou une famille sur ses droits",
      "Défendre un client devant un tribunal (après le barreau)",
      "Traiter les dossiers fonciers, successions et litiges commerciaux",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Les litiges fonciers et successoraux sont omniprésents aux Comores, et le droit des affaires OHADA s'applique directement. Les postes institutionnels (magistrature, administration) sont rares et très demandés, mais le conseil juridique privé reste peu occupé.",
      employeursPotentiels: [
        "Cabinets d'avocats et études notariales",
        "Banques, assurances, entreprises (juriste interne)",
        "Administration, justice, collectivités",
        "ONG (droits humains, gouvernance)",
      ],
      conseil:
        "Le droit foncier et le droit OHADA sont les deux spécialisations les plus utiles au retour. Prévoyez un Master : la licence seule ouvre peu de portes.",
    },
    etablissements: [
      {
        institut: "UGB - Université Gaston Berger (UFR SJP)",
        ville: "Saint-Louis",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en droit privé (Master requis pour les concours)",
        fraisDeScolarite: {
          montant: "Droits publics",
          detail:
            "Université publique : les droits d'inscription sont sans commune mesure avec le privé, mais l'UGB ne publie pas le tarif applicable aux étudiants étrangers. À titre de repère, l'UCAD demande autour de 25 000 à 200 000 FCFA par an aux étrangers en licence selon la source consultée. Le campus dispose de logements étudiants, ce qui réduit fortement le budget vie.",
        },
        sourceOfficielle: {
          libelle: "ugb.sn",
          url: "https://www.ugb.sn/fr/licences-juridiques-politiques-et-de-ladministration",
        },
        noteDAdmission:
          "L'UGB annonce une sélection automatique en premier cycle pour tout titulaire du baccalauréat ou d'un titre équivalent, dans la limite des places. Accréditation : cette licence n'apparaît pas séparément dans la base ANAQ-Sup consultée (diplôme public reconnu nationalement, comme la plupart des licences généralistes de facultés publiques).",
      },
    ],
  },
  {
    id: "ugb-information-communication",
    filiere: "Information et Communication",
    description:
      "Licence de l'UFR Civilisations, Religions, Arts et Communication. L'UFR propose aussi infographie, métiers des arts et de la culture, et langues, ainsi qu'une licence professionnelle en journalisme.",
    debouches: [
      "Journaliste",
      "Chargé de communication",
      "Community manager",
      "Attaché de presse",
    ],
    competencesAcquises: [
      "Théories de l'information et analyse des médias",
      "Techniques de rédaction : article, communiqué, rapport, discours",
      "Communication institutionnelle et relations presse",
      "Bases du journalisme : enquête, interview, écriture web",
      "Communication numérique et réseaux sociaux",
    ],
    missionsConcretes: [
      "Gérer la communication et les réseaux sociaux d'une organisation",
      "Écrire et corriger tous les contenus d'une institution",
      "Produire des reportages et des articles de presse",
      "Organiser une campagne de sensibilisation",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "La communication professionnelle est encore peu structurée aux Comores : c'est un terrain à occuper, notamment auprès des ONG et des projets de développement, qui ont tous besoin de rendre compte de leur action. L'enseignement du français reste par ailleurs un débouché sûr.",
      employeursPotentiels: [
        "ONG et agences de coopération (chargé de communication)",
        "Médias, radios, presse en ligne",
        "Services de communication des ministères",
        "Établissements scolaires (enseignement du français)",
      ],
      conseil:
        "Ajoutez une compétence numérique concrète (montage vidéo simple, design, rédaction web) : c'est ce qui fait la différence entre un profil littéraire et un communicant employable.",
    },
    etablissements: [
      {
        institut: "UGB - Université Gaston Berger (UFR CRAC)",
        ville: "Saint-Louis",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en information et communication",
        fraisDeScolarite: {
          montant: "Droits publics",
          detail:
            "Université publique : droits d'inscription réduits, tarif étranger non publié en ligne. Logement étudiant disponible sur le campus de Saint-Louis, où le coût de la vie est nettement inférieur à Dakar.",
        },
        sourceOfficielle: {
          libelle: "ugb.sn",
          url: "https://www.ugb.sn/fr/toutes-nos-licences",
        },
        noteDAdmission:
          "Accréditation : cette licence n'apparaît pas séparément dans la base ANAQ-Sup consultée (diplôme public reconnu nationalement).",
      },
    ],
  },
  {
    id: "cesti-journalisme",
    filiere: "Journalisme",
    description:
      "École de journalisme de référence en Afrique francophone, fondée en 1965 avec l'appui de l'UNESCO. Plus de 1 400 diplômés issus de 21 nationalités depuis sa création. Formation pratique en presse écrite, radio, télévision, multimédia et photojournalisme.",
    debouches: [
      "Journaliste presse écrite ou web",
      "Journaliste radio/télévision",
      "Photojournaliste",
      "Chargé de communication médias",
    ],
    competencesAcquises: [
      "Techniques rédactionnelles : enquête, reportage, interview",
      "Pratique radio, télévision et photojournalisme",
      "Écriture web et gestion de contenus multimédias",
      "Déontologie et droit de la presse",
      "Conduite d'un projet d'investigation en fin de cursus",
    ],
    missionsConcretes: [
      "Produire un reportage radio, TV ou écrit de bout en bout",
      "Couvrir l'actualité politique, économique ou sociale d'un pays",
      "Mener une enquête journalistique documentée",
      "Travailler pour un média national ou une agence de presse",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Le CESTI forme les journalistes de référence pour plusieurs pays d'Afrique francophone. Aux Comores, les médias professionnels sont peu nombreux mais en développement (radios, presse en ligne) : un diplôme reconnu régionalement distingue immédiatement un candidat.",
      employeursPotentiels: [
        "Radios et télévisions nationales",
        "Presse en ligne et agences de presse",
        "ONG et organisations internationales (communication)",
        "Correspondance pour médias étrangers",
      ],
      conseil:
        "Concours d'entrée exigeant : préparez-le sérieusement (culture générale, actualité, épreuves rédactionnelles). C'est l'un des diplômes les mieux reconnus de la sous-région pour ce métier.",
    },
    etablissements: [
      {
        institut: "CESTI - Centre d'Études des Sciences et Techniques de l'Information (UCAD)",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Diplôme Supérieur de Journalisme (équivalent Licence)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Centre public rattaché à l'UCAD : les frais spécifiques au CESTI ne sont pas publiés en ligne. Contactez cesti@ucad.edu.sn pour connaître le montant applicable aux candidats étrangers.",
        },
        sourceOfficielle: { libelle: "cesti.ucad.sn", url: "https://cesti.ucad.sn/" },
        noteDAdmission:
          "Admission par concours (présélection sur dossier puis épreuves écrites), ouvert à toutes nationalités, sans distinction, dans la limite des places disponibles. Calendrier annuel à surveiller sur le site du CESTI. Accréditation : ce diplôme n'apparaît pas séparément dans la base ANAQ-Sup consultée (le CESTI est une composante publique de l'UCAD, dont l'école doctorale a fait l'objet d'une auto-évaluation ANAQ-Sup, mais pas ce diplôme précis).",
      },
    ],
  },
];
