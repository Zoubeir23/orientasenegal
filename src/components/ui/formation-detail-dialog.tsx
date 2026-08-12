"use client";

import { useEffect, useRef } from "react";
import type { Formation, NiveauDeDemande } from "@/types/formation";
import { DATE_DE_VERIFICATION } from "@/types/formation";

interface FormationDetailDialogProps {
  formation: Formation | null;
  onFermeture: () => void;
}

const COULEURS_PAR_NIVEAU_DE_DEMANDE: Record<NiveauDeDemande, string> = {
  Forte: "bg-brand-primary text-paper",
  Moyenne: "bg-papaya text-paper",
  "À construire": "bg-sand text-forest-deep border border-forest/25",
};

const LIBELLES_PAR_NIVEAU_DE_DEMANDE: Record<NiveauDeDemande, string> = {
  Forte: "Demande forte aux Comores",
  Moyenne: "Demande moyenne aux Comores",
  "À construire": "Marché à construire aux Comores",
};

export function FormationDetailDialog({
  formation,
  onFermeture,
}: FormationDetailDialogProps) {
  const dialogReference = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogElement = dialogReference.current;
    if (!dialogElement) return;

    if (formation && !dialogElement.open) {
      dialogElement.showModal();
      // Empêche la page de défiler derrière la fenêtre.
      document.body.style.overflow = "hidden";
    }

    if (!formation && dialogElement.open) {
      dialogElement.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [formation]);

  if (!formation) return null;

  const { perspectivesAuxComores, etablissements } = formation;

  return (
    <dialog
      ref={dialogReference}
      aria-labelledby="titre-de-la-formation"
      onClose={onFermeture}
      onClick={(evenement) => {
        // Fermeture au clic sur l'arrière-plan uniquement.
        if (evenement.target === dialogReference.current) {
          dialogReference.current?.close();
        }
      }}
      className="m-auto max-h-[88vh] w-[min(46rem,92vw)] overflow-y-auto border border-forest/20 bg-paper p-0 text-ink shadow-[0_40px_90px_-40px_rgba(10,55,34,0.8)] backdrop:bg-forest-deep/45 backdrop:backdrop-blur-sm"
    >
      {/* En-tête collant */}
      <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-forest/15 bg-paper/95 px-7 py-5 backdrop-blur-md">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-forest uppercase">
            {etablissements.length > 1
              ? `${etablissements.length} établissements proposent cette filière`
              : "1 établissement propose cette filière"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => dialogReference.current?.close()}
          aria-label="Fermer le détail de la filière"
          className="shrink-0 rounded-full border border-forest/25 px-3.5 py-1.5 text-xs font-medium text-forest transition-colors duration-200 hover:bg-forest hover:text-paper"
        >
          Fermer
        </button>
      </div>

      <div className="px-7 pt-7 pb-9">
        <h2
          id="titre-de-la-formation"
          className="font-display text-3xl leading-[1.1] font-semibold text-balance text-forest-deep sm:text-4xl"
        >
          {formation.filiere}
        </h2>

        <p className="mt-4 leading-relaxed text-ink-soft">
          {formation.description}
        </p>

        {/* Établissements qui proposent cette filière */}
        <section className="mt-7 space-y-5">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase">
            Où étudier cette filière
          </h3>

          {etablissements.map((etablissement) => (
            <div
              key={etablissement.institut}
              className="border border-forest/15 bg-paper/70"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-forest/12 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-forest-deep">
                    {etablissement.institut}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-papaya"
                    />
                    {etablissement.ville} · {etablissement.dureeEnAnnees} ans ·{" "}
                    {etablissement.diplomePrepare}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase ${
                    etablissement.statutEtablissement === "Public"
                      ? "border border-forest/30 bg-brand-light text-forest-deep"
                      : "border border-forest/15 bg-sand/70 text-ink-soft"
                  }`}
                >
                  {etablissement.statutEtablissement}
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
                  Combien ça coûte
                </p>
                <p className="font-display mt-1.5 text-xl font-semibold text-forest-deep">
                  {etablissement.fraisDeScolarite.montant}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {etablissement.fraisDeScolarite.detail}
                </p>

                <ul className="mt-3.5 flex flex-wrap gap-2">
                  {etablissement.bacsCompatibles.map((bac) => (
                    <li
                      key={bac}
                      className="rounded-full bg-forest px-3 py-1 text-xs font-medium text-paper"
                    >
                      Bac {bac}
                    </li>
                  ))}
                </ul>

                {etablissement.noteDAdmission ? (
                  <p className="mt-3.5 text-sm leading-relaxed text-ink-soft">
                    {etablissement.noteDAdmission}
                  </p>
                ) : null}

                <a
                  href={etablissement.sourceOfficielle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest underline decoration-papaya decoration-2 underline-offset-4 transition-colors duration-200 hover:text-papaya-deep"
                >
                  {etablissement.sourceOfficielle.libelle}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">
                    (ouvre le site officiel dans un nouvel onglet)
                  </span>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Ce que l'on apprend */}
        <section className="mt-9">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase">
            Ce que vous allez apprendre
          </h3>
          <ul className="mt-4 space-y-2.5">
            {formation.competencesAcquises.map((competence) => (
              <li key={competence} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-papaya"
                />
                {competence}
              </li>
            ))}
          </ul>
        </section>

        {/* Ce que cela permet de faire */}
        <section className="mt-9">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase">
            Ce que ce diplôme vous permet de faire
          </h3>
          <ul className="mt-4 grid gap-px border border-forest/15 bg-forest/15 sm:grid-cols-2">
            {formation.missionsConcretes.map((mission) => (
              <li
                key={mission}
                className="bg-paper px-4 py-3.5 text-sm leading-relaxed"
              >
                {mission}
              </li>
            ))}
          </ul>
        </section>

        {/* Débouchés */}
        <section className="mt-9">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-forest uppercase">
            Métiers visés
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {formation.debouches.map((debouche) => (
              <li
                key={debouche}
                className="rounded-full bg-sand px-3 py-1.5 text-xs font-medium text-forest-deep"
              >
                {debouche}
              </li>
            ))}
          </ul>
        </section>

        {/* Retour au pays */}
        <section className="mt-10 border-t-2 border-papaya bg-forest-deep px-6 py-7 text-paper">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              Et si je veux travailler aux Comores ?
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                COULEURS_PAR_NIVEAU_DE_DEMANDE[
                  perspectivesAuxComores.niveauDeDemande
                ]
              }`}
            >
              {
                LIBELLES_PAR_NIVEAU_DE_DEMANDE[
                  perspectivesAuxComores.niveauDeDemande
                ]
              }
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-paper/85">
            {perspectivesAuxComores.resume}
          </p>

          <p className="mt-7 text-[10px] font-semibold tracking-[0.18em] text-paper/60 uppercase">
            Où travailler au pays
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {perspectivesAuxComores.employeursPotentiels.map((employeur) => (
              <li
                key={employeur}
                className="rounded-full border border-paper/25 px-3 py-1.5 text-xs text-paper/90"
              >
                {employeur}
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-papaya pl-4 text-sm leading-relaxed text-paper/90 italic">
            <span className="font-display not-italic">Conseil de l&apos;AEMS —</span>{" "}
            {perspectivesAuxComores.conseil}
          </p>
        </section>

        {/* Note de bas de page */}
        <div className="mt-8 border-t border-forest/15 pt-5">
          <p className="text-xs leading-relaxed text-ink-soft">
            Établissements, intitulés et durées vérifiés sur les sites officiels
            listés ci-dessus en {DATE_DE_VERIFICATION}. Les frais, dates de
            concours et places disponibles changent chaque année : confirmez
            toujours auprès de l&apos;établissement choisi. L&apos;analyse du
            marché comorien reflète l&apos;expérience des membres de
            l&apos;association, pas des statistiques officielles.
          </p>
        </div>
      </div>
    </dialog>
  );
}
