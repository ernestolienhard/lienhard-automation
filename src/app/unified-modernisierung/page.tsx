import type { Metadata } from "next";
import { Fragment } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import {
  supportedConversions,
  improvementsV64,
  conversionFlow,
  serviceSteps,
  downloads,
  relatedLinks,
  securityNote,
  SIEMENS_ARTICLE_URL,
  SIEMENS_ENTRY_ID,
} from "@/content/data2unified";
import {
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Play,
  Layers,
  Search,
  RefreshCw,
  Wrench,
  ShieldCheck,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "HMI-Modernisierung mit Data2Unified",
  description:
    "Von SIMATIC WinCC Classic zu WinCC Unified – ohne bei Null zu beginnen. Lienhard Automation modernisiert Ihre HMI-Projekte mit dem Siemens TIA-Portal-Add-in Data2Unified: Analyse, Konvertierung, manuelle Anpassung, Test und Inbetriebnahme.",
  alternates: { canonical: "/unified-modernisierung" },
};

const serviceIcons = [
  <Search key="0" className="h-5 w-5" />,
  <RefreshCw key="1" className="h-5 w-5" />,
  <Wrench key="2" className="h-5 w-5" />,
  <Check key="3" className="h-5 w-5" />,
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
              HMI-Modernisierung · SIMATIC WinCC Unified
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              Von WinCC Classic zu{" "}
              <span className="text-accent-400">WinCC Unified</span> – ohne
              Neuanfang.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              Mit dem TIA-Portal-Add-in{" "}
              <strong className="font-semibold text-white">Data2Unified</strong>{" "}
              übernehmen Sie bestehende Projektinhalte ins Unified-Umfeld und
              sparen Engineering-Zeit. Lienhard Automation begleitet die
              Modernisierung von der Analyse bis zur Inbetriebnahme.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                Modernisierung anfragen
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={SIEMENS_ARTICLE_URL}
                variant="outline-light"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data2Unified bei Siemens
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-steel-500 animate-fade-up">
              Data2Unified, SIMATIC, WinCC und TIA Portal sind Marken der
              Siemens AG. Lienhard Automation ist unabhängiger Dienstleister und
              kein Vertragshändler von Siemens.
            </p>
          </div>
        </Container>
      </section>

      {/* 2 — Overview */}
      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="eyebrow">Überblick</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Was ist Data2Unified?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">
              SIMATIC WinCC Unified ist das Visualisierungssystem von Siemens für
              Automatisierungsanwendungen – bestehend aus der WinCC-Unified-Software
              sowie den neuen SIMATIC HMI Unified Panels.
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              Das Add-in <strong>Data2Unified</strong> unterstützt Sie dabei,
              Ihre Konfigurationsinhalte in das WinCC-Unified-Umfeld zu
              konvertieren, sodass Sie die Inhalte Ihrer bisherigen Konfiguration
              nicht von Grund auf neu erstellen müssen.
            </p>
          </div>

          {/* Honest expectation callout — this is exactly where we add value */}
          <div className="rounded-xl2 border border-amber-300 bg-amber-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-bold text-amber-900">
              Kein vollständiges Migrationswerkzeug
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
              Data2Unified reduziert Zeit und Aufwand, ersetzt aber keine
              vollständige Migration: Vor und nach der Konvertierung sind
              manuelle Anpassungen zwingend nötig. Genau diese Arbeiten übernimmt
              Lienhard Automation fachgerecht.
            </p>
          </div>
        </div>
      </Section>

      {/* 3 — Conversion flow */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Vorgehen"
          title="Classic → Data2Unified → Unified"
          lead="Der Weg von Ihrem bestehenden Projekt zur modernen Unified-Visualisierung."
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

      {/* 4 — Supported conversions */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Unterstützte Inhalte"
          title="Was Data2Unified konvertiert"
          lead="In der aktuellen Version werden die folgenden Projektinhalte für die Konvertierung nach SIMATIC WinCC Unified unterstützt."
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
          Data2Unified wird kontinuierlich weiterentwickelt und unterstützt
          schrittweise weitere TIA-Portal-Projektelemente. Den Umfang Ihres
          Projekts prüfen wir individuell.
        </p>
      </Section>

      {/* 5 — What's new in V6.4 */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:items-center">
          <div>
            <p className="eyebrow">Aktuelle Version</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Neu in Data2Unified {improvementsV64.version}
            </h2>
            <p className="mt-4 leading-relaxed text-steel-600">
              Stand der letzten Änderungen: Release von Data2Unified{" "}
              {improvementsV64.version}.
            </p>
            <div className="mt-6">
              <ButtonLink
                href={SIEMENS_ARTICLE_URL}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Changelog bei Siemens ansehen
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3">
            {improvementsV64.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl2 border border-steel-200 bg-white p-5 shadow-card"
              >
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <span className="text-sm text-steel-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 6 — Lienhard service steps */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Unsere Dienstleistung"
          title="So modernisieren wir Ihre Anlage"
          lead="Lienhard Automation begleitet die WinCC-Unified-Migration end-to-end – vom Modernisierungs-Check bis zur Endabnahme."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.06}>
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

      {/* 7 — Video + Resources / Downloads */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Ressourcen & Downloads"
          title="Add-in, Dokumentation und Hilfsmittel"
          lead="Das Add-in und die Dokumentation werden von Siemens bereitgestellt. Wir verlinken auf die offizielle Quelle (SiePortal Entry-ID 109770510)."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr,1fr]">
          {/* Video / How-to */}
          <a
            href={SIEMENS_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex aspect-video flex-col justify-end overflow-hidden rounded-xl2 border border-navy-700 bg-navy-900 p-6 text-white"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-navy [background-size:28px_28px] opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7" />
              </span>
            </div>
            <div className="relative">
              <p className="text-xs uppercase tracking-wide text-accent-300">
                Video
              </p>
              <p className="mt-1 font-bold">How to use Data2Unified</p>
            </div>
          </a>

          {/* Download lists */}
          <div className="grid gap-5">
            {downloads.map((d) => (
              <div
                key={d.release}
                className="rounded-xl2 border border-steel-200 bg-white p-6 shadow-card"
              >
                <h3 className="font-bold text-navy-900">{d.release}</h3>
                <p className="text-sm text-accent-600">{d.support}</p>
                <ul className="mt-4 space-y-2">
                  {d.files.map((f) => (
                    <li
                      key={f.label}
                      className="flex items-center justify-between gap-3 border-t border-steel-100 pt-2 text-sm text-steel-700 first:border-0 first:pt-0"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="h-4 w-4 shrink-0 text-accent-500" />
                        {f.label}
                      </span>
                      <span className="shrink-0 text-xs text-steel-400">
                        {f.size}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs text-steel-500">
              Tipp: Damit alle Dateien korrekt aktualisiert werden, empfiehlt
              Siemens, die frühere Version zu deinstallieren und die neue neu zu
              installieren. Downloads erfolgen auf{" "}
              <a
                href={SIEMENS_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-600"
              >
                support.industry.siemens.com (Entry {SIEMENS_ENTRY_ID})
              </a>
              .
            </p>
          </div>
        </div>

        {/* Related content */}
        <div className="mt-10 rounded-xl2 border border-steel-200 bg-white p-7 shadow-card">
          <h3 className="font-bold text-navy-900">Weiterführende Links</h3>
          <p className="mt-1 text-sm text-steel-500">
            Data2Unified ist Teil der Siemens-Modernisierungsstrategie. Diese
            Tools setzen wir bei der Analyse ein.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 rounded-lg border border-steel-200 px-4 py-3 text-sm transition-colors hover:border-accent-300 hover:bg-steel-50"
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
      </Section>

      {/* 8 — Security note */}
      <Section tone="light" className="!py-14">
        <div className="flex flex-col gap-5 rounded-xl2 border border-steel-200 bg-steel-50 p-7 sm:flex-row sm:items-start">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900">
              Security-Hinweis
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">
              {securityNote.text}{" "}
              <a
                href={securityNote.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-600"
              >
                Mehr zur Industrial Security
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* 9 — Contact CTA */}
      <ContactCta
        title="Planen Sie den Umstieg auf WinCC Unified?"
        lead="Wir prüfen Ihr bestehendes WinCC-Classic-Projekt, schätzen den Modernisierungsaufwand und setzen die Migration mit Data2Unified um – produktneutral beraten, sauber umgesetzt."
      />
    </>
  );
}
