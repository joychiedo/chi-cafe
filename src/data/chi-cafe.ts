// All content on this page is sourced from the existing chi-cafe.de website
// (verified October 2026). No invented products, prices, claims or reviews.
import logoJson from "@/assets/chi-cafe-logo.png.asset.json";
import balanceJson from "@/assets/chi-cafe-balance.jpg.asset.json";
import classicJson from "@/assets/chi-cafe-classic.jpg.asset.json";
import reichiCafeJson from "@/assets/reichi-cafe.jpg.asset.json";
import reichiZenJson from "@/assets/reichi-zen.jpg.asset.json";
import proactiveJson from "@/assets/chi-cafe-proactive.jpg.asset.json";
import flavochinoJson from "@/assets/flavochino.jpg.asset.json";
import bioJson from "@/assets/chi-cafe-bio.jpg.asset.json";
import freeJson from "@/assets/chi-cafe-free.jpg.asset.json";
import chiTeaJson from "@/assets/chi-tea.jpg.asset.json";
import probierpaketJson from "@/assets/probierpaket.jpg.asset.json";
import heroTasseJson from "@/assets/hero-tasse-balance.jpg.asset.json";
import foundersKaffeeJson from "@/assets/founders-kaffee.jpg.asset.json";
import kaffeegenussJson from "@/assets/kaffeegenuss-couch.jpg.asset.json";
import reishiJson from "@/assets/reishi-pilz.jpg.asset.json";
import guaranaJson from "@/assets/guarana.jpg.asset.json";
import akazienfaserJson from "@/assets/akazienfaser.jpg.asset.json";
import gruenderJson from "@/assets/gruender-suzanne-ludwig.jpg.asset.json";

export const logo = logoJson;
export const heroTasse = heroTasseJson;
export const foundersKaffee = foundersKaffeeJson;
export const kaffeegenuss = kaffeegenussJson;
export const gruender = gruenderJson;

export const SHOP_URL = "https://drjacobs-shop.de/chi-cafe/";
export const PROBIERPAKET_URL = "https://go.drjacobs.de/chi-cafe-probierpaket";
export const VARIANTEN_URL = "https://chi-cafe.de/chi-cafe-varianten/";
export const WARUM_URL = "https://chi-cafe.de/warum-chi-cafe/";
export const ZUTATEN_URL = "https://chi-cafe.de/chi-cafe-zutaten/";
export const REZEPTE_URL = "https://chi-cafe.de/chi-cafe-rezepte/";
export const HELFEN_URL = "https://chi-cafe.de/wir-helfen/";
export const BEWERTUNG_URL = "https://drjacobs-shop.de/bewertungsrichtlinien";
export const FACEBOOK_URL = "https://www.facebook.com/chi.cafe/";
export const INSTAGRAM_URL = "https://www.instagram.com/wirliebenchicafe/";

export type Product = {
  name: string;
  epithet: string;
  blurb: string;
  image: string;
  detailHref: string;
};

// Product blurbs are shortened from the verified product texts on
// chi-cafe.de/chi-cafe-varianten/. Detail links point to the real
// anchor destinations on that page.
export const products: Product[] = [
  {
    name: "Chi-Cafe balance",
    epithet: "Der Harmonische",
    blurb:
      "Besonders mild und cremig, mit einer Nuance von Kakao. Mit Akazienfaser-Ballaststoffen, Calcium, Magnesium und Polyphenolen aus grünem Kaffee, Guarana, Granatapfel, Ginseng und Reishi.",
    image: balanceJson.url,
    detailHref: `${VARIANTEN_URL}#chi-cafe-balance`,
  },
  {
    name: "Chi-Cafe classic",
    epithet: "Unser Klassiker",
    blurb:
      "Das erste ballaststoffreiche Kaffee-Getränk der Welt – schonend geröstete Kaffeesorten, verfeinert mit Pflanzenextrakten aus Guarana, Ginseng und Reishi-Pilz.",
    image: classicJson.url,
    detailHref: `${VARIANTEN_URL}#chi-cafe-classic`,
  },
  {
    name: "ReiChi Cafe",
    epithet: "Der Exotische",
    blurb:
      "Extra viel Reishi-Pilz, schonend gerösteter Espresso, Guarana und Ginseng – vereint mit der cremig-milden Note von Kokosmilch und Magnesium.",
    image: reichiCafeJson.url,
    detailHref: `${VARIANTEN_URL}#reichi-cafe`,
  },
  {
    name: "ReiChi Zen",
    epithet: "70 % Vitalpilze",
    blurb:
      "Das erste Getränk der Reihe ganz ohne Kaffee: 70 % sorgfältig ausgewählte Pilze, harmoniert mit der würzigen Note von Zimt und wärmendem Kakao.",
    image: reichiZenJson.url,
    detailHref: `${VARIANTEN_URL}#reichizen`,
  },
  {
    name: "Chi-Cafe bio",
    epithet: "Der Bio-Liebling",
    blurb:
      "Köstlicher Chi-Cafe in Bio-Qualität, mit einem Hauch von Karamell. Hoher Ballaststoffgehalt und Calcium – für Ihr inneres Wohlbefinden.",
    image: bioJson.url,
    detailHref: `${VARIANTEN_URL}#chi-cafe-bio`,
  },
  {
    name: "Chi-Cafe proactive",
    epithet: "Der Orientalische",
    blurb:
      "Edle Kaffeesorten mit arabischen Kaffeegewürzen: Kardamom, Zimt, Nelken, Piment, Muskatnuss und Pfeffer – ein Hauch von Orient im Alltag.",
    image: proactiveJson.url,
    detailHref: `${VARIANTEN_URL}#chi-cafe-proactive`,
  },
  {
    name: "Flavochino",
    epithet: "Der Schokoladige",
    blurb:
      "Satte Schokoladigkeit mit einem Kakaogehalt von über 50 % – ganz ohne Zuckerzusatz. Mit Kakaoflavanolen und wertvollen löslichen Ballaststoffen.",
    image: flavochinoJson.url,
    detailHref: `${VARIANTEN_URL}#flavochino`,
  },
  {
    name: "Chi-Cafe free",
    epithet: "Der Sanfte",
    blurb:
      "Voller Kaffee-Aroma, entkoffeiniert – cremig durch Akazienfaser-Ballaststoffe und Kokosmilch. Zu jeder Tageszeit ein Genuss.",
    image: freeJson.url,
    detailHref: `${VARIANTEN_URL}#chi-cafe-free`,
  },
  {
    name: "Chi-Tea",
    epithet: "Der Energie-Spender¹",
    blurb:
      "Die gesunde Alternative für Teetrinker: 12 wertvolle Pflanzenauszüge, Grün- und Matetee sowie grüner Kaffee – feinherb und fruchtig.",
    image: chiTeaJson.url,
    detailHref: `${VARIANTEN_URL}#chi-tea`,
  },
];

