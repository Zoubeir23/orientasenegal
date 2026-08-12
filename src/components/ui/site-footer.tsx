import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-forest/12 bg-forest-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <Image
            src="/logo.png"
            alt=""
            aria-hidden="true"
            width={128}
            height={128}
            className="h-24 w-24 shrink-0 rounded-full bg-paper p-1.5 md:h-28 md:w-28"
          />
          <div>
            <p className="font-display text-xl font-semibold">AEMS</p>
            <p className="mt-1 max-w-xs text-sm leading-relaxed text-paper/70">
              Association des Étudiants de Mitsoudje au Sénégal
            </p>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-papaya uppercase">
              Unité · Solidarité · Développement
            </p>
          </div>
        </div>

        <div className="text-sm text-paper/70">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-paper uppercase">
            Une question ?
          </p>
          <a
            href="https://wa.me/221785941071"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-paper underline decoration-papaya decoration-2 underline-offset-4 transition-colors duration-200 hover:text-papaya"
          >
            WhatsApp : +221 78 594 10 71
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(ouvre une conversation WhatsApp dans un nouvel onglet)</span>
          </a>
        </div>

        <div className="text-sm text-paper/70">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-paper uppercase">
            Avant de vous inscrire
          </p>
          <ul className="max-w-sm space-y-1.5 leading-relaxed">
            <li>
              Vérifiez toujours les dates et conditions auprès de l&apos;institut
              lui-même.
            </li>
            <li>
              Les informations de cet annuaire sont indicatives et mises à jour
              par l&apos;association.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/12">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-paper/50">
          © {new Date().getFullYear()} AEMS — Annuaire d&apos;orientation des
          bacheliers comoriens au Sénégal.
        </p>
      </div>
    </footer>
  );
}
