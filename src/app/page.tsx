import Image from "next/image";
import Link from "next/link";
import { BandeauDefilant } from "@/components/ui/bandeau-defilant";
import { regrouperParDomaine } from "@/data/domaines";
import { formationsDeDakar } from "@/lib/etablissements-dakar";

const OBJECTIFS = [
  {
    numero: "01",
    titre: "Savoir ce qui vous est ouvert",
    texte:
      "Avec un bac scientifique ou littéraire comorien, toutes les portes ne se ressemblent pas. L'annuaire affiche uniquement les filières réellement accessibles à votre série.",
  },
  {
    numero: "02",
    titre: "Connaître le prix avant de partir",
    texte:
      "Frais de scolarité, statut public ou privé, durée des études : les montants sont indiqués quand l'établissement les publie, et signalés comme non publiés quand il ne le fait pas.",
  },
  {
    numero: "03",
    titre: "Penser au retour au pays",
    texte:
      "Chaque filière est évaluée du point de vue du marché comorien : ce qui recrute, ce qui n'existe pas encore, et ce qu'il faut ajouter à son diplôme pour être employable à Moroni.",
  },
];

export default function PageAccueil() {
  const domainesRemplis = regrouperParDomaine(formationsDeDakar);
  const nombreDEtablissements = new Set(
    formationsDeDakar.flatMap((formation) =>
      formation.etablissements.map(
        (etablissement) => etablissement.institut.split(" - ")[0].split(" (")[0]
      )
    )
  ).size;

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      {/* La hauteur retranchée correspond à celle de la navbar, logo compris. */}
      <section className="relative flex min-h-[calc(100svh-7rem)] items-end overflow-hidden bg-magenta-sombre">
        {/* La photo reste une photo : désaturée puis légèrement teintée,
            plutôt que recolorée à 100 % par le fond. */}
        <Image
          src="/diplome.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="zoom-lent object-cover object-[62%_22%] md:object-[70%_25%]"
        />
        {/* Aucune recoloration : la photo est laissée telle quelle. Seul un
            dégradé sombre subsiste en bas, sans lequel le texte blanc
            deviendrait illisible sur les zones claires de l'image. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 md:px-8 md:pb-24">
          <p className="rise-in text-xs font-bold tracking-[0.28em] text-jaune uppercase md:text-sm">
            Association des Étudiants de Mitsoudje au Sénégal
          </p>

          <h1 className="titre-geant mt-7 max-w-5xl text-[3.25rem] sm:text-7xl lg:text-[6.5rem]">
            <span
              className="rise-in titre-surligne inline-block"
              style={{ animationDelay: "0.08s" }}
            >
              Après le bac,
            </span>{" "}
            <span
              className="rise-in titre-surligne-jaune inline-block"
              style={{ animationDelay: "0.18s" }}
            >
              direction
            </span>{" "}
            <span
              className="rise-in titre-surligne inline-block"
              style={{ animationDelay: "0.28s" }}
            >
              Dakar.
            </span>
          </h1>

          <p
            className="rise-in mt-9 max-w-xl text-lg leading-relaxed font-semibold text-blanc/90 md:text-xl"
            style={{ animationDelay: "0.38s" }}
          >
            L&apos;annuaire des filières et des établissements dakarois ouverts
            aux bacheliers comoriens. Ce qu&apos;on y apprend, ce que ça coûte,
            et ce que ça vaut une fois rentré au pays.
          </p>

          <div
            className="rise-in mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.48s" }}
          >
            <Link
              href="/filieres"
              className="rounded-full bg-magenta px-8 py-4 text-sm font-bold tracking-[0.08em] text-blanc uppercase transition-transform duration-200 hover:scale-105"
            >
              Voir les filières
            </Link>
            <Link
              href="/a-propos"
              className="rounded-full border-2 border-blanc px-8 py-4 text-sm font-bold tracking-[0.08em] text-blanc uppercase transition-colors duration-200 hover:bg-blanc hover:text-encre"
            >
              Qui sommes-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="bg-magenta text-blanc">
        <dl className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-blanc/25 px-5 md:px-8">
          {[
            { valeur: formationsDeDakar.length, libelle: "Filières" },
            { valeur: nombreDEtablissements, libelle: "Établissements" },
            { valeur: domainesRemplis.length, libelle: "Domaines" },
          ].map((statistique) => (
            <div key={statistique.libelle} className="px-3 py-8 text-center">
              <dt className="sr-only">{statistique.libelle}</dt>
              <dd>
                <span className="titre-geant block text-4xl tabular-nums md:text-6xl">
                  {statistique.valeur}
                </span>
                <span className="mt-2 block text-[10px] font-bold tracking-[0.2em] uppercase md:text-xs">
                  {statistique.libelle}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <BandeauDefilant texte="Étudier à Dakar · Revenir utile ·" variante="jaune" />

      {/* ------------------------------------------------------------------ */}
      {/* OBJECTIF DU SITE                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-magenta uppercase">
          Notre objectif
        </p>
        <h2 className="titre-geant mt-6 max-w-4xl text-4xl sm:text-6xl">
          Choisir son avenir sans se tromper d&apos;école.
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gris">
          Chaque année, des bacheliers comoriens partent étudier au Sénégal en
          se fiant à une rumeur, à un cousin ou à une brochure. Certains
          découvrent trop tard que la filière ne mène nulle part chez nous, ou
          que les frais dépassent ce que la famille peut porter. Ce site
          rassemble ce que les membres de l&apos;association auraient voulu
          savoir avant de partir.
        </p>

        <div className="mt-14 grid gap-px bg-magenta-sombre/10 md:grid-cols-3">
          {OBJECTIFS.map((objectif) => (
            <article key={objectif.numero} className="bg-blanc p-8">
              <p className="titre-geant text-5xl text-magenta">
                {objectif.numero}
              </p>
              <h3 className="titre-geant mt-6 text-2xl">{objectif.titre}</h3>
              <p className="mt-4 leading-relaxed text-gris">{objectif.texte}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* APERÇU DES DOMAINES                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="titre-geant max-w-2xl text-4xl sm:text-6xl">
            Les domaines
            <br />
            <span className="text-magenta">enseignés à Dakar</span>
          </h2>
          <Link
            href="/filieres"
            className="rounded-full bg-magenta-sombre px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-blanc uppercase transition-colors duration-200 hover:bg-magenta"
          >
            Tout parcourir
          </Link>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {domainesRemplis.map((domaine) => (
            <li key={domaine.id}>
              <Link
                href={`/filieres#${domaine.id}`}
                className={`group flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-2 ${domaine.couleurDeFond} ${domaine.couleurDeTexte}`}
              >
                <span className="text-xs font-bold tracking-[0.2em] opacity-70">
                  {domaine.numero}
                </span>
                <h3 className="titre-geant mt-4 text-3xl">{domaine.libelle}</h3>
                <p className="mt-4 grow text-sm leading-relaxed opacity-85">
                  {domaine.accroche}
                </p>
                <p className="mt-8 text-sm font-bold tracking-[0.08em] uppercase">
                  {domaine.formations.length} filière
                  {domaine.formations.length > 1 ? "s" : ""}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* APPEL FINAL                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-magenta-sombre text-blanc">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-28">
          <h2 className="titre-geant max-w-2xl text-4xl sm:text-5xl">
            Une question sur une école ?<br />
            <span className="text-jaune">Un membre vous répond.</span>
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-magenta px-9 py-5 text-sm font-bold tracking-[0.08em] text-blanc uppercase transition-transform duration-200 hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
