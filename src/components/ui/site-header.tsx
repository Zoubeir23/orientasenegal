import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-forest/12 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3.5">
        <Image
          src="/logo.png"
          alt="Logo de l'Association des Étudiants de Mitsoudje au Sénégal"
          width={128}
          height={128}
          priority
          className="h-20 w-20 shrink-0 md:h-28 md:w-28"
        />

        <div className="min-w-0">
          <p className="font-display text-xl leading-none font-semibold tracking-tight text-forest-deep md:text-2xl">
            AEMS
          </p>
          <p className="mt-1 truncate text-[11px] leading-none tracking-[0.14em] text-ink-soft uppercase">
            Étudiants de Mitsoudje au Sénégal
          </p>
        </div>

        <p className="ml-auto hidden text-[11px] tracking-[0.18em] text-forest uppercase lg:block">
          Unité <span className="text-papaya">·</span> Solidarité{" "}
          <span className="text-papaya">·</span> Développement
        </p>
      </div>
    </header>
  );
}
