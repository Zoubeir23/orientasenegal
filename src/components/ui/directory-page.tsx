"use client";

import { useMemo, useState } from "react";
import type { Formation } from "@/types/formation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BacFilter } from "@/components/ui/bac-filter";
import { FormationCard } from "@/components/ui/formation-card";
import { FormationDetailDialog } from "@/components/ui/formation-detail-dialog";
import { SiteFooter } from "@/components/ui/site-footer";
import { SiteHeader } from "@/components/ui/site-header";

export interface DirectoryPageProps {
  formations: Formation[];
}

function DirectoryPage({ formations }: DirectoryPageProps) {
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
              (etablissement.bacsCompatibles as string[]).includes(bacSelectionne)
            )
          ),
    [formations, bacSelectionne]
  );

  // Deux facultés d'une même université ne comptent que pour un établissement.
  const nombreDInstituts = useMemo(
    () =>
      new Set(
        formations.flatMap((formation) =>
          formation.etablissements.map(
            (etablissement) => etablissement.institut.split(" - ")[0].split(" (")[0]
          )
        )
      ).size,
    [formations]
  );
  const nombreDeVilles = useMemo(
    () =>
      new Set(
        formations.flatMap((formation) =>
          formation.etablissements.map((etablissement) => etablissement.ville)
        )
      ).size,
    [formations]
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-paper text-ink">
      <AuroraBackground />

      <div className="relative z-10 flex flex-1 flex-col">
        <SiteHeader />

        <main className="flex-1">
          {/* ------------------------------------------------------------- */}
          {/* HERO                                                          */}
          {/* ------------------------------------------------------------- */}
          <section className="hairline-grid border-b border-forest/10">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="rise-in text-[11px] font-semibold tracking-[0.22em] text-papaya-deep uppercase">
                  Annuaire d&apos;orientation · Rentrée universitaire
                </p>

                <h1
                  className="rise-in font-display mt-6 text-[2.75rem] leading-[0.98] font-semibold tracking-tight text-balance text-forest-deep sm:text-6xl lg:text-[4.25rem]"
                  style={{ animationDelay: "0.08s" }}
                >
                  Après le bac,
                  <br />
                  <span className="text-brand-dark italic">votre place</span> est
                  au{" "}
                  <span className="relative inline-block">
                    Sénégal
                    <span
                      aria-hidden="true"
                      className="draw-rule absolute -bottom-1 left-0 h-[6px] w-full bg-papaya/45"
                      style={{ animationDelay: "0.7s" }}
                    />
                  </span>
                </h1>

                <p
                  className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
                  style={{ animationDelay: "0.16s" }}
                >
                  Choisissez votre baccalauréat comorien : nous affichons
                  immédiatement les filières qui vous sont ouvertes, l&apos;institut
                  qui les propose et les métiers auxquels elles mènent.
                </p>

                <p
                  className="rise-in font-display mt-6 text-sm text-ink-soft italic"
                  style={{ animationDelay: "0.22s" }}
                >
                  Un service de l&apos;Association des Étudiants de Mitsoudje au
                  Sénégal.
                </p>
              </div>

              {/* Encart chiffres : ancre visuelle asymétrique. */}
              <aside
                className="rise-in lg:col-span-5"
                style={{ animationDelay: "0.3s" }}
              >
                <dl className="grid grid-cols-3 divide-x divide-forest/15 border-y border-forest/15 bg-paper/70 backdrop-blur-md">
                  {[
                    { valeur: formations.length, libelle: "Filières" },
                    { valeur: nombreDInstituts, libelle: "Instituts" },
                    { valeur: nombreDeVilles, libelle: "Villes" },
                  ].map((statistique) => (
                    <div key={statistique.libelle} className="px-4 py-6 text-center">
                      <dt className="sr-only">{statistique.libelle}</dt>
                      <dd>
                        <span className="font-display block text-4xl leading-none font-semibold text-forest tabular-nums">
                          {statistique.valeur}
                        </span>
                        <span className="mt-2 block text-[10px] tracking-[0.18em] text-ink-soft uppercase">
                          {statistique.libelle}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                  Données vérifiées par les membres de l&apos;association déjà
                  inscrits dans ces établissements.
                </p>
              </aside>
            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* FILTRE + RESULTATS                                            */}
          {/* ------------------------------------------------------------- */}
          <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20">
            <BacFilter
              bacSelectionne={bacSelectionne}
              onBacSelectionneChange={setBacSelectionne}
              nombreDeResultats={formationsFiltrees.length}
            />

            <div className="mt-12 flex items-baseline gap-4">
              <h2 className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase">
                02 — Filières accessibles
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-forest/15"
              />
            </div>

            {formationsFiltrees.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-px border border-forest/12 bg-forest/12 md:grid-cols-2 lg:grid-cols-3">
                {formationsFiltrees.map((formation, indexDeLaFormation) => (
                  <FormationCard
                    key={`${bacSelectionne}-${formation.id}`}
                    formation={formation}
                    numero={indexDeLaFormation + 1}
                    delaiDAnimationEnSecondes={
                      Math.min(indexDeLaFormation, 8) * 0.05
                    }
                    onOuvertureDuDetail={setFormationAffichee}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8 border border-dashed border-forest/25 bg-paper/70 px-8 py-20 text-center backdrop-blur-md">
                <p className="font-display text-2xl text-forest-deep">
                  Aucune filière pour ce baccalauréat.
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  Notre annuaire s&apos;enrichit chaque année. Contactez
                  l&apos;association : un membre pourra vous orienter
                  personnellement.
                </p>
                <button
                  type="button"
                  onClick={() => setBacSelectionne("")}
                  className="mt-8 rounded-full border border-forest px-6 py-2.5 text-sm font-medium text-forest transition-colors duration-200 hover:bg-forest hover:text-paper"
                >
                  Voir toutes les filières
                </button>
              </div>
            )}
          </section>
        </main>

        <SiteFooter />
      </div>

      <FormationDetailDialog
        formation={formationAffichee}
        onFermeture={() => setFormationAffichee(null)}
      />
    </div>
  );
}

export { DirectoryPage };
