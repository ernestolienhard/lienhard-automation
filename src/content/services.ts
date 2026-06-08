/**
 * Service content — sourced from the existing lienhard-automation.com site.
 * Edit copy here to update both the home overview and the Leistungen page.
 */

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
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
];

/** Short "why choose us" benefits shown on the home page. */
export const advantages: { title: string; description: string }[] = [
  {
    title: "Produktneutrale Beratung",
    description:
      "Unabhängige Empfehlungen – wir wählen die Technik, die zu Ihrer Anlage passt, nicht zu einem Hersteller.",
  },
  {
    title: "Flexible Terminplanung",
    description:
      "Wir richten uns nach Ihrem Betrieb – auch für Arbeiten im laufenden Prozess.",
  },
  {
    title: "Programmierung & Inbetriebnahme",
    description:
      "Vom Konzept über die SPS-Programmierung bis zur erfolgreichen Inbetriebsetzung – aus einer Hand.",
  },
  {
    title: "Schulung & Einweisung",
    description:
      "Wir befähigen Ihr Team, die Anlage sicher und effizient zu betreiben.",
  },
  {
    title: "Service & Wartung",
    description:
      "Zuverlässiger Support über die Inbetriebnahme hinaus – für maximale Verfügbarkeit.",
  },
  {
    title: "Retrofit",
    description:
      "Modernisierung bestehender Anlagen, inkl. Migration von Altsteuerungen (z. B. S5 auf S7).",
  },
];
