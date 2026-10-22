import {
  foundersKaffee,
  heroTasse,
  WARUM_URL,
} from "@/data/chi-cafe";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-editorial grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow text-olive">Gesunde Kaffee-Alternative</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
            Die gesunde Art
            <br />
            zu genießen<sup className="text-[0.45em] font-normal align-super">1</sup>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Chi-Cafe vereint den vollen Geschmack von Arabica- und
            Robusta-Kaffee mit wertvollen Pflanzenextrakten wie Reishi-Pilz,
            Granatapfel und Ginseng – ohne Zuckerzusatz, Gluten oder Laktose.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#sorten"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sorten entdecken
            </a>
            <a
              href={WARUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Warum Chi-Cafe?
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Ab 0,26 € pro Tasse · Auch in Ihrer Apotheke!
          </p>
        </div>

        {/* Image-led composition: real brand photography with an overlapping
            product card */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={foundersKaffee.url}
              alt="Zwei Menschen genießen eine Tasse Chi-Cafe in der Sonne"
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
              loading="eager"
            />
          </div>
          <div className="relative z-10 mx-4 -mt-14 flex max-w-xs items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm sm:mx-6 lg:absolute lg:-bottom-10 lg:left-10 lg:mx-0 lg:mt-0">
            <img
              src={heroTasse.url}
              alt="Chi-Cafe balance – Tasse mit gelöstem Pulver und Dose"
              className="h-20 w-20 shrink-0 rounded-md object-cover"
              loading="eager"
            />
            <div>
              <p className="font-display text-base text-foreground">Chi-Cafe balance</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Der Harmonische</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