export const probierpaket = {
  title: "Chi-Cafe Probierpaket",
  price: "3,75 €",
  note: "Versandkostenfrei · Sie erhalten mindestens 6 Musterbeutel. Die Sorten können variieren.",
  image: probierpaketJson.url,
  href: PROBIERPAKET_URL,
};

// Verified preparation steps from the existing homepage
// ("In 60 Sekunden zur perfekten Tasse").
export const zubereitungsSchritte = [
  {
    step: "1",
    title: "Aufgießen",
    text: "2 TL (5 g bzw. 6 g) mit 100 ml heißem Wasser aufgießen.",
  },
  {
    step: "2",
    title: "Verfeinern",
    text: "30 ml Soja-Drink mit Calcium oder Milch hinzufügen.",
  },
  {
    step: "3",
    title: "Süßen",
    text: "Mit SteviaBase süßen – nach Bedarf.",
  },
  {
    step: "4",
    title: "Aufschäumen",
    text: "Mit Hand-Milchaufschäumer aufschäumen, zur Aroma-Entfaltung.",
  },
];

// Verified customer voices as shown on chi-cafe.de, with original wording
// and attribution.
export const kundenstimmen = [
  {
    quote:
      "Mir ist aufgefallen, dass der normale Bohnenkaffee mir nicht mehr gut tut, ich bekam regelrecht Bauchschmerzen. Also für mich gibt es ganz klar nur noch Chi-Cafe.",
    author: "Stefanie P.",
  },
  {
    quote:
      "Die Kaffeesorten ReiChi Cafe und Chi-Cafe balance nehme ich gerne mit auf Reisen, weil ich damit nicht auf meinen geliebten Kaffeegenuss verzichten muss und dazu noch Vitamine und Ballaststoffe für einen guten Start in den Tag bekomme.",
    author: "Thea Heim",
    role: "Läuferin Mittel- und Langstrecke · 24 Medaillen bei deutschen Meisterschaften",
  },
  {
    quote:
      "Es gibt nur wenige Getränke, die mir am Morgen auf nüchternem Magen gut tun. Mit 1–2 Feigen und einer Tasse Chi-Cafe bin ich für die nächsten Stunden zufrieden, ohne ein Hungergefühl.",
    author: "Yvonne S.",
    role: "Langjährige Chi-Cafe-Kundin",
  },
];

export const stimmenHinweis =
  "Die Darstellung zeigt eine von uns ausgewählte Zusammenstellung von Kundenstimmen, die uns über unser Bewertungssystem oder auf anderen Wegen (z. B. per E-Mail) erreicht haben.";

// Ingredient feature images (authentic chi-cafe.de photography)
export const reishi = reishiJson;
export const guarana = guaranaJson;
export const akazienfaser = akazienfaserJson;

// Verified customer survey result (chi-cafe.de/chi-cafe-bewertungen/)
export const umfrage = {
  percent: "93 %",
  text: "unserer Kunden haben Chi-Cafe Freunden und Familie bereits weiterempfohlen.",
  source: "Umfrage März 2024 · chi-cafe.de",
};

// Verified Nepal school-meal program (chi-cafe.de/wir-helfen/, October 2026)
export const gutesTun = {
  eyebrow: "Gutes tun mit Chi-Cafe",
  title: "Jede Tasse hilft",
  text: "Mit jedem gekauften Chi-Cafe, ReiChi Cafe und ReiChi Zen ermöglichen wir bedürftigen Kindern in Nepal vollwertige, pflanzliche Mahlzeiten – direkt an Schulen verteilt. Die Kinder erhalten nicht nur eine warme Mahlzeit, sondern auch Zugang zu Bildung.",
  stat: "ca. 3,5 Mio.",
  statLabel:
    "gesunde Mahlzeiten für Kinder in Nepal seit 2022 – in Zusammenarbeit mit der nepalesischen Regierung",
  note: "Gilt für in Deutschland und Österreich verkaufte Produkte ab einem Warenwert von 3 €.",
  image: gruenderJson.url,
  imageAlt: "Suzanne Jacob und Dr. Ludwig Jacob, Gründer von Chi-Cafe",
};
