import type { Metadata } from "next";
import { Fragment } from "react";
import { LocaleLink as Link } from "@/components/ui/LocaleLink";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { relatedLinks } from "@/content/data2unified";
import { isLocale, type Locale } from "@/i18n/config";
import {
  ArrowRight,
  Check,
  Search,
  RefreshCw,
  Wrench,
  Workflow,
  GraduationCap,
  Layers,
  Cpu,
  ShieldCheck,
  ExternalLink,
} from "@/components/ui/icons";

type Item = { title: string; detail: string };
type Node = { step: string; title: string; detail: string };
type Content = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1a: string;
  h1accent: string;
  subtitle: React.ReactNode;
  ctaHero: string;
  ctaRefs: string;
  heroPoints: string[];
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  why: Item[];
  pathEyebrow: string;
  pathTitle: string;
  pathLead: string;
  flow: Node[];
  stepsEyebrow: string;
  stepsTitle: string;
  stepsLead: string;
  steps: Item[];
  scopeEyebrow: string;
  scopeTitle: string;
  scopeLead: string;
  scope: Item[];
  scopeNote: string;
  toolsEyebrow: string;
  toolsTitle: string;
  toolsP1: React.ReactNode;
  attribution: string;
  securityText: string;
  securityLink: string;
  relatedTitles: string[];
  ctaTitle: string;
  ctaLead: string;
};

const w = (s: string) => <strong className="font-semibold text-white">{s}</strong>;

