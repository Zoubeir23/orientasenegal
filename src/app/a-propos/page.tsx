import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BandeauDefilant } from "@/components/ui/bandeau-defilant";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "L'Association des Étudiants de Mitsoudje au Sénégal (AEMS) accompagne les bacheliers comoriens qui viennent étudier à Dakar. Unité, Solidarité, Développement.",
};

const PILIERS = [
  {
    mot: "Unité",
    texte:
      "Regrouper les étudiants originaires de Mitsoudje présents au Sénégal, pour qu'aucun nouvel arrivant ne se retrouve seul à sa descente d'avion.",
  },
  {
    mot: "Solidarité",
    texte:
      "S'entraider concrètement : accueil, démarches administratives, recherche de logement, conseils sur les écoles et soutien dans les moments difficiles.",
  },
  {
    mot: "Développement",
    texte:
      "Préparer le retour. Une formation n'a de valeur que si elle sert la communauté : nous orientons vers les filières qui comptent pour l'archipel.",
  },
];

export default function PageAPropos() {
  return (
    <>
      <section className="bg-magenta-sombre text-blanc">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[auto_1fr] md:items-center md:px-8 md:py-24">
          <Image
            src="/logo-aems.png"
            alt="Logo de l'Association des Étudiants de Mitsoudje au Sénégal"
            width={512}
            height={512}
            priority
            className="h-40 w-40 rounded-full md:h-56 md:w-56"
          />
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-jaune uppercase">
              Qui sommes-nous
            </p>
            <h1 className="titre-geant mt-5 text-5xl sm:text-7xl">
              L&apos;AEMS
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blanc/85">
              L&apos;Association des Étudiants de Mitsoudje au Sénégal réunit
              les étudiants comoriens originaires de Mitsoudje venus poursuivre
              leurs études supérieures à Dakar.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="titre-geant max-w-3xl text-4xl sm:text-5xl">
          Une association née
          <br />
          <span className="text-magenta">d&apos;un besoin très concret.</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-gris">
            Partir étudier à l&apos;étranger à dix-huit ans, c&apos;est arriver
            dans une ville qu&apos;on ne connaît pas, avec des démarches
            administratives qu&apos;on ne maîtrise pas et des écoles dont on ne
            sait rien. Ceux qui sont passés par là avant vous ont appris tout
            cela à leurs dépens. L&apos;AEMS existe pour que cette expérience ne
            se perde pas à chaque promotion.
          </p>
          <p className="text-lg leading-relaxed text-gris">
            L&apos;association accueille les nouveaux arrivants, les aide dans
            leurs démarches d&apos;inscription et de logement, et les oriente
            vers les établissements qu&apos;elle connaît de l&apos;intérieur.
            Ce site prolonge ce travail : il rassemble ce que nos membres ont
            pu vérifier sur les sites officiels des établissements, pour que le
            choix se fasse avant le départ. Ce qui n&apos;a pas pu être confirmé
            est signalé comme tel dans les fiches, jamais présenté comme acquis.
          </p>
        </div>
      </section>

      <BandeauDefilant
        texte="Unité · Solidarité · Développement ·"
        variante="magenta"
        inclinaison={2}
      />

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <p className="text-xs font-bold tracking-[0.22em] text-magenta uppercase">
          Notre devise
        </p>
        <div className="mt-10 grid gap-px bg-magenta-sombre/10 md:grid-cols-3">
          {PILIERS.map((pilier) => (
            <article key={pilier.mot} className="bg-blanc p-8">
              <h3 className="titre-geant text-4xl text-magenta">
                {pilier.mot}
              </h3>
              <p className="mt-5 leading-relaxed text-gris">{pilier.texte}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="border-2 border-magenta-sombre">
          <div className="border-b-2 border-magenta-sombre bg-jaune px-8 py-5">
            <h2 className="titre-geant text-2xl">Ce que nous ne sommes pas</h2>
          </div>
          <div className="grid gap-8 p-8 md:grid-cols-2">
            <p className="leading-relaxed text-gris">
              Nous ne sommes ni une agence de placement, ni un intermédiaire
              rémunéré par des écoles. Aucun établissement ne paie pour figurer
              dans cet annuaire, et nous n&apos;encaissons aucun frais de
              dossier. Si un site ou une personne vous demande de l&apos;argent
              pour vous « garantir » une inscription, méfiez-vous.
            </p>
            <p className="leading-relaxed text-gris">
              Les informations publiées ici sont vérifiées sur les sites
              officiels des établissements, mais elles restent indicatives. Les
              frais et les procédures évoluent chaque année : la confirmation
              finale se fait toujours auprès de l&apos;école elle-même.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-magenta text-blanc">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8">
          <h2 className="titre-geant max-w-2xl text-4xl sm:text-5xl">
            Vous arrivez bientôt à Dakar ?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-blanc px-9 py-5 text-sm font-bold tracking-[0.08em] text-magenta uppercase transition-transform duration-200 hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
