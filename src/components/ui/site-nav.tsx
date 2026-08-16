"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LIENS_DE_NAVIGATION = [
  { href: "/", libelle: "Accueil" },
  { href: "/a-propos", libelle: "À propos" },
  { href: "/filieres", libelle: "Filières" },
  { href: "/contact", libelle: "Contact" },
] as const;

export function SiteNav() {
  const cheminActuel = usePathname();
  const [menuMobileOuvert, setMenuMobileOuvert] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuMobileOuvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMobileOuvert]);

  // Au passage en affichage bureau, le menu mobile disparaît (md:hidden) mais
  // son état resterait « ouvert » : le défilement de la page demeurerait
  // bloqué. On referme donc explicitement au franchissement du point de
  // rupture.
  useEffect(() => {
    const requeteBureau = window.matchMedia("(min-width: 48rem)");

    const fermerSiBureau = (evenement: MediaQueryListEvent | MediaQueryList) => {
      if (evenement.matches) {
        setMenuMobileOuvert(false);
      }
    };

    fermerSiBureau(requeteBureau);
    requeteBureau.addEventListener("change", fermerSiBureau);

    return () => {
      requeteBureau.removeEventListener("change", fermerSiBureau);
    };
  }, []);

  const estActif = (href: string) =>
    href === "/" ? cheminActuel === "/" : cheminActuel.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-magenta text-blanc">
      {/* Padding vertical réduit : c'est le logo qui donne sa hauteur à la barre. */}
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="AEMS — retour à l'accueil"
        >
          <Image
            src="/logo-aems.jpg"
            alt=""
            aria-hidden="true"
            width={256}
            height={256}
            priority
            className="h-20 w-20 shrink-0 rounded-full md:h-26 md:w-26"
          />
          <span className="titre-geant text-2xl md:text-3xl">AEMS</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="ml-auto hidden items-center gap-1 md:flex"
        >
          {LIENS_DE_NAVIGATION.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              aria-current={estActif(lien.href) ? "page" : undefined}
              className={`px-4 py-2 text-sm font-bold tracking-[0.08em] uppercase transition-colors duration-200 ${
                estActif(lien.href)
                  ? "bg-blanc text-magenta"
                  : "text-blanc hover:bg-blanc/15"
              }`}
            >
              {lien.libelle}
            </Link>
          ))}
          <a
            href="https://wa.me/221785941071"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-jaune px-5 py-2.5 text-sm font-bold tracking-[0.08em] text-encre uppercase transition-transform duration-200 hover:scale-105"
          >
            Nous écrire
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuMobileOuvert((ouvert) => !ouvert)}
          aria-expanded={menuMobileOuvert}
          aria-controls="menu-mobile"
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-2 border-blanc md:hidden"
        >
          <span className="sr-only">
            {menuMobileOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-blanc transition-transform duration-200 ${
              menuMobileOuvert ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-blanc transition-opacity duration-200 ${
              menuMobileOuvert ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-blanc transition-transform duration-200 ${
              menuMobileOuvert ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuMobileOuvert ? (
        <div
          id="menu-mobile"
          className="border-t-2 border-blanc/25 bg-magenta md:hidden"
        >
          <nav aria-label="Navigation principale mobile" className="px-5 py-4">
            {LIENS_DE_NAVIGATION.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                // Le menu ne doit jamais survivre à un changement de page.
                onClick={() => setMenuMobileOuvert(false)}
                aria-current={estActif(lien.href) ? "page" : undefined}
                className={`titre-geant block border-b border-blanc/20 py-4 text-3xl ${
                  estActif(lien.href) ? "text-jaune" : "text-blanc"
                }`}
              >
                {lien.libelle}
              </Link>
            ))}
            <a
              href="https://wa.me/221785941071"
              target="_blank"
              rel="noopener noreferrer"
              // WhatsApp s'ouvre dans un autre onglet : sans cette fermeture,
              // l'utilisateur retrouverait le menu ouvert en revenant.
              onClick={() => setMenuMobileOuvert(false)}
              className="mt-5 block rounded-full bg-jaune px-5 py-3.5 text-center text-sm font-bold tracking-[0.08em] text-encre uppercase"
            >
              WhatsApp : +221 78 594 10 71
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
