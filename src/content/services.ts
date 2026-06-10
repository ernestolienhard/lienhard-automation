/**
 * Service content. Locale-aware (de/en/es).
 */

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

type Advantage = { title: string; description: string };
type L = "de" | "en" | "es";
const pick = (locale: string): L => (locale === "en" ? "en" : locale === "es" ? "es" : "de");

const servicesByLocale: Record<L, Service[]> = {
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
  es: [
    {
      slug: "sps-engineering",
      title: "Ingeniería de PLC",
      tagline: "Tecnología de control independiente del fabricante",
      description:
        "Como proveedor de servicios independiente del fabricante, desarrollamos soluciones de software eficaces para todas las tareas de automatización, con una estructura clara y una arquitectura de programa coherente.",
      features: [
        "Asesoramiento e ingeniería independientes del fabricante",
        "Concepto de instalación con arquitectura de programa coherente",
        "Ingeniería según especificaciones del cliente",
        "Generación automatizada de software de proyecto",
        "Puesta en marcha virtual en el proceso en curso",
        "Soporte, formación y puesta en marcha",
      ],
    },
    {
      slug: "projektierung",
      title: "Planificación y dirección de proyectos",
      tagline: "De la idea a la recepción final",
      description:
        "Desarrollamos conceptos de automatización a medida, con foco en una ejecución fluida durante la operación en curso, a lo largo de todas las fases del proyecto.",
      features: [
        "Asesoramiento, planificación, ingeniería e implementación",
        "Conceptos para proyectos de control y automatización en todas las fases",
        "Ejecución fluida durante la operación en curso",
        "Planificación y dirección hasta la recepción final",
        "Puestas en marcha nacionales e internacionales",
      ],
    },
  ],
};

const advantagesByLocale: Record<L, Advantage[]> = {
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
  es: [
    { title: "Asesoramiento independiente", description: "Recomendaciones independientes: elegimos la tecnología que conviene a su instalación, no a un fabricante." },
    { title: "Planificación flexible", description: "Nos adaptamos a su operación, también para trabajos durante el proceso en curso." },
    { title: "Programación y puesta en marcha", description: "Del concepto, pasando por la programación de PLC, hasta la puesta en marcha exitosa, de un solo proveedor." },
    { title: "Formación e instrucción", description: "Capacitamos a su equipo para operar la instalación de forma segura y eficiente." },
    { title: "Servicio y mantenimiento", description: "Soporte fiable más allá de la puesta en marcha, para una máxima disponibilidad." },
    { title: "Retrofit", description: "Modernización de instalaciones existentes, incl. migración de controladores antiguos (S5 → S7 → TIA Portal)." },
  ],
};

export function getServices(locale: string): Service[] {
  return servicesByLocale[pick(locale)];
}
export function getAdvantages(locale: string): Advantage[] {
  return advantagesByLocale[pick(locale)];
}
