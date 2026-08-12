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
      className="relative rounded-[4px] border border-forest/15 bg-paper/85 p-6 shadow-[0_18px_40px_-32px_rgba(15,81,50,0.55)] backdrop-blur-md md:p-8"
    >
      {/* Coins de repérage : petit clin d'œil aux formulaires administratifs. */}
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-papaya"
      />
      <span
        aria-hidden="true"
        className="absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-papaya"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2
          id="titre-du-filtre"
          className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase"
        >
          01 — Votre baccalauréat
        </h2>
        <p
          aria-live="polite"
          className="font-display text-sm text-ink-soft italic"
        >
          {nombreDeResultats} formation{nombreDeResultats > 1 ? "s" : ""}{" "}
          correspondante{nombreDeResultats > 1 ? "s" : ""}
        </p>
      </div>

      <fieldset className="mt-5">
        <legend className="sr-only">Sélectionnez votre type de baccalauréat</legend>
        <div className="flex flex-wrap gap-2.5">
          {OPTIONS_DE_FILTRE.map((option) => {
            const estSelectionne = bacSelectionne === option.valeur;

            return (
              <label
                key={option.valeur || "tous"}
                className={`group relative cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-forest ${
                  estSelectionne
                    ? "border-forest bg-forest text-paper shadow-[0_10px_24px_-16px_rgba(15,81,50,0.9)]"
                    : "border-forest/20 bg-paper/70 text-ink hover:-translate-y-0.5 hover:border-forest/50 hover:bg-sand/60"
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
                {estSelectionne ? (
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-papaya align-middle"
                  />
                ) : null}
              </label>
            );
          })}
        </div>
      </fieldset>

      <p className="mt-5 border-l-2 border-papaya pl-4 text-sm leading-relaxed text-ink-soft">
        Un bac littéraire n&apos;interdit pas les métiers du numérique : plusieurs
        filières, comme l&apos;informatique appliquée à la gestion, sont ouvertes
        aux séries L et S. Elles portent le repère{" "}
        <span className="font-semibold text-papaya-deep">
          « ouverte aux bacs S et L »
        </span>
        .
      </p>
    </section>
  );
}
