import {
  products,
  WARUM_URL,
  ZUTATEN_URL,
  REZEPTE_URL,
  HELFEN_URL,
  SHOP_URL,
  PROBIERPAKET_URL,
  VARIANTEN_URL,
  reishi,
  guarana,
  akazienfaser,
  foundersKaffee,
  heroTasse,
  kaffeegenuss,
  gruender,
  probierpaket,
} from "@/data/chi-cafe";

export type Lang = "de" | "en";

export type NavLink = { label: string; href: string; external?: boolean };

export type ProductText = {
  name: string;
  epithet: string;
  blurb: string;
  imageAlt: string;
  image: string;
  detailHref: string;
};

export type Texts = {
  meta: { title: string; description: string };
  header: {
    nav: NavLink[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    homeAria: string;
    langAria: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    imageAlt: string;
    cardName: string;
    cardEpithet: string;
    cardImageAlt: string;
  };
  brand: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    facts: string[];
    imageAlt: string;
  };
  sorten: {
    eyebrow: string;
    title: string;
    sub: string;
    detailLabel: string;
    items: ProductText[];
    probierpaket: {
      eyebrow: string;
      title: string;
      note: string;
      cta: string;
      imageAlt: string;
    };
  };
  zutaten: {
    eyebrow: string;
    title: string;
    sub: string;
    link: string;
    items: {
      name: string;
      tagline: string;
      text: string;
      image: string;
      imageAlt: string;
    }[];
  };
  ritual: {
    eyebrow: string;
    title: string;
    sub: string;
    cold: string;
    link: string;
    steps: { title: string; text: string }[];
  };
  stimmen: {
    eyebrow: string;
    percent: string;
    heading: string;
    source: string;
    quotes: { quote: string; author: string; role?: string }[];
    disclaimer: string;
  };
  gutesTun: {
    eyebrow: string;
    title: string;
    text: string;
    stat: string;
    statLabel: string;
    note: string;
    link: string;
    image: string;
    imageAlt: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    shopCta: string;
    paketCta: string;
    note: string;
  };
  footer: {
    tagline: string;
    company: string;
    phone: string;
    email: string;
    columns: { title: string; links: NavLink[] }[];
    copyright: string;
    shipping: string;
  };
};

// Product images and detail links come from the shared, verified data set;
// only the strings are localized.
function productItem(
  index: number,
  name: string,
  epithet: string,
  blurb: string,
  imageAlt: string,
): ProductText {
  const p = products[index];
  return { name, epithet, blurb, imageAlt, image: p.image, detailHref: p.detailHref };
}

