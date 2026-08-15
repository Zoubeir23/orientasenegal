import type { Metadata } from "next";
import Link from "next/link";
import { FilieresParDomaine } from "@/components/ui/filieres-par-domaine";
import { regrouperParDomaine } from "@/data/domaines";
import { formationsDeDakar } from "@/lib/etablissements-dakar";
import { DATE_DE_VERIFICATION } from "@/types/formation";

export const metadata: Metadata = {
  title: "Filières",
  description:
    "Toutes les filières accessibles aux bacheliers comoriens dans les universités et instituts de Dakar, classées par domaine : informatique, santé, ingénierie, gestion, droit, audiovisuel.",
};

export default function PageFilieres() {
  const domaines = regrouperParDomaine(formationsDeDakar);

  return (
    <>
      {/* En-tête de page */}
      <section className="bg-magenta text-blanc">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-bold tracking-[0.24em] text-jaune uppercase">
            Universités et instituts de Dakar
          </p>
          <h1 className="titre-geant mt-6 max-w-4xl text-5xl sm:text-7xl">
            Les filières,
            <br />
            domaine par domaine.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blanc/90">
            Cliquez sur une filière pour voir ce qu&apos;on y apprend, les
            établissements qui la proposent, les frais de scolarité et ce
            qu&apos;elle vaut une fois de retour aux Comores.
          </p>

          {/* Sommaire des domaines */}
          <nav aria-label="Sommaire des domaines" className="mt-10">
            <ul className="flex flex-wrap gap-2.5">
              {domaines.map((domaine) => (
                <li key={domaine.id}>
                  <Link
                    href={`#${domaine.id}`}
                    className="inline-block border-2 border-blanc px-4 py-2 text-xs font-bold tracking-[0.08em] uppercase transition-colors duration-200 hover:bg-blanc hover:text-magenta"
                  >
                    {domaine.libelle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="py-14 md:py-20">
        <FilieresParDomaine formations={formationsDeDakar} />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <p className="border-l-4 border-magenta pl-5 text-sm leading-relaxed text-gris">
          Établissements, intitulés de filières et durées vérifiés sur les sites
          officiels en {DATE_DE_VERIFICATION}. Les frais, dates de concours et
          places disponibles changent chaque année : confirmez toujours auprès de
          l&apos;établissement avant de constituer un dossier.
        </p>
      </section>
    </>
  );
}
