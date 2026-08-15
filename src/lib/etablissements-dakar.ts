import type { Formation } from "@/types/formation";
import { formations } from "@/data/formations";

/**
 * L'annuaire ne présente que les établissements de Dakar et de son
 * agglomération (Diamniadio, Keur Massar). Les données brutes conservent les
 * autres villes : le filtrage se fait ici, pour pouvoir rouvrir la couverture
 * plus tard sans réécrire les fiches.
 */
const VILLES_DE_L_AGGLOMERATION_DE_DAKAR = ["dakar", "diamniadio"];

export function estDansLAgglomerationDeDakar(ville: string): boolean {
  const villeNormalisee = ville.toLowerCase();
  return VILLES_DE_L_AGGLOMERATION_DE_DAKAR.some((villeDeReference) =>
    villeNormalisee.includes(villeDeReference)
  );
}

/**
 * Retire les établissements hors Dakar, puis les filières qui n'ont plus
 * aucun établissement. Ne modifie jamais les objets d'origine.
 */
export function filtrerSurDakar(
  formationsAFiltrer: readonly Formation[]
): Formation[] {
  return formationsAFiltrer
    .map((formation) => ({
      ...formation,
      etablissements: formation.etablissements.filter((etablissement) =>
        estDansLAgglomerationDeDakar(etablissement.ville)
      ),
    }))
    .filter((formation) => formation.etablissements.length > 0);
}

export const formationsDeDakar: Formation[] = filtrerSurDakar(formations);
