interface BandeauDefilantProps {
  texte: string;
  /** Inclinaison en degrés, à la manière du site de référence. */
  inclinaison?: number;
  variante?: "magenta" | "jaune" | "sombre";
}

const CLASSES_PAR_VARIANTE = {
  magenta: "bg-magenta text-blanc",
  jaune: "bg-jaune text-encre",
  sombre: "bg-magenta-sombre text-blanc",
} as const;

export function BandeauDefilant({
  texte,
  inclinaison = -3,
  variante = "magenta",
}: BandeauDefilantProps) {
  // Le texte est dupliqué : la seconde moitié prend le relais sans saut.
  const repetitions = Array.from({ length: 8 }, (_, index) => index);

  return (
    // Deux conteneurs : celui du dessus coupe le débordement, celui du dessous
    // porte la rotation. Sans cela, les coins inclinés créent un défilement
    // horizontal sur mobile.
    <div aria-hidden="true" className="my-14 overflow-hidden md:my-20">
      <div
        className="-mx-2"
        style={{ transform: `rotate(${inclinaison}deg)` }}
      >
        <div className={`py-3 md:py-4 ${CLASSES_PAR_VARIANTE[variante]}`}>
          <div className="bandeau-defilant">
            {repetitions.map((index) => (
              <span
                key={index}
                className="titre-geant px-6 text-3xl whitespace-nowrap md:text-5xl"
              >
                {texte}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
