import { useEffect, useState } from "react";
import { logo, PROBIERPAKET_URL, WARUM_URL } from "@/data/chi-cafe";

const navItems = [
  { label: "Sorten", href: "#sorten" },
  { label: "Zutaten", href: "#zutaten" },
  { label: "Zubereitung", href: "#ritual" },
  { label: "Warum Chi-Cafe?", href: WARUM_URL, external: true },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between gap-6 md:h-20">
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Chi-Cafe Startseite"
        >
          <img
            src={logo.url}
            alt="Chi-Cafe Logo"
            className="h-9 w-auto md:h-11"
            width={348}
            height={120}
          />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PROBIERPAKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Probierpaket · 3,75 €
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-border bg-background transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="container-editorial flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="border-b border-border py-4 font-display text-2xl text-foreground last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PROBIERPAKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Probierpaket · 3,75 €
          </a>
        </nav>
      </div>
    </header>
  );
}
