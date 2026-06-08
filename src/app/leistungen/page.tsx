import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/content/services";
import { technologies } from "@/content/technologies";
import { Check, Cpu, Workflow, Printer } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "SPS-Engineering, Projektierung und Projektsteuerung, Drucksysteme, Inbetriebnahme und Retrofit – produktneutrale Automatisierungslösungen für den industriellen Maschinen- und Anlagenbau.",
  alternates: { canonical: "/leistungen" },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "sps-engineering": <Cpu className="h-6 w-6" />,
  projektierung: <Workflow className="h-6 w-6" />,
  drucksysteme: <Printer className="h-6 w-6" />,
};

export default function LeistungenPage() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">Leistungen</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Unsere Leistungen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            Die Lienhard Automation Group bietet Beratung, Planung, Projektierung
            und Umsetzung von steuerungstechnischen Prozessen im industriellen
            Maschinen- und Anlagenbau. Unsere erfahrenen Techniker unterstützen
            Sie weltweit.
          </p>
        </Container>
      </section>

      {/* Service detail blocks */}
      <Section tone="light">
        <div className="grid gap-6 lg:grid-cols-3">
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

      {/* Commissioning + Retrofit highlight */}
      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy-900">
              Inbetriebnahme
            </h2>
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

      {/* Supported systems */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Unterstützte Systeme"
          title="Steuerungen & Technologien"
          lead="Herstellerübergreifende Erfahrung mit den führenden Plattformen der Automatisierungstechnik."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.vendor}
              className="h-full rounded-xl2 border border-steel-200 bg-steel-50 p-6"
            >
              <h3 className="font-bold text-navy-900">{tech.vendor}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-steel-200 bg-white px-2.5 py-1 text-xs font-medium text-steel-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta
        title="Bereit für Ihr nächstes Automatisierungsprojekt?"
        lead="Kontaktieren Sie uns für eine produktneutrale, unverbindliche Beratung."
      />
    </>
  );
}
