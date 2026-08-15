"use client";

import type { Formation } from "@/types/formation";

interface FormationCardProps {
  formation: Formation;
  numero: number;
  delaiDAnimationEnSecondes: number;
  onOuvertureDuDetail: (formation: Formation) => void;
}

export function FormationCard({
  formation,
  numero,
  delaiDAnimationEnSecondes,
  onOuvertureDuDetail,
}: FormationCardProps) {
  const { etablissements } = formation;
  const dureesUniques = Array.from(
    new Set(etablissements.map((etablissement) => etablissement.dureeEnAnnees))
  );
  const statutsUniques = Array.from(
    new Set(
      etablissements.map((etablissement) => etablissement.statutEtablissement)
    )
  );
  const accepteBacsSEtL = etablissements.some(
    (etablissement) =>
      etablissement.bacsCompatibles.includes("Scientifique") &&
      etablissement.bacsCompatibles.includes("Littéraire")
  );

  return (
    <article
      className="rise-in group relative flex h-full flex-col border-2 border-magenta-sombre bg-blanc transition-transform duration-300 hover:-translate-y-2 has-[:focus-visible]:-translate-y-2"
      style={{ animationDelay: `${delaiDAnimationEnSecondes}s` }}
    >
      <div className="flex items-center justify-between gap-4 border-b-2 border-magenta-sombre bg-magenta-sombre px-6 py-3 text-blanc transition-colors duration-300 group-hover:bg-magenta">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase">
          {etablissements.length > 1
            ? `${etablissements.length} établissements`
            : "1 établissement"}
        </p>
        <span aria-hidden="true" className="titre-geant text-xl tabular-nums">
          {String(numero).padStart(2, "0")}
        </span>
      </div>

      <div className="flex h-full flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {statutsUniques.map((statut) => (
            <span
              key={statut}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] uppercase ${
                statut === "Public"
                  ? "bg-magenta-deep text-blanc"
                  : "bg-gris-clair text-gris"
              }`}
            >
              {statut}
            </span>
          ))}
          <span className="bg-magenta-sombre px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-blanc uppercase">
            {dureesUniques.length > 1
              ? `${Math.min(...dureesUniques)}-${Math.max(...dureesUniques)} ans`
              : `${dureesUniques[0]} ans`}
          </span>
          {accepteBacsSEtL ? (
            <span className="bg-jaune px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-encre uppercase">
              Bacs S et L
            </span>
          ) : null}
        </div>

        <h3 className="titre-geant mt-5 text-2xl text-balance">
          {/* Le bouton couvre toute la carte : un seul point d'entrée au clavier. */}
          <button
            type="button"
            onClick={() => onOuvertureDuDetail(formation)}
            className="text-left transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-magenta focus-visible:outline-none"
          >
            {formation.filiere}
            <span className="sr-only"> — voir le détail de la filière</span>
          </button>
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-gris">
          {formation.description}
        </p>

        <div className="mt-5 border-t-2 border-magenta-sombre/10 pt-4">
          <p className="text-[10px] font-bold tracking-[0.18em] text-gris uppercase">
            Proposée par
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {etablissements.map((etablissement) => (
              <li
                key={etablissement.institut}
                className="border border-magenta-sombre/20 px-2.5 py-1 text-xs font-bold"
              >
                {etablissement.institut.split(" - ")[0]}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grow border-t-2 border-magenta-sombre/10 pt-4">
          <p className="text-[10px] font-bold tracking-[0.18em] text-gris uppercase">
            Débouchés
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {formation.debouches.map((debouche) => (
              <li
                key={debouche}
                className="bg-gris-clair px-2.5 py-1 text-xs font-semibold text-encre transition-colors duration-200 group-hover:bg-jaune"
              >
                {debouche}
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-6 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-magenta uppercase"
        >
          Voir le détail
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </p>
      </div>
    </article>
  );
}
