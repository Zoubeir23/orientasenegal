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
  const villesUniques = Array.from(new Set(etablissements.map((e) => e.ville)));
  const dureesUniques = Array.from(
    new Set(etablissements.map((e) => e.dureeEnAnnees))
  );
  const statutsUniques = Array.from(
    new Set(etablissements.map((e) => e.statutEtablissement))
  );
  const accepteBacsSEtL = etablissements.some(
    (e) =>
      e.bacsCompatibles.includes("Scientifique") &&
      e.bacsCompatibles.includes("Littéraire")
  );

  return (
    <article
      className="rise-in group relative flex h-full flex-col bg-paper/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-paper hover:shadow-[0_28px_50px_-34px_rgba(15,81,50,0.7)] has-[:focus-visible]:-translate-y-1.5 has-[:focus-visible]:bg-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-forest"
      style={{ animationDelay: `${delaiDAnimationEnSecondes}s` }}
    >
      {/* Filet papaye qui se déploie au survol. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-papaya transition-transform duration-400 ease-out group-hover:scale-x-100"
      />

      <div className="flex h-full flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-forest uppercase">
            {etablissements.length > 1
              ? `${etablissements.length} établissements`
              : "1 établissement"}
          </p>
          <span
            aria-hidden="true"
            className="font-display text-2xl leading-none font-light text-forest/20 tabular-nums transition-colors duration-300 group-hover:text-papaya/70"
          >
            {String(numero).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-soft">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-papaya" />
          {villesUniques.join(" · ")} ·{" "}
          {dureesUniques.length > 1
            ? `${Math.min(...dureesUniques)}-${Math.max(...dureesUniques)} ans`
            : `${dureesUniques[0]} ans`}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {statutsUniques.map((statut) => (
            <span
              key={statut}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase ${
                statut === "Public"
                  ? "border border-forest/30 bg-brand-light text-forest-deep"
                  : "border border-forest/15 bg-sand/70 text-ink-soft"
              }`}
            >
              {statut}
            </span>
          ))}
          {accepteBacsSEtL ? (
            <span className="rounded-full border border-papaya/45 bg-papaya/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-papaya-deep uppercase">
              Bacs S et L
            </span>
          ) : null}
        </div>

        <h3 className="font-display mt-5 text-[1.6rem] leading-[1.15] font-semibold text-balance text-forest-deep">
          {/* Le lien couvre toute la carte : un seul point d'entrée au clavier. */}
          <button
            type="button"
            onClick={() => onOuvertureDuDetail(formation)}
            className="text-left before:absolute before:inset-0 before:content-[''] focus-visible:outline-none"
          >
            {formation.filiere}
            <span className="sr-only"> — voir le détail de la filière</span>
          </button>
        </h3>

        <p className="mt-4 text-[0.94rem] leading-relaxed text-ink-soft">
          {formation.description}
        </p>

        <div className="mt-5 border-t border-dashed border-forest/20 pt-4">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-ink-soft/80 uppercase">
            Proposée par
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1.5">
            {etablissements.map((etablissement) => (
              <li
                key={etablissement.institut}
                className="rounded-full border border-forest/20 bg-paper px-2.5 py-1 text-xs font-medium text-forest-deep transition-colors duration-200 group-hover:bg-brand-light"
              >
                {etablissement.institut.split(" - ")[0]}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grow border-t border-dashed border-forest/20 pt-4">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-ink-soft/80 uppercase">
            Débouchés
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1.5">
            {formation.debouches.map((debouche) => (
              <li
                key={debouche}
                className="rounded-full bg-sand/70 px-2.5 py-1 text-xs font-medium text-forest-deep transition-colors duration-200 group-hover:bg-brand-light"
              >
                {debouche}
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-forest uppercase transition-colors duration-200 group-hover:text-papaya-deep"
        >
          Voir le détail
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </article>
  );
}
