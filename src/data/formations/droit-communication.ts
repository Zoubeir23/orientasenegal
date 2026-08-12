import type { Formation } from "@/types/formation";

/**
 * Droit, journalisme et communication.
 * "Droit" (licence généraliste) regroupe UCAD et ISDD, qui proposent la même
 * filière. UGB Droit Privé reste distincte car explicitement spécialisée.
 */
export const formationsDroitCommunication: Formation[] = [
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
