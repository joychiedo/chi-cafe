import { kaffeegenuss } from "@/data/chi-cafe";

const fakten = [
  "Ohne Zuckerzusatz",
  "Glutenfrei",
  "Laktosefrei",
  "Wertvolle Mineralstoffe",
];

export function BrandIntro() {
  return (
    <section className="bg-parchment">
      <div className="container-editorial grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow text-olive">Das Konzept</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Kaffee, neu gedacht.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            „Chi“ bedeutet Lebensenergie. Chi-Cafe fördert die Entfaltung der
            Lebenskraft und hilft, eine natürliche Balance zu schaffen¹ – als
            sanfte Alternative zum gewohnten Bohnenkaffee.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Das Koffein stammt aus Kaffee und der tropischen Guarana-Frucht.
            Es wird langsamer freigesetzt und hat eine sanfte, längere
            Wirkung².
          </p>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {fakten.map((fakt) => (
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
            alt="Eine Mutter und ihre Tochter genießen gemeinsam eine Tasse Chi-Cafe"
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
