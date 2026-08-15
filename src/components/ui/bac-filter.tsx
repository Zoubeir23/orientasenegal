"use client";

import { TYPES_DE_BACCALAUREAT } from "@/types/formation";

interface BacFilterProps {
  bacSelectionne: string;
  onBacSelectionneChange: (bac: string) => void;
  nombreDeResultats: number;
}

const OPTIONS_DE_FILTRE = [
  { valeur: "", libelle: "Tous les bacs", abreviation: "Tous" },
  ...TYPES_DE_BACCALAUREAT.map((typeDeBaccalaureat) => ({
    valeur: typeDeBaccalaureat.valeur,
    libelle: typeDeBaccalaureat.libelle,
    abreviation: typeDeBaccalaureat.abreviation,
  })),
];

export function BacFilter({
  bacSelectionne,
  onBacSelectionneChange,
  nombreDeResultats,
}: BacFilterProps) {
  return (
    <section
      aria-labelledby="titre-du-filtre"
      className="border-2 border-magenta-sombre bg-blanc"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-magenta-sombre bg-magenta-sombre px-6 py-3 text-blanc">
        <h2
          id="titre-du-filtre"
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          Votre baccalauréat
        </h2>
        <p aria-live="polite" className="text-[11px] font-bold tracking-[0.14em] uppercase">
          {nombreDeResultats} filière{nombreDeResultats > 1 ? "s" : ""}
        </p>
      </div>

      <div className="p-6">
        <fieldset>
          <legend className="sr-only">
            Sélectionnez votre type de baccalauréat
          </legend>
          <div className="flex flex-wrap gap-3">
            {OPTIONS_DE_FILTRE.map((option) => {
              const estSelectionne = bacSelectionne === option.valeur;

              return (
                <label
                  key={option.valeur || "tous"}
                  className={`cursor-pointer border-2 px-5 py-3 text-sm font-bold tracking-[0.06em] uppercase transition-all duration-200 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-jaune ${
                    estSelectionne
                      ? "border-magenta bg-magenta text-blanc"
                      : "border-magenta-sombre bg-blanc text-encre hover:bg-gris-clair"
                  }`}
                >
                  <input
                    type="radio"
                    name="type-de-baccalaureat"
                    value={option.valeur}
                    checked={estSelectionne}
                    onChange={() => onBacSelectionneChange(option.valeur)}
                    className="sr-only"
                  />
                  <span className="hidden sm:inline">{option.libelle}</span>
                  <span className="sm:hidden">{option.abreviation}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <p className="mt-5 border-l-4 border-jaune pl-4 text-sm leading-relaxed text-gris">
          Un bac littéraire n&apos;interdit pas les métiers du numérique :
          plusieurs filières, comme l&apos;informatique appliquée à la gestion,
          sont ouvertes aux séries L et S. Elles portent le repère{" "}
          <span className="bg-jaune px-1.5 py-0.5 font-bold text-encre">
            BACS S ET L
          </span>
          .
        </p>
      </div>
    </section>
  );
}
