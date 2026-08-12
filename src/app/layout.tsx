import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AEMS — Orientation des bacheliers comoriens au Sénégal",
  description:
    "Association des Étudiants de Mitsoudje au Sénégal. Trouvez les filières et instituts sénégalais accessibles selon votre type de baccalauréat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="paper-grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
