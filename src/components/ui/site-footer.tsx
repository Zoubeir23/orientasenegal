import Image from "next/image";
import Link from "next/link";

export const NUMERO_DE_TELEPHONE_AFFICHE = "+221 78 594 10 71";
export const LIEN_WHATSAPP = "https://wa.me/221785941071";

export const NUMERO_SECONDAIRE_AFFICHE = "+221 77 348 45 75";
export const LIEN_WHATSAPP_SECONDAIRE = "https://wa.me/221773484575";
export const ADRESSE_ELECTRONIQUE = "senegalmitsousdje@gmail.com";

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
          <p className="text-xs font-bold tracking-[0.18em] text-blanc/75 uppercase">
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
                  className="text-lg font-bold transition-colors duration-200 hover:text-jaune"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-blanc/75 uppercase">
            Une question ?
          </p>
          <a
            href={LIEN_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="titre-geant mt-4 block text-2xl text-jaune transition-colors duration-200 hover:text-blanc"
          >
            {NUMERO_DE_TELEPHONE_AFFICHE}
            <span className="sr-only">
              (ouvre une conversation WhatsApp dans un nouvel onglet)
            </span>
          </a>
          <a
            href={LIEN_WHATSAPP_SECONDAIRE}
            target="_blank"
            rel="noopener noreferrer"
            className="titre-geant mt-2 block text-2xl text-jaune transition-colors duration-200 hover:text-blanc"
          >
            {NUMERO_SECONDAIRE_AFFICHE}
            <span className="sr-only">
              (ouvre une conversation WhatsApp dans un nouvel onglet)
            </span>
          </a>
          <a
            href={`mailto:${ADRESSE_ELECTRONIQUE}`}
            className="mt-4 inline-block font-bold break-all text-blanc underline decoration-jaune decoration-2 underline-offset-4 transition-colors duration-200 hover:text-jaune"
          >
            {ADRESSE_ELECTRONIQUE}
          </a>
        </div>
      </div>

      {/* Deux mises en garde qui valent pour tout le site : l'annuaire vieillit,
          et il ne prétend pas être exhaustif. */}
      <div className="border-t border-blanc/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
          <div className="border-l-4 border-jaune pl-5">
            <p className="titre-geant text-lg">Ces informations vieillissent</p>
            <p className="mt-3 leading-relaxed text-blanc/80">
              Les frais, les dates de concours et les conditions d&apos;admission
              publiés ici sont ceux que nous avons pu vérifier au moment de la
              mise en ligne. Les établissements les modifient chaque année.
              Avant de constituer un dossier ou de payer quoi que ce soit,
              écrivez-nous : nous vérifions l&apos;information avec vous.
            </p>
          </div>

          <div className="border-l-4 border-jaune pl-5">
            <p className="titre-geant text-lg">
              Toutes les formations n&apos;y sont pas
            </p>
            <p className="mt-3 leading-relaxed text-blanc/80">
              Le Sénégal compte bien plus de filières et d&apos;écoles que
              celles réunies sur ce site : nous ajoutons celles que nos membres
              connaissent de l&apos;intérieur. Si la formation que vous cherchez
              n&apos;apparaît pas, contactez-nous — elle existe peut-être, et
              nous vous dirons où.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-blanc/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-blanc/70 md:px-8">
          © {new Date().getFullYear()} AEMS — Annuaire d&apos;orientation des
          bacheliers comoriens à Dakar.
        </p>
      </div>
    </footer>
  );
}
