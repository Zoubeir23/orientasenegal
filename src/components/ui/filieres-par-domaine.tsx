"use client";

import { useMemo, useState } from "react";
import type { Formation } from "@/types/formation";
import { regrouperParDomaine } from "@/data/domaines";
import { BacFilter } from "@/components/ui/bac-filter";
import { FormationCard } from "@/components/ui/formation-card";
import { FormationDetailDialog } from "@/components/ui/formation-detail-dialog";

interface FilieresParDomaineProps {
  formations: Formation[];
}

export function FilieresParDomaine({ formations }: FilieresParDomaineProps) {
  const [bacSelectionne, setBacSelectionne] = useState("");
  const [formationAffichee, setFormationAffichee] = useState<Formation | null>(
    null
  );

  const formationsFiltrees = useMemo(
    () =>
      bacSelectionne === ""
        ? formations
        : formations.filter((formation) =>
            formation.etablissements.some((etablissement) =>
              (etablissement.bacsCompatibles as string[]).includes(
                bacSelectionne
              )
            )
          ),
    [formations, bacSelectionne]
  );

  const domainesAffiches = useMemo(
    () => regrouperParDomaine(formationsFiltrees),
    [formationsFiltrees]
  );

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BacFilter
          bacSelectionne={bacSelectionne}
          onBacSelectionneChange={setBacSelectionne}
          nombreDeResultats={formationsFiltrees.length}
        />
      </div>

      {domainesAffiches.length > 0 ? (
        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {domainesAffiches.map((domaine) => (
            <section
              key={domaine.id}
              id={domaine.id}
              aria-labelledby={`titre-domaine-${domaine.id}`}
              className="scroll-mt-24"
            >
              {/* Bandeau de domaine pleine largeur */}
              <div className={`${domaine.couleurDeFond} ${domaine.couleurDeTexte}`}>
                <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
                  <span className="text-xs font-bold tracking-[0.24em] opacity-70">
                    Domaine {domaine.numero}
                  </span>
                  <h2
                    id={`titre-domaine-${domaine.id}`}
                    className="titre-geant mt-4 text-4xl sm:text-6xl"
                  >
                    {domaine.libelle}
                  </h2>
                  <p className="mt-5 max-w-2xl leading-relaxed opacity-90">
                    {domaine.accroche}
                  </p>
                </div>
              </div>

              <div className="mx-auto max-w-7xl px-5 md:px-8">
                <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {domaine.formations.map((formation, indexDeLaFormation) => (
                    <li key={`${bacSelectionne}-${formation.id}`}>
                      <FormationCard
                        formation={formation}
                        numero={indexDeLaFormation + 1}
                        delaiDAnimationEnSecondes={
                          Math.min(indexDeLaFormation, 6) * 0.06
                        }
                        onOuvertureDuDetail={setFormationAffichee}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
          <div className="border-2 border-dashed border-magenta-sombre px-8 py-20 text-center">
            <p className="titre-geant text-3xl">
              Aucune filière pour ce baccalauréat.
            </p>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-gris">
              Notre annuaire s&apos;enrichit chaque année. Écrivez-nous : un
              membre pourra vous orienter personnellement.
            </p>
            <button
              type="button"
              onClick={() => setBacSelectionne("")}
              className="mt-8 rounded-full bg-magenta px-8 py-4 text-sm font-bold tracking-[0.08em] text-blanc uppercase"
            >
              Voir toutes les filières
            </button>
          </div>
        </div>
      )}

      <FormationDetailDialog
        formation={formationAffichee}
        onFermeture={() => setFormationAffichee(null)}
      />
    </>
  );
}
