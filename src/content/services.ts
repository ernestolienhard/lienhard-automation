/**
 * Service content. Locale-aware (de/en); en falls back to de when not active.
 */

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

type Advantage = { title: string; description: string };

const servicesByLocale: Record<"de" | "en", Service[]> = {
  de: [
    {
      slug: "sps-engineering",
      title: "SPS-Engineering",
      tagline: "Produktneutrale Steuerungstechnik",
      description:
        "Als produktneutraler Dienstleister entwickeln wir effektive Softwarelösungen für sämtliche Automatisierungsaufgaben – mit klarer Struktur und durchgängiger Programmarchitektur.",
      features: [
        "Produktneutrale Beratung & Engineering",
        "Anlagenkonzept mit durchgängiger Programmarchitektur",
        "Engineering nach Kundenvorgaben",
        "Automatisiertes Generieren von Projektsoftware",
        "Virtuelle Inbetriebsetzung im laufenden Prozess",
        "Support, Schulung und Inbetriebnahme",
      ],
    },
    {
      slug: "projektierung",
      title: "Projektierung & Projektsteuerung",
      tagline: "Von der Idee bis zur Endabnahme",
      description:
        "Wir entwickeln massgeschneiderte Automatisierungskonzepte mit Fokus auf eine reibungslose Abwicklung im laufenden Betrieb – über alle Projektphasen hinweg.",
      features: [
        "Beratung, Planung, Projektierung und Umsetzung",
        "Konzepte für Leit- & Automatisierungsprojekte in allen Phasen",
        "Reibungslose Abwicklung im laufenden Betrieb",
        "Planung und Steuerung bis zur Endabnahme",
        "In- und Auslandinbetriebnahmen",
      ],
    },
  ],
  en: [
    {
      slug: "sps-engineering",
      title: "PLC engineering",
      tagline: "Vendor-independent control technology",
      description:
        "As a vendor-independent service provider, we develop effective software solutions for all automation tasks – with a clear structure and consistent program architecture.",
      features: [
        "Vendor-independent consulting & engineering",
        "Plant concept with consistent program architecture",
        "Engineering to customer specifications",
        "Automated generation of project software",
        "Virtual commissioning in the running process",
        "Support, training and commissioning",
      ],
    },
    {
      slug: "projektierung",
      title: "Project planning & management",
      tagline: "From the idea to final acceptance",
      description:
        "We develop tailored automation concepts with a focus on smooth execution during ongoing operation – across all project phases.",
      features: [
        "Consulting, planning, project engineering and implementation",
        "Concepts for control & automation projects in all phases",
        "Smooth execution during ongoing operation",
        "Planning and management up to final acceptance",
        "Commissioning at home and abroad",
      ],
    },
  ],
};

const advantagesByLocale: Record<"de" | "en", Advantage[]> = {
  de: [
    { title: "Produktneutrale Beratung", description: "Unabhängige Empfehlungen – wir wählen die Technik, die zu Ihrer Anlage passt, nicht zu einem Hersteller." },
    { title: "Flexible Terminplanung", description: "Wir richten uns nach Ihrem Betrieb – auch für Arbeiten im laufenden Prozess." },
    { title: "Programmierung & Inbetriebnahme", description: "Vom Konzept über die SPS-Programmierung bis zur erfolgreichen Inbetriebsetzung – aus einer Hand." },
    { title: "Schulung & Einweisung", description: "Wir befähigen Ihr Team, die Anlage sicher und effizient zu betreiben." },
    { title: "Service & Wartung", description: "Zuverlässiger Support über die Inbetriebnahme hinaus – für maximale Verfügbarkeit." },
    { title: "Retrofit", description: "Modernisierung bestehender Anlagen, inkl. Migration von Altsteuerungen (S5 → S7 → TIA Portal)." },
  ],
  en: [
    { title: "Vendor-independent advice", description: "Independent recommendations – we choose the technology that fits your plant, not a manufacturer." },
    { title: "Flexible scheduling", description: "We adapt to your operation – including work during the running process." },
    { title: "Programming & commissioning", description: "From concept through PLC programming to successful commissioning – from a single source." },
    { title: "Training & instruction", description: "We enable your team to operate the plant safely and efficiently." },
    { title: "Service & maintenance", description: "Reliable support beyond commissioning – for maximum availability." },
    { title: "Retrofit", description: "Modernization of existing plants, incl. migration of legacy controllers (S5 → S7 → TIA Portal)." },
  ],
};

export function getServices(locale: string): Service[] {
  return locale === "en" ? servicesByLocale.en : servicesByLocale.de;
}
export function getAdvantages(locale: string): Advantage[] {
  return locale === "en" ? advantagesByLocale.en : advantagesByLocale.de;
}
