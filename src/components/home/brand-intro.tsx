import { useLang } from "@/i18n/language";
import { kaffeegenuss } from "@/data/chi-cafe";

export function BrandIntro() {
  const { t } = useLang();
  const b = t.brand;

  return (
    <section className="bg-parchment">
      <div className="container-editorial grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-olive">{b.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            {b.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {b.p1}
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            {b.p2}
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {b.facts.map((fakt) => (
              <li
                key={fakt}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {fakt}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={kaffeegenuss.url}
            alt={b.imageAlt}
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
