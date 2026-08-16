import type { Metadata } from "next";
import Link from "next/link";
import {
  ADRESSE_ELECTRONIQUE,
  LIEN_WHATSAPP,
  LIEN_WHATSAPP_SECONDAIRE,
  NUMERO_DE_TELEPHONE_AFFICHE,
  NUMERO_SECONDAIRE_AFFICHE,
} from "@/components/ui/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'AEMS par WhatsApp au +221 78 594 10 71 ou au +221 77 348 45 75, ou par courriel, pour toute question sur les études au Sénégal.",
};

const QUESTIONS_FREQUENTES = [
  "Quelle filière correspond à mon bac et à mon projet ?",
  "Quel est le vrai budget d'une année à Dakar, logement compris ?",
  "Comment se passe l'inscription quand on a un bac comorien ?",
  "Cette école est-elle sérieuse et reconnue ?",
  "Je cherche une formation qui n'est pas sur le site : existe-t-elle au Sénégal ?",
  "Ces frais sont-ils toujours d'actualité cette année ?",
];

export default function PageContact() {
  return (
    <>
      <section className="bg-magenta-sombre text-blanc">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-bold tracking-[0.24em] text-jaune uppercase">
            Une question ? Un doute ?
          </p>
          <h1 className="titre-geant mt-6 text-5xl sm:text-7xl">
            Écrivez-nous.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-blanc/85">
            Un membre de l&apos;association vous répond directement sur
            WhatsApp. C&apos;est gratuit, et personne ne vous demandera le
            moindre franc pour vous orienter.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            {[
              { lien: LIEN_WHATSAPP, numero: NUMERO_DE_TELEPHONE_AFFICHE },
              {
                lien: LIEN_WHATSAPP_SECONDAIRE,
                numero: NUMERO_SECONDAIRE_AFFICHE,
              },
            ].map((contact) => (
              <a
                key={contact.numero}
                href={contact.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-magenta px-8 py-7 transition-transform duration-200 hover:scale-[1.03] sm:px-12"
              >
                <span className="block text-xs font-bold tracking-[0.2em] text-blanc/80 uppercase">
                  WhatsApp
                </span>
                <span className="titre-geant mt-2 block text-3xl text-blanc sm:text-4xl">
                  {contact.numero}
                </span>
                <span className="sr-only">
                  (ouvre une conversation WhatsApp dans un nouvel onglet)
                </span>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${ADRESSE_ELECTRONIQUE}`}
            className="titre-geant mt-8 inline-block text-xl break-all text-jaune underline decoration-2 underline-offset-8 transition-colors duration-200 hover:text-blanc sm:text-2xl"
          >
            {ADRESSE_ELECTRONIQUE}
          </a>

          <p className="mt-8 text-sm text-blanc/70">
            Ces deux numéros sont joignables par appel comme par WhatsApp,
            depuis les Comores ou le Sénégal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="titre-geant text-3xl sm:text-4xl">
              Ce qu&apos;on peut vous dire
            </h2>
            <ul className="mt-8 space-y-4">
              {QUESTIONS_FREQUENTES.map((question) => (
                <li key={question} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 bg-magenta"
                  />
                  <span className="leading-relaxed text-gris">{question}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-magenta-sombre">
            <div className="border-b-2 border-magenta-sombre bg-jaune px-7 py-4">
              <h2 className="titre-geant text-xl">Avant de nous écrire</h2>
            </div>
            <div className="space-y-4 p-7 leading-relaxed text-gris">
              <p>
                Parcourez d&apos;abord la page{" "}
                <Link
                  href="/filieres"
                  className="font-bold text-magenta underline decoration-2 underline-offset-4"
                >
                  Filières
                </Link>{" "}
                : la réponse à votre question s&apos;y trouve peut-être déjà,
                avec les frais et le site officiel de chaque école.
              </p>
              <p>
                Si vous nous écrivez, indiquez votre série de baccalauréat,
                votre année d&apos;obtention et le domaine qui vous intéresse.
                Nous pourrons répondre bien plus précisément.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
