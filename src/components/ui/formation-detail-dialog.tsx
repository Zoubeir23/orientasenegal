"use client";

import { useEffect, useRef } from "react";
import type { Formation, NiveauDeDemande } from "@/types/formation";
import { DATE_DE_VERIFICATION } from "@/types/formation";

interface FormationDetailDialogProps {
  formation: Formation | null;
  onFermeture: () => void;
}

const COULEURS_PAR_NIVEAU_DE_DEMANDE: Record<NiveauDeDemande, string> = {
  Forte: "bg-jaune text-encre",
  Moyenne: "bg-blanc text-encre",
  "À construire": "border-2 border-blanc text-blanc",
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
    if (!dialogElement || !formation) return;

    let dialogueOuvertParEffet = false;
    if (!dialogElement.open) {
      dialogElement.showModal();
      // Empêche la page de défiler derrière la fenêtre.
      document.body.style.overflow = "hidden";
      dialogueOuvertParEffet = true;
    }

    return () => {
      if (dialogueOuvertParEffet) {
        document.body.style.overflow = "";
      }
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
      className="m-auto max-h-[90vh] w-[min(48rem,94vw)] overflow-y-auto border-2 border-magenta-sombre bg-blanc p-0 text-encre backdrop:bg-magenta-sombre/70 backdrop:backdrop-blur-sm"
    >
      {/* En-tête collant */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b-2 border-magenta-sombre bg-magenta px-6 py-4 text-blanc">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase">
          {etablissements.length > 1
            ? `${etablissements.length} établissements à Dakar et alentours`
            : "1 établissement à Dakar ou dans son agglomération"}
        </p>

        <button
          type="button"
          onClick={() => dialogReference.current?.close()}
          aria-label="Fermer le détail de la filière"
          className="shrink-0 rounded-full bg-blanc px-4 py-2 text-xs font-bold tracking-[0.1em] text-magenta uppercase transition-colors duration-200 hover:bg-jaune hover:text-encre"
        >
          Fermer
        </button>
      </div>

      <div className="px-6 pt-8 pb-10 md:px-9">
        <h2 id="titre-de-la-formation" className="titre-geant text-4xl sm:text-5xl">
          {formation.filiere}
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-gris">
          {formation.description}
        </p>

        {/* Établissements qui proposent cette filière */}
        <section className="mt-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">
            Où étudier cette filière
          </h3>

          <div className="mt-5 space-y-5">
            {etablissements.map((etablissement) => (
              <div
                key={etablissement.institut}
                className="border-2 border-magenta-sombre"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b-2 border-magenta-sombre bg-gris-clair px-5 py-4">
                  <div>
                    <p className="font-bold">{etablissement.institut}</p>
                    <p className="mt-1 text-xs font-semibold text-gris">
                      {etablissement.ville} · {etablissement.dureeEnAnnees} ans ·{" "}
                      {etablissement.diplomePrepare}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] uppercase ${
                      etablissement.statutEtablissement === "Public"
                        ? "bg-magenta-deep text-blanc"
                        : "bg-magenta-sombre text-blanc"
                    }`}
                  >
                    {etablissement.statutEtablissement}
                  </span>
                </div>

                <div className="px-5 py-5">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-gris uppercase">
                    Combien ça coûte
                  </p>
                  <p className="titre-geant mt-2 text-2xl text-magenta">
                    {etablissement.fraisDeScolarite.montant}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-gris">
                    {etablissement.fraisDeScolarite.detail}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {etablissement.bacsCompatibles.map((bac) => (
                      <li
                        key={bac}
                        className="bg-jaune px-3 py-1 text-xs font-bold text-encre uppercase"
                      >
                        Bac {bac}
                      </li>
                    ))}
                  </ul>

                  {etablissement.noteDAdmission ? (
                    <p className="mt-4 text-sm leading-relaxed break-words text-gris">
                      {etablissement.noteDAdmission}
                    </p>
                  ) : null}

                  <a
                    href={etablissement.sourceOfficielle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-magenta underline decoration-2 underline-offset-4 transition-colors duration-200 hover:text-encre"
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
          </div>
        </section>

        {/* Ce que l'on apprend */}
        <section className="mt-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">
            Ce que vous allez apprendre
          </h3>
          <ul className="mt-5 space-y-3">
            {formation.competencesAcquises.map((competence) => (
              <li key={competence} className="flex gap-4 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 bg-magenta"
                />
                {competence}
              </li>
            ))}
          </ul>
        </section>

        {/* Ce que cela permet de faire */}
        <section className="mt-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">
            Ce que ce diplôme vous permet de faire
          </h3>
          <ul className="mt-5 grid gap-px bg-magenta-sombre/15 sm:grid-cols-2">
            {formation.missionsConcretes.map((mission) => (
              <li
                key={mission}
                className="bg-blanc px-5 py-4 text-sm leading-relaxed"
              >
                {mission}
              </li>
            ))}
          </ul>
        </section>

        {/* Débouchés */}
        <section className="mt-10">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">
            Métiers visés
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {formation.debouches.map((debouche) => (
              <li
                key={debouche}
                className="bg-gris-clair px-3 py-1.5 text-xs font-bold"
              >
                {debouche}
              </li>
            ))}
          </ul>
        </section>

        {/* Retour au pays */}
        <section className="mt-12 bg-magenta-sombre px-6 py-8 text-blanc md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="titre-geant text-2xl">
              Et si je rentre aux Comores ?
            </h3>
            <span
              className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase ${
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

          <p className="mt-6 leading-relaxed text-blanc/85">
            {perspectivesAuxComores.resume}
          </p>

          <p className="mt-8 text-[10px] font-bold tracking-[0.18em] text-blanc/60 uppercase">
            Où travailler au pays
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {perspectivesAuxComores.employeursPotentiels.map((employeur) => (
              <li
                key={employeur}
                className="border border-blanc/30 px-3 py-1.5 text-xs text-blanc/90"
              >
                {employeur}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-4 border-jaune pl-5 leading-relaxed text-blanc/90">
            <span className="titre-geant block text-sm text-jaune">
              Conseil de l&apos;AEMS
            </span>
            <span className="mt-2 block">{perspectivesAuxComores.conseil}</span>
          </p>
        </section>

        {/* Note de bas de page */}
        <p className="mt-8 border-t-2 border-magenta-sombre/10 pt-5 text-xs leading-relaxed text-gris">
          Établissements, intitulés et durées vérifiés sur les sites officiels
          listés ci-dessus en {DATE_DE_VERIFICATION}. Les frais, dates de
          concours et places disponibles changent chaque année : confirmez
          toujours auprès de l&apos;établissement choisi. L&apos;analyse du
          marché comorien reflète l&apos;expérience des membres de
          l&apos;association, pas des statistiques officielles.
        </p>
      </div>
    </dialog>
  );
}
