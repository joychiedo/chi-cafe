import { kundenstimmen, stimmenHinweis, umfrage } from "@/data/chi-cafe";

export function Stimmen() {
  return (
    <section className="bg-parchment">
      <div className="container-editorial py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-olive">Kundenstimmen</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            <span className="text-olive-deep">{umfrage.percent}</span> unserer
            Kunden empfehlen Chi-Cafe weiter.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {umfrage.source}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {kundenstimmen.map((stimme) => (
            <figure
              key={stimme.author}
              className="flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <span aria-hidden className="font-display text-4xl leading-none text-gold">
                „
              </span>
              <blockquote className="mt-2 flex-1 font-display text-lg leading-relaxed text-foreground">
                {stimme.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {stimme.author}
                </p>
                {stimme.role ? (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {stimme.role}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {stimmenHinweis}
        </p>
      </div>
    </section>
  );
}
