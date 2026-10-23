import { SHOP_URL, PROBIERPAKET_URL, probierpaket } from "@/data/chi-cafe";

export function FinalCta() {
  return (
    <section className="bg-espresso">
      <div className="container-editorial flex flex-col items-center py-20 text-center md:py-24">
        <p className="eyebrow text-gold">Bereit für Ihre erste Tasse?</p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ivory md:text-5xl">
          Genießen Sie Kaffee – mit gutem Gewissen.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
          Probieren Sie alle Sorten im versandkostenfreien Probierpaket oder
          stöbern Sie direkt im Online-Shop.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-gold-soft"
          >
            Zum Online-Shop
          </a>
          <a
            href={PROBIERPAKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-cream-line bg-transparent px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10"
          >
            Probierpaket · {probierpaket.price}
          </a>
        </div>
        <p className="mt-8 text-sm text-ivory/60">
          Ab 0,26 € pro Tasse · Auch in Ihrer Apotheke!
        </p>
      </div>
    </section>
  );
}
