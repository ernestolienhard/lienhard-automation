/**
 * Service content. Locale-aware (de/en/es/fr/it/pt).
 */
import { pageLocale, type Locale } from "@/i18n/config";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

type Advantage = { title: string; description: string };

const servicesByLocale: Record<Locale, Service[]> = {
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
  fr: [
    {
      slug: "sps-engineering",
      title: "Ingénierie API",
      tagline: "Technique de commande indépendante du fabricant",
      description:
        "En tant que prestataire indépendant du fabricant, nous développons des solutions logicielles efficaces pour toutes les tâches d'automatisation, avec une structure claire et une architecture de programme cohérente.",
      features: [
        "Conseil et ingénierie indépendants du fabricant",
        "Concept d'installation avec architecture de programme cohérente",
        "Ingénierie selon les spécifications du client",
        "Génération automatisée du logiciel de projet",
        "Mise en service virtuelle en cours de process",
        "Support, formation et mise en service",
      ],
    },
    {
      slug: "projektierung",
      title: "Planification et gestion de projet",
      tagline: "De l'idée à la réception finale",
      description:
        "Nous développons des concepts d'automatisation sur mesure, axés sur une exécution fluide en cours d'exploitation, à travers toutes les phases du projet.",
      features: [
        "Conseil, planification, ingénierie et réalisation",
        "Concepts pour projets de commande et d'automatisation dans toutes les phases",
        "Exécution fluide en cours d'exploitation",
        "Planification et gestion jusqu'à la réception finale",
        "Mises en service en Suisse et à l'étranger",
      ],
    },
  ],
  it: [
    {
      slug: "sps-engineering",
      title: "Ingegneria PLC",
      tagline: "Tecnologia di controllo indipendente dal produttore",
      description:
        "Come fornitore di servizi indipendente dal produttore, sviluppiamo soluzioni software efficaci per tutte le attività di automazione, con una struttura chiara e un'architettura di programma coerente.",
      features: [
        "Consulenza e ingegneria indipendenti dal produttore",
        "Concetto d'impianto con architettura di programma coerente",
        "Ingegneria secondo le specifiche del cliente",
        "Generazione automatizzata del software di progetto",
        "Messa in servizio virtuale nel processo in corso",
        "Supporto, formazione e messa in servizio",
      ],
    },
    {
      slug: "projektierung",
      title: "Pianificazione e gestione di progetto",
      tagline: "Dall'idea al collaudo finale",
      description:
        "Sviluppiamo concetti di automazione su misura, con focus su un'esecuzione fluida durante l'esercizio in corso, attraverso tutte le fasi del progetto.",
      features: [
        "Consulenza, pianificazione, progettazione e realizzazione",
        "Concetti per progetti di controllo e automazione in tutte le fasi",
        "Esecuzione fluida durante l'esercizio in corso",
        "Pianificazione e gestione fino al collaudo finale",
        "Messe in servizio in Svizzera e all'estero",
      ],
    },
  ],
  pt: [
    {
      slug: "sps-engineering",
      title: "Engenharia de PLC",
      tagline: "Tecnologia de controlo independente do fabricante",
      description:
        "Como prestador de serviços independente do fabricante, desenvolvemos soluções de software eficazes para todas as tarefas de automação, com uma estrutura clara e uma arquitetura de programa coerente.",
      features: [
        "Consultoria e engenharia independentes do fabricante",
        "Conceito de instalação com arquitetura de programa coerente",
        "Engenharia segundo as especificações do cliente",
        "Geração automatizada de software de projeto",
        "Colocação em serviço virtual no processo em curso",
        "Suporte, formação e colocação em serviço",
      ],
    },
    {
      slug: "projektierung",
      title: "Planeamento e gestão de projetos",
      tagline: "Da ideia à receção final",
      description:
        "Desenvolvemos conceitos de automação à medida, com foco numa execução fluida durante a operação em curso, ao longo de todas as fases do projeto.",
      features: [
        "Consultoria, planeamento, engenharia e implementação",
        "Conceitos para projetos de controlo e automação em todas as fases",
        "Execução fluida durante a operação em curso",
        "Planeamento e gestão até à receção final",
        "Colocações em serviço na Suíça e no estrangeiro",
      ],
    },
  ],
};

const advantagesByLocale: Record<Locale, Advantage[]> = {
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
  fr: [
    { title: "Conseil indépendant", description: "Des recommandations indépendantes : nous choisissons la technique adaptée à votre installation, pas à un fabricant." },
    { title: "Planning flexible", description: "Nous nous adaptons à votre exploitation, y compris pour les travaux en cours de process." },
    { title: "Programmation et mise en service", description: "Du concept à la mise en service réussie en passant par la programmation API, d'une seule main." },
    { title: "Formation et instruction", description: "Nous rendons votre équipe capable d'exploiter l'installation en toute sécurité et efficacité." },
    { title: "Service et maintenance", description: "Un support fiable au-delà de la mise en service, pour une disponibilité maximale." },
    { title: "Rétrofit", description: "Modernisation d'installations existantes, y compris la migration d'anciennes commandes (S5 → S7 → TIA Portal)." },
  ],
  it: [
    { title: "Consulenza indipendente", description: "Raccomandazioni indipendenti: scegliamo la tecnologia adatta al vostro impianto, non a un produttore." },
    { title: "Pianificazione flessibile", description: "Ci adattiamo alla vostra attività, anche per i lavori nel processo in corso." },
    { title: "Programmazione e messa in servizio", description: "Dal concetto, passando per la programmazione PLC, fino alla messa in servizio riuscita, da un unico fornitore." },
    { title: "Formazione e istruzione", description: "Mettiamo il vostro team in grado di gestire l'impianto in modo sicuro ed efficiente." },
    { title: "Assistenza e manutenzione", description: "Supporto affidabile oltre la messa in servizio, per la massima disponibilità." },
    { title: "Retrofit", description: "Modernizzazione di impianti esistenti, incl. migrazione di vecchi controllori (S5 → S7 → TIA Portal)." },
  ],
  pt: [
    { title: "Aconselhamento independente", description: "Recomendações independentes: escolhemos a tecnologia que se adequa à sua instalação, não a um fabricante." },
    { title: "Planeamento flexível", description: "Adaptamo-nos à sua operação, também para trabalhos durante o processo em curso." },
    { title: "Programação e colocação em serviço", description: "Do conceito, passando pela programação de PLC, até à colocação em serviço bem-sucedida, de uma única fonte." },
    { title: "Formação e instrução", description: "Capacitamos a sua equipa para operar a instalação de forma segura e eficiente." },
    { title: "Serviço e manutenção", description: "Suporte fiável para além da colocação em serviço, para uma disponibilidade máxima." },
    { title: "Retrofit", description: "Modernização de instalações existentes, incl. migração de controladores antigos (S5 → S7 → TIA Portal)." },
  ],
};

export function getServices(locale: string): Service[] {
  return servicesByLocale[pageLocale(locale)];
}
export function getAdvantages(locale: string): Advantage[] {
  return advantagesByLocale[pageLocale(locale)];
}
