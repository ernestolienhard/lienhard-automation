import type { Metadata } from "next";
import { Fragment } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import {
  whyPoints,
  offerings,
  flow,
  SIEMENS_SINEMA_URL,
} from "@/content/sinema";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Network,
  Layers,
  Clock,
  Server,
  Wrench,
  ExternalLink,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "SINEMA RC – Fernwartung",
  description:
    "Sichere Fernwartung mit SINEMA Remote Connect: gehosteter SINEMA-RC-Server im Rechenzentrum oder Ihr eigenes System. Verschlüsselte, zertifikatsbasierte VPN-Verbindungen zu Ihren Anlagen – weltweit.",
  alternates: { canonical: "/sinema-rc" },
};

const whyIcons = [
  <ShieldCheck key="0" className="h-5 w-5" />,
  <Network key="1" className="h-5 w-5" />,
  <Layers key="2" className="h-5 w-5" />,
  <Clock key="3" className="h-5 w-5" />,
];

const offeringIcons = [
  <Server key="0" className="h-6 w-6" />,
  <Wrench key="1" className="h-6 w-6" />,
];

export default function SinemaRcPage() {
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
              SINEMA RC · Fernwartung
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              Sichere Fernwartung mit{" "}
              <span className="text-accent-400">SINEMA Remote Connect</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              Ich bin Ihr Experte für SINEMA Remote Connect: Auf Wunsch betreibe
              ich einen <strong className="font-semibold text-white">gehosteten
              SINEMA-RC-Server in einem Rechenzentrum</strong> für Ihre
              Fernwartung – oder ich baue Ihr{" "}
              <strong className="font-semibold text-white">eigenes SINEMA-RC-System</strong>{" "}
              auf. Verschlüsselter, zertifikatsbasierter Zugriff auf Ihre
              Anlagen, weltweit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                Fernwartung anfragen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={SIEMENS_SINEMA_URL}
                variant="outline-light"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                SINEMA RC bei Siemens
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-steel-500 animate-fade-up">
              SINEMA, SINEMA Remote Connect, SCALANCE und Siemens sind Marken der
              Siemens AG. Lienhard Automation ist unabhängiger Dienstleister und
              kein Vertragshändler von Siemens.
            </p>
          </div>
        </Container>
      </section>

      {/* 2 — Why */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Warum SINEMA RC"
          title="Fernwartung, die sicher und einfach ist"
          lead="SINEMA Remote Connect verbindet Ihre Anlagen sicher mit dem Service – ohne aufwändige VPN-Konfiguration und ohne öffentliche Fix-IP."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {whyIcons[i]}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                  {point.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — My offering */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Mein Angebot"
          title="Zwei Wege zur sicheren Fernwartung"
          lead="Ob als Service aus dem Rechenzentrum oder als eigenes System – ich richte SINEMA Remote Connect passend für Sie ein und betreue es."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offerings.map((offering, i) => (
            <Reveal key={offering.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {offeringIcons[i]}
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">
                  {offering.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">
                  {offering.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — How it works */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="So funktioniert es"
          title="Von der Anlage bis zum sicheren Zugriff"
          lead="Die Anlage baut die Verbindung aktiv zum SINEMA-RC-Server auf – sicher, verschlüsselt und ohne Löcher in Ihrer Firewall."
          onDark
        />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
          {flow.map((node, i) => (
            <Fragment key={node.step}>
              <div className="rounded-xl2 border border-navy-700 bg-navy-800/60 p-6">
                <span className="text-sm font-bold text-accent-400">
                  {node.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {node.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">
                  {node.detail}
                </p>
              </div>
              {i < flow.length - 1 ? (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-6 w-6 text-accent-500" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Section>

      {/* 5 — Use cases / benefits strip */}
      <Section tone="light" className="!py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Fernwartung & Diagnose ohne Anreise",
            "Sichere Betreuung von Maschinen im Feld (OEM)",
            "Zentrale Verwaltung aller Standorte",
            "Schnelle Störungsbehebung – weltweit",
            "Kein VPN-Aufwand auf Kundenseite",
            "Betrieb im Rechenzentrum oder bei Ihnen",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl2 border border-steel-200 bg-steel-50 p-5"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
              <span className="text-sm text-steel-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 6 — Contact CTA */}
      <ContactCta
        title="Fernwartung für Ihre Anlagen einrichten?"
        lead="Sprechen Sie mich an – ich richte SINEMA Remote Connect für Sie ein, betreibe auf Wunsch den Server im Rechenzentrum und sorge für sicheren Zugriff auf Ihre Anlagen."
      />
    </>
  );
}
