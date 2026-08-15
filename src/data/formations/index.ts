import type { Formation } from "@/types/formation";
import { formationsInformatiqueTelecoms } from "./informatique-telecoms";
import { formationsSante } from "./sante";
import { formationsIngenierieBtpEnergie } from "./ingenierie-btp-energie";
import { formationsGestionCommerce } from "./gestion-commerce";
import { formationsDroitCommunication } from "./droit-communication";
import { formationsAgroTourismeAudiovisuel } from "./agro-tourisme-audiovisuel";

/**
 * Annuaire tenu par l'AEMS.
 *
 * Établissements et intitulés de filières vérifiés sur les sites officiels
 * (voir `sourceOfficielle` de chaque entrée). Les appréciations du marché
 * comorien restent l'avis de l'association, pas des statistiques officielles.
 *
 * Un fichier par domaine, dans le même ordre que DOMAINES (src/data/domaines.ts)
 * pour que les deux listes restent faciles à confronter. Une filière proposée
 * par plusieurs écoles reste une seule fiche, avec plusieurs établissements.
 */
export const formations: Formation[] = [
  ...formationsInformatiqueTelecoms,
  ...formationsSante,
  ...formationsIngenierieBtpEnergie,
  ...formationsGestionCommerce,
  ...formationsDroitCommunication,
  ...formationsAgroTourismeAudiovisuel,
];
