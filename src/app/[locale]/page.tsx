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
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "de";
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
