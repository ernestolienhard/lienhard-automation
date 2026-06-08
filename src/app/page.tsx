import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ContactCta } from "@/components/sections/ContactCta";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { services, advantages } from "@/content/services";
import { technologies } from "@/content/technologies";
import { projects } from "@/content/references";
import { clients } from "@/content/partners";
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

export default function HomePage() {
  const previewProjects = projects
    .filter((p) => p.year !== "International")
    .slice(0, 3);

  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* Client trust strip */}
      <div className="border-y border-steel-200 bg-steel-50">
        <Container className="py-7">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-steel-500">
            Vertrauen von Industrie- und Pharmaunternehmen
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((c) => (
              <li
                key={c}
                className="text-lg font-semibold text-steel-400"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* 3 — Services overview */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Leistungen"
          title="Automatisierung aus einer Hand"
          lead="Beratung, Planung, Projektierung und Umsetzung steuerungstechnischer Prozesse im industriellen Maschinen- und Anlagenbau."
        />
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
            Alle Leistungen ansehen <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      {/* 4 — Why choose Lienhard Automation */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Ihre Vorteile"
          title="Warum Lienhard Automation"
          lead="Verlässlich, präzise und unabhängig – über die Inbetriebnahme hinaus."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {advantageIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{adv.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                    {adv.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — Technology expertise */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Technologie-Kompetenz"
          title="Steuerungs- & Antriebssysteme"
          lead="Herstellerübergreifende Erfahrung mit den führenden Plattformen der Automatisierungstechnik."
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

      {/* 6 — References preview */}
      <Section tone="light">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Referenzen"
            title="Ausgewählte Projekte"
            lead="Über 13 Jahre Projekterfahrung im internationalen Umfeld."
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

      {/* 7 — About preview */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Unternehmen</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Erfahrung, die Anlagen zuverlässig zum Laufen bringt
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel-600">
              Geführt von {siteConfig.contact.person}, Techniker HF Automation,
              mit über 13 Jahren Erfahrung in Montage und Automation. Wir
              realisieren Projekte in der Schweiz und weltweit – mit einem
              starken Partnernetzwerk in Europa und Amerika.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-3xl font-bold text-accent-600">13+</dt>
                <dd className="mt-1 text-sm text-steel-600">Jahre Erfahrung</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-accent-600">5</dt>
                <dd className="mt-1 text-sm text-steel-600">
                  Partnerunternehmen
                </dd>
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

          {/* Visual placeholder — replace with a real photo when available */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl2 border border-steel-200 bg-navy-900">
              <div
                aria-hidden
                className="h-full w-full bg-grid-navy [background-size:28px_28px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-steel-300">
                  {/* ASSET PLACEHOLDER */}
                  Bildplatzhalter · Team / Anlage
                </p>
                <p className="max-w-[14rem] text-xs text-steel-500">
                  Hier wird ein vom Kunden bereitgestelltes Foto eingesetzt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick contact facts */}
      <Section tone="light" className="!py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: <Building className="h-5 w-5" />,
              label: "Standort",
              value: `${siteConfig.contact.city}, ${siteConfig.contact.country}`,
            },
            {
              icon: <Globe className="h-5 w-5" />,
              label: "Einsatzgebiet",
              value: "Schweiz & weltweit",
            },
            {
              icon: <Workflow className="h-5 w-5" />,
              label: "Schwerpunkt",
              value: "SPS-Engineering & Projektierung",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-steel-500">
                  {item.label}
                </p>
                <p className="font-semibold text-navy-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 — Contact CTA */}
      <ContactCta />
    </>
  );
}