const C: Record<Locale, Content> = {
  de: {
    metaTitle: "WinCC-Modernisierung",
    metaDesc:
      "Experte für die Modernisierung von WinCC-Visualisierungen: von WinCC flexible und WinCC Classic zu SIMATIC WinCC Unified. Analyse, Migration, Anpassung, Inbetriebnahme, Support und Schulung – alle Schritte aus einer Hand.",
    eyebrow: "WinCC-Modernisierung · Ihr Spezialist",
    h1a: "Ihr Experte für die Modernisierung Ihrer ",
    h1accent: "WinCC-Visualisierung",
    subtitle: (
      <>
        Von {w("WinCC flexible")} und {w("WinCC Classic")} bis zu{" "}
        {w("WinCC Unified")}: Ich modernisiere bestehende Projekte sicher und
        ohne Neuanfang – und kenne jeden Schritt aus der Praxis. Ich begleite,
        unterstütze und schule Sie über die gesamte Migration hinweg.
      </>
    ),
    ctaHero: "Modernisierung anfragen",
    ctaRefs: "Referenzen ansehen",
    heroPoints: ["WinCC flexible · Classic · Unified", "Alle Schritte aus einer Hand", "Begleitung, Support & Schulung"],
    whyEyebrow: "Warum mit mir",
    whyTitle: "Modernisierung in besten Händen",
    whyLead:
      "Eine Visualisierung zu modernisieren heisst, jahrelang gewachsenes Wissen zu erhalten und gleichzeitig zukunftssicher zu machen. Genau dafür bin ich der richtige Partner.",
    why: [
      { title: "Von WinCC flexible bis Unified", detail: "Ich modernisiere über alle Generationen hinweg – WinCC flexible, WinCC Classic (V7) und WinCC Comfort/Advanced bis SIMATIC WinCC Unified." },
      { title: "Jeden Schritt im Griff", detail: "Analyse, Konzept, Migration, Anpassung, Test und Inbetriebnahme: Ich kenne den gesamten Weg aus jahrelanger Projektpraxis – nicht aus der Theorie." },
      { title: "Wo Standard-Tools aufhören", detail: "Automatische Konverter bringen Sie nur einen Teil des Wegs. Die entscheidenden manuellen Anpassungen davor und danach sind genau meine Stärke." },
      { title: "Begleitung, Support & Schulung", detail: "Ich unterstütze Sie von der ersten Beratung über die Umsetzung bis zum laufenden Support – und schule Ihr Team auf der neuen Umgebung." },
    ],
    pathEyebrow: "Der Weg",
    pathTitle: "Vom Altprojekt zur Unified-Visualisierung",
    pathLead: "Bewährtes erhalten, Veraltetes ablösen – planbar und ohne Risiko für Ihren laufenden Betrieb.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "Ihre bestehende, über Jahre gewachsene Visualisierung – das wertvolle Fundament." },
      { step: "02", title: "Modernisierung", detail: "Analyse, Migration und gezielte Anpassung – Schritt für Schritt, ohne Ihr Prozess-Know-how zu verlieren." },
      { step: "03", title: "WinCC Unified", detail: "Zukunftssichere Visualisierung auf SIMATIC HMI Unified Panels und Unified PC." },
    ],
    stepsEyebrow: "Meine Begleitung",
    stepsTitle: "So begleite ich Sie – Schritt für Schritt",
    stepsLead: "Von der ersten Analyse bis zur Schulung Ihres Teams: ein klarer Prozess, in dem Sie nie allein sind.",
    steps: [
      { title: "Analyse & Modernisierungs-Check", detail: "Bestandsaufnahme Ihres Projekts und eine realistische Einschätzung von Umfang, Aufwand und Risiken." },
      { title: "Konzept & Planung", detail: "Migrationsstrategie, Zeitplan und klare Bedien- und Designvorgaben für die neue WinCC-Unified-Oberfläche." },
      { title: "Migration der Projektinhalte", detail: "Übernahme von Bildern, Variablen, Meldungen, Archiven und Skripten – effizient mit bewährten Werkzeugen." },
      { title: "Anpassung & Optimierung", detail: "Manuelle Nacharbeit, Optimierung der Bedienoberfläche und Umsetzung neuer Unified-Funktionen." },
      { title: "Test & Inbetriebnahme", detail: "Funktionsprüfung auf Unified Panels, Validierung im laufenden Prozess und Begleitung bis zur Endabnahme." },
      { title: "Support & Schulung", detail: "Einweisung Ihres Teams und verlässlicher Support über die Inbetriebnahme hinaus." },
    ],
    scopeEyebrow: "Umfang",
    scopeTitle: "Was bei der Modernisierung übernommen wird",
    scopeLead: "Ihre bestehenden Projektinhalte gehen nicht verloren – sie werden übernommen, angepasst und für WinCC Unified optimiert.",
    scope: [
      { title: "Bilder & Bildverwaltung", detail: "Bilder, Vorlagen, Pop-up- und Slide-in-Bilder samt Struktur und Navigation." },
      { title: "Bildobjekte", detail: "Basisobjekte (Textfeld, Rechteck), Elemente (Schaltfläche, E/A-Feld) und Controls wie die Meldeanzeige." },
      { title: "Animationen & Dynamik", detail: "Animationen und Dynamisierungen auf den unterstützten Objekten." },
      { title: "Skripte & Systemfunktionen", detail: "Ausgewählte Systemfunktionen und Skripte werden übernommen und angepasst." },
      { title: "HMI-Variablen", detail: "Übernahme der HMI-Variablen und Anbindung an die Steuerung." },
      { title: "Meldungen & Alarme", detail: "HMI-Meldungen inklusive Klassen und Texten." },
      { title: "Archive & Trends", detail: "Archive und Archivvariablen für historische Daten und Trends." },
      { title: "Text- & Grafiklisten", detail: "Mehrsprachige Text- und Grafiklisten." },
      { title: "Faceplates", detail: "Wiederverwendbare Faceplates und deren Implementierung." },
    ],
    scopeNote: "Den genauen Umfang und die migrierbaren Elemente prüfe ich für Ihr Projekt individuell im Modernisierungs-Check.",
    toolsEyebrow: "Werkzeuge & Methoden",
    toolsTitle: "Bewährte Tools, sauber eingesetzt",
    toolsP1: (
      <>
        Für eine effiziente Migration nutze ich die offiziellen Siemens-Werkzeuge
        – darunter das TIA-Portal-Add-in <strong>Data2Unified</strong>, den WinCC
        Unified Modernization Checker und den Smart Advisor. Sie beschleunigen
        die Übernahme; die fachliche Qualität entsteht durch die manuelle
        Anpassung und Optimierung.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified und TIA Portal sind Marken der Siemens AG. Lienhard Automation ist unabhängiger Dienstleister und kein Vertragshändler von Siemens.",
    securityText:
      "Zum Schutz von Anlagen, Systemen und Netzwerken vor Cyber-Bedrohungen ist ein ganzheitliches, modernes IT-Security-Konzept notwendig. Diese Anforderungen berücksichtige ich bei jeder Modernisierung.",
    securityLink: "Mehr zu unserem Cybersecurity-Bereich",
    relatedTitles: [
      "Data2Unified – TIA-Portal-Add-in (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Umstieg von Comfort Panels auf Unified Comfort Panels",
    ],
    ctaTitle: "Bereit, Ihre Visualisierung zukunftssicher zu machen?",
    ctaLead:
      "Lassen Sie uns Ihr bestehendes WinCC-Projekt anschauen. Ich schätze Aufwand und Risiken ehrlich ein und begleite Sie von der Analyse bis zur Inbetriebnahme – inklusive Support und Schulung.",
  },
  en: {
    metaTitle: "WinCC modernization",
    metaDesc:
      "Expert for modernizing WinCC visualizations: from WinCC flexible and WinCC Classic to SIMATIC WinCC Unified. Analysis, migration, adaptation, commissioning, support and training – every step from a single source.",
    eyebrow: "WinCC modernization · Your specialist",
    h1a: "Your expert for modernizing your ",
    h1accent: "WinCC visualization",
    subtitle: (
      <>
        From {w("WinCC flexible")} and {w("WinCC Classic")} to {w("WinCC Unified")}:
        I modernize existing projects safely and without starting from scratch –
        and I know every step from practice. I accompany, support and train you
        throughout the entire migration.
      </>
    ),
    ctaHero: "Request modernization",
    ctaRefs: "View references",
    heroPoints: ["WinCC flexible · Classic · Unified", "Every step from a single source", "Guidance, support & training"],
    whyEyebrow: "Why with me",
    whyTitle: "Modernization in the best hands",
    whyLead:
      "Modernizing a visualization means preserving knowledge grown over years while making it future-proof. That is exactly where I am the right partner.",
    why: [
      { title: "From WinCC flexible to Unified", detail: "I modernize across all generations – WinCC flexible, WinCC Classic (V7) and WinCC Comfort/Advanced up to SIMATIC WinCC Unified." },
      { title: "Every step under control", detail: "Analysis, concept, migration, adaptation, test and commissioning: I know the whole path from years of project practice – not from theory." },
      { title: "Where standard tools stop", detail: "Automatic converters only get you part of the way. The decisive manual adaptations before and after are precisely my strength." },
      { title: "Guidance, support & training", detail: "I support you from the first consultation through implementation to ongoing support – and train your team on the new environment." },
    ],
    pathEyebrow: "The path",
    pathTitle: "From the legacy project to the Unified visualization",
    pathLead: "Keep what works, replace what is outdated – plannable and without risk to your running operation.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "Your existing visualization, grown over years – the valuable foundation." },
      { step: "02", title: "Modernization", detail: "Analysis, migration and targeted adaptation – step by step, without losing your process know-how." },
      { step: "03", title: "WinCC Unified", detail: "Future-proof visualization on SIMATIC HMI Unified Panels and Unified PC." },
    ],
    stepsEyebrow: "My guidance",
    stepsTitle: "How I guide you – step by step",
    stepsLead: "From the first analysis to training your team: a clear process in which you are never alone.",
    steps: [
      { title: "Analysis & modernization check", detail: "Assessment of your project and a realistic estimate of scope, effort and risks." },
      { title: "Concept & planning", detail: "Migration strategy, schedule and clear operating and design requirements for the new WinCC Unified interface." },
      { title: "Migration of project content", detail: "Carrying over screens, tags, alarms, archives and scripts – efficiently with proven tools." },
      { title: "Adaptation & optimization", detail: "Manual rework, optimization of the user interface and implementation of new Unified functions." },
      { title: "Test & commissioning", detail: "Functional testing on Unified Panels, validation in the running process and guidance up to final acceptance." },
      { title: "Support & training", detail: "Onboarding of your team and reliable support beyond commissioning." },
    ],
    scopeEyebrow: "Scope",
    scopeTitle: "What is carried over during modernization",
    scopeLead: "Your existing project content is not lost – it is carried over, adapted and optimized for WinCC Unified.",
    scope: [
      { title: "Screens & screen management", detail: "Screens, templates, pop-up and slide-in screens including structure and navigation." },
      { title: "Screen objects", detail: "Basic objects (text field, rectangle), elements (button, I/O field) and controls such as the alarm view." },
      { title: "Animations & dynamics", detail: "Animations and dynamic behaviour on the supported objects." },
      { title: "Scripts & system functions", detail: "Selected system functions and scripts are carried over and adapted." },
      { title: "HMI tags", detail: "Carrying over the HMI tags and connecting to the controller." },
      { title: "Alarms & messages", detail: "HMI alarms including classes and texts." },
      { title: "Archives & trends", detail: "Archives and archive tags for historical data and trends." },
      { title: "Text & graphics lists", detail: "Multilingual text and graphics lists." },
      { title: "Faceplates", detail: "Reusable faceplates and their implementation." },
    ],
    scopeNote: "I check the exact scope and the migratable elements individually for your project in the modernization check.",
    toolsEyebrow: "Tools & methods",
    toolsTitle: "Proven tools, used properly",
    toolsP1: (
      <>
        For an efficient migration I use the official Siemens tools – including
        the TIA Portal add-in <strong>Data2Unified</strong>, the WinCC Unified
        Modernization Checker and the Smart Advisor. They speed up the transfer;
        the professional quality comes from the manual adaptation and
        optimization.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified and TIA Portal are trademarks of Siemens AG. Lienhard Automation is an independent service provider, not a Siemens dealer.",
    securityText:
      "Protecting plants, systems and networks against cyber threats requires a holistic, modern IT security concept. I take these requirements into account in every modernization.",
    securityLink: "More about our cybersecurity area",
    relatedTitles: [
      "Data2Unified – TIA Portal add-in (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Switching from Comfort Panels to Unified Comfort Panels",
    ],
    ctaTitle: "Ready to make your visualization future-proof?",
    ctaLead:
      "Let's look at your existing WinCC project. I estimate effort and risks honestly and guide you from analysis to commissioning – including support and training.",
  },
  es: {
    metaTitle: "Modernización de WinCC",
    metaDesc:
      "Experto en la modernización de visualizaciones WinCC: de WinCC flexible y WinCC Classic a SIMATIC WinCC Unified. Análisis, migración, adaptación, puesta en marcha, soporte y formación, todo de un solo proveedor.",
    eyebrow: "Modernización de WinCC · Su especialista",
    h1a: "Su experto en la modernización de su ",
    h1accent: "visualización WinCC",
    subtitle: (
      <>
        De {w("WinCC flexible")} y {w("WinCC Classic")} a {w("WinCC Unified")}:
        modernizo proyectos existentes de forma segura y sin empezar de cero, y
        conozco cada paso por experiencia. Le acompaño, le doy soporte y le formo
        durante toda la migración.
      </>
    ),
    ctaHero: "Solicitar modernización",
    ctaRefs: "Ver referencias",
    heroPoints: ["WinCC flexible · Classic · Unified", "Cada paso de un solo proveedor", "Acompañamiento, soporte y formación"],
    whyEyebrow: "Por qué conmigo",
    whyTitle: "Modernización en las mejores manos",
    whyLead:
      "Modernizar una visualización significa preservar el conocimiento acumulado durante años y, a la vez, hacerlo a prueba de futuro. Para eso soy el socio adecuado.",
    why: [
      { title: "De WinCC flexible a Unified", detail: "Modernizo a través de todas las generaciones: WinCC flexible, WinCC Classic (V7) y WinCC Comfort/Advanced hasta SIMATIC WinCC Unified." },
      { title: "Cada paso bajo control", detail: "Análisis, concepto, migración, adaptación, prueba y puesta en marcha: conozco todo el camino por años de práctica de proyectos, no por teoría." },
      { title: "Donde acaban las herramientas estándar", detail: "Los conversores automáticos solo le llevan parte del camino. Las adaptaciones manuales decisivas, antes y después, son precisamente mi fuerza." },
      { title: "Acompañamiento, soporte y formación", detail: "Le acompaño desde la primera consulta, pasando por la implementación, hasta el soporte continuo, y formo a su equipo en el nuevo entorno." },
    ],
    pathEyebrow: "El camino",
    pathTitle: "Del proyecto heredado a la visualización Unified",
    pathLead: "Conservar lo probado, sustituir lo obsoleto: planificable y sin riesgo para su operación en curso.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "Su visualización existente, crecida a lo largo de los años: la valiosa base." },
      { step: "02", title: "Modernización", detail: "Análisis, migración y adaptación selectiva, paso a paso, sin perder su know-how de proceso." },
      { step: "03", title: "WinCC Unified", detail: "Visualización a prueba de futuro en SIMATIC HMI Unified Panels y Unified PC." },
    ],
    stepsEyebrow: "Mi acompañamiento",
    stepsTitle: "Así le acompaño, paso a paso",
    stepsLead: "Del primer análisis a la formación de su equipo: un proceso claro en el que nunca está solo.",
    steps: [
      { title: "Análisis y diagnóstico de modernización", detail: "Inventario de su proyecto y una estimación realista de alcance, esfuerzo y riesgos." },
      { title: "Concepto y planificación", detail: "Estrategia de migración, calendario y requisitos claros de manejo y diseño para la nueva interfaz WinCC Unified." },
      { title: "Migración de los contenidos del proyecto", detail: "Traspaso de imágenes, variables, avisos, archivos y scripts, de forma eficiente con herramientas probadas." },
      { title: "Adaptación y optimización", detail: "Retoque manual, optimización de la interfaz de usuario e implementación de nuevas funciones Unified." },
      { title: "Prueba y puesta en marcha", detail: "Prueba funcional en Unified Panels, validación en el proceso en curso y acompañamiento hasta la recepción final." },
      { title: "Soporte y formación", detail: "Incorporación de su equipo y soporte fiable más allá de la puesta en marcha." },
    ],
    scopeEyebrow: "Alcance",
    scopeTitle: "Qué se traspasa en la modernización",
    scopeLead: "Sus contenidos de proyecto existentes no se pierden: se traspasan, se adaptan y se optimizan para WinCC Unified.",
    scope: [
      { title: "Imágenes y gestión de imágenes", detail: "Imágenes, plantillas, ventanas emergentes y slide-in, incluyendo estructura y navegación." },
      { title: "Objetos de imagen", detail: "Objetos básicos (campo de texto, rectángulo), elementos (botón, campo E/S) y controles como la vista de avisos." },
      { title: "Animaciones y dinámica", detail: "Animaciones y dinamizaciones en los objetos soportados." },
      { title: "Scripts y funciones de sistema", detail: "Funciones de sistema y scripts seleccionados se traspasan y se adaptan." },
      { title: "Variables HMI", detail: "Traspaso de las variables HMI y conexión con el controlador." },
      { title: "Avisos y alarmas", detail: "Avisos HMI incluyendo clases y textos." },
      { title: "Archivos y tendencias", detail: "Archivos y variables de archivo para datos históricos y tendencias." },
      { title: "Listas de textos y gráficos", detail: "Listas de textos y gráficos multilingües." },
      { title: "Faceplates", detail: "Faceplates reutilizables y su implementación." },
    ],
    scopeNote: "El alcance exacto y los elementos migrables los compruebo de forma individual para su proyecto en el diagnóstico de modernización.",
    toolsEyebrow: "Herramientas y métodos",
    toolsTitle: "Herramientas probadas, bien utilizadas",
    toolsP1: (
      <>
        Para una migración eficiente utilizo las herramientas oficiales de
        Siemens, entre ellas el add-in de TIA Portal{" "}
        <strong>Data2Unified</strong>, el WinCC Unified Modernization Checker y
        el Smart Advisor. Aceleran el traspaso; la calidad técnica surge de la
        adaptación y optimización manuales.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified y TIA Portal son marcas de Siemens AG. Lienhard Automation es un proveedor de servicios independiente, no un distribuidor de Siemens.",
    securityText:
      "Proteger instalaciones, sistemas y redes frente a las ciberamenazas requiere un concepto de seguridad informática integral y moderno. Tengo en cuenta estos requisitos en cada modernización.",
    securityLink: "Más sobre nuestra área de ciberseguridad",
    relatedTitles: [
      "Data2Unified – add-in de TIA Portal (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Cambio de Comfort Panels a Unified Comfort Panels",
    ],
    ctaTitle: "¿Listo para hacer su visualización a prueba de futuro?",
    ctaLead:
      "Veamos su proyecto WinCC existente. Estimo el esfuerzo y los riesgos con honestidad y le acompaño del análisis a la puesta en marcha, incluyendo soporte y formación.",
  },
  fr: {
    metaTitle: "Modernisation WinCC",
    metaDesc:
      "Expert de la modernisation de visualisations WinCC : de WinCC flexible et WinCC Classic à SIMATIC WinCC Unified. Analyse, migration, adaptation, mise en service, support et formation, le tout d'une seule main.",
    eyebrow: "Modernisation WinCC · Votre spécialiste",
    h1a: "Votre expert pour la modernisation de votre ",
    h1accent: "visualisation WinCC",
    subtitle: (
      <>
        De {w("WinCC flexible")} et {w("WinCC Classic")} à {w("WinCC Unified")} :
        je modernise les projets existants en toute sécurité et sans repartir de
        zéro, et je connais chaque étape par la pratique. Je vous accompagne, vous
        soutiens et vous forme tout au long de la migration.
      </>
    ),
    ctaHero: "Demander une modernisation",
    ctaRefs: "Voir les références",
    heroPoints: ["WinCC flexible · Classic · Unified", "Chaque étape d'une seule main", "Accompagnement, support et formation"],
    whyEyebrow: "Pourquoi avec moi",
    whyTitle: "Une modernisation entre de bonnes mains",
    whyLead:
      "Moderniser une visualisation, c'est préserver un savoir accumulé pendant des années tout en le rendant pérenne. C'est précisément là que je suis le bon partenaire.",
    why: [
      { title: "De WinCC flexible à Unified", detail: "Je modernise à travers toutes les générations : WinCC flexible, WinCC Classic (V7) et WinCC Comfort/Advanced jusqu'à SIMATIC WinCC Unified." },
      { title: "Chaque étape maîtrisée", detail: "Analyse, concept, migration, adaptation, test et mise en service : je connais tout le parcours par des années de pratique de projets, pas par la théorie." },
      { title: "Là où s'arrêtent les outils standards", detail: "Les convertisseurs automatiques ne vous mènent qu'à mi-chemin. Les adaptations manuelles décisives, avant et après, sont précisément mon point fort." },
      { title: "Accompagnement, support et formation", detail: "Je vous accompagne du premier conseil à la réalisation jusqu'au support continu, et je forme votre équipe au nouvel environnement." },
    ],
    pathEyebrow: "Le chemin",
    pathTitle: "Du projet hérité à la visualisation Unified",
    pathLead: "Conserver ce qui a fait ses preuves, remplacer l'obsolète : planifiable et sans risque pour votre exploitation en cours.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "Votre visualisation existante, développée au fil des ans : la base précieuse." },
      { step: "02", title: "Modernisation", detail: "Analyse, migration et adaptation ciblée, étape par étape, sans perdre votre savoir-faire de process." },
      { step: "03", title: "WinCC Unified", detail: "Une visualisation pérenne sur SIMATIC HMI Unified Panels et Unified PC." },
    ],
    stepsEyebrow: "Mon accompagnement",
    stepsTitle: "Comment je vous accompagne, étape par étape",
    stepsLead: "Du premier diagnostic à la formation de votre équipe : un processus clair dans lequel vous n'êtes jamais seul.",
    steps: [
      { title: "Analyse et diagnostic de modernisation", detail: "État des lieux de votre projet et une estimation réaliste de l'ampleur, de la charge et des risques." },
      { title: "Concept et planification", detail: "Stratégie de migration, calendrier et exigences claires d'utilisation et de design pour la nouvelle interface WinCC Unified." },
      { title: "Migration des contenus du projet", detail: "Reprise des vues, variables, alarmes, archives et scripts, de manière efficace avec des outils éprouvés." },
      { title: "Adaptation et optimisation", detail: "Retouche manuelle, optimisation de l'interface utilisateur et mise en œuvre des nouvelles fonctions Unified." },
      { title: "Test et mise en service", detail: "Test fonctionnel sur Unified Panels, validation en cours de process et accompagnement jusqu'à la réception finale." },
      { title: "Support et formation", detail: "Initiation de votre équipe et support fiable au-delà de la mise en service." },
    ],
    scopeEyebrow: "Périmètre",
    scopeTitle: "Ce qui est repris lors de la modernisation",
    scopeLead: "Vos contenus de projet existants ne sont pas perdus : ils sont repris, adaptés et optimisés pour WinCC Unified.",
    scope: [
      { title: "Vues et gestion des vues", detail: "Vues, modèles, pop-ups et slide-in, structure et navigation comprises." },
      { title: "Objets de vue", detail: "Objets de base (champ de texte, rectangle), éléments (bouton, champ E/S) et contrôles comme la vue des alarmes." },
      { title: "Animations et dynamique", detail: "Animations et dynamisations sur les objets pris en charge." },
      { title: "Scripts et fonctions système", detail: "Des fonctions système et des scripts sélectionnés sont repris et adaptés." },
      { title: "Variables IHM", detail: "Reprise des variables IHM et liaison à l'automate." },
      { title: "Alarmes et messages", detail: "Alarmes IHM, classes et textes compris." },
      { title: "Archives et courbes", detail: "Archives et variables d'archive pour les données historiques et les courbes." },
      { title: "Listes de textes et de graphiques", detail: "Listes de textes et de graphiques multilingues." },
      { title: "Faceplates", detail: "Faceplates réutilisables et leur implémentation." },
    ],
    scopeNote: "Le périmètre exact et les éléments migrables, je les vérifie individuellement pour votre projet lors du diagnostic de modernisation.",
    toolsEyebrow: "Outils et méthodes",
    toolsTitle: "Des outils éprouvés, utilisés proprement",
    toolsP1: (
      <>
        Pour une migration efficace, j'utilise les outils officiels Siemens, dont
        l'add-in TIA Portal <strong>Data2Unified</strong>, le WinCC Unified
        Modernization Checker et le Smart Advisor. Ils accélèrent la reprise ; la
        qualité technique vient de l'adaptation et de l'optimisation manuelles.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified et TIA Portal sont des marques de Siemens AG. Lienhard Automation est un prestataire indépendant, pas un revendeur Siemens.",
    securityText:
      "Protéger les installations, les systèmes et les réseaux contre les cybermenaces nécessite un concept de sécurité informatique global et moderne. Je tiens compte de ces exigences dans chaque modernisation.",
    securityLink: "En savoir plus sur notre domaine cybersécurité",
    relatedTitles: [
      "Data2Unified – add-in TIA Portal (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Passage des Comfort Panels aux Unified Comfort Panels",
    ],
    ctaTitle: "Prêt à rendre votre visualisation pérenne ?",
    ctaLead:
      "Examinons votre projet WinCC existant. J'estime honnêtement la charge et les risques et je vous accompagne de l'analyse à la mise en service, support et formation compris.",
  },
  it: {
    metaTitle: "Modernizzazione WinCC",
    metaDesc:
      "Esperto nella modernizzazione di visualizzazioni WinCC: da WinCC flexible e WinCC Classic a SIMATIC WinCC Unified. Analisi, migrazione, adattamento, messa in servizio, supporto e formazione, tutto da un unico interlocutore.",
    eyebrow: "Modernizzazione WinCC · Il vostro specialista",
    h1a: "Il vostro esperto per la modernizzazione della vostra ",
    h1accent: "visualizzazione WinCC",
    subtitle: (
      <>
        Da {w("WinCC flexible")} e {w("WinCC Classic")} a {w("WinCC Unified")}:
        modernizzo progetti esistenti in modo sicuro e senza ripartire da zero, e
        conosco ogni passo dalla pratica. Vi accompagno, vi supporto e vi formo
        lungo l'intera migrazione.
      </>
    ),
    ctaHero: "Richiedi la modernizzazione",
    ctaRefs: "Vedi le referenze",
    heroPoints: ["WinCC flexible · Classic · Unified", "Ogni passo da un unico interlocutore", "Accompagnamento, supporto e formazione"],
    whyEyebrow: "Perché con me",
    whyTitle: "Modernizzazione in ottime mani",
    whyLead:
      "Modernizzare una visualizzazione significa preservare il know-how maturato negli anni e renderlo allo stesso tempo a prova di futuro. È proprio qui che sono il partner giusto.",
    why: [
      { title: "Da WinCC flexible a Unified", detail: "Modernizzo attraverso tutte le generazioni: WinCC flexible, WinCC Classic (V7) e WinCC Comfort/Advanced fino a SIMATIC WinCC Unified." },
      { title: "Ogni passo sotto controllo", detail: "Analisi, concetto, migrazione, adattamento, test e messa in servizio: conosco l'intero percorso da anni di pratica progettuale, non dalla teoria." },
      { title: "Dove finiscono i tool standard", detail: "I convertitori automatici vi portano solo una parte del percorso. I decisivi adattamenti manuali, prima e dopo, sono proprio il mio punto di forza." },
      { title: "Accompagnamento, supporto e formazione", detail: "Vi supporto dalla prima consulenza, attraverso la realizzazione, fino al supporto continuativo, e formo il vostro team sul nuovo ambiente." },
    ],
    pathEyebrow: "Il percorso",
    pathTitle: "Dal progetto esistente alla visualizzazione Unified",
    pathLead: "Conservare il collaudato, sostituire l'obsoleto: pianificabile e senza rischi per il vostro esercizio in corso.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "La vostra visualizzazione esistente, cresciuta negli anni: la base preziosa." },
      { step: "02", title: "Modernizzazione", detail: "Analisi, migrazione e adattamento mirato, passo dopo passo, senza perdere il vostro know-how di processo." },
      { step: "03", title: "WinCC Unified", detail: "Visualizzazione a prova di futuro su SIMATIC HMI Unified Panels e Unified PC." },
    ],
    stepsEyebrow: "Il mio accompagnamento",
    stepsTitle: "Come vi accompagno, passo dopo passo",
    stepsLead: "Dalla prima analisi alla formazione del vostro team: un processo chiaro in cui non siete mai soli.",
    steps: [
      { title: "Analisi e check di modernizzazione", detail: "Rilievo del vostro progetto e una stima realistica di portata, impegno e rischi." },
      { title: "Concetto e pianificazione", detail: "Strategia di migrazione, tempistiche e chiare specifiche di utilizzo e design per la nuova interfaccia WinCC Unified." },
      { title: "Migrazione dei contenuti di progetto", detail: "Trasferimento di pagine, variabili, segnalazioni, archivi e script, in modo efficiente con strumenti collaudati." },
      { title: "Adattamento e ottimizzazione", detail: "Rilavorazione manuale, ottimizzazione dell'interfaccia utente e implementazione delle nuove funzioni Unified." },
      { title: "Test e messa in servizio", detail: "Verifica funzionale sugli Unified Panels, validazione nel processo in corso e accompagnamento fino al collaudo finale." },
      { title: "Supporto e formazione", detail: "Inserimento del vostro team e supporto affidabile oltre la messa in servizio." },
    ],
    scopeEyebrow: "Portata",
    scopeTitle: "Cosa viene trasferito nella modernizzazione",
    scopeLead: "I vostri contenuti di progetto esistenti non vanno persi: vengono trasferiti, adattati e ottimizzati per WinCC Unified.",
    scope: [
      { title: "Pagine e gestione pagine", detail: "Pagine, modelli, pop-up e slide-in, inclusa struttura e navigazione." },
      { title: "Oggetti di pagina", detail: "Oggetti base (campo di testo, rettangolo), elementi (pulsante, campo I/O) e controlli come la segnalazione." },
      { title: "Animazioni e dinamica", detail: "Animazioni e dinamizzazioni sugli oggetti supportati." },
      { title: "Script e funzioni di sistema", detail: "Funzioni di sistema e script selezionati vengono trasferiti e adattati." },
      { title: "Variabili HMI", detail: "Trasferimento delle variabili HMI e collegamento al controllore." },
      { title: "Segnalazioni e allarmi", detail: "Segnalazioni HMI incluse classi e testi." },
      { title: "Archivi e trend", detail: "Archivi e variabili di archivio per dati storici e trend." },
      { title: "Liste testi e grafiche", detail: "Liste di testi e grafiche multilingue." },
      { title: "Faceplate", detail: "Faceplate riutilizzabili e la loro implementazione." },
    ],
    scopeNote: "La portata esatta e gli elementi migrabili li verifico individualmente per il vostro progetto nel check di modernizzazione.",
    toolsEyebrow: "Strumenti e metodi",
    toolsTitle: "Strumenti collaudati, usati con cura",
    toolsP1: (
      <>
        Per una migrazione efficiente utilizzo gli strumenti ufficiali Siemens,
        tra cui l'add-in per TIA Portal <strong>Data2Unified</strong>, il WinCC
        Unified Modernization Checker e lo Smart Advisor. Accelerano il
        trasferimento; la qualità tecnica nasce dall'adattamento e
        dall'ottimizzazione manuali.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified e TIA Portal sono marchi di Siemens AG. Lienhard Automation è un fornitore di servizi indipendente, non un rivenditore Siemens.",
    securityText:
      "Proteggere impianti, sistemi e reti dalle minacce informatiche richiede un concetto di sicurezza IT olistico e moderno. Tengo conto di questi requisiti in ogni modernizzazione.",
    securityLink: "Scopri di più sulla nostra area cybersecurity",
    relatedTitles: [
      "Data2Unified – add-in per TIA Portal (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Passaggio dai Comfort Panel agli Unified Comfort Panel",
    ],
    ctaTitle: "Pronti a rendere la vostra visualizzazione a prova di futuro?",
    ctaLead:
      "Guardiamo insieme il vostro progetto WinCC esistente. Stimo impegno e rischi in modo onesto e vi accompagno dall'analisi alla messa in servizio, inclusi supporto e formazione.",
  },
  pt: {
    metaTitle: "Modernização de WinCC",
    metaDesc:
      "Especialista na modernização de visualizações WinCC: de WinCC flexible e WinCC Classic para SIMATIC WinCC Unified. Análise, migração, adaptação, colocação em serviço, suporte e formação, tudo de uma única fonte.",
    eyebrow: "Modernização de WinCC · O seu especialista",
    h1a: "O seu especialista na modernização da sua ",
    h1accent: "visualização WinCC",
    subtitle: (
      <>
        De {w("WinCC flexible")} e {w("WinCC Classic")} a {w("WinCC Unified")}:
        modernizo projetos existentes de forma segura e sem começar do zero, e
        conheço cada passo da prática. Acompanho-o, dou-lhe suporte e formo-o ao
        longo de toda a migração.
      </>
    ),
    ctaHero: "Solicitar modernização",
    ctaRefs: "Ver referências",
    heroPoints: ["WinCC flexible · Classic · Unified", "Cada passo de uma única fonte", "Acompanhamento, suporte e formação"],
    whyEyebrow: "Porquê comigo",
    whyTitle: "Modernização nas melhores mãos",
    whyLead:
      "Modernizar uma visualização significa preservar o conhecimento acumulado ao longo de anos e, ao mesmo tempo, torná-lo à prova de futuro. É exatamente aqui que sou o parceiro certo.",
    why: [
      { title: "De WinCC flexible a Unified", detail: "Modernizo ao longo de todas as gerações: WinCC flexible, WinCC Classic (V7) e WinCC Comfort/Advanced até SIMATIC WinCC Unified." },
      { title: "Cada passo sob controlo", detail: "Análise, conceito, migração, adaptação, teste e colocação em serviço: conheço todo o percurso de anos de prática de projetos, não da teoria." },
      { title: "Onde as ferramentas padrão param", detail: "Os conversores automáticos só o levam parte do caminho. As adaptações manuais decisivas, antes e depois, são precisamente o meu ponto forte." },
      { title: "Acompanhamento, suporte e formação", detail: "Apoio-o desde a primeira consulta, passando pela implementação, até ao suporte contínuo, e formo a sua equipa no novo ambiente." },
    ],
    pathEyebrow: "O percurso",
    pathTitle: "Do projeto antigo à visualização Unified",
    pathLead: "Manter o comprovado, substituir o obsoleto: planeável e sem risco para a sua operação em curso.",
    flow: [
      { step: "01", title: "WinCC flexible / WinCC Classic", detail: "A sua visualização existente, desenvolvida ao longo dos anos: a base valiosa." },
      { step: "02", title: "Modernização", detail: "Análise, migração e adaptação direcionada, passo a passo, sem perder o seu know-how de processo." },
      { step: "03", title: "WinCC Unified", detail: "Visualização à prova de futuro em SIMATIC HMI Unified Panels e Unified PC." },
    ],
    stepsEyebrow: "O meu acompanhamento",
    stepsTitle: "Como o acompanho, passo a passo",
    stepsLead: "Da primeira análise à formação da sua equipa: um processo claro no qual nunca está sozinho.",
    steps: [
      { title: "Análise e check de modernização", detail: "Levantamento do seu projeto e uma estimativa realista de âmbito, esforço e riscos." },
      { title: "Conceito e planeamento", detail: "Estratégia de migração, cronograma e requisitos claros de operação e design para a nova interface WinCC Unified." },
      { title: "Migração dos conteúdos do projeto", detail: "Transferência de imagens, variáveis, mensagens, arquivos e scripts, de forma eficiente com ferramentas comprovadas." },
      { title: "Adaptação e otimização", detail: "Retoque manual, otimização da interface de utilizador e implementação de novas funções Unified." },
      { title: "Teste e colocação em serviço", detail: "Teste funcional nos Unified Panels, validação no processo em curso e acompanhamento até à receção final." },
      { title: "Suporte e formação", detail: "Integração da sua equipa e suporte fiável para além da colocação em serviço." },
    ],
    scopeEyebrow: "Âmbito",
    scopeTitle: "O que é transferido na modernização",
    scopeLead: "Os seus conteúdos de projeto existentes não se perdem: são transferidos, adaptados e otimizados para WinCC Unified.",
    scope: [
      { title: "Imagens e gestão de imagens", detail: "Imagens, modelos, pop-ups e slide-ins, incluindo estrutura e navegação." },
      { title: "Objetos de imagem", detail: "Objetos básicos (campo de texto, retângulo), elementos (botão, campo E/S) e controlos como a vista de mensagens." },
      { title: "Animações e dinâmica", detail: "Animações e dinamizações nos objetos suportados." },
      { title: "Scripts e funções de sistema", detail: "Funções de sistema e scripts selecionados são transferidos e adaptados." },
      { title: "Variáveis HMI", detail: "Transferência das variáveis HMI e ligação ao controlador." },
      { title: "Mensagens e alarmes", detail: "Mensagens HMI incluindo classes e textos." },
      { title: "Arquivos e tendências", detail: "Arquivos e variáveis de arquivo para dados históricos e tendências." },
      { title: "Listas de textos e gráficos", detail: "Listas de textos e gráficos multilingues." },
      { title: "Faceplates", detail: "Faceplates reutilizáveis e a sua implementação." },
    ],
    scopeNote: "O âmbito exato e os elementos migráveis verifico individualmente para o seu projeto no check de modernização.",
    toolsEyebrow: "Ferramentas e métodos",
    toolsTitle: "Ferramentas comprovadas, bem aplicadas",
    toolsP1: (
      <>
        Para uma migração eficiente utilizo as ferramentas oficiais da Siemens,
        incluindo o add-in para TIA Portal <strong>Data2Unified</strong>, o WinCC
        Unified Modernization Checker e o Smart Advisor. Aceleram a transferência;
        a qualidade técnica resulta da adaptação e otimização manuais.
      </>
    ),
    attribution:
      "SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified e TIA Portal são marcas da Siemens AG. A Lienhard Automation é um prestador de serviços independente, não um revendedor da Siemens.",
    securityText:
      "Proteger instalações, sistemas e redes contra ciberameaças exige um conceito de segurança informática holístico e moderno. Tenho em conta estes requisitos em cada modernização.",
    securityLink: "Saiba mais sobre a nossa área de cibersegurança",
    relatedTitles: [
      "Data2Unified – add-in para TIA Portal (Siemens)",
      "WinCC Unified Modernization Checker",
      "WinCC Unified Smart Advisor",
      "Mudança de Comfort Panels para Unified Comfort Panels",
    ],
    ctaTitle: "Pronto para tornar a sua visualização à prova de futuro?",
    ctaLead:
      "Vamos analisar o seu projeto WinCC existente. Estimo o esforço e os riscos de forma honesta e acompanho-o da análise à colocação em serviço, incluindo suporte e formação.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: "/unified-modernisierung" },
  };
}

