import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { services } from "@/content/services";
import { technologies } from "@/content/technologies";
import { projects } from "@/content/references";
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

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "SPS-Engineering, Projektierung und Projektsteuerung, Inbetriebnahme und Retrofit, WinCC-Modernisierung (WinCC Unified) und Cybersecurity – produktneutrale Automatisierungslösungen für den industriellen Maschinen- und Anlagenbau.",
  alternates: { canonical: "/leistungen" },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "sps-engineering": <Cpu className="h-6 w-6" />,
  projektierung: <Workflow className="h-6 w-6" />,
};

/** All service areas as an at-a-glance overview. The two specialized topics link out. */
const leistungsbereiche: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}[] = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "SPS-Engineering",
    text: "Produktneutrale Steuerungstechnik mit klarer, durchgängiger Programmarchitektur.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Projektierung & Projektsteuerung",
    text: "Beratung, Planung und Umsetzung über alle Projektphasen – bis zur Endabnahme.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Inbetriebnahme",
    text: "Virtuelle Inbetriebsetzung im laufenden Prozess bis zur Endabnahme – im In- und Ausland.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Retrofit & Wartung",
    text: "Modernisierung bestehender Anlagen, Migration von Altsteuerungen (S5 → S7) und Service.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Unified Modernisierung",
    text: "WinCC-Visualisierungen von WinCC flexible/Classic zu WinCC Unified modernisieren.",
    href: "/unified-modernisierung",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cybersecurity",
    text: "Industrielle Cybersecurity gemeinsam mit ausgewiesenen Security-Partnern.",
    href: "/cybersecurity",
  },
];

/** Project phases for the "how we work" section. */
const phases: { n: string; icon: React.ReactNode; title: string; text: string }[] =
  [
    {
      n: "01",
      icon: <Search className="h-5 w-5" />,
      title: "Beratung & Konzept",
      text: "Analyse Ihrer Anforderungen, produktneutrale Empfehlung und ein klares, umsetzbares Konzept.",
    },
    {
      n: "02",
      icon: <Workflow className="h-5 w-5" />,
      title: "Engineering & Projektierung",
      text: "SPS-Software mit durchgängiger Architektur, Visualisierung und sauberer Dokumentation.",
    },
    {
      n: "03",
      icon: <Check className="h-5 w-5" />,
      title: "Inbetriebnahme",
      text: "Virtuelle Inbetriebsetzung, Tests im laufenden Prozess und Begleitung bis zur Endabnahme – im In- und Ausland.",
    },
    {
      n: "04",
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Support & Schulung",
      text: "Einweisung Ihres Teams und verlässlicher Support über die Inbetriebnahme hinaus.",
    },
  ];

