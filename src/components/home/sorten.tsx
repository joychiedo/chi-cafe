import { useLang } from "@/i18n/language";
import { PROBIERPAKET_URL } from "@/data/chi-cafe";

export function Sorten() {
  const { t } = useLang();
  const s = t.sorten;

  return (
    <section id="sorten" className="scroll-mt-24 bg-background">
      <div className="container-editorial py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-olive">{s.eyebrow}</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            {s.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {s.sub}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="overflow-hidden bg-card">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 pt-2">
                <p className="eyebrow text-olive">{product.epithet}</p>
                <h3 className="mt-2 font-display text-xl text-foreground">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.blurb}
                </p>
                <a
                  href={product.detailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-olive-deep hover:underline"
                >
                  {s.detailLabel}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Probierpaket */}
        <div className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-beige lg:grid-cols-2">
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <img
              src={s.probierpaket.imageAlt ? probierpaketImage : probierpaketImage}
              alt={s.probierpaket.imageAlt}
              className="aspect-square w-full max-w-sm rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:pl-2 lg:pr-16">
            <p className="eyebrow text-olive">{s.probierpaket.eyebrow}</p>
            <h3 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              {s.probierpaket.title}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {s.probierpaket.note}
            </p>
            <div className="mt-8">
              <a
                href={PROBIERPAKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {s.probierpaket.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { probierpaketImage } from "@/data/chi-cafe-probierpaket-image";
