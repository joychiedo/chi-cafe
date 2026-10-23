import { REZEPTE_URL, zubereitungsSchritte } from "@/data/chi-cafe";

export function Ritual() {
  return (
    <section id="ritual" className="scroll-mt-24 bg-background">
      <div className="container-editorial grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-olive">Die Zubereitung</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            In 60 Sekunden zur perfekten Tasse
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            So einfach geht gesunder Kaffeegenuss¹ – kein Sieb, keine Maschine,
            keine Wartezeit.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Für Frappé und Eiskaffee ist Chi-Cafe auch kalt gut löslich.
          </p>
          <div className="mt-8">
            <a
              href={REZEPTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-olive-deep hover:underline"
            >
              Zu den Rezepten
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {zubereitungsSchritte.map((schritt) => (
            <li
              key={schritt.step}
              className="rounded-lg border border-border bg-card p-6"
            >
              <span
                aria-hidden
                className="font-display text-3xl text-gold"
              >
                {schritt.step}
              </span>
              <h3 className="mt-2 font-display text-lg text-foreground">
                {schritt.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {schritt.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
