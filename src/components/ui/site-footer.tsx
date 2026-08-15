import Image from "next/image";
import Link from "next/link";

export const NUMERO_DE_TELEPHONE_AFFICHE = "+221 78 594 10 71";
export const LIEN_WHATSAPP = "https://wa.me/221785941071";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-magenta-sombre text-blanc">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo-aems.png"
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
              className="h-20 w-20 shrink-0 rounded-full"
            />
            <p className="titre-geant text-4xl">AEMS</p>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed text-blanc/70">
            Association des Étudiants de Mitsoudje au Sénégal
          </p>
          <p className="mt-4 text-xs font-bold tracking-[0.18em] text-jaune uppercase">
            Unité · Solidarité · Développement
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blanc/50 uppercase">
            Le site
          </p>
          <ul className="mt-5 space-y-3">
            {[
              { href: "/", libelle: "Accueil" },
              { href: "/a-propos", libelle: "À propos" },
              { href: "/filieres", libelle: "Filières" },
              { href: "/contact", libelle: "Contact" },
            ].map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className="text-lg font-bold transition-colors duration-200 hover:text-magenta"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blanc/50 uppercase">
            Une question ?
          </p>
          <a
            href={LIEN_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="titre-geant mt-4 block text-2xl text-jaune transition-colors duration-200 hover:text-magenta"
          >
            {NUMERO_DE_TELEPHONE_AFFICHE}
            <span className="sr-only">
              (ouvre une conversation WhatsApp dans un nouvel onglet)
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-blanc/60">
            Vérifiez toujours les dates, les frais et les conditions
            d&apos;admission auprès de l&apos;établissement lui-même : les
            informations de cet annuaire sont indicatives.
          </p>
        </div>
      </div>

      <div className="border-t border-blanc/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-blanc/45 md:px-8">
          © {new Date().getFullYear()} AEMS — Annuaire d&apos;orientation des
          bacheliers comoriens à Dakar.
        </p>
      </div>
    </footer>
  );
}
