import type { Formation } from "@/types/formation";

/**
 * Filières de santé proposées à Dakar.
 *
 * L'ENDSS, école publique de référence pour les métiers infirmiers, n'y figure
 * pas : ses concours directs exigent « être de nationalité sénégalaise »
 * (conditions d'admission publiées pour les parcours infirmier et sage-femme).
 * Cette voie étant fermée aux bacheliers comoriens, la faire figurer comme
 * établissement d'accueil serait trompeur. La faculté de l'UCAD, elle, accueille
 * les bacheliers étrangers ; le privé (ISSANTE) admet sur dossier.
 */
export const formationsSante: Formation[] = [
  {
    id: "medecine",
    filiere: "Médecine",
    description:
      "Cursus médical complet avec stages hospitaliers, menant au doctorat en médecine. Sélection très exigeante : mention fortement recommandée au baccalauréat. À Dakar, deux facultés publiques (UCAD, UIDT) et quatre universités privées.",
    debouches: ["Médecin généraliste", "Interne", "Chercheur en santé publique"],
    competencesAcquises: [
      "Sciences fondamentales : anatomie, physiologie, biochimie, pharmacologie",
      "Sémiologie et démarche diagnostique",
      "Stages hospitaliers dans les grands services",
      "Urgences, pédiatrie, gynécologie, maladies tropicales",
      "Santé publique et épidémiologie de terrain",
    ],
    missionsConcretes: [
      "Consulter, diagnostiquer et prescrire en cabinet ou en hôpital",
      "Prendre en charge les urgences et les maladies courantes",
      "Se spécialiser ensuite (chirurgie, pédiatrie, cardiologie…)",
      "Mener des campagnes de prévention et de vaccination",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Le manque de médecins est structurel aux Comores, en particulier hors de Moroni. Un médecin formé revient avec la certitude de trouver un poste, mais dans des conditions de travail exigeantes : plateaux techniques limités, évacuations sanitaires fréquentes.",
      employeursPotentiels: [
        "Hôpital El-Maarouf et centres hospitaliers régionaux",
        "Centres de santé de district",
        "ONG médicales et organisations internationales",
        "Cabinet privé",
      ],
      conseil:
        "Cursus long et très sélectif : ne vous engagez que si les sciences vous passionnent vraiment. Renseignez-vous dès la 3e année sur les équivalences et l'inscription à l'Ordre aux Comores. UIDT a l'accréditation la mieux documentée des deux facultés (acte ANAQ-Sup daté), mais l'UCAD reste la plus ancienne et la plus reconnue.",
    },
    etablissements: [
      {
        institut: "UCAD - Faculté de Médecine, Pharmacie et Odontostomatologie",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 7,
        diplomePrepare: "Doctorat en médecine",
        fraisDeScolarite: {
          montant: "200 000 F/an en licence à 1 000 000 F/an en doctorat (étrangers, à confirmer)",
          detail:
            "Droits d'inscription historiquement rapportés à la FMPOS de l'UCAD : 200 000 FCFA par an en licence pour les étudiants étrangers, contre 25 000 FCFA pour les Sénégalais et boursiers, et 1 000 000 FCFA pour le doctorat — montant qui recoupe le tarif général UCAD pour étrangers en faculté (confirmé sur plusieurs sources 2025-2026). Ce montant n'est cependant plus republié sur un document daté propre à la FMPOS : confirmez le tarif en vigueur auprès de sinfo.fmpo@ucad.edu.sn avant de bâtir un budget. S'ajoutent le logement, la nourriture et le matériel médical.",
        },
        sourceOfficielle: { libelle: "fmpos.ucad.sn", url: "https://fmpos.ucad.sn/" },
        noteDAdmission:
          "L'UCAD est ouverte aux étudiants étrangers dans la limite des places disponibles. Préinscription obligatoire en ligne sur preinscriptionenligne.ucad.sn. Accréditation : ce doctorat n'a pas été localisé directement dans la base ANAQ-Sup consultée ; la reconnaissance CAMES de l'UCAD est attestée indirectement (96,2 % de réussite aux évaluations CAMES 2025 rapportés par la presse), sans lien direct vers une fiche d'accréditation CAMES dédiée à ce diplôme précis.",
      },
      {
        institut: "UIDT - Université Iba Der Thiam de Thiès (UFR Santé)",
        ville: "Thiès",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 8,
        diplomePrepare: "Doctorat en médecine",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Deuxième faculté de médecine publique du Sénégal : le tarif applicable aux étudiants étrangers n'est pas publié en ligne. Contactez ufrsante@univ-thies.sn pour connaître le montant applicable aux candidats comoriens.",
        },
        sourceOfficielle: { libelle: "uidt.sn", url: "https://www.uidt.sn/medecine-generale/" },
        noteDAdmission:
          "Deuxième école de médecine publique du Sénégal (UFR Santé créée en 2008, premiers diplômés en 2017), propose aussi pharmacie, soins infirmiers et orthophonie. Admission des étudiants étrangers par test d'entrée spécifique (contact : ufrsante@univ-thies.sn). Accréditation confirmée : le Conseil Scientifique de l'ANAQ-Sup a accrédité ce doctorat par acte du 19 novembre 2020 (univ-thies.sn).",
      },
      {
        institut: "EUROMED Université",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 7,
        diplomePrepare: "Doctorat en médecine",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "EUROMED ne publie pas sa grille tarifaire en ligne. Établissement privé de sciences de la santé : le budget est sans commune mesure avec celui de la faculté publique. Demandez un devis écrit au +221 33 825 14 37 avant de vous engager.",
        },
        sourceOfficielle: {
          libelle: "euromed.sn",
          url: "https://www.euromed.sn/",
        },
        noteDAdmission:
          "Créée en octobre 2008, EUROMED est la première université privée sénégalaise à avoir délivré un doctorat en pharmacie reconnu par l'État et le CAMES. Doctorats de médecine et de pharmacie accrédités ANAQ-Sup. Admission sur dossier examiné par une commission, réservée aux titulaires d'un bac S1 ou S2 (ou diplôme jugé équivalent). Durée exacte du cursus à confirmer auprès de l'école.",
      },
      {
        institut: "IPFORMED - Institut Privé de Formation et de Recherches Médicales de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 8,
        diplomePrepare: "Doctorat en médecine (huit ans après le bac)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "IPFORMED ne publie pas ses tarifs en ligne. Cursus privé long (huit ans après le bac) : faites chiffrer la totalité du cursus, pas seulement la première année.",
        },
        sourceOfficielle: {
          libelle: "ipformed.sn",
          url: "https://ipformed.sn/",
        },
        noteDAdmission:
          "Créé en 2009, deux campus à Dakar (Sacré-Cœur III / VDN et Ouest-Foire). Accrédité ANAQ-Sup au niveau institutionnel depuis 2016, accréditation CAMES en cours, et autorisé à délivrer le titre d'État de docteur en médecine depuis mai 2023. Séries de baccalauréat acceptées à confirmer auprès de l'établissement.",
      },
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 8,
        diplomePrepare: "Diplôme d'État de Docteur en Médecine",
        fraisDeScolarite: {
          montant: "260 000 F d'inscription + 300 000 F/mois en Licence (jusqu'à 300 000 F/mois en Doctorat)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Médecine » (mensualité versée sur 9 mois) : Licence (L1-L2-L3) = 260 000 FCFA d'inscription + 300 000 FCFA/mois, soit 2 960 000 FCFA/an, chaque année ; Master (M1-M2) = 285 000 + 300 000/mois (2 985 000 FCFA/an) ; Doctorat (D1-D2-D3) = 300 000 + 300 000/mois (3 000 000 FCFA/an). S'ajoutent 300 000 FCFA de frais d'encadrement de thèse à partir de la 7e année, et 200 000 FCFA de frais de soutenance du Diplôme d'État en 8e année : un cursus complet dépasse 23 000 000 FCFA sur huit ans.",
        },
        sourceOfficielle: { libelle: "uahb.sn", url: "https://www.uahb.sn/" },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée par l'État du Sénégal à délivrer 22 diplômes du système LMD dont ce Diplôme d'État de Docteur en Médecine (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019). Statut d'accréditation ANAQ-Sup/CAMES spécifique à ce diplôme non confirmé dans les sources consultées — à vérifier directement auprès de l'école avant inscription, ce cursus étant le plus long et le plus coûteux du campus. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes de 2nde, 1ère et Terminale. Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
      {
        institut: "Université St. Christopher (UEIN - École de Médecine Iba Mar Diop)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 8,
        diplomePrepare: "Diplôme d'État de Docteur en Médecine",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Aucun tarif n'est publié dans la plaquette de l'école ni sur son site. Demandez la grille complète du cursus (Licence 3 ans + Master 2 ans + Doctorat 3 ans) par écrit avant de vous engager, en précisant le statut d'étudiant étranger.",
        },
        sourceOfficielle: {
          libelle: "universitestchristopher.net",
          url: "https://www.universitestchristopher.net/",
        },
        noteDAdmission:
          "Première université privée de sciences médicales du Sénégal, fondée en 2000 et inaugurée en 2003 par le Président de la République. Attention à la raison sociale : l'accréditation ANAQ-Sup (anaqsup.sn/accreditations/uein-universite-el-hadj-ibrahima-niasse-ecole-de-medecine-saint-christopher-iba-mar-diop-2/) est enregistrée sous le nom « UEIN - Université El Hadj Ibrahima Niasse / École de Médecine Saint Christopher Iba Mar Diop », distinct du nom commercial « Université St. Christopher » utilisé dans la communication de l'école — vérifiez la cohérence des documents avant de candidater. Accréditations ANAQ-Sup et CAMES annoncées par l'école, ainsi qu'une reconnaissance ECFMG revendiquée par l'école : selon la plaquette, elle rendrait les diplômés éligibles à demander la certification ECFMG (sous réserve des autres exigences applicables) pour candidater aux résidences accréditées ACGME aux États-Unis — l'ECFMG ne couvre pas l'accès aux résidences canadiennes, contrairement à ce que suggère la communication de l'école ; à vérifier directement auprès de l'ECFMG avant de bâtir un projet sur ce point. Deux rentrées par an (janvier et août). Stages cliniques en hôpitaux partenaires et centre de simulation avancé. Contact : Immeuble Nadiema, Point E, rue 7xb, Dakar ; +221 76 620 38 62 ; info@stchris.edu.",
      },
    ],
  },
  {
    id: "soins-infirmiers",
    filiere: "Soins Infirmiers",
    description:
      "Le métier le plus recruté du secteur santé, et l'un des rares cursus courts qui mène à l'hôpital. À Dakar, la voie ouverte aux bacheliers étrangers est le privé, où trois écoles accréditées se partagent la filière : les concours de l'école publique (ENDSS) sont réservés aux candidats sénégalais.",
    debouches: [
      "Infirmier d'État",
      "Infirmier de bloc opératoire",
      "Infirmier en santé communautaire",
      "Cadre de santé (après master)",
    ],
    competencesAcquises: [
      "Anatomie, physiologie et pharmacologie appliquées aux soins",
      "Soins infirmiers : injections, pansements, perfusions, surveillance",
      "Urgences, réanimation et gestes qui sauvent",
      "Hygiène hospitalière et prévention des infections",
      "Relation de soin, éthique et accompagnement du patient",
      "Stages cliniques en hôpital dès la première année",
    ],
    missionsConcretes: [
      "Prendre en charge les patients d'un service hospitalier au quotidien",
      "Administrer les traitements prescrits et surveiller leurs effets",
      "Tenir un poste de santé rural, souvent seul soignant sur place",
      "Mener des campagnes de vaccination et de sensibilisation",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "C'est probablement le diplôme de santé le plus sûr pour un retour aux Comores : les postes de santé, dispensaires et hôpitaux de district manquent de personnel qualifié dans les trois îles, bien davantage encore hors de Moroni. Contrairement à la médecine, le cursus est court et l'insertion rapide.",
      employeursPotentiels: [
        "Hôpital El-Maarouf et centres hospitaliers régionaux",
        "Postes de santé et centres de district",
        "ONG médicales et programmes de santé publique",
        "Cliniques et cabinets privés",
      ],
      conseil:
        "Vérifiez avant de vous inscrire que le diplôme de l'école choisie est reconnu par le ministère de la Santé sénégalais : c'est cette reconnaissance qui conditionne l'équivalence aux Comores. Une spécialisation (bloc opératoire, anesthésie, néonatalogie) vous rendra beaucoup plus rare au retour.",
    },
    etablissements: [
      {
        institut: "ISSANTE - Université Docteur Daouda Sow",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Diplôme d'Infirmier d'État (licence professionnelle en Sciences Infirmières également proposée)",
        fraisDeScolarite: {
          montant: "760 000 F / an",
          detail:
            "Grille affichée par l'école pour l'Infirmier d'État : 100 000 FCFA d'inscription puis 60 000 FCFA par mois, étalés de novembre à septembre, soit 760 000 FCFA sur l'année.",
        },
        sourceOfficielle: {
          libelle: "univ.issante.org",
          url: "https://univ.issante.org/campus-dakar1/",
        },
        noteDAdmission:
          "Admission sur dossier, ouverte aux titulaires du baccalauréat toutes séries. L'école propose aussi Assistant Infirmier d'État et des masters en sciences infirmières.",
      },
      {
        institut: "IPFORMED - Institut Privé de Formation et de Recherches Médicales de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Diplôme d'infirmier (assistant infirmier également proposé)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "IPFORMED ne publie pas ses tarifs en ligne. Cursus privé long (huit ans après le bac) : faites chiffrer la totalité du cursus, pas seulement la première année.",
        },
        sourceOfficielle: {
          libelle: "ipformed.sn",
          url: "https://ipformed.sn/",
        },
        noteDAdmission:
          "Département santé d'IPFORMED, distinct du cursus de médecine : formations d'infirmier, d'assistant infirmier et de sage-femme. Établissement accrédité ANAQ-Sup au niveau institutionnel. Durée et séries de baccalauréat acceptées à confirmer auprès de l'école.",
      },
      {
        institut: "SUP de Santé - Institut Supérieur des Sciences de la Santé",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Sciences Infirmières et Obstétricales, option Infirmier (BTS d'État également proposé)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "SUP de Santé ne publie pas ses tarifs en ligne. À titre de repère, l'Infirmier d'État à ISSANTE revient à 760 000 FCFA par an. Demandez la grille au campus du 4 VDN Mermoz Pyrotechnique.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/sup-de-sante-institut-superieur-des-sciences-de-la-sante/",
        },
        noteDAdmission:
          "Accréditation ANAQ-Sup confirmée pour cette licence précise (Sciences Infirmières et Obstétricales, option Infirmier). L'école délivre aussi des BTS d'État et des masters en sciences infirmières, biologie médicale et santé publique. Campus au 4 VDN Mermoz Pyrotechnique. Séries de baccalauréat acceptées à confirmer.",
      },
    ],
  },
  {
    id: "sage-femme",
    filiere: "Sage-femme et Sciences Obstétricales",
    description:
      "Suivi de grossesse, accouchement et santé de la mère et du nouveau-né. Profession très encadrée, accessible aux bacs L comme S.",
    debouches: [
      "Sage-femme d'État",
      "Maïeuticien",
      "Responsable de maternité",
      "Chargé de santé maternelle en ONG",
    ],
    competencesAcquises: [
      "Physiologie de la grossesse et de l'accouchement",
      "Consultations prénatales et dépistage des grossesses à risque",
      "Conduite d'un accouchement normal et gestion des urgences obstétricales",
      "Soins au nouveau-né et suivi post-natal",
      "Planification familiale et éducation à la santé",
    ],
    missionsConcretes: [
      "Suivre une femme de la première consultation jusqu'à l'accouchement",
      "Assurer les accouchements dans une maternité ou un poste de santé",
      "Repérer une complication à temps et organiser l'évacuation",
      "Animer des consultations de planification familiale",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "La santé maternelle et néonatale reste une priorité de santé publique dans l'archipel, et les maternités des îles fonctionnent souvent avec des effectifs insuffisants. Une sage-femme formée trouve un poste, y compris dans les zones rurales où les évacuations vers Moroni sont longues.",
      employeursPotentiels: [
        "Maternités hospitalières et centres de santé de district",
        "Postes de santé ruraux",
        "ONG et programmes de santé maternelle",
        "Cliniques privées",
      ],
      conseil:
        "L'ENDSS, école publique, réserve ses concours directs aux candidats de nationalité sénégalaise : pour un bachelier comorien, le privé est aujourd'hui la seule porte d'entrée à Dakar. Prévoyez ce budget dès le départ, et faites confirmer par écrit la reconnaissance du diplôme par le ministère de la Santé.",
    },
    etablissements: [
      {
        institut: "ISSANTE - Université Docteur Daouda Sow",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare:
          "Diplôme de Sage-Femme d'État (licence en Sciences Gynéco-Obstétricales également proposée)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'école affiche 760 000 FCFA par an pour l'Infirmier d'État (100 000 F d'inscription + 60 000 F par mois). Le tarif exact du cursus sage-femme est à confirmer auprès du service scolarité.",
        },
        sourceOfficielle: {
          libelle: "univ.issante.org",
          url: "https://univ.issante.org/campus-dakar1/",
        },
        noteDAdmission:
          "Admission sur dossier, baccalauréat toutes séries accepté. C'est la voie praticable pour un bachelier comorien, les concours publics de l'ENDSS étant réservés aux candidats sénégalais.",
      },
      {
        institut: "IPFORMED - Institut Privé de Formation et de Recherches Médicales de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Diplôme de sage-femme",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "IPFORMED ne publie pas ses tarifs en ligne. Cursus privé long (huit ans après le bac) : faites chiffrer la totalité du cursus, pas seulement la première année.",
        },
        sourceOfficielle: {
          libelle: "ipformed.sn",
          url: "https://ipformed.sn/",
        },
        noteDAdmission:
          "Département santé d'IPFORMED, distinct du cursus de médecine : formations d'infirmier, d'assistant infirmier et de sage-femme. Établissement accrédité ANAQ-Sup au niveau institutionnel. Durée et séries de baccalauréat acceptées à confirmer auprès de l'école.",
      },
      {
        institut: "SUP de Santé - Institut Supérieur des Sciences de la Santé",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence en Sciences Infirmières et Obstétricales, option Sage-femme (BTS d'État également proposé)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "SUP de Santé ne publie pas ses tarifs en ligne. À titre de repère, l'Infirmier d'État à ISSANTE revient à 760 000 FCFA par an. Demandez la grille au campus du 4 VDN Mermoz Pyrotechnique.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/sup-de-sante-institut-superieur-des-sciences-de-la-sante/",
        },
        noteDAdmission:
          "L'accréditation ANAQ-Sup consultée porte sur l'option Infirmier de cette licence ; pour l'option sage-femme, faites confirmer le statut par écrit. BTS d'État de sage-femme également proposé. Campus au 4 VDN Mermoz Pyrotechnique.",
      },
    ],
  },
  {
    id: "pharmacie",
    filiere: "Pharmacie",
    description:
      "Cursus long, à la faculté publique de l'UCAD ou dans l'une des trois universités privées de santé de Dakar. Débouche sur l'officine, l'industrie du médicament ou la biologie médicale.",
    debouches: [
      "Pharmacien d'officine",
      "Pharmacien hospitalier",
      "Contrôle qualité du médicament",
      "Grossiste-répartiteur",
    ],
    competencesAcquises: [
      "Chimie thérapeutique et pharmacologie",
      "Galénique : formulation et fabrication des médicaments",
      "Pharmacie clinique et conseil au patient",
      "Biologie médicale et toxicologie",
      "Législation pharmaceutique et gestion d'officine",
    ],
    missionsConcretes: [
      "Délivrer et sécuriser les prescriptions dans une officine",
      "Gérer les stocks de médicaments d'un hôpital ou d'un district",
      "Détecter les faux médicaments et les ruptures d'approvisionnement",
      "Ouvrir et gérer sa propre pharmacie",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Les Comores importent la totalité de leurs médicaments et la circulation de produits non contrôlés est un problème réel. Un pharmacien y exerce un rôle central, à l'officine comme dans les circuits d'approvisionnement publics. L'ouverture d'une officine reste par ailleurs l'un des projets les plus solides économiquement pour un diplômé de santé.",
      employeursPotentiels: [
        "Officines privées (salariat puis installation)",
        "Pharmacie hospitalière et centrale d'achat",
        "ONG et programmes d'approvisionnement en médicaments",
        "Contrôle sanitaire et administration de la santé",
      ],
      conseil:
        "Cursus long et exigeant en chimie : à ne viser qu'avec un bon dossier scientifique. Renseignez-vous tôt sur les conditions d'inscription à l'Ordre des pharmaciens aux Comores.",
    },
    etablissements: [
      {
        institut:
          "UCAD - Faculté de Médecine, Pharmacie et Odontostomatologie (FMPOS)",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 6,
        diplomePrepare: "Doctorat en pharmacie",
        fraisDeScolarite: {
          montant: "200 000 à 1 000 000 F / an (à confirmer)",
          detail:
            "Droits d'inscription en faculté à l'UCAD : 200 000 FCFA par an pour les étudiants étrangers contre 25 000 FCFA pour les Sénégalais, et 1 000 000 FCFA pour un doctorat — montant qui recoupe le tarif général UCAD pour étrangers en faculté (confirmé sur plusieurs sources 2025-2026). Ce montant n'est cependant plus republié sur un document daté propre à la FMPOS : confirmez auprès de sinfo.fmpo@ucad.edu.sn avant de bâtir un budget.",
        },
        sourceOfficielle: {
          libelle: "fmpos.ucad.sn",
          url: "https://fmpos.ucad.sn/",
        },
        noteDAdmission:
          "La faculté ouvre une période d'admission dédiée aux titulaires d'un baccalauréat étranger. Préinscription obligatoire sur preinscriptionenligne.ucad.sn. La durée exacte du cursus est à confirmer auprès de la scolarité.",
      },
      {
        institut: "EUROMED Université",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 6,
        diplomePrepare: "Doctorat en pharmacie",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "EUROMED ne publie pas sa grille tarifaire en ligne. Établissement privé de sciences de la santé : le budget est sans commune mesure avec celui de la faculté publique. Demandez un devis écrit au +221 33 825 14 37 avant de vous engager.",
        },
        sourceOfficielle: {
          libelle: "euromed.sn",
          url: "https://www.euromed.sn/",
        },
        noteDAdmission:
          "Créée en octobre 2008, EUROMED est la première université privée sénégalaise à avoir délivré un doctorat en pharmacie reconnu par l'État et le CAMES. Doctorats de médecine et de pharmacie accrédités ANAQ-Sup. Admission sur dossier examiné par une commission, réservée aux titulaires d'un bac S1 ou S2 (ou diplôme jugé équivalent). Durée exacte du cursus à confirmer auprès de l'école.",
      },
      {
        institut: "IPFORMED - Institut Privé de Formation et de Recherches Médicales de Dakar",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 8,
        diplomePrepare: "Doctorat en pharmacie (huit ans après le bac)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "IPFORMED ne publie pas ses tarifs en ligne. Cursus privé long (huit ans après le bac) : faites chiffrer la totalité du cursus, pas seulement la première année.",
        },
        sourceOfficielle: {
          libelle: "ipformed.sn",
          url: "https://ipformed.sn/",
        },
        noteDAdmission:
          "Créé en 2009, deux campus à Dakar (Sacré-Cœur III / VDN et Ouest-Foire). Accrédité ANAQ-Sup au niveau institutionnel depuis 2016, accréditation CAMES en cours, et autorisé à délivrer le titre d'État de docteur en médecine depuis mai 2023. Séries de baccalauréat acceptées à confirmer auprès de l'établissement.",
      },
      {
        institut: "Université St. Christopher (UEIN - École de Médecine Iba Mar Diop)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 6,
        diplomePrepare: "Diplôme d'État de Docteur en Pharmacie",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Aucun tarif n'est publié dans la plaquette de l'école ni sur son site. Demandez la grille complète du cursus (Licence 3 ans + Master 2 ans + Doctorat 1 an) par écrit avant de vous engager, en précisant le statut d'étudiant étranger.",
        },
        sourceOfficielle: {
          libelle: "universitestchristopher.net",
          url: "https://www.universitestchristopher.net/",
        },
        noteDAdmission:
          "Première université privée de sciences médicales du Sénégal, fondée en 2000 et inaugurée en 2003 par le Président de la République. Attention à la raison sociale : l'accréditation ANAQ-Sup (anaqsup.sn/accreditations/uein-universite-el-hadj-ibrahima-niasse-ecole-de-medecine-saint-christopher-iba-mar-diop-3/) est enregistrée sous le nom « UEIN - Université El Hadj Ibrahima Niasse / École de Médecine Saint Christopher Iba Mar Diop », distinct du nom commercial « Université St. Christopher » utilisé dans la communication de l'école — vérifiez la cohérence des documents avant de candidater. Accréditations ANAQ-Sup et CAMES annoncées par l'école. Officine de simulation et laboratoires modernes. Deux rentrées par an (janvier et août). Contact : Immeuble Nadiema, Point E, rue 7xb, Dakar ; +221 76 620 38 62 ; info@stchris.edu.",
      },
    ],
  },
  {
    id: "chirurgie-dentaire",
    filiere: "Chirurgie Dentaire",
    description:
      "Le volet odontostomatologie de la faculté de santé de l'UCAD, ou en université privée : soins dentaires, chirurgie buccale et prothèses.",
    debouches: [
      "Chirurgien-dentiste",
      "Odontologiste hospitalier",
      "Prothésiste (après spécialisation)",
    ],
    competencesAcquises: [
      "Anatomie dentaire et sciences fondamentales médicales",
      "Soins conservateurs : caries, dévitalisations, restaurations",
      "Chirurgie buccale et extractions",
      "Prothèses fixes et amovibles, orthodontie de base",
      "Travaux pratiques et stages cliniques encadrés",
    ],
    missionsConcretes: [
      "Diagnostiquer et soigner les pathologies bucco-dentaires",
      "Réaliser extractions, soins et prothèses en cabinet",
      "Prendre en charge les urgences dentaires à l'hôpital",
      "Ouvrir son propre cabinet dentaire",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "Les chirurgiens-dentistes sont peu nombreux dans l'archipel et concentrés à Moroni. La demande de soins existe mais la solvabilité des patients limite le marché : l'activité se construit surtout en cabinet privé, avec un investissement initial en équipement à prévoir.",
      employeursPotentiels: [
        "Cabinets dentaires privés",
        "Service d'odontologie hospitalier",
        "Cliniques privées",
      ],
      conseil:
        "Anticipez le coût du matériel : un fauteuil et un plateau technique représentent un investissement lourd. Négociez ce point avant de vous engager dans un projet d'installation au pays.",
    },
    etablissements: [
      {
        institut:
          "UCAD - Faculté de Médecine, Pharmacie et Odontostomatologie (FMPOS)",
        ville: "Dakar",
        statutEtablissement: "Public",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 6,
        diplomePrepare: "Doctorat en chirurgie dentaire",
        fraisDeScolarite: {
          montant: "200 000 à 1 000 000 F / an (à confirmer)",
          detail:
            "Mêmes droits d'inscription que les autres cursus de la faculté : 200 000 FCFA par an pour les étrangers en licence, 1 000 000 FCFA pour le doctorat — montant qui recoupe le tarif général UCAD pour étrangers en faculté (confirmé sur plusieurs sources 2025-2026), à confirmer auprès de la scolarité. S'y ajoute l'achat du matériel de travaux pratiques.",
        },
        sourceOfficielle: {
          libelle: "fmpos.ucad.sn",
          url: "https://fmpos.ucad.sn/",
        },
        noteDAdmission:
          "Admission ouverte aux bacheliers étrangers pendant la période dédiée, via preinscriptionenligne.ucad.sn. Durée exacte à confirmer auprès de la faculté.",
      },
      {
        institut: "Université St. Christopher (UEIN - École de Médecine Iba Mar Diop)",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 6,
        diplomePrepare: "Diplôme d'État de Docteur en Médecine Dentaire",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "Aucun tarif n'est publié dans la plaquette de l'école ni sur son site. Demandez la grille complète du cursus (Licence 3 ans + Master 2 ans + Doctorat 1 an) par écrit avant de vous engager, en précisant le statut d'étudiant étranger.",
        },
        sourceOfficielle: {
          libelle: "universitestchristopher.net",
          url: "https://www.universitestchristopher.net/",
        },
        noteDAdmission:
          "Première université privée de sciences médicales du Sénégal, fondée en 2000 et inaugurée en 2003 par le Président de la République. Attention à la raison sociale : l'accréditation ANAQ-Sup (anaqsup.sn/accreditations/uein-universite-el-hadj-ibrahima-niasse-ecole-de-medecine-saint-christopher-iba-mar-diop/) est enregistrée sous le nom « UEIN - Université El Hadj Ibrahima Niasse / École de Médecine Saint Christopher Iba Mar Diop », distinct du nom commercial « Université St. Christopher » utilisé dans la communication de l'école — vérifiez la cohérence des documents avant de candidater. Fauteuils dentaires ultra-modernes et formation sur fantômes dentaires avant les patients réels. Deux rentrées par an (janvier et août). Contact : Immeuble Nadiema, Point E, rue 7xb, Dakar ; +221 76 620 38 62 ; info@stchris.edu.",
      },
    ],
  },
  {
    id: "analyses-biologiques-medicales",
    filiere: "Analyses Biologiques Médicales",
    description:
      "Le laboratoire plutôt que le chevet du patient : prélèvements, examens et diagnostic biologique. Formation courte (BTS en deux ans) et très employable, avec une poursuite possible en licence puis master de biologie médicale.",
    debouches: [
      "Technicien de laboratoire",
      "Technicien supérieur en biologie médicale",
      "Responsable qualité en laboratoire",
    ],
    competencesAcquises: [
      "Prélèvements et traitement des échantillons",
      "Hématologie, biochimie, parasitologie et bactériologie",
      "Utilisation et maintenance des automates de laboratoire",
      "Contrôle qualité et biosécurité",
      "Interprétation et validation technique des résultats",
    ],
    missionsConcretes: [
      "Réaliser les analyses de sang, d'urine et de selles d'un hôpital",
      "Diagnostiquer le paludisme, les parasitoses et les infections courantes",
      "Faire fonctionner et entretenir un laboratoire de district",
      "Assurer le contrôle qualité des résultats rendus",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Forte",
      resume:
        "Aucun diagnostic sérieux sans laboratoire. Les structures de santé comoriennes manquent de techniciens formés, notamment pour faire tourner et entretenir les automates. Le cursus est court, ce qui en fait l'une des meilleures portes d'entrée dans la santé pour un bachelier qui ne vise pas sept ans d'études.",
      employeursPotentiels: [
        "Laboratoires hospitaliers et de district",
        "Laboratoires d'analyses privés",
        "ONG et programmes de lutte contre le paludisme et la tuberculose",
        "Contrôle sanitaire et laboratoires vétérinaires",
      ],
      conseil:
        "Filière courte, technique et directement transposable. Ajoutez-y la maintenance des équipements : aux Comores, celui qui sait réparer un automate est aussi précieux que celui qui sait l'utiliser.",
    },
    etablissements: [
      {
        institut: "ISSANTE - Université Docteur Daouda Sow",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique", "Littéraire"],
        dureeEnAnnees: 2,
        diplomePrepare: "BTS en Analyses Biologiques (trois options)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "L'école publie sa grille pour l'Infirmier d'État (760 000 FCFA par an) mais pas pour le BTS Analyses Biologiques : demandez le tarif au service scolarité.",
        },
        sourceOfficielle: {
          libelle: "univ.issante.org",
          url: "https://univ.issante.org/campus-dakar1/",
        },
        noteDAdmission:
          "Admission sur dossier. L'établissement accepte le baccalauréat toutes séries pour ses formations professionnelles ; confirmez pour l'option choisie.",
      },
      {
        institut: "SUP de Santé - Institut Supérieur des Sciences de la Santé",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Scientifique"],
        dureeEnAnnees: 2,
        diplomePrepare: "BTS d'État en Biologie (licence et master en biologie médicale également proposés)",
        fraisDeScolarite: {
          montant: "Non publié",
          detail:
            "SUP de Santé ne publie pas ses tarifs en ligne. À titre de repère, l'Infirmier d'État à ISSANTE revient à 760 000 FCFA par an. Demandez la grille au campus du 4 VDN Mermoz Pyrotechnique.",
        },
        sourceOfficielle: {
          libelle: "anaqsup.sn",
          url: "https://anaqsup.sn/accreditations/sup-de-sante-institut-superieur-des-sciences-de-la-sante/",
        },
        noteDAdmission:
          "École reconnue par l'État et accréditée ANAQ-Sup (accréditation vérifiée pour sa licence en sciences infirmières). Propose un BTS d'État en biologie, puis licence et master en biologie médicale. Séries de baccalauréat acceptées à confirmer.",
      },
    ],
  },
  {
    id: "uahb-sante-communautaire",
    filiere: "Santé Communautaire",
    description:
      "Licence professionnelle en santé publique, spécialité santé communautaire : prévention, éducation sanitaire et gestion de programmes de santé au niveau local. Formation courte (Bac+3), distincte des cursus cliniques longs (médecine, pharmacie). Proposée par l'Université Amadou Hampaté Ba (UAHB).",
    debouches: [
      "Agent de santé communautaire",
      "Chargé de programme de santé publique",
      "Animateur de prévention et d'éducation sanitaire",
      "Coordinateur de projet santé (ONG)",
    ],
    competencesAcquises: [
      "Santé publique et épidémiologie de base",
      "Éducation à la santé et animation de campagnes de prévention",
      "Gestion de programmes et de projets de santé communautaire",
      "Suivi-évaluation d'interventions sanitaires",
      "Travail en réseau avec les structures de santé locales",
    ],
    missionsConcretes: [
      "Animer une campagne de vaccination ou de sensibilisation dans un quartier ou un village",
      "Coordonner un programme de santé pour une ONG ou une collectivité",
      "Assurer le lien entre la population et les structures de santé",
      "Suivre les indicateurs de santé d'un district",
    ],
    perspectivesAuxComores: {
      niveauDeDemande: "Moyenne",
      resume:
        "La prévention et l'éducation sanitaire restent largement portées par les ONG et les programmes internationaux aux Comores, avec peu de postes salariés stables au niveau de l'État. Ce diplôme complète utilement un profil de terrain, notamment pour qui vise les projets de santé financés par les bailleurs plutôt que le soin clinique direct.",
      employeursPotentiels: [
        "ONG et programmes de santé publique",
        "Districts sanitaires et collectivités locales",
        "Organisations internationales (OMS, UNICEF, coopération)",
        "Structures de santé communautaire",
      ],
      conseil:
        "Ce diplôme ne remplace pas une formation clinique (infirmier, sage-femme) : il forme à la coordination et à la prévention. Combinez-le avec une expérience de terrain en ONG pendant vos études pour maximiser vos chances au retour.",
    },
    etablissements: [
      {
        institut: "UAHB - Université Amadou Hampaté Ba",
        ville: "Dakar",
        statutEtablissement: "Privé",
        bacsCompatibles: ["Littéraire", "Scientifique"],
        dureeEnAnnees: 3,
        diplomePrepare: "Licence Professionnelle en Santé Publique, filière Santé Communautaire",
        fraisDeScolarite: {
          montant: "100 000 F d'inscription + 90 000 F/mois en L1-L2 (150 000 F + 100 000 F/mois en L3)",
          detail:
            "Grille officielle UAHB 2024-2025, catégorie « Santé Communautaire » (mensualité versée sur 9 mois) : L1-L2 = 100 000 FCFA d'inscription + 90 000 FCFA/mois (910 000 FCFA/an, chaque année) ; L3 = 150 000 + 100 000/mois (1 050 000 FCFA/an) — soit environ 2 870 000 FCFA sur les trois ans. S'ajoutent 5 000 FCFA de frais de dossier en 1re année (15 000 FCFA à partir de la 2e) et 100 000 FCFA de frais de soutenance en L3.",
        },
        sourceOfficielle: {
          libelle: "uahb.sn",
          url: "https://www.uahb.sn/reconnaissance-cames/",
        },
        noteDAdmission:
          "Université privée laïque depuis 2006 (Groupe Scolaire Jean de la Fontaine), habilitée LMD par l'État du Sénégal (n°0092 RepSEN/Ensup-priv/HA/04 du 12/04/2019). D'après la page de reconnaissances de l'école, cette filière est accréditée ANAQ-Sup et CAMES depuis le 30/10/2021. Dossier : copie légalisée de la CNI ou du passeport, de l'attestation/diplôme du Bac, et des relevés de notes des années précédentes (2nde, 1ère, Terminale si inscription en médecine). Contact : Rocade Fann, Bel-Air (face Canal IV), Dakar ; +221 33 824 01 24 / +221 77 325 80 80 ; contact@uahb.sn.",
      },
    ],
  },
];
