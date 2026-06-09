import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import {
  securityReasons,
  partnerTopics,
  SIEMENS_CYBER_URL,
} from "@/content/cybersecurity";
import {
  ArrowRight,
  Check,
  Globe,
  Clock,
  ShieldCheck,
  Search,
  Layers,
  Wrench,
  Users,
  ExternalLink,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Cybersecurity",
  description:
    "Industrielle Cybersecurity (OT-Security) ist ein hochspezialisiertes Fachgebiet. Lienhard Automation arbeitet dabei mit ausgewiesenen Security-Experten zusammen – Sie erhalten sichere Automatisierung und Spezialwissen aus einer Hand.",
  alternates: { canonical: "/cybersecurity" },
};

const reasonIcons = [
  <Globe key="0" className="h-5 w-5" />,
  <ShieldCheck key="1" className="h-5 w-5" />,
  <Clock key="2" className="h-5 w-5" />,
];

const topicIcons = [
  <Search key="0" className="h-5 w-5" />,
  <Layers key="1" className="h-5 w-5" />,
  <Wrench key="2" className="h-5 w-5" />,
  <ShieldCheck key="3" className="h-5 w-5" />,
];

export default function CybersecurityPage() {
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
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Cybersecurity · OT-Security
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              Sichere Automatisierung –{" "}
              <span className="text-accent-400">gemeinsam mit Experten</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              Industrielle Cybersecurity ist ein eigenes, hochspezialisiertes
              Fachgebiet. Bei diesen Themen arbeiten wir eng mit ausgewiesenen
              Security-Partnern zusammen – so erhalten Sie sichere, zuverlässige
              Automatisierung und das nötige Spezialwissen aus einer Hand.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                Thema besprechen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 — Why it matters */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Warum es zählt"
          title="OT-Security ist anders als IT-Security"
          lead="Industrielle Anlagen haben eigene Anforderungen – geprägt von maximaler Verfügbarkeit, langen Lebenszyklen und gewachsenen Umgebungen."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityReasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {reasonIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                    {reason.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Partnership (core message) */}
      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow-on-dark">Unser Ansatz</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Gemeinsam mit spezialisierten Security-Partnern
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-300">
              Automatisierung ist unser Kerngeschäft. Für die industrielle
              Cybersecurity holen wir gezielt ausgewiesene Experten an Bord, die
              sich täglich mit nichts anderem beschäftigen.
            </p>
            <p className="mt-4 leading-relaxed text-steel-300">
              Für Sie bedeutet das: <strong className="text-white">ein
              Ansprechpartner</strong>, durchgängige Verantwortung und ein
              Vorgehen, das sich an anerkannten Standards wie{" "}
              <strong className="text-white">IEC 62443</strong> und dem{" "}
              <strong className="text-white">Defense-in-Depth</strong>-Prinzip
              orientiert.
            </p>
            <div className="mt-8">
              <ButtonLink href="/kontakt" size="lg">
                Unverbindlich anfragen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-3">
            {[
              "Ausgewiesene Cybersecurity-Experten im Netzwerk",
              "Ein Ansprechpartner für Automatisierung und Security",
              "Vorgehen nach IEC 62443 & Defense-in-Depth",
              "Fokus auf Verfügbarkeit Ihrer Anlage",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl2 border border-navy-700 bg-navy-800/60 p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <span className="text-sm text-steel-200">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4 — Topics covered with partners */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Themenfelder"
          title="Was wir mit unseren Partnern abdecken"
          lead="Von der Standortbestimmung bis zum laufenden Schutz – die Spezialthemen übernehmen unsere Partner, koordiniert über Lienhard Automation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTopics.map((topic, i) => (
            <Reveal key={topic.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {topicIcons[i]}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{topic.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                  {topic.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
              <Users className="h-5 w-5" />
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-steel-600">
              Mehr Hintergrund zur industriellen Cybersecurity und zu
              anerkannten Standards finden Sie u. a. bei Siemens. SIMATIC, WinCC
              und IEC 62443 sind Marken bzw. Standards der jeweiligen
              Rechteinhaber.
            </p>
          </div>
          <ButtonLink
            href={SIEMENS_CYBER_URL}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            Industrial Cybersecurity
            <ExternalLink className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      {/* 5 — CTA */}
      <ContactCta
        title="Cybersecurity ein Thema für Ihre Anlage?"
        lead="Sprechen Sie uns an – wir bringen die passenden Security-Experten an Bord und bleiben Ihr fester Ansprechpartner für die Automatisierung."
      />
    </>
  );
}
