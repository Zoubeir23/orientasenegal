import type { Formation } from "@/types/formation";

/**
 * Droit, journalisme et communication.
 * Entrées vérifiées sur les sites officiels (UGB, UCAD).
 */
export const formationsDroitCommunication: Formation[] = [
  {
    id: "ugb-droit-prive",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Droits publics",
      detail:
        "Université publique : les droits d'inscription sont sans commune mesure avec le privé, mais l'UGB ne publie pas le tarif applicable aux étudiants étrangers. À titre de repère, l'UCAD demande autour de 25 000 à 200 000 FCFA par an aux étrangers en licence selon la source consultée (voir la fiche UCAD ci-dessous). Le campus dispose de logements étudiants, ce qui réduit fortement le budget vie.",
    },
    filiere: "Droit Privé",
    institut: "UGB - Université Gaston Berger (UFR SJP)",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "Licence en droit privé de l'UFR Sciences Juridiques et Politiques, avec deux parcours de spécialisation (judiciaire/contentieux, entreprise/affaires). Campus universitaire public avec logement étudiant à Saint-Louis.",
    debouches: ["Avocat", "Juriste d'entreprise", "Notaire", "Magistrat"],
    ville: "Saint-Louis",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence CAMES en droit privé (Master requis pour les concours)",
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
    sourceOfficielle: {
      libelle: "ugb.sn",
      url: "https://www.ugb.sn/fr/licences-juridiques-politiques-et-de-ladministration",
    },
    noteDAdmission:
      "L'UGB annonce une sélection automatique en premier cycle pour tout titulaire du baccalauréat ou d'un titre équivalent, dans la limite des places.",
  },
  {
    id: "ucad-fsjp-droit",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "25 000 à 200 000 F / an selon la source",
      detail:
        "Le portail d'orientation CAMPUSEN affiche 25 000 FCFA d'inscription + 500 FCFA de frais de transfert pour la procédure de candidature, tandis que des sources antérieures mentionnent 200 000 FCFA/an de scolarité pour les étudiants étrangers en faculté (contre 25 000 FCFA pour les Sénégalais et boursiers). Ces deux montants ne se recoupent pas clairement : confirmez le tarif exact applicable auprès de la DAP (dap@ucad.edu.sn) avant de bâtir un budget. Frais de dossier de 5 000 FCFA non remboursables.",
    },
    filiere: "Droit",
    institut: "UCAD - Faculté des Sciences Juridiques et Politiques",
    bacsCompatibles: ["Littéraire", "Scientifique"],
    description:
      "La plus ancienne faculté de droit d'Afrique de l'Ouest francophone, au cœur de Dakar. Effectifs très nombreux : l'autonomie de travail est indispensable.",
    debouches: ["Avocat", "Juriste d'entreprise", "Notaire", "Administrateur civil"],
    ville: "Dakar",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en droit (privé ou public)",
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
        "Le droit foncier, les successions et le droit OHADA des affaires sont des besoins permanents aux Comores. Les postes institutionnels restent rares et disputés, mais le diplôme de l'UCAD y bénéficie d'une bonne reconnaissance.",
      employeursPotentiels: [
        "Cabinets d'avocats et études notariales",
        "Banques, assurances, entreprises",
        "Administration, justice, collectivités",
        "ONG (gouvernance, droits humains)",
      ],
      conseil:
        "Alternative publique et peu coûteuse à l'UGB, mais avec des amphithéâtres surchargés : ne choisissez Dakar que si vous savez travailler seul. Prévoyez un master.",
    },
    sourceOfficielle: {
      libelle: "ucad.sn",
      url: "https://www.ucad.sn/titulaire-de-baccalaureats-etrangers",
    },
    noteDAdmission:
      "Procédure spécifique pour les titulaires d'un baccalauréat étranger via le portail CAMPUSEN (orientation.campusen.sn) : création de compte, dépôt des relevés de notes et de l'attestation de baccalauréat, puis classement des vœux.",
  },
  {
    id: "ugb-information-communication",
    statutEtablissement: "Public",
    fraisDeScolarite: {
      montant: "Droits publics",
      detail:
        "Université publique : droits d'inscription réduits, tarif étranger non publié en ligne. Logement étudiant disponible sur le campus de Saint-Louis, où le coût de la vie est nettement inférieur à Dakar.",
    },
    filiere: "Information et Communication",
    institut: "UGB - Université Gaston Berger (UFR CRAC)",
    bacsCompatibles: ["Littéraire"],
    description:
      "Licence de l'UFR Civilisations, Religions, Arts et Communication. L'UFR propose aussi infographie, métiers des arts et de la culture, et langues, ainsi qu'une licence professionnelle en journalisme.",
    debouches: [
      "Journaliste",
      "Chargé de communication",
      "Community manager",
      "Attaché de presse",
    ],
    ville: "Saint-Louis",
    dureeEnAnnees: 3,
    diplomePrepare: "Licence en information et communication",
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
    sourceOfficielle: {
      libelle: "ugb.sn",
      url: "https://ugb.sn/fr/toutes-nos-licences",
    },
  },
];
