import type { Metadata } from "next";
import { LocaleLink as Link } from "@/components/ui/LocaleLink";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getServices } from "@/content/services";
import { getTechnologies } from "@/content/technologies";
import { getProjects } from "@/content/references";
import { pageLocale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";
import {
  ArrowRight,
  Check,
  Cpu,
  Workflow,
  Wrench,
  RefreshCw,
  Search,
  GraduationCap,
  Globe,
  Building,
} from "@/components/ui/icons";

const serviceIcons: Record<string, React.ReactNode> = {
  "sps-engineering": <Cpu className="h-6 w-6" />,
  projektierung: <Workflow className="h-6 w-6" />,
};
const bereichIcons = [
  <Cpu key="0" className="h-6 w-6" />,
  <Workflow key="1" className="h-6 w-6" />,
  <Check key="2" className="h-6 w-6" />,
  <Wrench key="3" className="h-6 w-6" />,
  <RefreshCw key="4" className="h-6 w-6" />,
];
const bereichHrefs = [undefined, undefined, undefined, undefined, "/unified-modernisierung"];
const phaseIcons = [
  <Search key="0" className="h-5 w-5" />,
  <Workflow key="1" className="h-5 w-5" />,
  <Check key="2" className="h-5 w-5" />,
  <GraduationCap key="3" className="h-5 w-5" />,
];
const bulletIcons = [
  <Cpu key="0" className="h-5 w-5" />,
  <Workflow key="1" className="h-5 w-5" />,
  <Globe key="2" className="h-5 w-5" />,
  <Building key="3" className="h-5 w-5" />,
];

const T = {
  de: {
    metaTitle: "Leistungen",
    metaDesc: "SPS-Engineering, Projektierung und Projektsteuerung, Inbetriebnahme und Retrofit, WinCC-Modernisierung (WinCC Unified) – produktneutrale Automatisierungslösungen für den industriellen Maschinen- und Anlagenbau.",
    heroEyebrow: "Leistungen",
    heroH1a: "Alles für Ihre Automatisierung – ",
    heroH1accent: "aus einer Hand",
    heroSubtitle: "Von der Beratung über SPS-Engineering und Projektierung bis zur Inbetriebnahme und Modernisierung: Lienhard Automation begleitet Ihre Projekte im industriellen Maschinen- und Anlagenbau – produktneutral, präzise und weltweit.",
    ctaPrimary: "Projekt anfragen",
    ctaSecondary: "Leistungen entdecken",
    heroPoints: ["Über 25 Jahre Erfahrung", "Siemens-Spezialist", "Schweiz & weltweit"],
    overviewEyebrow: "Überblick",
    overviewTitle: "Unsere Leistungsbereiche",
    overviewLead: "Fünf Bereiche, die ineinandergreifen – inklusive eines Spezialthemas mit eigenem Schwerpunkt.",
    bereiche: [
      { title: "SPS-Engineering", text: "Produktneutrale Steuerungstechnik mit klarer, durchgängiger Programmarchitektur." },
      { title: "Projektierung & Projektsteuerung", text: "Beratung, Planung und Umsetzung über alle Projektphasen – bis zur Endabnahme." },
      { title: "Inbetriebnahme", text: "Virtuelle Inbetriebsetzung im laufenden Prozess bis zur Endabnahme – im In- und Ausland." },
      { title: "Retrofit & Wartung", text: "Modernisierung bestehender Anlagen, Migration von Altsteuerungen (S5 → S7 → TIA) und Service." },
      { title: "Unified Modernisierung", text: "WinCC-Visualisierungen von WinCC flexible/Classic zu WinCC Unified modernisieren." },
    ],
    more: "Mehr erfahren",
    coreEyebrow: "Im Detail",
    coreTitle: "Kern-Leistungen",
    coreLead: "Meine beiden Hauptleistungen – mit dem, was konkret dahintersteckt.",
    inbTitle: "Inbetriebnahme",
    inbText: "Ich begleite Ihre Anlage von der virtuellen Inbetriebsetzung im laufenden Prozess bis zur erfolgreichen Endabnahme – im In- und Ausland.",
    inbItems: ["Virtuelle Inbetriebsetzung im laufenden Prozess", "Reibungslose Abwicklung im laufenden Betrieb", "In- und Auslandinbetriebnahmen", "Begleitung bis zur Endabnahme"],
    retroTitle: "Retrofit & Wartung",
    retroText: "Modernisierung bestehender Anlagen und Migration von Altsteuerungen – für mehr Verfügbarkeit, Sicherheit und Effizienz.",
    retroItems: ["Migration von Altsteuerungen (S5 → S7 → TIA Portal)", "Software-Erweiterungen bestehender Anlagen", "Sicherheitssteuerungen (Safety)", "Service und Wartung"],
    techEyebrow: "Technologie-Kompetenz",
    techTitle: "Steuerungs-, Leit- & Kommunikationstechnik",
    techLead: "Tiefe Siemens-Expertise: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie durchgängige Kommunikation über OPC UA, Modbus, PROFINET und PROFIBUS.",
    phasesEyebrow: "So arbeite ich",
    phasesTitle: "Ihr Projekt – Schritt für Schritt",
    phasesLead: "Ein klarer Ablauf von der ersten Beratung bis zum laufenden Support.",
    phases: [
      { n: "01", title: "Beratung & Konzept", text: "Analyse Ihrer Anforderungen, produktneutrale Empfehlung und ein klares, umsetzbares Konzept." },
      { n: "02", title: "Engineering & Projektierung", text: "SPS-Software mit durchgängiger Architektur, Visualisierung und sauberer Dokumentation." },
      { n: "03", title: "Inbetriebnahme", text: "Virtuelle Inbetriebsetzung, Tests im laufenden Prozess und Begleitung bis zur Endabnahme – im In- und Ausland." },
      { n: "04", title: "Support & Schulung", text: "Einweisung Ihres Teams und verlässlicher Support über die Inbetriebnahme hinaus." },
    ],
    aboutEyebrow: "Über mich",
    aboutTitle: "Erfahrung, die Anlagen zuverlässig zum Laufen bringt",
    aboutText: `Ich bin ${siteConfig.contact.person}, Techniker HF Automation, mit über 25 Jahren Erfahrung in Montage, Automation und Inbetriebnahme – davon über 10 Jahre mehrheitlich im Ausland, auf fünf Kontinenten. Als Siemens-Spezialist realisiere ich Projekte in der Schweiz und weltweit – mit einem starken Partnernetzwerk in Europa und Amerika.`,
    statYears: "Jahre Erfahrung",
    statPartners: "Partnerunternehmen",
    statContinents: "Kontinente",
    aboutCta: "Über mich",
    aboutBullets: [
      "Steuerungs- und Prozesstechnik für anspruchsvolle Anlagen.",
      "Effektive, wartbare SPS-Software mit klarer Struktur.",
      "Visualisierung und Leittechnik mit WinCC Unified und WinCC OA.",
      "Internationale Inbetriebnahmen in Europa, Nord- und Südamerika.",
    ],
    refEyebrow: "Referenzen",
    refTitle: "Ausgewählte Projekte",
    refLead: "Über 25 Jahre Projekterfahrung im internationalen Umfeld.",
    allRefs: "Alle Referenzen",
    ctaTitle: "Bereit für Ihr nächstes Automatisierungsprojekt?",
    ctaLead: "Kontaktieren Sie mich für eine produktneutrale, unverbindliche Beratung – von der Idee bis zur Inbetriebnahme.",
  },
  en: {
    metaTitle: "Services",
    metaDesc: "PLC engineering, project planning and management, commissioning and retrofit, WinCC modernization (WinCC Unified) – vendor-independent automation solutions for industrial machine and plant engineering.",
    heroEyebrow: "Services",
    heroH1a: "Everything for your automation – ",
    heroH1accent: "from a single source",
    heroSubtitle: "From consulting through PLC engineering and project planning to commissioning and modernization: Lienhard Automation supports your projects in industrial machine and plant engineering – vendor-independent, precise and worldwide.",
    ctaPrimary: "Request a project",
    ctaSecondary: "Discover services",
    heroPoints: ["Over 25 years of experience", "Siemens specialist", "Switzerland & worldwide"],
    overviewEyebrow: "Overview",
    overviewTitle: "Our service areas",
    overviewLead: "Five areas that interlock – including one specialist topic with its own focus.",
    bereiche: [
      { title: "PLC engineering", text: "Vendor-independent control technology with a clear, consistent program architecture." },
      { title: "Project planning & management", text: "Consulting, planning and implementation across all project phases – up to final acceptance." },
      { title: "Commissioning", text: "Virtual commissioning in the running process up to final acceptance – at home and abroad." },
      { title: "Retrofit & maintenance", text: "Modernization of existing plants, migration of legacy controllers (S5 → S7 → TIA) and service." },
      { title: "Unified modernization", text: "Modernize WinCC visualizations from WinCC flexible/Classic to WinCC Unified." },
    ],
    more: "Learn more",
    coreEyebrow: "In detail",
    coreTitle: "Core services",
    coreLead: "My two main services – with what is concretely behind them.",
    inbTitle: "Commissioning",
    inbText: "I support your plant from virtual commissioning in the running process to successful final acceptance – at home and abroad.",
    inbItems: ["Virtual commissioning in the running process", "Smooth execution during ongoing operation", "Commissioning at home and abroad", "Guidance up to final acceptance"],
    retroTitle: "Retrofit & maintenance",
    retroText: "Modernization of existing plants and migration of legacy controllers – for more availability, safety and efficiency.",
    retroItems: ["Migration of legacy controllers (S5 → S7 → TIA Portal)", "Software extensions of existing plants", "Safety controllers", "Service and maintenance"],
    techEyebrow: "Technology expertise",
    techTitle: "Control, supervisory & communication technology",
    techLead: "Deep Siemens expertise: SIMATIC STEP 7 Classic, TIA Portal and PCS 7, visualization with WinCC Unified and WinCC OA, and seamless communication via OPC UA, Modbus, PROFINET and PROFIBUS.",
    phasesEyebrow: "How I work",
    phasesTitle: "Your project – step by step",
    phasesLead: "A clear process from the first consultation to ongoing support.",
    phases: [
      { n: "01", title: "Consulting & concept", text: "Analysis of your requirements, vendor-independent recommendation and a clear, feasible concept." },
      { n: "02", title: "Engineering & project planning", text: "PLC software with consistent architecture, visualization and clean documentation." },
      { n: "03", title: "Commissioning", text: "Virtual commissioning, tests in the running process and guidance up to final acceptance – at home and abroad." },
      { n: "04", title: "Support & training", text: "Onboarding of your team and reliable support beyond commissioning." },
    ],
    aboutEyebrow: "About me",
    aboutTitle: "Experience that gets plants running reliably",
    aboutText: `I am ${siteConfig.contact.person}, Technician HF Automation, with over 25 years of experience in installation, automation and commissioning – more than 10 of them mostly abroad, on five continents. As a Siemens specialist I realize projects in Switzerland and worldwide – with a strong partner network in Europe and the Americas.`,
    statYears: "Years of experience",
    statPartners: "Partner companies",
    statContinents: "Continents",
    aboutCta: "About me",
    aboutBullets: [
      "Control and process technology for demanding plants.",
      "Effective, maintainable PLC software with a clear structure.",
      "Visualization and supervisory control with WinCC Unified and WinCC OA.",
      "International commissioning in Europe, North and South America.",
    ],
    refEyebrow: "References",
    refTitle: "Selected projects",
    refLead: "Over 25 years of project experience in an international environment.",
    allRefs: "All references",
    ctaTitle: "Ready for your next automation project?",
    ctaLead: "Contact me for a vendor-independent, no-obligation consultation – from the idea to commissioning.",
  },
  es: {
    metaTitle: "Servicios",
    metaDesc: "Ingeniería de PLC, planificación y dirección de proyectos, puesta en marcha y retrofit, modernización de WinCC (WinCC Unified): soluciones de automatización independientes del fabricante para la construcción industrial de máquinas e instalaciones.",
    heroEyebrow: "Servicios",
    heroH1a: "Todo para su automatización, ",
    heroH1accent: "de un solo proveedor",
    heroSubtitle: "Desde el asesoramiento, pasando por la ingeniería de PLC y la planificación de proyectos, hasta la puesta en marcha y la modernización: Lienhard Automation acompaña sus proyectos en la construcción industrial de máquinas e instalaciones, de forma independiente del fabricante, precisa y en todo el mundo.",
    ctaPrimary: "Solicitar un proyecto",
    ctaSecondary: "Descubrir servicios",
    heroPoints: ["Más de 25 años de experiencia", "Especialista en Siemens", "Suiza y todo el mundo"],
    overviewEyebrow: "Visión general",
    overviewTitle: "Nuestras áreas de servicio",
    overviewLead: "Cinco áreas que se complementan, incluido un tema especializado con foco propio.",
    bereiche: [
      { title: "Ingeniería de PLC", text: "Tecnología de control independiente del fabricante con una arquitectura de programa clara y coherente." },
      { title: "Planificación y dirección de proyectos", text: "Asesoramiento, planificación e implementación a lo largo de todas las fases del proyecto, hasta la recepción final." },
      { title: "Puesta en marcha", text: "Puesta en marcha virtual en el proceso en curso hasta la recepción final, en el país y en el extranjero." },
      { title: "Retrofit y mantenimiento", text: "Modernización de instalaciones existentes, migración de controladores antiguos (S5 → S7 → TIA) y servicio." },
      { title: "Modernización Unified", text: "Modernizar visualizaciones WinCC de WinCC flexible/Classic a WinCC Unified." },
    ],
    more: "Más información",
    coreEyebrow: "En detalle",
    coreTitle: "Servicios principales",
    coreLead: "Mis dos servicios principales, con lo que hay concretamente detrás.",
    inbTitle: "Puesta en marcha",
    inbText: "Acompaño su instalación desde la puesta en marcha virtual en el proceso en curso hasta la recepción final exitosa, en el país y en el extranjero.",
    inbItems: ["Puesta en marcha virtual en el proceso en curso", "Ejecución fluida durante la operación en curso", "Puestas en marcha nacionales e internacionales", "Acompañamiento hasta la recepción final"],
    retroTitle: "Retrofit y mantenimiento",
    retroText: "Modernización de instalaciones existentes y migración de controladores antiguos, para más disponibilidad, seguridad y eficiencia.",
    retroItems: ["Migración de controladores antiguos (S5 → S7 → TIA Portal)", "Ampliaciones de software de instalaciones existentes", "Controladores de seguridad (Safety)", "Servicio y mantenimiento"],
    techEyebrow: "Competencia tecnológica",
    techTitle: "Tecnología de control, supervisión y comunicación",
    techLead: "Profunda experiencia Siemens: SIMATIC STEP 7 Classic, TIA Portal y PCS 7, visualización con WinCC Unified y WinCC OA, y comunicación integral mediante OPC UA, Modbus, PROFINET y PROFIBUS.",
    phasesEyebrow: "Cómo trabajo",
    phasesTitle: "Su proyecto, paso a paso",
    phasesLead: "Un proceso claro desde el primer asesoramiento hasta el soporte continuo.",
    phases: [
      { n: "01", title: "Asesoramiento y concepto", text: "Análisis de sus necesidades, recomendación independiente del fabricante y un concepto claro y viable." },
      { n: "02", title: "Ingeniería y planificación", text: "Software de PLC con arquitectura coherente, visualización y documentación limpia." },
      { n: "03", title: "Puesta en marcha", text: "Puesta en marcha virtual, pruebas en el proceso en curso y acompañamiento hasta la recepción final, en el país y en el extranjero." },
      { n: "04", title: "Soporte y formación", text: "Incorporación de su equipo y soporte fiable más allá de la puesta en marcha." },
    ],
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Experiencia que hace funcionar las instalaciones de forma fiable",
    aboutText: `Soy ${siteConfig.contact.person}, Técnico HF en automatización, con más de 25 años de experiencia en montaje, automatización y puesta en marcha, de los cuales más de 10 años mayoritariamente en el extranjero, en cinco continentes. Como especialista en Siemens, realizo proyectos en Suiza y en todo el mundo, con una sólida red de socios en Europa y América.`,
    statYears: "Años de experiencia",
    statPartners: "Empresas asociadas",
    statContinents: "Continentes",
    aboutCta: "Sobre mí",
    aboutBullets: [
      "Tecnología de control y proceso para instalaciones exigentes.",
      "Software de PLC eficaz y mantenible con una estructura clara.",
      "Visualización y control de supervisión con WinCC Unified y WinCC OA.",
      "Puestas en marcha internacionales en Europa, América del Norte y del Sur.",
    ],
    refEyebrow: "Referencias",
    refTitle: "Proyectos seleccionados",
    refLead: "Más de 25 años de experiencia en proyectos en un entorno internacional.",
    allRefs: "Todas las referencias",
    ctaTitle: "¿Listo para su próximo proyecto de automatización?",
    ctaLead: "Contácteme para un asesoramiento independiente del fabricante y sin compromiso, de la idea a la puesta en marcha.",
  },
  fr: {
    metaTitle: "Services",
    metaDesc: "Ingénierie API, planification et gestion de projet, mise en service et rétrofit, modernisation WinCC (WinCC Unified) : des solutions d'automatisation indépendantes du fabricant pour la construction industrielle de machines et d'installations.",
    heroEyebrow: "Services",
    heroH1a: "Tout pour votre automatisation, ",
    heroH1accent: "d'une seule main",
    heroSubtitle: "Du conseil à la modernisation, en passant par l'ingénierie API, la planification de projet et la mise en service : Lienhard Automation accompagne vos projets dans la construction industrielle de machines et d'installations, de manière indépendante du fabricant, précise et dans le monde entier.",
    ctaPrimary: "Demander un projet",
    ctaSecondary: "Découvrir les services",
    heroPoints: ["Plus de 25 ans d'expérience", "Spécialiste Siemens", "Suisse et monde entier"],
    overviewEyebrow: "Aperçu",
    overviewTitle: "Nos domaines de service",
    overviewLead: "Cinq domaines complémentaires, dont un thème spécialisé avec son propre focus.",
    bereiche: [
      { title: "Ingénierie API", text: "Technique de commande indépendante du fabricant avec une architecture de programme claire et cohérente." },
      { title: "Planification et gestion de projet", text: "Conseil, planification et réalisation à travers toutes les phases du projet, jusqu'à la réception finale." },
      { title: "Mise en service", text: "Mise en service virtuelle en cours de process jusqu'à la réception finale, en Suisse et à l'étranger." },
      { title: "Rétrofit et maintenance", text: "Modernisation d'installations existantes, migration d'anciennes commandes (S5 → S7 → TIA) et service." },
      { title: "Modernisation Unified", text: "Moderniser les visualisations WinCC de WinCC flexible/Classic vers WinCC Unified." },
    ],
    more: "En savoir plus",
    coreEyebrow: "En détail",
    coreTitle: "Services principaux",
    coreLead: "Mes deux services principaux, avec ce qui se cache concrètement derrière.",
    inbTitle: "Mise en service",
    inbText: "J'accompagne votre installation de la mise en service virtuelle en cours de process jusqu'à la réception finale réussie, en Suisse et à l'étranger.",
    inbItems: ["Mise en service virtuelle en cours de process", "Déroulement fluide en cours d'exploitation", "Mises en service en Suisse et à l'étranger", "Accompagnement jusqu'à la réception finale"],
    retroTitle: "Rétrofit et maintenance",
    retroText: "Modernisation d'installations existantes et migration d'anciennes commandes, pour plus de disponibilité, de sécurité et d'efficacité.",
    retroItems: ["Migration d'anciennes commandes (S5 → S7 → TIA Portal)", "Extensions logicielles d'installations existantes", "Commandes de sécurité (Safety)", "Service et maintenance"],
    techEyebrow: "Compétence technologique",
    techTitle: "Commande, conduite et communication",
    techLead: "Une profonde expertise Siemens : SIMATIC STEP 7 Classic, TIA Portal et PCS 7, visualisation avec WinCC Unified et WinCC OA, et communication intégrale via OPC UA, Modbus, PROFINET et PROFIBUS.",
    phasesEyebrow: "Comment je travaille",
    phasesTitle: "Votre projet, étape par étape",
    phasesLead: "Un déroulement clair du premier conseil au support continu.",
    phases: [
      { n: "01", title: "Conseil et concept", text: "Analyse de vos besoins, recommandation indépendante du fabricant et un concept clair et réalisable." },
      { n: "02", title: "Ingénierie et planification", text: "Logiciel API à architecture cohérente, visualisation et documentation propre." },
      { n: "03", title: "Mise en service", text: "Mise en service virtuelle, tests en cours de process et accompagnement jusqu'à la réception finale, en Suisse et à l'étranger." },
      { n: "04", title: "Support et formation", text: "Initiation de votre équipe et support fiable au-delà de la mise en service." },
    ],
    aboutEyebrow: "À propos",
    aboutTitle: "L'expérience qui fait tourner les installations de manière fiable",
    aboutText: `Je suis ${siteConfig.contact.person}, technicien HF en automatisation, avec plus de 25 ans d'expérience en montage, automatisation et mise en service, dont plus de 10 ans majoritairement à l'étranger, sur cinq continents. En tant que spécialiste Siemens, je réalise des projets en Suisse et dans le monde entier, avec un solide réseau de partenaires en Europe et en Amérique.`,
    statYears: "Ans d'expérience",
    statPartners: "Entreprises partenaires",
    statContinents: "Continents",
    aboutCta: "À propos",
    aboutBullets: [
      "Technique de commande et de process pour des installations exigeantes.",
      "Logiciel API efficace et maintenable avec une structure claire.",
      "Visualisation et conduite avec WinCC Unified et WinCC OA.",
      "Mises en service internationales en Europe, en Amérique du Nord et du Sud.",
    ],
    refEyebrow: "Références",
    refTitle: "Projets sélectionnés",
    refLead: "Plus de 25 ans d'expérience de projets dans un environnement international.",
    allRefs: "Toutes les références",
    ctaTitle: "Prêt pour votre prochain projet d'automatisation ?",
    ctaLead: "Contactez-moi pour un conseil indépendant du fabricant et sans engagement, de l'idée à la mise en service.",
  },
  it: {
    metaTitle: "Servizi",
    metaDesc: "Ingegneria PLC, pianificazione e gestione di progetto, messa in servizio e retrofit, modernizzazione WinCC (WinCC Unified): soluzioni di automazione indipendenti dal produttore per la costruzione industriale di macchine e impianti.",
    heroEyebrow: "Servizi",
    heroH1a: "Tutto per la vostra automazione, ",
    heroH1accent: "da un unico fornitore",
    heroSubtitle: "Dalla consulenza alla modernizzazione, passando per l'ingegneria PLC, la pianificazione di progetto e la messa in servizio: Lienhard Automation accompagna i vostri progetti nella costruzione industriale di macchine e impianti, in modo indipendente dal produttore, preciso e in tutto il mondo.",
    ctaPrimary: "Richiedi un progetto",
    ctaSecondary: "Scopri i servizi",
    heroPoints: ["Oltre 25 anni di esperienza", "Specialista Siemens", "Svizzera e tutto il mondo"],
    overviewEyebrow: "Panoramica",
    overviewTitle: "Le nostre aree di servizio",
    overviewLead: "Cinque aree complementari, incluso un tema specialistico con un focus proprio.",
    bereiche: [
      { title: "Ingegneria PLC", text: "Tecnologia di controllo indipendente dal produttore con un'architettura di programma chiara e coerente." },
      { title: "Pianificazione e gestione di progetto", text: "Consulenza, pianificazione e realizzazione attraverso tutte le fasi del progetto, fino al collaudo finale." },
      { title: "Messa in servizio", text: "Messa in servizio virtuale nel processo in corso fino al collaudo finale, in Svizzera e all'estero." },
      { title: "Retrofit e manutenzione", text: "Modernizzazione di impianti esistenti, migrazione di vecchi controllori (S5 → S7 → TIA) e assistenza." },
      { title: "Modernizzazione Unified", text: "Modernizzare le visualizzazioni WinCC da WinCC flexible/Classic a WinCC Unified." },
    ],
    more: "Scopri di più",
    coreEyebrow: "In dettaglio",
    coreTitle: "Servizi principali",
    coreLead: "I miei due servizi principali, con ciò che c'è concretamente dietro.",
    inbTitle: "Messa in servizio",
    inbText: "Accompagno il vostro impianto dalla messa in servizio virtuale nel processo in corso fino al collaudo finale riuscito, in Svizzera e all'estero.",
    inbItems: ["Messa in servizio virtuale nel processo in corso", "Svolgimento fluido durante l'esercizio in corso", "Messe in servizio in Svizzera e all'estero", "Accompagnamento fino al collaudo finale"],
    retroTitle: "Retrofit e manutenzione",
    retroText: "Modernizzazione di impianti esistenti e migrazione di vecchi controllori, per maggiore disponibilità, sicurezza ed efficienza.",
    retroItems: ["Migrazione di vecchi controllori (S5 → S7 → TIA Portal)", "Estensioni software di impianti esistenti", "Controllori di sicurezza (Safety)", "Assistenza e manutenzione"],
    techEyebrow: "Competenza tecnologica",
    techTitle: "Controllo, conduzione e comunicazione",
    techLead: "Profonda esperienza Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualizzazione con WinCC Unified e WinCC OA, e comunicazione integrale tramite OPC UA, Modbus, PROFINET e PROFIBUS.",
    phasesEyebrow: "Come lavoro",
    phasesTitle: "Il vostro progetto, passo dopo passo",
    phasesLead: "Un percorso chiaro dalla prima consulenza al supporto continuativo.",
    phases: [
      { n: "01", title: "Consulenza e concetto", text: "Analisi delle vostre esigenze, raccomandazione indipendente dal produttore e un concetto chiaro e realizzabile." },
      { n: "02", title: "Ingegneria e pianificazione", text: "Software PLC con architettura coerente, visualizzazione e documentazione pulita." },
      { n: "03", title: "Messa in servizio", text: "Messa in servizio virtuale, test nel processo in corso e accompagnamento fino al collaudo finale, in Svizzera e all'estero." },
      { n: "04", title: "Supporto e formazione", text: "Formazione del vostro team e supporto affidabile oltre la messa in servizio." },
    ],
    aboutEyebrow: "Chi sono",
    aboutTitle: "L'esperienza che fa funzionare gli impianti in modo affidabile",
    aboutText: `Sono ${siteConfig.contact.person}, tecnico HF in automazione, con oltre 25 anni di esperienza nel montaggio, nell'automazione e nella messa in servizio, di cui oltre 10 anni prevalentemente all'estero, in cinque continenti. Come specialista Siemens, realizzo progetti in Svizzera e in tutto il mondo, con una solida rete di partner in Europa e in America.`,
    statYears: "Anni di esperienza",
    statPartners: "Aziende partner",
    statContinents: "Continenti",
    aboutCta: "Chi sono",
    aboutBullets: [
      "Tecnologia di controllo e di processo per impianti esigenti.",
      "Software PLC efficace e manutenibile con una struttura chiara.",
      "Visualizzazione e conduzione con WinCC Unified e WinCC OA.",
      "Messe in servizio internazionali in Europa, America del Nord e del Sud.",
    ],
    refEyebrow: "Referenze",
    refTitle: "Progetti selezionati",
    refLead: "Oltre 25 anni di esperienza progettuale in ambito internazionale.",
    allRefs: "Tutte le referenze",
    ctaTitle: "Pronti per il vostro prossimo progetto di automazione?",
    ctaLead: "Contattatemi per una consulenza indipendente dal produttore e senza impegno, dall'idea alla messa in servizio.",
  },
  pt: {
    metaTitle: "Serviços",
    metaDesc: "Engenharia de PLC, planeamento e gestão de projetos, colocação em serviço e retrofit, modernização de WinCC (WinCC Unified): soluções de automação independentes do fabricante para a construção industrial de máquinas e instalações.",
    heroEyebrow: "Serviços",
    heroH1a: "Tudo para a sua automação, ",
    heroH1accent: "de uma única fonte",
    heroSubtitle: "Do aconselhamento à modernização, passando pela engenharia de PLC, o planeamento de projetos e a colocação em serviço: a Lienhard Automation acompanha os seus projetos na construção industrial de máquinas e instalações, de forma independente do fabricante, precisa e em todo o mundo.",
    ctaPrimary: "Solicitar um projeto",
    ctaSecondary: "Descobrir serviços",
    heroPoints: ["Mais de 25 anos de experiência", "Especialista Siemens", "Suíça e todo o mundo"],
    overviewEyebrow: "Visão geral",
    overviewTitle: "As nossas áreas de serviço",
    overviewLead: "Cinco áreas complementares, incluindo um tema especializado com foco próprio.",
    bereiche: [
      { title: "Engenharia de PLC", text: "Tecnologia de controlo independente do fabricante com uma arquitetura de programa clara e coerente." },
      { title: "Planeamento e gestão de projetos", text: "Consultoria, planeamento e implementação ao longo de todas as fases do projeto, até à receção final." },
      { title: "Colocação em serviço", text: "Colocação em serviço virtual no processo em curso até à receção final, na Suíça e no estrangeiro." },
      { title: "Retrofit e manutenção", text: "Modernização de instalações existentes, migração de controladores antigos (S5 → S7 → TIA) e serviço." },
      { title: "Modernização Unified", text: "Modernizar visualizações WinCC de WinCC flexible/Classic para WinCC Unified." },
    ],
    more: "Saber mais",
    coreEyebrow: "Em detalhe",
    coreTitle: "Serviços principais",
    coreLead: "Os meus dois serviços principais, com o que está concretamente por trás.",
    inbTitle: "Colocação em serviço",
    inbText: "Acompanho a sua instalação desde a colocação em serviço virtual no processo em curso até à receção final bem-sucedida, na Suíça e no estrangeiro.",
    inbItems: ["Colocação em serviço virtual no processo em curso", "Execução fluida durante a operação em curso", "Colocações em serviço na Suíça e no estrangeiro", "Acompanhamento até à receção final"],
    retroTitle: "Retrofit e manutenção",
    retroText: "Modernização de instalações existentes e migração de controladores antigos, para mais disponibilidade, segurança e eficiência.",
    retroItems: ["Migração de controladores antigos (S5 → S7 → TIA Portal)", "Ampliações de software de instalações existentes", "Controladores de segurança (Safety)", "Serviço e manutenção"],
    techEyebrow: "Competência tecnológica",
    techTitle: "Controlo, condução e comunicação",
    techLead: "Profunda experiência Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualização com WinCC Unified e WinCC OA, e comunicação integral através de OPC UA, Modbus, PROFINET e PROFIBUS.",
    phasesEyebrow: "Como trabalho",
    phasesTitle: "O seu projeto, passo a passo",
    phasesLead: "Um processo claro do primeiro aconselhamento ao suporte contínuo.",
    phases: [
      { n: "01", title: "Aconselhamento e conceito", text: "Análise das suas necessidades, recomendação independente do fabricante e um conceito claro e exequível." },
      { n: "02", title: "Engenharia e planeamento", text: "Software de PLC com arquitetura coerente, visualização e documentação limpa." },
      { n: "03", title: "Colocação em serviço", text: "Colocação em serviço virtual, testes no processo em curso e acompanhamento até à receção final, na Suíça e no estrangeiro." },
      { n: "04", title: "Suporte e formação", text: "Integração da sua equipa e suporte fiável para além da colocação em serviço." },
    ],
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Experiência que faz as instalações funcionarem de forma fiável",
    aboutText: `Sou ${siteConfig.contact.person}, técnico HF em automação, com mais de 25 anos de experiência em montagem, automação e colocação em serviço, dos quais mais de 10 anos maioritariamente no estrangeiro, em cinco continentes. Como especialista Siemens, realizo projetos na Suíça e em todo o mundo, com uma sólida rede de parceiros na Europa e na América.`,
    statYears: "Anos de experiência",
    statPartners: "Empresas parceiras",
    statContinents: "Continentes",
    aboutCta: "Sobre mim",
    aboutBullets: [
      "Tecnologia de controlo e de processo para instalações exigentes.",
      "Software de PLC eficaz e fácil de manter com uma estrutura clara.",
      "Visualização e condução com WinCC Unified e WinCC OA.",
      "Colocações em serviço internacionais na Europa, América do Norte e do Sul.",
    ],
    refEyebrow: "Referências",
    refTitle: "Projetos selecionados",
    refLead: "Mais de 25 anos de experiência em projetos num ambiente internacional.",
    allRefs: "Todas as referências",
    ctaTitle: "Pronto para o seu próximo projeto de automação?",
    ctaLead: "Contacte-me para um aconselhamento independente do fabricante e sem compromisso, da ideia à colocação em serviço.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const t = T[pageLocale(params.locale)];
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/leistungen" } };
}

export default function LeistungenPage({ params }: { params: { locale: string } }) {
  const locale = pageLocale(params.locale);
  const t = T[locale];
  const services = getServices(locale);
  const technologies = getTechnologies(locale);
  const previewProjects = getProjects(locale).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {t.heroEyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              {t.heroH1a}
              <span className="text-accent-400">{t.heroH1accent}</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">{t.heroSubtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                {t.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#bereiche" variant="outline-light" size="lg">
                {t.ctaSecondary}
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up">
              {t.heroPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-medium text-steel-200">
                  <Check className="h-4 w-4 text-accent-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Service areas overview */}
      <Section id="bereiche" tone="light">
        <SectionHeading eyebrow={t.overviewEyebrow} title={t.overviewTitle} lead={t.overviewLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.bereiche.map((b, i) => {
            const href = bereichHrefs[i];
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                  {bereichIcons[i]}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{b.text}</p>
                {href ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    {t.more}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                ) : null}
              </>
            );
            return (
              <Reveal key={b.title} delay={(i % 3) * 0.06}>
                {href ? (
                  <Link href={href} className="group flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover">
                    {inner}
                  </Link>
                ) : (
                  <div className="group flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Core services in detail */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.coreEyebrow} title={t.coreTitle} lead={t.coreLead} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <ServiceCard icon={serviceIcons[service.slug]} title={service.title} tagline={service.tagline} description={service.description} features={service.features} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Commissioning + Retrofit highlight */}
      <Section tone="light">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy-900">{t.inbTitle}</h2>
            <p className="mt-3 leading-relaxed text-steel-600">{t.inbText}</p>
            <ul className="mt-5 space-y-2.5">
              {t.inbItems.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-steel-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy-900">{t.retroTitle}</h2>
            <p className="mt-3 leading-relaxed text-steel-600">{t.retroText}</p>
            <ul className="mt-5 space-y-2.5">
              {t.retroItems.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-steel-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Technology competence */}
      <Section tone="dark">
        <SectionHeading eyebrow={t.techEyebrow} title={t.techTitle} lead={t.techLead} onDark />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <Reveal key={tech.vendor} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-xl2 border border-navy-700 bg-navy-800/60 p-6">
                <h3 className="font-bold text-white">{tech.vendor}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <li key={item} className="rounded-md border border-navy-600 bg-navy-900/60 px-2.5 py-1 text-xs font-medium text-steel-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.phasesEyebrow} title={t.phasesTitle} lead={t.phasesLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.phases.map((phase, i) => (
            <Reveal key={phase.n} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    {phaseIcons[i]}
                  </div>
                  <span className="text-2xl font-bold text-steel-200">{phase.n}</span>
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{phase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{phase.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* About teaser */}
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">{t.aboutText}</p>
            <dl className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-bold text-accent-600">25+</dt>
                <dd className="mt-1 text-sm text-steel-600">{t.statYears}</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-accent-600">5</dt>
                <dd className="mt-1 text-sm text-steel-600">{t.statPartners}</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-accent-600">5</dt>
                <dd className="mt-1 text-sm text-steel-600">{t.statContinents}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <ButtonLink href="/unternehmen" variant="secondary">
                {t.aboutCta} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-3">
            {t.aboutBullets.map((text, i) => (
              <li key={text} className="flex items-start gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                  {bulletIcons[i]}
                </div>
                <p className="text-sm leading-relaxed text-steel-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* References preview */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t.refEyebrow} title={t.refTitle} lead={t.refLead} />
          <ButtonLink href="/referenzen" variant="ghost" className="shrink-0">
            {t.allRefs} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project, i) => (
            <Reveal key={`${project.title}-${i}`} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
