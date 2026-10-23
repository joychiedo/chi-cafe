import { useLang } from "@/i18n/language";
import { foundersKaffee, heroTasse, WARUM_URL } from "@/data/chi-cafe";

export function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-editorial grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow text-olive">{h.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
            {h.titleA}
            <br />
            {h.titleB}
            <sup className="text-[0.45em] font-normal align-super">1</sup>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            {h.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#sorten"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {h.ctaPrimary}
            </a>
            <a
              href={WARUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {h.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{h.note}</p>
        </div>

        {/* Image-led composition: real brand photography with an overlapping
            product card */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={foundersKaffee.url}
              alt={h.imageAlt}
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
              loading="eager"
            />
          </div>
          <div className="relative z-10 mx-4 -mt-14 flex max-w-xs items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm sm:mx-6 lg:absolute lg:-bottom-10 lg:left-10 lg:mx-0 lg:mt-0">
            <img
              src={heroTasse.url}
              alt={h.cardImageAlt}
              className="h-20 w-20 shrink-0 rounded-md object-cover"
              loading="eager"
            />
            <div>
              <p className="font-display text-base text-foreground">{h.cardName}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{h.cardEpithet}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
