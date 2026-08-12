export type NiveauDeDemande = "Forte" | "Moyenne" | "À construire";

export interface PerspectivesAuxComores {
  /** Appréciation qualitative du marché comorien pour cette filière. */
  niveauDeDemande: NiveauDeDemande;
  resume: string;
  employeursPotentiels: string[];
  conseil: string;
}

export interface SourceOfficielle {
  libelle: string;
  url: string;
}

export type StatutEtablissement = "Public" | "Privé";

export interface FraisDeScolarite {
  /** Montant court affiché sur la carte. "Non publié" si l'école ne communique pas. */
  montant: string;
  /** Détail du montant et provenance de l'information. */
  detail: string;
}

/**
 * Un établissement précis qui propose une filière donnée.
 * Plusieurs écoles peuvent proposer la même filière : chacune a ses propres
 * frais, conditions d'admission et source officielle, sans dupliquer la fiche
 * de filière elle-même.
 */
export interface EtablissementProposant {
  institut: string;
  ville: string;
  statutEtablissement: StatutEtablissement;
  bacsCompatibles: string[];
  dureeEnAnnees: number;
  diplomePrepare: string;
  fraisDeScolarite: FraisDeScolarite;
  /** Site officiel de l'établissement, pour vérification par l'étudiant. */
  sourceOfficielle: SourceOfficielle;
  /** Précision d'accès propre à cet établissement (admission, accréditation, etc.). */
  noteDAdmission?: string;
}

export interface Formation {
  id: string;
  filiere: string;
  description: string;
  debouches: string[];
  /** Ce que l'on apprend concrètement pendant la formation. */
  competencesAcquises: string[];
  /** Ce que la formation permet de faire une fois diplômé. */
  missionsConcretes: string[];
  perspectivesAuxComores: PerspectivesAuxComores;
  /** Un ou plusieurs établissements proposant cette même filière. */
  etablissements: EtablissementProposant[];
}

export const TYPES_DE_BACCALAUREAT = [
  {
    valeur: "Scientifique",
    libelle: "Bac Scientifique (S)",
    abreviation: "Bac S",
  },
  {
    valeur: "Littéraire",
    libelle: "Bac Littéraire (L)",
    abreviation: "Bac L",
  },
] as const;

/** Mois de la dernière vérification des informations sur les sites officiels. */
export const DATE_DE_VERIFICATION = "août 2026";
