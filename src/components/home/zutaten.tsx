import { ZUTATEN_URL, reishi, guarana, akazienfaser } from "@/data/chi-cafe";

const zutaten = [
  {
    name: "Reishi-Pilz",
    tagline: "Der Pilz der Könige",
    text: "Der Reishi-Pilz (Ganoderma lucidum) wird in Asien seit Jahrtausenden verehrt und meist als Tee genossen. In Chi-Cafe bringt er seine zartherbe Note ein.",
    image: reishi.url,
  },
  {
    name: "Guarana",
    tagline: "Regt an, nicht auf²",
    text: "Die tropische Guarana-Frucht liefert natürliches Koffein, das langsamer freigesetzt wird – für eine sanfte, längere Wirkung statt des kurzen Kicks.",
    image: guarana.url,
  },
  {
    name: "Akazienfaser",
    tagline: "Gutes Bauchgefühl³",
    text: "Lösliche Ballaststoffe aus der Akazienfaser machen jede Tasse cremig-mild und sorgen für ein angenehmes Gefühl im Bauch.",
    image: akazienfaser.url,
  },
];

export function Zutaten() {
  return (
    <section id="zutaten" className="scroll-mt-24 bg-parchment">
      <div className="container-editorial py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-olive">Die Zutaten</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Naturwissen in der Tasse
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Schonend gerösteter Kaffee, verfeinert mit erlesenen
            Pflanzenextrakten – jede Zutat mit einer Aufgabe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {zutaten.map((z) => (
            <article
              key={z.name}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={z.image}
                  alt={z.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-4">
                <p className="eyebrow text-olive">{z.tagline}</p>
                <h3 className="mt-2 font-display text-xl text-foreground">
                  {z.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {z.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={ZUTATEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-olive-deep hover:underline"
          >
            Alle Zutaten im Detail
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
