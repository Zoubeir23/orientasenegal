import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/ui/site-nav";
import { SiteFooter } from "@/components/ui/site-footer";

// Libre Franklin est la reprise libre du Franklin Gothic utilisé par la
// charte de référence : 900 pour les titres, 400/600 pour le texte courant.
const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AEMS — Étudier à Dakar après le bac",
    template: "%s · AEMS",
  },
  description:
    "Association des Étudiants de Mitsoudje au Sénégal. Les filières et les établissements de Dakar accessibles aux bacheliers comoriens, avec les frais et les débouchés au pays.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${libreFranklin.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-blanc">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:bg-jaune focus:px-4 focus:py-2 focus:font-bold focus:text-encre"
        >
          Aller au contenu
        </a>
        <SiteNav />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
