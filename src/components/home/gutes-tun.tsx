import { HELFEN_URL, gutesTun } from "@/data/chi-cafe";

export function GutesTun() {
  return (
    <section className="bg-background">
      <div className="container-editorial grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={gutesTun.image}
            alt={gutesTun.imageAlt}
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="eyebrow text-olive">{gutesTun.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            {gutesTun.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {gutesTun.text}
          </p>

          <div className="mt-9 flex items-baseline gap-4 border-t border-border pt-8">
            <span className="font-display text-5xl text-olive-deep">
              {gutesTun.stat}
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {gutesTun.statLabel}
            </p>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">{gutesTun.note}</p>

          <div className="mt-8">
            <a
              href={HELFEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-olive-deep hover:underline"
            >
              Mehr über „Wir helfen"
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
