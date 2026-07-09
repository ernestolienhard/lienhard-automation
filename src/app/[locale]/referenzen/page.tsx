import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactCta } from "@/components/sections/ContactCta";
import { ReferencesGrid } from "@/components/sections/ReferencesGrid";
import { pageLocale } from "@/i18n/config";

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
  es: {
    metaTitle: "Referencias",
    metaDesc: "Más de 25 años de experiencia internacional en proyectos: plantas de paquetería y logística (DHL, Correos de Suiza), proyectos de EDAR y aguas residuales, instalaciones siderúrgicas e industriales y retrofit, programación de PLC con TIA Portal y WinCC OA.",
    eyebrow: "Referencias",
    h1: "Proyectos y referencias",
    intro: "Tras más de 25 años en el negocio de proyectos en un entorno internacional, miro atrás a numerosos proyectos exitosos y clientes satisfechos, desde depuradoras en Suiza hasta instalaciones industriales en ultramar.",
    areasEyebrow: "Especialidades",
    areasTitle: "Áreas de proyecto",
    overviewEyebrow: "Resumen de proyectos",
    overviewTitle: "Proyectos seleccionados",
    overviewLead: "Filtre por área de proyecto. Más referencias a petición.",
    ctaTitle: "Su proyecto en buenas manos",
    ctaLead: "Hable conmigo sobre sus necesidades: con gusto comparto más referencias de su sector.",
  },
  fr: {
    metaTitle: "Références",
    metaDesc: "Plus de 25 ans d'expérience internationale de projets : installations de colis et de logistique (DHL, La Poste suisse), projets de STEP et d'eaux usées, installations sidérurgiques et industrielles ainsi que rétrofit, programmation API avec TIA Portal et WinCC OA.",
    eyebrow: "Références",
    h1: "Projets et références",
    intro: "Après plus de 25 ans d'activité de projet dans un environnement international, je peux me retourner sur de nombreux projets réussis et des clients satisfaits, des STEP en Suisse aux installations industrielles outre-mer.",
    areasEyebrow: "Domaines clés",
    areasTitle: "Domaines de projet",
    overviewEyebrow: "Aperçu des projets",
    overviewTitle: "Projets sélectionnés",
    overviewLead: "Filtrez par domaine de projet. Autres références sur demande.",
    ctaTitle: "Votre projet entre de bonnes mains",
    ctaLead: "Parlez-moi de vos besoins : je partage volontiers d'autres références de votre secteur.",
  },
  it: {
    metaTitle: "Referenze",
    metaDesc: "Oltre 25 anni di esperienza internazionale di progetti: impianti di pacchi e logistica (DHL, Posta svizzera), progetti di IDA e acque reflue, impianti siderurgici e industriali nonché retrofit, programmazione PLC con TIA Portal e WinCC OA.",
    eyebrow: "Referenze",
    h1: "Progetti e referenze",
    intro: "Dopo oltre 25 anni di attività progettuale in ambito internazionale, guardo a numerosi progetti di successo e clienti soddisfatti, dagli impianti di depurazione in Svizzera agli impianti industriali oltreoceano.",
    areasEyebrow: "Ambiti principali",
    areasTitle: "Ambiti di progetto",
    overviewEyebrow: "Panoramica dei progetti",
    overviewTitle: "Progetti selezionati",
    overviewLead: "Filtrate per ambito di progetto. Altre referenze su richiesta.",
    ctaTitle: "Il vostro progetto in buone mani",
    ctaLead: "Parlatemi delle vostre esigenze: condivido volentieri altre referenze del vostro settore.",
  },
  pt: {
    metaTitle: "Referências",
    metaDesc: "Mais de 25 anos de experiência internacional em projetos: instalações de encomendas e logística (DHL, Correios da Suíça), projetos de ETAR e águas residuais, instalações siderúrgicas e industriais e retrofit, programação de PLC com TIA Portal e WinCC OA.",
    eyebrow: "Referências",
    h1: "Projetos e referências",
    intro: "Após mais de 25 anos de atividade de projeto num ambiente internacional, olho para trás para numerosos projetos bem-sucedidos e clientes satisfeitos, desde ETAR na Suíça até instalações industriais além-mar.",
    areasEyebrow: "Áreas principais",
    areasTitle: "Áreas de projeto",
    overviewEyebrow: "Resumo de projetos",
    overviewTitle: "Projetos selecionados",
    overviewLead: "Filtre por área de projeto. Mais referências mediante pedido.",
    ctaTitle: "O seu projeto em boas mãos",
    ctaLead: "Fale comigo sobre as suas necessidades: partilho com gosto mais referências do seu setor.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const t = T[pageLocale(params.locale)];
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/referenzen" } };
}

export default function ReferenzenPage({ params }: { params: { locale: string } }) {
  const locale = pageLocale(params.locale);
  const t = T[locale];

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