const whyIcons = [
  <Layers key="0" className="h-5 w-5" />,
  <Workflow key="1" className="h-5 w-5" />,
  <Wrench key="2" className="h-5 w-5" />,
  <GraduationCap key="3" className="h-5 w-5" />,
];
const serviceIcons = [
  <Search key="0" className="h-5 w-5" />,
  <Cpu key="1" className="h-5 w-5" />,
  <RefreshCw key="2" className="h-5 w-5" />,
  <Wrench key="3" className="h-5 w-5" />,
  <Check key="4" className="h-5 w-5" />,
  <GraduationCap key="5" className="h-5 w-5" />,
];

export default function UnifiedModernisierungPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {t.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              {t.h1a}
              <span className="text-accent-400">{t.h1accent}</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              {t.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                {t.ctaHero}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/referenzen" variant="outline-light" size="lg">
                {t.ctaRefs}
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

      {/* 2 — Why me */}
      <Section tone="light">
        <SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle} lead={t.whyLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.map((point, i) => (
            <Reveal key={point.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {whyIcons[i]}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Modernization path */}
      <Section tone="dark">
        <SectionHeading eyebrow={t.pathEyebrow} title={t.pathTitle} lead={t.pathLead} onDark />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
          {t.flow.map((node, i) => (
            <Fragment key={node.step}>
              <div className="rounded-xl2 border border-navy-700 bg-navy-800/60 p-6">
                <span className="text-sm font-bold text-accent-400">{node.step}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{node.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">{node.detail}</p>
              </div>
              {i < t.flow.length - 1 ? (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-6 w-6 text-accent-500" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Section>

      {/* 4 — Step-by-step service */}
      <Section tone="light">
        <SectionHeading eyebrow={t.stepsEyebrow} title={t.stepsTitle} lead={t.stepsLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    {serviceIcons[i]}
                  </div>
                  <span className="text-2xl font-bold text-steel-200">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — What gets carried over */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.scopeEyebrow} title={t.scopeTitle} lead={t.scopeLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.scope.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-steel-500">{t.scopeNote}</p>
      </Section>

      {/* 6 — Tools & methods */}
      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">{t.toolsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{t.toolsTitle}</h2>
            <p className="mt-4 leading-relaxed text-steel-600">{t.toolsP1}</p>
            <p className="mt-4 text-xs leading-relaxed text-steel-500">{t.attribution}</p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((link, i) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full items-start justify-between gap-3 rounded-lg border border-steel-200 px-4 py-3 text-sm transition-colors hover:border-accent-300 hover:bg-steel-50"
                >
                  <span className="text-steel-700">
                    {t.relatedTitles[i] ?? link.title}
                    {link.entryId ? <span className="ml-1 text-xs text-steel-400">({link.entryId})</span> : null}
                  </span>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-xl2 border border-steel-200 bg-steel-50 p-7 sm:flex-row sm:items-start">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900">Security</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">
              {t.securityText}{" "}
              <Link href="/cybersecurity" className="underline hover:text-accent-600">
                {t.securityLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <ContactCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
