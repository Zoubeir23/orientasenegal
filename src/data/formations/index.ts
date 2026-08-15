import type { Formation } from "@/types/formation";
import { formationsInformatiqueTelecoms } from "./informatique-telecoms";
import { formationsDroitCommunication } from "./droit-communication";
import { formationsIngenierieBtpEnergie } from "./ingenierie-btp-energie";
import { formationsGestionCommerce } from "./gestion-commerce";
import { formationsSanteAgroTourisme } from "./sante-agro-tourisme";
import { formationsSante } from "./sante";

/**
 * Annuaire tenu par l'AEMS.
 *
 * Établissements et intitulés de filières vérifiés sur les sites officiels
 * (voir `sourceOfficielle` de chaque entrée). Les appréciations du marché
 * comorien restent l'avis de l'association, pas des statistiques officielles.
 *
 * Le fichier est découpé par domaine (src/data/formations/*.ts) pour rester
 * lisible : chaque domaine propose au moins deux établissements quand une
 * alternative crédible existe, plutôt qu'un seul institut par filière.
 */
export const formations: Formation[] = [
  ...formationsInformatiqueTelecoms,
  ...formationsDroitCommunication,
  ...formationsIngenierieBtpEnergie,
  ...formationsGestionCommerce,
  ...formationsSanteAgroTourisme,
  ...formationsSante,
];