export default function LeistungenPage() {
  const previewProjects = projects
    .filter((p) => p.year !== "International")
    .slice(0, 3);

  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl"
        />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Leistungen
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              Alles für Ihre Automatisierung –{" "}
              <span className="text-accent-400">aus einer Hand</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              Von der Beratung über SPS-Engineering und Projektierung bis zur
              Inbetriebnahme, Modernisierung und Cybersecurity: Lienhard
              Automation begleitet Ihre Projekte im industriellen Maschinen- und
              Anlagenbau – produktneutral, präzise und weltweit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#bereiche" variant="outline-light" size="lg">
                Leistungen entdecken
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up">
              {[
                "Über 25 Jahre Erfahrung",
                "Siemens-Spezialist",
                "Schweiz & weltweit",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm font-medium text-steel-200"
                >
                  <Check className="h-4 w-4 text-accent-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 2 — Service areas overview */}
      <Section id="bereiche" tone="light">
        <SectionHeading
          eyebrow="Überblick"
          title="Unsere Leistungsbereiche"
          lead="Sechs Bereiche, die ineinandergreifen – inklusive zweier Spezialthemen mit eigenem Schwerpunkt."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leistungsbereiche.map((b, i) => {
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                  {b.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {b.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
                  {b.text}
                </p>
                {b.href ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                ) : null}
              </>
            );
            return (
              <Reveal key={b.title} delay={(i % 3) * 0.06}>
                {b.href ? (
                  <Link
                    href={b.href}
                    className="group flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="group flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 3 — Core services in detail */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Im Detail"
          title="Kern-Leistungen"
          lead="Unsere beiden Hauptleistungen – mit dem, was konkret dahintersteckt."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <ServiceCard
                icon={serviceIcons[service.slug]}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                features={service.features}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — Commissioning + Retrofit highlight */}
      <Section tone="light">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy-900">Inbetriebnahme</h2>
            <p className="mt-3 leading-relaxed text-steel-600">
              Wir begleiten Ihre Anlage von der virtuellen Inbetriebsetzung im
              laufenden Prozess bis zur erfolgreichen Endabnahme – im In- und
              Ausland.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Virtuelle Inbetriebsetzung im laufenden Prozess",
                "Reibungslose Abwicklung im laufenden Betrieb",
                "In- und Auslandinbetriebnahmen",
                "Begleitung bis zur Endabnahme",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-steel-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy-900">
              Retrofit & Wartung
            </h2>
            <p className="mt-3 leading-relaxed text-steel-600">
              Modernisierung bestehender Anlagen und Migration von Altsteuerungen
              – für mehr Verfügbarkeit, Sicherheit und Effizienz.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Migration von Altsteuerungen (z. B. S5 → S7)",
                "Software-Erweiterungen bestehender Anlagen",
                "Sicherheitssteuerungen (Safety)",
                "Service und Wartung",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-steel-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5 — Technology competence */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Technologie-Kompetenz"
          title="Steuerungs-, Leit- & Kommunikationstechnik"
          lead="Tiefe Siemens-Expertise: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie durchgängige Kommunikation über OPC UA, Modbus, PROFINET und PROFIBUS."
          onDark
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <Reveal key={tech.vendor} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-xl2 border border-navy-700 bg-navy-800/60 p-6">
                <h3 className="font-bold text-white">{tech.vendor}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-navy-600 bg-navy-900/60 px-2.5 py-1 text-xs font-medium text-steel-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6 — How we work (project phases) */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="So arbeiten wir"
          title="Ihr Projekt – Schritt für Schritt"
          lead="Ein klarer Ablauf von der ersten Beratung bis zum laufenden Support."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, i) => (
            <Reveal key={phase.n} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    {phase.icon}
                  </div>
                  <span className="text-2xl font-bold text-steel-200">
                    {phase.n}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{phase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                  {phase.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7 — About teaser */}
      <Section tone="light">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Über uns</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Erfahrung, die Anlagen zuverlässig zum Laufen bringt
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">
              Geführt von {siteConfig.contact.person}, Techniker HF Automation,
              mit über 25 Jahren Erfahrung in Montage, Automation und
              Inbetriebnahme. Als Siemens-Spezialist realisieren wir Projekte in
              der Schweiz und weltweit – mit einem starken Partnernetzwerk in
              Europa und Amerika.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-bold text-accent-600">25+</dt>
                <dd className="mt-1 text-sm text-steel-600">Jahre Erfahrung</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-accent-600">5</dt>
                <dd className="mt-1 text-sm text-steel-600">Partnerunternehmen</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-accent-600">3</dt>
                <dd className="mt-1 text-sm text-steel-600">Kontinente</dd>
              </div>
            </dl>
            <div className="mt-8">
              <ButtonLink href="/unternehmen" variant="secondary">
                Über uns <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-3">
            {[
              {
                icon: <Cpu className="h-5 w-5" />,
                text: "Steuerungs- und Prozesstechnik für anspruchsvolle Anlagen.",
              },
              {
                icon: <Workflow className="h-5 w-5" />,
                text: "Effektive, wartbare SPS-Software mit klarer Struktur.",
              },
              {
                icon: <Globe className="h-5 w-5" />,
                text: "Visualisierung und Leittechnik mit WinCC Unified und WinCC OA.",
              },
              {
                icon: <Building className="h-5 w-5" />,
                text: "Internationale Inbetriebnahmen in Europa, Nord- und Südamerika.",
              },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                  {item.icon}
                </div>
                <p className="text-sm leading-relaxed text-steel-700">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8 — References preview */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Referenzen"
            title="Ausgewählte Projekte"
            lead="Über 25 Jahre Projekterfahrung im internationalen Umfeld."
          />
          <ButtonLink href="/referenzen" variant="ghost" className="shrink-0">
            Alle Referenzen <ArrowRight className="h-4 w-4" />
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

      {/* 9 — Contact CTA */}
      <ContactCta
        title="Bereit für Ihr nächstes Automatisierungsprojekt?"
        lead="Kontaktieren Sie uns für eine produktneutrale, unverbindliche Beratung – von der Idee bis zur Inbetriebnahme."
      />
    </>
  );
}
