import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ContactCta } from "@/components/sections/ContactCta";
import { ReferencesCarousel } from "@/components/sections/ReferencesCarousel";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { getServices, getAdvantages } from "@/content/services";
import { getTechnologies } from "@/content/technologies";
import { getProjects } from "@/content/references";
import { pageLocale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";
import {
  ArrowRight,
  Cpu,
  Workflow,
  ShieldCheck,
  Clock,
  Wrench,
  GraduationCap,
  Globe,
  Building,
} from "@/components/ui/icons";

const serviceIcons: Record<string, React.ReactNode> = {
  "sps-engineering": <Cpu className="h-6 w-6" />,
  projektierung: <Workflow className="h-6 w-6" />,
};

const advantageIcons = [
  <ShieldCheck key="0" className="h-5 w-5" />,
  <Clock key="1" className="h-5 w-5" />,
  <Cpu key="2" className="h-5 w-5" />,
  <GraduationCap key="3" className="h-5 w-5" />,
  <Wrench key="4" className="h-5 w-5" />,
  <Workflow key="5" className="h-5 w-5" />,
];

const T = {
  de: {
    servicesEyebrow: "Leistungen",
    servicesTitle: "Automatisierung aus einer Hand",
    servicesLead: "Beratung, Planung, Projektierung und Umsetzung steuerungstechnischer Prozesse im industriellen Maschinen- und Anlagenbau.",
    allServices: "Alle Leistungen ansehen",
    advEyebrow: "Ihre Vorteile",
    advTitle: "Warum Lienhard Automation",
    advLead: "Verlässlich, präzise und unabhängig – über die Inbetriebnahme hinaus.",
    techEyebrow: "Technologie-Kompetenz",
    techTitle: "Steuerungs-, Leit- & Kommunikationstechnik",
    techLead: "Tiefe Siemens-Expertise: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie durchgängige Kommunikation über OPC UA, Modbus, PROFINET und PROFIBUS.",
    refEyebrow: "Referenzen",
    refTitle: "Ausgewählte Projekte",
    refLead: "Über 25 Jahre Projekterfahrung im internationalen Umfeld.",
    allRefs: "Alle Referenzen",
    aboutEyebrow: "Über mich",
    aboutTitle: "Erfahrung, die Anlagen zuverlässig zum Laufen bringt",
    aboutText: `Ich bin ${siteConfig.contact.person}, Techniker HF Automation, mit über 25 Jahren Erfahrung in Montage und Automation – davon über 10 Jahre mehrheitlich im Ausland, auf fünf Kontinenten. Projekte realisiere ich in der Schweiz und weltweit – mit einem starken Partnernetzwerk in Europa und Amerika.`,
    statYears: "Jahre Erfahrung",
    statPartners: "Partnerunternehmen",
    statContinents: "Kontinente",
    aboutCta: "Über mich",
    imgPlaceholder: "Bildplatzhalter · Team / Anlage",
    imgNote: "Hier wird ein vom Kunden bereitgestelltes Foto eingesetzt.",
    factLocation: "Standort",
    factArea: "Einsatzgebiet",
    factAreaValue: "Schweiz & weltweit",
    factFocus: "Schwerpunkt",
    factFocusValue: "SPS-Engineering & Projektierung",
    locationValue: `${siteConfig.contact.city}, ${siteConfig.contact.country}`,
  },
  en: {
    servicesEyebrow: "Services",
    servicesTitle: "Automation from a single source",
    servicesLead: "Consulting, planning, project engineering and implementation of control processes in industrial machine and plant engineering.",
    allServices: "View all services",
    advEyebrow: "Your benefits",
    advTitle: "Why Lienhard Automation",
    advLead: "Reliable, precise and independent – beyond commissioning.",
    techEyebrow: "Technology expertise",
    techTitle: "Control, supervisory & communication technology",
    techLead: "Deep Siemens expertise: SIMATIC STEP 7 Classic, TIA Portal and PCS 7, visualization with WinCC Unified and WinCC OA, and seamless communication via OPC UA, Modbus, PROFINET and PROFIBUS.",
    refEyebrow: "References",
    refTitle: "Selected projects",
    refLead: "Over 25 years of project experience in an international environment.",
    allRefs: "All references",
    aboutEyebrow: "About me",
    aboutTitle: "Experience that gets plants running reliably",
    aboutText: `I am ${siteConfig.contact.person}, Technician HF Automation, with over 25 years of experience in installation and automation – more than 10 of them mostly abroad, on five continents. I realize projects in Switzerland and worldwide – with a strong partner network in Europe and the Americas.`,
    statYears: "Years of experience",
    statPartners: "Partner companies",
    statContinents: "Continents",
    aboutCta: "About me",
    imgPlaceholder: "Image placeholder · team / plant",
    imgNote: "A photo provided by the client will be placed here.",
    factLocation: "Location",
    factArea: "Area of operation",
    factAreaValue: "Switzerland & worldwide",
    factFocus: "Focus",
    factFocusValue: "PLC engineering & project planning",
    locationValue: "Zurich, Switzerland",
  },
  es: {
    servicesEyebrow: "Servicios",
    servicesTitle: "Automatización de un solo proveedor",
    servicesLead: "Asesoramiento, planificación, ingeniería e implementación de procesos de control en la construcción industrial de máquinas e instalaciones.",
    allServices: "Ver todos los servicios",
    advEyebrow: "Sus ventajas",
    advTitle: "Por qué Lienhard Automation",
    advLead: "Fiable, preciso e independiente, más allá de la puesta en marcha.",
    techEyebrow: "Competencia tecnológica",
    techTitle: "Tecnología de control, supervisión y comunicación",
    techLead: "Profunda experiencia Siemens: SIMATIC STEP 7 Classic, TIA Portal y PCS 7, visualización con WinCC Unified y WinCC OA, y comunicación integral mediante OPC UA, Modbus, PROFINET y PROFIBUS.",
    refEyebrow: "Referencias",
    refTitle: "Proyectos seleccionados",
    refLead: "Más de 25 años de experiencia en proyectos en un entorno internacional.",
    allRefs: "Todas las referencias",
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Experiencia que hace funcionar las instalaciones de forma fiable",
    aboutText: `Soy ${siteConfig.contact.person}, Técnico HF en automatización, con más de 25 años de experiencia en montaje y automatización, de los cuales más de 10 años mayoritariamente en el extranjero, en cinco continentes. Realizo proyectos en Suiza y en todo el mundo, con una sólida red de socios en Europa y América.`,
    statYears: "Años de experiencia",
    statPartners: "Empresas asociadas",
    statContinents: "Continentes",
    aboutCta: "Sobre mí",
    imgPlaceholder: "Marcador de imagen · equipo / instalación",
    imgNote: "Aquí se colocará una foto proporcionada por el cliente.",
    factLocation: "Ubicación",
    factArea: "Ámbito de actuación",
    factAreaValue: "Suiza y todo el mundo",
    factFocus: "Especialidad",
    factFocusValue: "Ingeniería de PLC y planificación de proyectos",
    locationValue: "Zúrich, Suiza",
  },
  fr: {
    servicesEyebrow: "Services",
    servicesTitle: "L'automatisation d'une seule main",
    servicesLead: "Conseil, planification, ingénierie et réalisation de processus de commande dans la construction industrielle de machines et d'installations.",
    allServices: "Voir tous les services",
    advEyebrow: "Vos avantages",
    advTitle: "Pourquoi Lienhard Automation",
    advLead: "Fiable, précis et indépendant, au-delà de la mise en service.",
    techEyebrow: "Compétence technologique",
    techTitle: "Commande, conduite et communication",
    techLead: "Une profonde expertise Siemens : SIMATIC STEP 7 Classic, TIA Portal et PCS 7, visualisation avec WinCC Unified et WinCC OA, et communication intégrale via OPC UA, Modbus, PROFINET et PROFIBUS.",
    refEyebrow: "Références",
    refTitle: "Projets sélectionnés",
    refLead: "Plus de 25 ans d'expérience de projets dans un environnement international.",
    allRefs: "Toutes les références",
    aboutEyebrow: "À propos",
    aboutTitle: "L'expérience qui fait tourner les installations de manière fiable",
    aboutText: `Je suis ${siteConfig.contact.person}, technicien HF en automatisation, avec plus de 25 ans d'expérience en montage et en automatisation, dont plus de 10 ans majoritairement à l'étranger, sur cinq continents. Je réalise des projets en Suisse et dans le monde entier, avec un solide réseau de partenaires en Europe et en Amérique.`,
    statYears: "Ans d'expérience",
    statPartners: "Entreprises partenaires",
    statContinents: "Continents",
    aboutCta: "À propos",
    imgPlaceholder: "Image réservée · équipe / installation",
    imgNote: "Une photo fournie par le client sera placée ici.",
    factLocation: "Site",
    factArea: "Zone d'intervention",
    factAreaValue: "Suisse et monde entier",
    factFocus: "Spécialité",
    factFocusValue: "Ingénierie API et planification de projet",
    locationValue: "Zurich, Suisse",
  },
  it: {
    servicesEyebrow: "Servizi",
    servicesTitle: "L'automazione da un unico fornitore",
    servicesLead: "Consulenza, pianificazione, progettazione e realizzazione di processi di controllo nella costruzione industriale di macchine e impianti.",
    allServices: "Vedi tutti i servizi",
    advEyebrow: "I vostri vantaggi",
    advTitle: "Perché Lienhard Automation",
    advLead: "Affidabile, preciso e indipendente, oltre la messa in servizio.",
    techEyebrow: "Competenza tecnologica",
    techTitle: "Controllo, conduzione e comunicazione",
    techLead: "Profonda esperienza Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualizzazione con WinCC Unified e WinCC OA, e comunicazione integrale tramite OPC UA, Modbus, PROFINET e PROFIBUS.",
    refEyebrow: "Referenze",
    refTitle: "Progetti selezionati",
    refLead: "Oltre 25 anni di esperienza progettuale in ambito internazionale.",
    allRefs: "Tutte le referenze",
    aboutEyebrow: "Chi sono",
    aboutTitle: "L'esperienza che fa funzionare gli impianti in modo affidabile",
    aboutText: `Sono ${siteConfig.contact.person}, tecnico HF in automazione, con oltre 25 anni di esperienza nel montaggio e nell'automazione, di cui oltre 10 anni prevalentemente all'estero, in cinque continenti. Realizzo progetti in Svizzera e in tutto il mondo, con una solida rete di partner in Europa e in America.`,
    statYears: "Anni di esperienza",
    statPartners: "Aziende partner",
    statContinents: "Continenti",
    aboutCta: "Chi sono",
    imgPlaceholder: "Segnaposto immagine · team / impianto",
    imgNote: "Qui verrà inserita una foto fornita dal cliente.",
    factLocation: "Sede",
    factArea: "Area di intervento",
    factAreaValue: "Svizzera e tutto il mondo",
    factFocus: "Focus",
    factFocusValue: "Ingegneria PLC e pianificazione di progetto",
    locationValue: "Zurigo, Svizzera",
  },
  pt: {
    servicesEyebrow: "Serviços",
    servicesTitle: "Automação de uma única fonte",
    servicesLead: "Consultoria, planeamento, engenharia e implementação de processos de controlo na construção industrial de máquinas e instalações.",
    allServices: "Ver todos os serviços",
    advEyebrow: "As suas vantagens",
    advTitle: "Porquê a Lienhard Automation",
    advLead: "Fiável, preciso e independente, para além da colocação em serviço.",
    techEyebrow: "Competência tecnológica",
    techTitle: "Controlo, condução e comunicação",
    techLead: "Profunda experiência Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualização com WinCC Unified e WinCC OA, e comunicação integral através de OPC UA, Modbus, PROFINET e PROFIBUS.",
    refEyebrow: "Referências",
    refTitle: "Projetos selecionados",
    refLead: "Mais de 25 anos de experiência em projetos num ambiente internacional.",
    allRefs: "Todas as referências",
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Experiência que faz as instalações funcionarem de forma fiável",
    aboutText: `Sou ${siteConfig.contact.person}, técnico HF em automação, com mais de 25 anos de experiência em montagem e automação, dos quais mais de 10 anos maioritariamente no estrangeiro, em cinco continentes. Realizo projetos na Suíça e em todo o mundo, com uma sólida rede de parceiros na Europa e na América.`,
    statYears: "Anos de experiência",
    statPartners: "Empresas parceiras",
    statContinents: "Continentes",
    aboutCta: "Sobre mim",
    imgPlaceholder: "Marcador de imagem · equipa / instalação",
    imgNote: "Aqui será colocada uma foto fornecida pelo cliente.",
    factLocation: "Localização",
    factArea: "Área de atuação",
    factAreaValue: "Suíça e todo o mundo",
    factFocus: "Especialidade",
    factFocusValue: "Engenharia de PLC e planeamento de projetos",
    locationValue: "Zurique, Suíça",
  },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = pageLocale(params.locale);
  const t = T[locale];
  const services = getServices(locale);
  const advantages = getAdvantages(locale);
  const technologies = getTechnologies(locale);
  const featuredProjects = getProjects(locale).slice(0, 6);

  return (
    <>
      <Hero locale={locale} />

      {/* Services overview */}
      <Section tone="light">
        <SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} lead={t.servicesLead} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <ServiceCard
                icon={serviceIcons[service.slug]}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                features={service.features.slice(0, 4)}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/leistungen" variant="ghost">
            {t.allServices} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      {/* Advantages */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.advEyebrow} title={t.advTitle} lead={t.advLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {advantageIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{adv.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{adv.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technology expertise */}
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

      {/* References preview */}
      <Section tone="light">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t.refEyebrow} title={t.refTitle} lead={t.refLead} />
          <ButtonLink href="/referenzen" variant="ghost" className="shrink-0">
            {t.allRefs} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-12">
          <ReferencesCarousel projects={featuredProjects} />
        </div>
      </Section>

      {/* About preview */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {t.aboutTitle}
            </h2>
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

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl2 border border-steel-200 bg-navy-900">
              <div aria-hidden className="h-full w-full bg-grid-navy [background-size:28px_28px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-steel-300">{t.imgPlaceholder}</p>
                <p className="max-w-[14rem] text-xs text-steel-500">{t.imgNote}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick contact facts */}
      <Section tone="light" className="!py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: <Building className="h-5 w-5" />, label: t.factLocation, value: t.locationValue },
            { icon: <Globe className="h-5 w-5" />, label: t.factArea, value: t.factAreaValue },
            { icon: <Workflow className="h-5 w-5" />, label: t.factFocus, value: t.factFocusValue },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-steel-500">{item.label}</p>
                <p className="font-semibold text-navy-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
