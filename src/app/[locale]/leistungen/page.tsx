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
  ShieldCheck,
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
  <ShieldCheck key="5" className="h-6 w-6" />,
];
const bereichHrefs = [undefined, undefined, undefined, undefined, "/unified-modernisierung", "/cybersecurity"];
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
    metaDesc: "SPS-Engineering, Projektierung und Projektsteuerung, Inbetriebnahme und Retrofit, WinCC-Modernisierung (WinCC Unified) und Cybersecurity – produktneutrale Automatisierungslösungen für den industriellen Maschinen- und Anlagenbau.",
    heroEyebrow: "Leistungen",
    heroH1a: "Alles für Ihre Automatisierung – ",
    heroH1accent: "aus einer Hand",
    heroSubtitle: "Von der Beratung über SPS-Engineering und Projektierung bis zur Inbetriebnahme, Modernisierung und Cybersecurity: Lienhard Automation begleitet Ihre Projekte im industriellen Maschinen- und Anlagenbau – produktneutral, präzise und weltweit.",
    ctaPrimary: "Projekt anfragen",
    ctaSecondary: "Leistungen entdecken",
    heroPoints: ["Über 25 Jahre Erfahrung", "Siemens-Spezialist", "Schweiz & weltweit"],
    overviewEyebrow: "Überblick",
    overviewTitle: "Unsere Leistungsbereiche",
    overviewLead: "Sechs Bereiche, die ineinandergreifen – inklusive zweier Spezialthemen mit eigenem Schwerpunkt.",
    bereiche: [
      { title: "SPS-Engineering", text: "Produktneutrale Steuerungstechnik mit klarer, durchgängiger Programmarchitektur." },
      { title: "Projektierung & Projektsteuerung", text: "Beratung, Planung und Umsetzung über alle Projektphasen – bis zur Endabnahme." },
      { title: "Inbetriebnahme", text: "Virtuelle Inbetriebsetzung im laufenden Prozess bis zur Endabnahme – im In- und Ausland." },
      { title: "Retrofit & Wartung", text: "Modernisierung bestehender Anlagen, Migration von Altsteuerungen (S5 → S7 → TIA) und Service." },
      { title: "Unified Modernisierung", text: "WinCC-Visualisierungen von WinCC flexible/Classic zu WinCC Unified modernisieren." },
      { title: "Cybersecurity", text: "Industrielle Cybersecurity gemeinsam mit ausgewiesenen Security-Partnern." },
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
    metaDesc: "PLC engineering, project planning and management, commissioning and retrofit, WinCC modernization (WinCC Unified) and cybersecurity – vendor-independent automation solutions for industrial machine and plant engineering.",
    heroEyebrow: "Services",
    heroH1a: "Everything for your automation – ",
    heroH1accent: "from a single source",
    heroSubtitle: "From consulting through PLC engineering and project planning to commissioning, modernization and cybersecurity: Lienhard Automation supports your projects in industrial machine and plant engineering – vendor-independent, precise and worldwide.",
    ctaPrimary: "Request a project",
    ctaSecondary: "Discover services",
    heroPoints: ["Over 25 years of experience", "Siemens specialist", "Switzerland & worldwide"],
    overviewEyebrow: "Overview",
    overviewTitle: "Our service areas",
    overviewLead: "Six areas that interlock – including two specialist topics with their own focus.",
    bereiche: [
      { title: "PLC engineering", text: "Vendor-independent control technology with a clear, consistent program architecture." },
      { title: "Project planning & management", text: "Consulting, planning and implementation across all project phases – up to final acceptance." },
      { title: "Commissioning", text: "Virtual commissioning in the running process up to final acceptance – at home and abroad." },
      { title: "Retrofit & maintenance", text: "Modernization of existing plants, migration of legacy controllers (S5 → S7 → TIA) and service." },
      { title: "Unified modernization", text: "Modernize WinCC visualizations from WinCC flexible/Classic to WinCC Unified." },
      { title: "Cybersecurity", text: "Industrial cybersecurity together with proven security partners." },
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
    metaDesc: "Ingeniería de PLC, planificación y dirección de proyectos, puesta en marcha y retrofit, modernización de WinCC (WinCC Unified) y ciberseguridad: soluciones de automatización independientes del fabricante para la construcción industrial de máquinas e instalaciones.",
    heroEyebrow: "Servicios",
    heroH1a: "Todo para su automatización, ",
    heroH1accent: "de un solo proveedor",
    heroSubtitle: "Desde el asesoramiento, pasando por la ingeniería de PLC y la planificación de proyectos, hasta la puesta en marcha, la modernización y la ciberseguridad: Lienhard Automation acompaña sus proyectos en la construcción industrial de máquinas e instalaciones, de forma independiente del fabricante, precisa y en todo el mundo.",
    ctaPrimary: "Solicitar un proyecto",
    ctaSecondary: "Descubrir servicios",
    heroPoints: ["Más de 25 años de experiencia", "Especialista en Siemens", "Suiza y todo el mundo"],
    overviewEyebrow: "Visión general",
    overviewTitle: "Nuestras áreas de servicio",
    overviewLead: "Seis áreas que se complementan, incluidos dos temas especializados con foco propio.",
    bereiche: [
      { title: "Ingeniería de PLC", text: "Tecnología de control independiente del fabricante con una arquitectura de programa clara y coherente." },
      { title: "Planificación y dirección de proyectos", text: "Asesoramiento, planificación e implementación a lo largo de todas las fases del proyecto, hasta la recepción final." },
      { title: "Puesta en marcha", text: "Puesta en marcha virtual en el proceso en curso hasta la recepción final, en el país y en el extranjero." },
      { title: "Retrofit y mantenimiento", text: "Modernización de instalaciones existentes, migración de controladores antiguos (S5 → S7 → TIA) y servicio." },
      { title: "Modernización Unified", text: "Modernizar visualizaciones WinCC de WinCC flexible/Classic a WinCC Unified." },
      { title: "Ciberseguridad", text: "Ciberseguridad industrial junto a socios de seguridad acreditados." },
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
