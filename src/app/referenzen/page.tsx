import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactCta } from "@/components/sections/ContactCta";
import { ReferencesGrid } from "@/components/sections/ReferencesGrid";
import { referenceHighlights, categoryLabels } from "@/content/references";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Über 25 Jahre internationale Projekterfahrung: Paket- und Logistikanlagen (DHL, Schweizerische Post), ARA- und Abwasserprojekte, Stahl- und Industrieanlagen sowie Retrofit – SPS-Programmierung mit TIA Portal und WinCC OA.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">Referenzen</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Projekte & Referenzen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            Nach über 25 Jahren Projektgeschäft im internationalen Umfeld
            blicken wir auf zahlreiche erfolgreiche Projekte und zufriedene
            Kunden zurück – von ARA-Anlagen in der Schweiz bis zu
            Industrieanlagen in Übersee.
          </p>
        </Container>
      </section>

      {/* Category highlights */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Schwerpunkte"
          title="Projektbereiche"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {referenceHighlights.map((h) => (
            <div
              key={h.category}
              className="h-full rounded-xl2 border border-steel-200 bg-white p-6 shadow-card"
            >
              <h3 className="font-bold text-navy-900">
                {categoryLabels[h.category]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Filterable project grid */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Projektübersicht"
          title="Ausgewählte Projekte"
          lead="Filtern Sie nach Projektbereich. Weitere Referenzen auf Anfrage."
        />
        <div className="mt-10">
          <ReferencesGrid />
        </div>
      </Section>

      <ContactCta
        title="Ihr Projekt in guten Händen"
        lead="Sprechen Sie mit uns über Ihre Anforderungen – wir teilen gerne weitere Referenzen aus Ihrer Branche."
      />
    </>
  );
}