export const texts: Record<Lang, Texts> = {
  de: {
    meta: {
      title: "Chi-Cafe – Die gesunde Art zu genießen",
      description:
        "Chi-Cafe vereint Arabica- und Robusta-Kaffee mit Reishi-Pilz, Granatapfel und Ginseng – ohne Zuckerzusatz, glutenfrei und laktosefrei. Neun Sorten, Probierpaket 3,75 €.",
    },
    header: {
      nav: [
        { label: "Sorten", href: "#sorten" },
        { label: "Zutaten", href: "#zutaten" },
        { label: "Zubereitung", href: "#ritual" },
        { label: "Warum Chi-Cafe?", href: WARUM_URL, external: true },
      ],
      cta: "Probierpaket · 3,75 €",
      menuOpen: "Menü öffnen",
      menuClose: "Menü schließen",
      homeAria: "Chi-Cafe Startseite",
      langAria: "Sprache wählen",
    },
    hero: {
      eyebrow: "Gesunde Kaffee-Alternative",
      titleA: "Die gesunde Art",
      titleB: "zu genießen",
      text: "Chi-Cafe vereint den vollen Geschmack von Arabica- und Robusta-Kaffee mit wertvollen Pflanzenextrakten wie Reishi-Pilz, Granatapfel und Ginseng – ohne Zuckerzusatz, Gluten oder Laktose.",
      ctaPrimary: "Sorten entdecken",
      ctaSecondary: "Warum Chi-Cafe?",
      note: "Ab 0,26 € pro Tasse · Auch in Ihrer Apotheke!",
      imageAlt: "Zwei Menschen genießen eine Tasse Chi-Cafe in der Sonne",
      cardName: "Chi-Cafe balance",
      cardEpithet: "Der Harmonische",
      cardImageAlt: "Chi-Cafe balance – Tasse mit gelöstem Pulver und Dose",
    },
    brand: {
      eyebrow: "Das Konzept",
      title: "Kaffee, neu gedacht.",
      p1: "„Chi“ bedeutet Lebensenergie. Chi-Cafe fördert die Entfaltung der Lebenskraft und hilft, eine natürliche Balance zu schaffen¹ – als sanfte Alternative zum gewohnten Bohnenkaffee.",
      p2: "Das Koffein stammt aus Kaffee und der tropischen Guarana-Frucht. Es wird langsamer freigesetzt und hat eine sanfte, längere Wirkung².",
      facts: ["Ohne Zuckerzusatz", "Glutenfrei", "Laktosefrei", "Wertvolle Mineralstoffe"],
      imageAlt: "Eine Mutter und ihre Tochter genießen gemeinsam eine Tasse Chi-Cafe",
    },
    sorten: {
      eyebrow: "Unsere Sorten",
      title: "Finden Sie Ihren Chi-Cafe-Charakter",
      sub: "Neun Sorten – von mild und cremig bis kraftvoll-exotisch. Jede mit der besonderen Chi-Cafe-Komposition.",
      detailLabel: "Mehr erfahren",
      items: [
        productItem(
          0,
          "Chi-Cafe balance",
          "Der Harmonische",
          "Besonders mild und cremig, mit einer Nuance von Kakao. Mit Akazienfaser-Ballaststoffen, Calcium, Magnesium und Polyphenolen aus grünem Kaffee, Guarana, Granatapfel, Ginseng und Reishi.",
          "Chi-Cafe balance – Der Harmonische",
        ),
        productItem(
          1,
          "Chi-Cafe classic",
          "Unser Klassiker",
          "Das erste ballaststoffreiche Kaffee-Getränk der Welt – schonend geröstete Kaffeesorten, verfeinert mit Pflanzenextrakten aus Guarana, Ginseng und Reishi-Pilz.",
          "Chi-Cafe classic – Unser Klassiker",
        ),
        productItem(
          2,
          "ReiChi Cafe",
          "Der Exotische",
          "Extra viel Reishi-Pilz, schonend gerösteter Espresso, Guarana und Ginseng – vereint mit der cremig-milden Note von Kokosmilch und Magnesium.",
          "ReiChi Cafe – Der Exotische",
        ),
        productItem(
          3,
          "ReiChi Zen",
          "70 % Vitalpilze",
          "Das erste Getränk der Reihe ganz ohne Kaffee: 70 % sorgfältig ausgewählte Pilze, harmoniert mit der würzigen Note von Zimt und wärmendem Kakao.",
          "ReiChi Zen – 70 % Vitalpilze",
        ),
        productItem(
          4,
          "Chi-Cafe bio",
          "Der Bio-Liebling",
          "Köstlicher Chi-Cafe in Bio-Qualität, mit einem Hauch von Karamell. Hoher Ballaststoffgehalt und Calcium – für Ihr inneres Wohlbefinden.",
          "Chi-Cafe bio – Der Bio-Liebling",
        ),
        productItem(
          5,
          "Chi-Cafe proactive",
          "Der Orientalische",
          "Edle Kaffeesorten mit arabischen Kaffeegewürzen: Kardamom, Zimt, Nelken, Piment, Muskatnuss und Pfeffer – ein Hauch von Orient im Alltag.",
          "Chi-Cafe proactive – Der Orientalische",
        ),
        productItem(
          6,
          "Flavochino",
          "Der Schokoladige",
          "Satte Schokoladigkeit mit einem Kakaogehalt von über 50 % – ganz ohne Zuckerzusatz. Mit Kakaoflavanolen und wertvollen löslichen Ballaststoffen.",
          "Flavochino – Der Schokoladige",
        ),
        productItem(
          7,
          "Chi-Cafe free",
          "Der Sanfte",
          "Voller Kaffee-Aroma, entkoffeiniert – cremig durch Akazienfaser-Ballaststoffe und Kokosmilch. Zu jeder Tageszeit ein Genuss.",
          "Chi-Cafe free – Der Sanfte",
        ),
        productItem(
          8,
          "Chi-Tea",
          "Der Energie-Spender¹",
          "Die gesunde Alternative für Teetrinker: 12 wertvolle Pflanzenauszüge, Grün- und Matetee sowie grüner Kaffee – feinherb und fruchtig.",
          "Chi-Tea – Der Energie-Spender",
        ),
      ],
      probierpaket: {
        eyebrow: "Probierpaket",
        title: `Alle Sorten probieren – für ${probierpaket.price}`,
        note: "Versandkostenfrei · Sie erhalten mindestens 6 Musterbeutel. Die Sorten können variieren.",
        cta: "Jetzt bestellen",
        imageAlt: "Chi-Cafe Probierpaket mit Musterbeuteln aller Sorten",
      },
    },
    zutaten: {
      eyebrow: "Die Zutaten",
      title: "Naturwissen in der Tasse",
      sub: "Schonend gerösteter Kaffee, verfeinert mit erlesenen Pflanzenextrakten – jede Zutat mit einer Aufgabe.",
      link: "Alle Zutaten im Detail",
      items: [
        {
          name: "Reishi-Pilz",
          tagline: "Der Pilz der Könige",
          text: "Der Reishi-Pilz (Ganoderma lucidum) wird in Asien seit Jahrtausenden verehrt und meist als Tee genossen. In Chi-Cafe bringt er seine zartherbe Note ein.",
          image: reishi.url,
          imageAlt: "Reishi-Pilze",
        },
        {
          name: "Guarana",
          tagline: "Regt an, nicht auf²",
          text: "Die tropische Guarana-Frucht liefert natürliches Koffein, das langsamer freigesetzt wird – für eine sanfte, längere Wirkung statt des kurzen Kicks.",
          image: guarana.url,
          imageAlt: "Rote Guarana-Früchte am Zweig",
        },
        {
          name: "Akazienfaser",
          tagline: "Gutes Bauchgefühl³",
          text: "Lösliche Ballaststoffe aus der Akazienfaser machen jede Tasse cremig-mild und sorgen für ein angenehmes Gefühl im Bauch.",
          image: akazienfaser.url,
          imageAlt: "Hände formen ein Herz über einem Bauch",
        },
      ],
    },
    ritual: {
      eyebrow: "Die Zubereitung",
      title: "In 60 Sekunden zur perfekten Tasse",
      sub: "So einfach geht gesunder Kaffeegenuss¹ – kein Sieb, keine Maschine, keine Wartezeit.",
      cold: "Für Frappé und Eiskaffee ist Chi-Cafe auch kalt gut löslich.",
      link: "Zu den Rezepten",
      steps: [
        {
          title: "Aufgießen",
          text: "2 TL (5 g bzw. 6 g) mit 100 ml heißem Wasser aufgießen.",
        },
        {
          title: "Verfeinern",
          text: "30 ml Soja-Drink mit Calcium oder Milch hinzufügen.",
        },
        {
          title: "Süßen",
          text: "Mit SteviaBase süßen – nach Bedarf.",
        },
        {
          title: "Aufschäumen",
          text: "Mit Hand-Milchaufschäumer aufschäumen, zur Aroma-Entfaltung.",
        },
      ],
    },
    stimmen: {
      eyebrow: "Kundenstimmen",
      percent: "93 %",
      heading: "unserer Kunden empfehlen Chi-Cafe weiter.",
      source: "Umfrage März 2024 · chi-cafe.de",
      quotes: [
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
      ],
      disclaimer:
        "Die Darstellung zeigt eine von uns ausgewählte Zusammenstellung von Kundenstimmen, die uns über unser Bewertungssystem oder auf anderen Wegen (z. B. per E-Mail) erreicht haben.",
    },
    gutesTun: {
      eyebrow: "Gutes tun mit Chi-Cafe",
      title: "Jede Tasse hilft",
      text: "Mit jedem gekauften Chi-Cafe, ReiChi Cafe und ReiChi Zen ermöglichen wir bedürftigen Kindern in Nepal vollwertige, pflanzliche Mahlzeiten – direkt an Schulen verteilt. Die Kinder erhalten nicht nur eine warme Mahlzeit, sondern auch Zugang zu Bildung.",
      stat: "ca. 3,5 Mio.",
      statLabel:
        "gesunde Mahlzeiten für Kinder in Nepal seit 2022 – in Zusammenarbeit mit der nepalesischen Regierung",
      note: "Gilt für in Deutschland und Österreich verkaufte Produkte ab einem Warenwert von 3 €.",
      link: "Mehr über „Wir helfen“",
      image: gruender.url,
      imageAlt: "Suzanne Jacob und Dr. Ludwig Jacob, Gründer von Chi-Cafe",
    },
    cta: {
      eyebrow: "Bereit für Ihre erste Tasse?",
      title: "Genießen Sie Kaffee – mit gutem Gewissen.",
      text: "Probieren Sie alle Sorten im versandkostenfreien Probierpaket oder stöbern Sie direkt im Online-Shop.",
      shopCta: "Zum Online-Shop",
      paketCta: "Probierpaket · 3,75 €",
      note: "Ab 0,26 € pro Tasse · Auch in Ihrer Apotheke!",
    },
    footer: {
      tagline: "Die gesunde Art zu genießen¹ – Kaffee mit Reishi-Pilz-Extrakt, Granatapfel und Ginseng. Auch in Ihrer Apotheke!",
      company: "Dr. Jacob's Medical GmbH · Taunusstein",
      phone: "06128 97170",
      email: "info@drjacobs.de",
      columns: [
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
      ],
      copyright: "© Chi-Cafe.de · Online-Shop: drjacobs-shop.de",
      shipping: "Alle Preise zzgl. Versandkosten.",
    },
  },

  en: {
    meta: {
      title: "Chi-Cafe – The healthy way to enjoy",
      description:
        "Chi-Cafe combines Arabica and Robusta coffee with reishi mushroom, pomegranate and ginseng – no added sugar, gluten-free and lactose-free. Nine varieties, trial pack €3.75.",
    },
    header: {
      nav: [
        { label: "Varieties", href: "#sorten" },
        { label: "Ingredients", href: "#zutaten" },
        { label: "Preparation", href: "#ritual" },
        { label: "Why Chi-Cafe?", href: WARUM_URL, external: true },
      ],
      cta: "Trial pack · €3.75",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      homeAria: "Chi-Cafe home",
      langAria: "Choose language",
    },
    hero: {
      eyebrow: "Healthy coffee alternative",
      titleA: "The healthy way",
      titleB: "to enjoy",
      text: "Chi-Cafe combines the full flavour of Arabica and Robusta coffee with valuable plant extracts such as reishi mushroom, pomegranate and ginseng – no added sugar, gluten or lactose.",
      ctaPrimary: "Discover the varieties",
      ctaSecondary: "Why Chi-Cafe?",
      note: "From €0.26 per cup · Also available at your pharmacy!",
      imageAlt: "Two people enjoying a cup of Chi-Cafe in the sun",
      cardName: "Chi-Cafe balance",
      cardEpithet: "The Harmonious One",
      cardImageAlt: "Chi-Cafe balance – cup with dissolved powder and tin",
    },
    brand: {
      eyebrow: "The concept",
      title: "Coffee, reimagined.",
      p1: "“Chi” means life energy. Chi-Cafe supports the unfolding of your life force and helps create a natural balance¹ – as a gentle alternative to your usual bean coffee.",
      p2: "The caffeine comes from coffee and the tropical guarana fruit. It is released more slowly and has a gentle, longer-lasting effect².",
      facts: ["No added sugar", "Gluten-free", "Lactose-free", "Valuable minerals"],
      imageAlt: "A mother and daughter enjoying a cup of Chi-Cafe together",
    },
    sorten: {
      eyebrow: "Our varieties",
      title: "Find your Chi-Cafe character",
      sub: "Nine varieties – from mild and creamy to bold and exotic. Each with the special Chi-Cafe composition.",
      detailLabel: "Learn more",
      items: [
        productItem(
          0,
          "Chi-Cafe balance",
          "The Harmonious One",
          "Especially mild and creamy, with a hint of cocoa. With acacia fibre, calcium, magnesium and polyphenols from green coffee, guarana, pomegranate, ginseng and reishi.",
          "Chi-Cafe balance – The Harmonious One",
        ),
        productItem(
          1,
          "Chi-Cafe classic",
          "Our Classic",
          "The world's first fibre-rich coffee drink – gently roasted coffee varieties, refined with plant extracts from guarana, ginseng and reishi mushroom.",
          "Chi-Cafe classic – Our Classic",
        ),
        productItem(
          2,
          "ReiChi Cafe",
          "The Exotic One",
          "Extra reishi mushroom, gently roasted espresso, guarana and ginseng – combined with the creamy-mild note of coconut milk and magnesium.",
          "ReiChi Cafe – The Exotic One",
        ),
        productItem(
          3,
          "ReiChi Zen",
          "70 % vital mushrooms",
          "The first drink of the range entirely without coffee: 70 % carefully selected mushrooms, harmonised with the spicy note of cinnamon and warming cocoa.",
          "ReiChi Zen – 70 % vital mushrooms",
        ),
        productItem(
          4,
          "Chi-Cafe bio",
          "The Organic Favourite",
          "Delicious Chi-Cafe in organic quality, with a hint of caramel. High fibre content and calcium – for your inner well-being.",
          "Chi-Cafe bio – The Organic Favourite",
        ),
        productItem(
          5,
          "Chi-Cafe proactive",
          "The Oriental One",
          "Fine coffee varieties with Arabic coffee spices: cardamom, cinnamon, cloves, allspice, nutmeg and pepper – a touch of the Orient for everyday life.",
          "Chi-Cafe proactive – The Oriental One",
        ),
        productItem(
          6,
          "Flavochino",
          "The Chocolatey One",
          "Rich chocolate flavour with a cocoa content of over 50 % – entirely without added sugar. With cocoa flavanols and valuable soluble fibre.",
          "Flavochino – The Chocolatey One",
        ),
        productItem(
          7,
          "Chi-Cafe free",
          "The Gentle One",
          "Full coffee aroma, decaffeinated – creamy thanks to acacia fibre and coconut milk. A pleasure at any time of day.",
          "Chi-Cafe free – The Gentle One",
        ),
        productItem(
          8,
          "Chi-Tea",
          "The Energy Source¹",
          "The healthy alternative for tea drinkers: 12 valuable plant extracts, green and mate tea as well as green coffee – delicately tart and fruity.",
          "Chi-Tea – The Energy Source",
        ),
      ],
      probierpaket: {
        eyebrow: "Trial pack",
        title: "Try all varieties – for €3.75",
        note: "Free shipping · You receive at least 6 sample sachets. Varieties may vary.",
        cta: "Order now",
        imageAlt: "Chi-Cafe trial pack with sample sachets of all varieties",
      },
    },
    zutaten: {
      eyebrow: "The ingredients",
      title: "Nature's wisdom in your cup",
      sub: "Gently roasted coffee, refined with selected plant extracts – every ingredient with a purpose.",
      link: "All ingredients in detail",
      items: [
        {
          name: "Reishi mushroom",
          tagline: "The mushroom of kings",
          text: "The reishi mushroom (Ganoderma lucidum) has been revered in Asia for thousands of years and is mostly enjoyed as a tea. In Chi-Cafe it brings its delicately bitter note.",
          image: reishi.url,
          imageAlt: "Reishi mushrooms",
        },
        {
          name: "Guarana",
          tagline: "Gently stimulating, not jarring²",
          text: "The tropical guarana fruit provides natural caffeine that is released more slowly – for a gentle, longer-lasting effect instead of a short kick.",
          image: guarana.url,
          imageAlt: "Red guarana berries on a branch",
        },
        {
          name: "Acacia fibre",
          tagline: "Good for your gut³",
          text: "Soluble dietary fibre from acacia fibre makes every cup creamy and mild and feels good in your stomach.",
          image: akazienfaser.url,
          imageAlt: "Hands forming a heart over a stomach",
        },
      ],
    },
    ritual: {
      eyebrow: "Preparation",
      title: "The perfect cup in 60 seconds",
      sub: "Healthy coffee enjoyment¹ is that simple – no filter, no machine, no waiting.",
      cold: "For frappé and iced coffee, Chi-Cafe also dissolves well cold.",
      link: "To the recipes",
      steps: [
        {
          title: "Pour",
          text: "Add 2 tsp (5 g or 6 g) to 100 ml of hot water.",
        },
        {
          title: "Refine",
          text: "Add 30 ml of calcium-enriched soy drink or milk.",
        },
        {
          title: "Sweeten",
          text: "Sweeten with SteviaBase – as needed.",
        },
        {
          title: "Froth",
          text: "Froth with a hand milk frother to develop the aroma.",
        },
      ],
    },
    stimmen: {
      eyebrow: "Customer voices",
      percent: "93%",
      heading: "of our customers recommend Chi-Cafe.",
      source: "March 2024 survey · chi-cafe.de",
      quotes: [
        {
          quote:
            "I noticed that normal bean coffee no longer agreed with me – I actually got stomach aches. So for me there is clearly only one choice: Chi-Cafe.",
          author: "Stefanie P.",
        },
        {
          quote:
            "I like to take the coffee varieties ReiChi Cafe and Chi-Cafe balance with me when travelling, because I don't have to go without my beloved coffee enjoyment and also get vitamins and fibre for a good start to the day.",
          author: "Thea Heim",
          role: "Middle and long-distance runner · 24 medals at German championships",
        },
        {
          quote:
            "There are few drinks that agree with me on an empty stomach in the morning. With 1–2 figs and a cup of Chi-Cafe I am satisfied for the next few hours, without feeling hungry.",
          author: "Yvonne S.",
          role: "Long-time Chi-Cafe customer",
        },
      ],
      disclaimer:
        "This presentation shows a selection of customer voices compiled by us, which reached us via our rating system or by other means (e.g. by e-mail).",
    },
    gutesTun: {
      eyebrow: "Doing good with Chi-Cafe",
      title: "Every cup helps",
      text: "With every Chi-Cafe, ReiChi Cafe and ReiChi Zen purchased, we enable nutritious plant-based meals for children in need in Nepal – distributed directly at schools. The children receive not only a warm meal but also access to education.",
      stat: "approx. 3.5m",
      statLabel:
        "healthy meals for children in Nepal since 2022 – in cooperation with the Nepalese government",
      note: "Applies to products sold in Germany and Austria with an order value of €3 or more.",
      link: "More about “We help”",
      image: gruender.url,
      imageAlt: "Suzanne Jacob and Dr. Ludwig Jacob, founders of Chi-Cafe",
    },
    cta: {
      eyebrow: "Ready for your first cup?",
      title: "Enjoy coffee – with a clear conscience.",
      text: "Try all varieties in the trial pack with free shipping, or browse the online shop directly.",
      shopCta: "Visit the online shop",
      paketCta: "Trial pack · €3.75",
      note: "From €0.26 per cup · Also available at your pharmacy!",
    },
    footer: {
      tagline: "The healthy way to enjoy¹ – coffee with reishi mushroom extract, pomegranate and ginseng. Also available at your pharmacy!",
      company: "Dr. Jacob's Medical GmbH · Taunusstein",
      phone: "06128 97170",
      email: "info@drjacobs.de",
      columns: [
        {
          title: "Explore",
          links: [
            { label: "Chi-Cafe varieties", href: VARIANTEN_URL, external: true },
            { label: "Ingredients", href: ZUTATEN_URL, external: true },
            { label: "Recipes", href: REZEPTE_URL, external: true },
            { label: "Why Chi-Cafe?", href: WARUM_URL, external: true },
            { label: "Doing good", href: HELFEN_URL, external: true },
          ],
        },
        {
          title: "Shop",
          links: [
            { label: "Chi-Cafe in the online shop", href: SHOP_URL, external: true },
            { label: "Trial pack · €3.75", href: PROBIERPAKET_URL, external: true },
            { label: "Austria", href: "https://chi-cafe.de/oesterreich/", external: true },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Imprint", href: "https://drjacobs-shop.de/impressum", external: true },
            { label: "Privacy", href: "https://drjacobs-shop.de/datenschutz", external: true },
            { label: "T&Cs", href: "https://drjacobs-shop.de/agb", external: true },
            { label: "Right of withdrawal", href: "https://drjacobs-shop.de/widerrufsrecht", external: true },
          ],
        },
      ],
      copyright: "© Chi-Cafe.de · Online shop: drjacobs-shop.de",
      shipping: "All prices excl. shipping costs.",
    },
  },
};
