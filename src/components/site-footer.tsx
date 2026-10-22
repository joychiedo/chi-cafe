import {
  logo,
  SHOP_URL,
  PROBIERPAKET_URL,
  VARIANTEN_URL,
  ZUTATEN_URL,
  REZEPTE_URL,
  WARUM_URL,
  HELFEN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "@/data/chi-cafe";

const columns = [
  {
    title: "Entdecken",
    links: [
      { label: "Chi-Cafe-Sorten", href: VARIANTEN_URL, external: true },
      { label: "Zutaten", href: ZUTATEN_URL, external: true },
      { label: "Rezepte", href: REZEPTE_URL, external: true },
      { label: "Warum Chi-Cafe?", href: WARUM_URL, external: true },
      { label: "Gutes tun", href: HELFEN_URL, external: true },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Chi-Cafe im Online-Shop", href: SHOP_URL, external: true },
      { label: "Probierpaket · 3,75 €", href: PROBIERPAKET_URL, external: true },
      { label: "Österreich", href: "https://chi-cafe.de/oesterreich/", external: true },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "https://drjacobs-shop.de/impressum", external: true },
      { label: "Datenschutz", href: "https://drjacobs-shop.de/datenschutz", external: true },
      { label: "AGB", href: "https://drjacobs-shop.de/agb", external: true },
      { label: "Widerrufsrecht", href: "https://drjacobs-shop.de/widerrufsrecht", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-parchment">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src={logo.url}
              alt="Chi-Cafe Logo"
              className="h-11 w-auto"
              width={348}
              height={120}
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Die gesunde Art zu genießen¹ – Kaffee mit Reishi-Pilz-Extrakt,
              Granatapfel und Ginseng. Auch in Ihrer Apotheke!
            </p>
            <div className="mt-6 flex gap-5 text-sm">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow text-muted-foreground">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© Chi-Cafe.de · Online-Shop: drjacobs-shop.de</p>
          <p>Alle Preise zzgl. Versandkosten.</p>
        </div>
      </div>
    </footer>
  );
}
