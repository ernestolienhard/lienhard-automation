import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { partners } from "@/content/partners";
import { career, achievements } from "@/content/profile";
import { siteConfig } from "@/lib/site";
import {
  Cpu,
  Workflow,
  ShieldCheck,
  Globe,
  GraduationCap,
  Users,
  MapPin,
  Check,
  Network,
  RefreshCw,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Über mich – Ernesto Lienhard, Techniker HF Automation. Mein Werdegang, meine Stärken in der Siemens-Welt (STEP 7, TIA Portal, PCS 7, WinCC) sowie ein internationales Partnernetzwerk.",
  alternates: { canonical: "/unternehmen" },
};

const focusAreas = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Steuerungstechnik",
    text: "Steuerungs- und Prozesstechnik für anspruchsvolle industrielle Anlagen.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "SPS-Softwareerstellung",
    text: "Effektive, wartbare SPS-Software mit klarer Struktur und durchgängiger Architektur.",
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: "Kommunikation & Schnittstellen",
    text: "Vernetzung über Modbus RTU/TCP und OPC UA – inklusive OPC UA GDS Push.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Visualisierung von Abläufen",
    text: "Prozessvisualisierung und Leittechnik – besonders stark mit WinCC Unified und WinCC OA.",
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: "Migration & Modernisierung",
    text: "Migration von Altsteuerungen (S5 → S7 → TIA Portal) sowie Modernisierung von WinCC flexible nach WinCC Unified.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "System-Engineering & Schulung",
    text: "System-Engineering sowie Schulung und Einweisung Ihrer Mitarbeitenden.",
  },
];

const values = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Produktneutralität",
    text: "Unabhängige Empfehlungen im Interesse Ihrer Anlage – nicht eines Herstellers.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Präzision",
    text: "Saubere Konzepte, durchgängige Programmarchitektur, nachvollziehbare Dokumentation.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Zuverlässigkeit",
    text: "Termintreue und Support über die Inbetriebnahme hinaus.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Internationale Erfahrung",
    text: "Projekte und Inbetriebnahmen in Europa, Nord- und Südamerika.",
  },
];

export default function UnternehmenPage() {
  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">Über mich</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Über mich
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            Ich bin Ihr Spezialist für Siemens-Automatisierung im industriellen
            Maschinen- und Anlagenbau: SIMATIC STEP 7 Classic, TIA Portal und
            PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie
            durchgängige Vernetzung über OPC UA, PROFINET und PROFIBUS – von der
            Beratung bis zur Inbetriebnahme.
          </p>
        </Container>
      </section>

      {/* Focus areas */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Arbeitsschwerpunkte"
          title="Wo meine Stärken liegen"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                    {area.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Management */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.3fr]">
          {/* Portrait placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl2 border border-steel-200 bg-navy-900">
              <div
                aria-hidden
                className="h-full w-full bg-grid-navy [background-size:28px_28px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white">
                  <Users className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-steel-300">
                  {/* ASSET PLACEHOLDER */}
                  Porträt · {siteConfig.contact.person}
                </p>
                <p className="max-w-[14rem] text-xs text-steel-500">
                  Bildplatzhalter – vom Kunden bereitzustellen.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Geschäftsführung</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {siteConfig.contact.person}
            </h2>
            <p className="mt-2 text-lg font-medium text-accent-600">
              Techniker HF Automation
            </p>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              Mit über 25 Jahren Erfahrung in Montage, Automation und
              Inbetriebnahme führe ich Lienhard Automation mit technischem
              Tiefgang und internationalem Blick. Meine Stärke liegt in der
              Siemens-Welt: SIMATIC STEP 7 Classic, TIA Portal und PCS 7,
              programmiert in FUP, KOP, AWL und SCL, inklusive
              Sicherheitssteuerungen (Safety).
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              Bei Visualisierung und Leittechnik bin ich besonders stark mit
              WinCC Unified und WinCC OA; die saubere Vernetzung von Anlagen
              realisiere ich über OPC UA, Modbus (RTU/TCP), PROFINET und
              PROFIBUS – von der ersten Beratung bis zur Inbetriebnahme vor Ort.
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              Über zehn Jahre habe ich mehrheitlich im Ausland gearbeitet – auf
              fünf Kontinenten, von Nord- und Südamerika über ganz Europa und
              Afrika bis nach Asien (u. a. Japan). Diese wertvollen Jahre haben
              mir technisch wie auch im Umgang mit den unterschiedlichsten
              Kulturen viel mitgegeben – ein echter Gewinn für jedes
              internationale Projekt.
            </p>
          </div>
        </div>
      </Section>

      {/* Werdegang (career timeline) */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Werdegang"
          title="Der berufliche Weg"
          lead="Vom Elektromonteur über die Luftfahrt bis zur industriellen Automation – über 25 Jahre technische Praxis als Basis für zuverlässige Lösungen."
        />
        <ol className="mt-12 max-w-3xl">
          {career.map((station, i) => (
            <Reveal key={station.title} delay={(i % 4) * 0.06}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {i < career.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-[11px] top-7 h-full w-px bg-steel-200"
                  />
                ) : null}
                <span
                  aria-hidden
                  className="relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white"
                >
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                </span>
                <div className="pt-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                    {station.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">
                    {station.title}
                  </h3>
                  {station.org ? (
                    <p className="text-sm font-medium text-steel-500">
                      {station.org}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {station.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Erfolge & Meilensteine */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Erfolge & Meilensteine"
          title="Was ich in über 25 Jahren erreicht habe"
          lead="Ein Auszug aus erfolgreich umgesetzten Projekten im In- und Ausland."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-xl2 border border-steel-200 bg-white p-5 shadow-card">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-steel-700">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Werte"
          title="Worauf Sie sich verlassen können"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="h-full rounded-xl2 border border-steel-200 bg-steel-50 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                {v.icon}
              </div>
              <h3 className="mt-4 font-bold text-navy-900">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partner network */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Partnernetzwerk"
          title="Gemeinsam stärker"
          lead="Mein eingespieltes Netzwerk von Partnerunternehmen in der Schweiz, Europa und den USA – für Projekte jeder Grösse."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-start gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">{partner.name}</h3>
                <p className="mt-1 text-sm text-steel-500">
                  {partner.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
