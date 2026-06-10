import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactCta } from "@/components/sections/ContactCta";
import { ReferencesGrid } from "@/components/sections/ReferencesGrid";
import { getReferenceHighlights, getCategoryLabels } from "@/content/references";

const T = {
  de: {
    metaTitle: "Referenzen",
    metaDesc: "Über 25 Jahre internationale Projekterfahrung: Paket- und Logistikanlagen (DHL, Schweizerische Post), ARA- und Abwasserprojekte, Stahl- und Industrieanlagen sowie Retrofit – SPS-Programmierung mit TIA Portal und WinCC OA.",
    eyebrow: "Referenzen",
    h1: "Projekte & Referenzen",
    intro: "Nach über 25 Jahren Projektgeschäft im internationalen Umfeld blicke ich auf zahlreiche erfolgreiche Projekte und zufriedene Kunden zurück – von ARA-Anlagen in der Schweiz bis zu Industrieanlagen in Übersee.",
    areasEyebrow: "Schwerpunkte",
    areasTitle: "Projektbereiche",
    overviewEyebrow: "Projektübersicht",
    overviewTitle: "Ausgewählte Projekte",
    overviewLead: "Filtern Sie nach Projektbereich. Weitere Referenzen auf Anfrage.",
    ctaTitle: "Ihr Projekt in guten Händen",
    ctaLead: "Sprechen Sie mit mir über Ihre Anforderungen – ich teile gerne weitere Referenzen aus Ihrer Branche.",
  },
  en: {
    metaTitle: "References",
    metaDesc: "Over 25 years of international project experience: parcel and logistics plants (DHL, Swiss Post), wastewater plant projects, steel and industrial plants and retrofit – PLC programming with TIA Portal and WinCC OA.",
    eyebrow: "References",
    h1: "Projects & references",
    intro: "After more than 25 years in the project business in an international environment, I look back on numerous successful projects and satisfied customers – from wastewater plants in Switzerland to industrial plants overseas.",
    areasEyebrow: "Focus areas",
    areasTitle: "Project areas",
    overviewEyebrow: "Project overview",
    overviewTitle: "Selected projects",
    overviewLead: "Filter by project area. Further references on request.",
    ctaTitle: "Your project in good hands",
    ctaLead: "Talk to me about your requirements – I am happy to share further references from your industry.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const t = params.locale === "en" ? T.en : T.de;
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/referenzen" } };
}

export default function ReferenzenPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "de";
  const t = T[locale];
  const highlights = getReferenceHighlights(locale);
  const categoryLabels = getCategoryLabels(locale);

  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">{t.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">{t.intro}</p>
        </Container>
      </section>

      <Section tone="muted">
        <SectionHeading eyebrow={t.areasEyebrow} title={t.areasTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.category} className="h-full rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
              <h3 className="font-bold text-navy-900">{categoryLabels[h.category]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">{h.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow={t.overviewEyebrow} title={t.overviewTitle} lead={t.overviewLead} />
        <div className="mt-10">
          <ReferencesGrid />
        </div>
      </Section>

      <ContactCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
