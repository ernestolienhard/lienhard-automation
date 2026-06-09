import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import {
  whyMe,
  conversionFlow,
  serviceSteps,
  supportedConversions,
  relatedLinks,
  securityNote,
} from "@/content/data2unified";
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

export const metadata: Metadata = {
  title: "WinCC-Modernisierung",
  description:
    "Experte für die Modernisierung von WinCC-Visualisierungen: von WinCC flexible und WinCC Classic zu SIMATIC WinCC Unified. Analyse, Migration, Anpassung, Inbetriebnahme, Support und Schulung – alle Schritte aus einer Hand.",
  alternates: { canonical: "/unified-modernisierung" },
};

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

export default function UnifiedModernisierungPage() {
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
              WinCC-Modernisierung · Ihr Spezialist
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              Ihr Experte für die Modernisierung Ihrer{" "}
              <span className="text-accent-400">WinCC-Visualisierung</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              Von <strong className="font-semibold text-white">WinCC flexible</strong>{" "}
              und <strong className="font-semibold text-white">WinCC Classic</strong>{" "}
              bis zu <strong className="font-semibold text-white">WinCC Unified</strong>:
              Ich modernisiere bestehende Projekte sicher und ohne Neuanfang –
              und kenne jeden Schritt aus der Praxis. Ich begleite, unterstütze
              und schule Sie über die gesamte Migration hinweg.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                Modernisierung anfragen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/referenzen" variant="outline-light" size="lg">
                Referenzen ansehen
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up">
              {[
                "WinCC flexible · Classic · Unified",
                "Alle Schritte aus einer Hand",
                "Begleitung, Support & Schulung",
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

      {/* 2 — Why me */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Warum mit mir"
          title="Modernisierung in besten Händen"
          lead="Eine Visualisierung zu modernisieren heisst, jahrelang gewachsenes Wissen zu erhalten und gleichzeitig zukunftssicher zu machen. Genau dafür bin ich der richtige Partner."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyMe.map((point, i) => (
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

      {/* 3 — Modernization path */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Der Weg"
          title="Vom Altprojekt zur Unified-Visualisierung"
          lead="Bewährtes erhalten, Veraltetes ablösen – planbar und ohne Risiko für Ihren laufenden Betrieb."
          onDark
        />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
          {conversionFlow.map((node, i) => (
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
              {i < conversionFlow.length - 1 ? (
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
        <SectionHeading
          eyebrow="Meine Begleitung"
          title="So begleite ich Sie – Schritt für Schritt"
          lead="Von der ersten Analyse bis zur Schulung Ihres Teams: ein klarer Prozess, in dem Sie nie allein sind."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSteps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                    {serviceIcons[i]}
                  </div>
                  <span className="text-2xl font-bold text-steel-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 — What gets carried over */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Umfang"
          title="Was bei der Modernisierung übernommen wird"
          lead="Ihre bestehenden Projektinhalte gehen nicht verloren – sie werden übernommen, angepasst und für WinCC Unified optimiert."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportedConversions.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-steel-500">
          Den genauen Umfang und die migrierbaren Elemente prüfe ich für Ihr
          Projekt individuell im Modernisierungs-Check.
        </p>
      </Section>

      {/* 6 — Tools & methods */}
      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Werkzeuge & Methoden</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Bewährte Tools, sauber eingesetzt
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">
              Für eine effiziente Migration nutze ich die offiziellen
              Siemens-Werkzeuge – darunter das TIA-Portal-Add-in{" "}
              <strong>Data2Unified</strong>, den WinCC Unified Modernization
              Checker und den Smart Advisor. Sie beschleunigen die Übernahme;
              die fachliche Qualität entsteht durch die manuelle Anpassung und
              Optimierung.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-steel-500">
              SIMATIC, WinCC, WinCC flexible, WinCC Unified, Data2Unified und
              TIA Portal sind Marken der Siemens AG. Lienhard Automation ist
              unabhängiger Dienstleister und kein Vertragshändler von Siemens.
            </p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full items-start justify-between gap-3 rounded-lg border border-steel-200 px-4 py-3 text-sm transition-colors hover:border-accent-300 hover:bg-steel-50"
                >
                  <span className="text-steel-700">
                    {link.title}
                    {link.entryId ? (
                      <span className="ml-1 text-xs text-steel-400">
                        ({link.entryId})
                      </span>
                    ) : null}
                  </span>
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Security note */}
        <div className="mt-10 flex flex-col gap-5 rounded-xl2 border border-steel-200 bg-steel-50 p-7 sm:flex-row sm:items-start">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900">Security-Hinweis</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">
              {securityNote.text}{" "}
              <Link
                href="/cybersecurity"
                className="underline hover:text-accent-600"
              >
                Mehr zu unserem Cybersecurity-Bereich
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* 7 — Contact CTA */}
      <ContactCta
        title="Bereit, Ihre Visualisierung zukunftssicher zu machen?"
        lead="Lassen Sie uns Ihr bestehendes WinCC-Projekt anschauen. Ich schätze Aufwand und Risiken ehrlich ein und begleite Sie von der Analyse bis zur Inbetriebnahme – inklusive Support und Schulung."
      />
    </>
  );
}
