import type { Formation } from "@/types/formation";

/**
 * Regroupement des filières par domaine d'études.
 * Un domaine = une section de la page Filières, avec sa couleur d'accent.
 * Le classement se fait par identifiant de filière : les fiches restent
 * inchangées et une filière ne peut pas se retrouver dans deux domaines.
 */
export interface Domaine {
  id: string;
  libelle: string;
  numero: string;
  accroche: string;
  /** Classe de fond appliquée au bandeau du domaine. */
  couleurDeFond: string;
  /** Classe de texte lisible sur ce fond. */
  couleurDeTexte: string;
  identifiantsDeFilieres: string[];
}

export const DOMAINES: Domaine[] = [
  {
    id: "informatique",
    libelle: "Informatique & Numérique",
    numero: "01",
    accroche:
      "Développement, réseaux, cybersécurité, données. Le seul domaine qui permet de vivre aux Comores en travaillant pour des clients étrangers.",
    couleurDeFond: "bg-magenta",
    couleurDeTexte: "text-blanc",
    identifiantsDeFilieres: [
      "esp-genie-logiciel",
      "isi-genie-informatique",
      "informatique-appliquee-gestion",
      "esmt-reseaux-telecoms",
      "uam-informatique",
    ],
  },
  {
    id: "sante",
    libelle: "Santé",
    numero: "02",
    accroche:
      "L'archipel manque structurellement de soignants : l'emploi au retour est quasi certain. À côté des cursus longs, plusieurs filières s'ouvrent en trois ans — et certaines acceptent le bac littéraire.",
    couleurDeFond: "bg-jaune",
    couleurDeTexte: "text-encre",
    identifiantsDeFilieres: [
      "medecine",
      "pharmacie",
      "soins-infirmiers",
      "sage-femme",
      "analyses-biologiques-medicales",
      "chirurgie-dentaire",
    ],
  },
  {
    id: "ingenierie",
    libelle: "Ingénierie, BTP & Énergie",
    numero: "03",
    accroche:
      "Construction, architecture, électricité et solaire. Des métiers de terrain qui s'exercent forcément sur place.",
    couleurDeFond: "bg-magenta-deep",
    couleurDeTexte: "text-blanc",
    identifiantsDeFilieres: [
      "genie-civil-batiment",
      "architecture-urbanisme",
      "esebat-electrotechnique",
    ],
  },
  {
    id: "gestion",
    libelle: "Gestion, Commerce & Logistique",
    numero: "04",
    accroche:
      "Comptabilité, management, marketing, transit. Le domaine le plus fourni à Dakar — donc celui où il faut une spécialité claire.",
    couleurDeFond: "bg-jaune",
    couleurDeTexte: "text-encre",
    identifiantsDeFilieres: [
      "comptabilite-controle-audit",
      "transport-logistique",
      "sciences-gestion-management",
      "marketing-communication-digitale",
    ],
  },
  {
    id: "droit-communication",
    libelle: "Droit & Communication",
    numero: "05",
    accroche:
      "Droit foncier, OHADA, journalisme. Des professions où le master est presque toujours nécessaire.",
    couleurDeFond: "bg-magenta-sombre",
    couleurDeTexte: "text-blanc",
    identifiantsDeFilieres: ["droit-licence-generaliste", "cesti-journalisme"],
  },
  {
    id: "arts-tourisme",
    libelle: "Audiovisuel, Hôtellerie & Tourisme",
    numero: "06",
    accroche:
      "Des formations courtes et très pratiques, qui permettent de facturer dès le retour au pays.",
    couleurDeFond: "bg-magenta",
    couleurDeTexte: "text-blanc",
    identifiantsDeFilieres: [
      "kourtrajme-dakar-audiovisuel",
      "hotellerie-restauration-tourisme",
    ],
  },
];

export interface DomaineAvecFormations extends Domaine {
  formations: Formation[];
}

/**
 * Répartit les filières dans leur domaine, en respectant l'ordre déclaré.
 * Une filière absente de tous les domaines est rattachée au dernier domaine
 * plutôt que d'être perdue silencieusement.
 */
export function regrouperParDomaine(
  formationsARegrouper: readonly Formation[]
): DomaineAvecFormations[] {
  const formationsParIdentifiant = new Map(
    formationsARegrouper.map((formation) => [formation.id, formation])
  );
  const identifiantsClasses = new Set(
    DOMAINES.flatMap((domaine) => domaine.identifiantsDeFilieres)
  );

  const domainesRemplis = DOMAINES.map((domaine) => ({
    ...domaine,
    formations: domaine.identifiantsDeFilieres
      .map((identifiant) => formationsParIdentifiant.get(identifiant))
      .filter((formation): formation is Formation => formation !== undefined),
  }));

  const formationsNonClassees = formationsARegrouper.filter(
    (formation) => !identifiantsClasses.has(formation.id)
  );

  if (formationsNonClassees.length > 0) {
    const dernierDomaine = domainesRemplis[domainesRemplis.length - 1];
    dernierDomaine.formations = [
      ...dernierDomaine.formations,
      ...formationsNonClassees,
    ];
  }

  return domainesRemplis.filter((domaine) => domaine.formations.length > 0);
}
