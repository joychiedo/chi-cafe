import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { BrandIntro } from "@/components/home/brand-intro";
import { Sorten } from "@/components/home/sorten";
import { Zutaten } from "@/components/home/zutaten";
import { Ritual } from "@/components/home/ritual";
import { Stimmen } from "@/components/home/stimmen";
import { GutesTun } from "@/components/home/gutes-tun";
import { FinalCta } from "@/components/home/final-cta";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Chi-Cafe – Die gesunde Art zu genießen";
const description =
  "Chi-Cafe vereint Arabica- und Robusta-Kaffee mit Reishi-Pilz, Granatapfel und Ginseng – ohne Zuckerzusatz, glutenfrei und laktosefrei. Neun Sorten, Probierpaket 3,75 €.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BrandIntro />
        <Sorten />
        <Zutaten />
        <Ritual />
        <Stimmen />
        <GutesTun />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
