import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { getPartners } from "@/content/partners";
import { getCareer, getAchievements } from "@/content/profile";
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

const focusIcons = [
  <Cpu key="0" className="h-5 w-5" />,
  <Workflow key="1" className="h-5 w-5" />,
  <Network key="2" className="h-5 w-5" />,
  <Globe key="3" className="h-5 w-5" />,
  <RefreshCw key="4" className="h-5 w-5" />,
  <GraduationCap key="5" className="h-5 w-5" />,
];
const valueIcons = [
  <ShieldCheck key="0" className="h-5 w-5" />,
  <Cpu key="1" className="h-5 w-5" />,
  <ShieldCheck key="2" className="h-5 w-5" />,
  <Globe key="3" className="h-5 w-5" />,
];

const T = {
  de: {
    metaTitle: "Über mich",
    metaDesc: "Über mich – Ernesto Lienhard, Techniker HF Automation. Mein Werdegang, meine Stärken in der Siemens-Welt (STEP 7, TIA Portal, PCS 7, WinCC) sowie ein internationales Partnernetzwerk.",
    eyebrow: "Über mich",
    h1: "Über mich",
    subtitle: "Ich bin Ihr Spezialist für Siemens-Automatisierung im industriellen Maschinen- und Anlagenbau: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie durchgängige Vernetzung über OPC UA, PROFINET und PROFIBUS – von der Beratung bis zur Inbetriebnahme.",
    focusEyebrow: "Arbeitsschwerpunkte",
    focusTitle: "Wo meine Stärken liegen",
    focusAreas: [
      { title: "Steuerungstechnik", text: "Steuerungs- und Prozesstechnik für anspruchsvolle industrielle Anlagen." },
      { title: "SPS-Softwareerstellung", text: "Effektive, wartbare SPS-Software mit klarer Struktur und durchgängiger Architektur." },
      { title: "Kommunikation & Schnittstellen", text: "Vernetzung über Modbus RTU/TCP und OPC UA – inklusive OPC UA GDS Push." },
      { title: "Visualisierung von Abläufen", text: "Prozessvisualisierung und Leittechnik – besonders stark mit WinCC Unified und WinCC OA." },
      { title: "Migration & Modernisierung", text: "Migration von Altsteuerungen (S5 → S7 → TIA Portal) sowie Modernisierung von WinCC flexible nach WinCC Unified." },
      { title: "System-Engineering & Schulung", text: "System-Engineering sowie Schulung und Einweisung Ihrer Mitarbeitenden." },
    ],
    portraitLabel: `Porträt · ${siteConfig.contact.person}`,
    portraitNote: "Bildplatzhalter – vom Kunden bereitzustellen.",
    mgmtEyebrow: "Geschäftsführung",
    role: "Techniker HF Automation",
    bio1: "Mit über 25 Jahren Erfahrung in Montage, Automation und Inbetriebnahme führe ich Lienhard Automation mit technischem Tiefgang und internationalem Blick. Meine Stärke liegt in der Siemens-Welt: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, programmiert in FUP, KOP, AWL und SCL, inklusive Sicherheitssteuerungen (Safety).",
    bio2: "Bei Visualisierung und Leittechnik bin ich besonders stark mit WinCC Unified und WinCC OA; die saubere Vernetzung von Anlagen realisiere ich über OPC UA, Modbus (RTU/TCP), PROFINET und PROFIBUS – von der ersten Beratung bis zur Inbetriebnahme vor Ort.",
    bio3: "Über zehn Jahre habe ich mehrheitlich im Ausland gearbeitet – auf fünf Kontinenten, von Nord- und Südamerika über ganz Europa und Afrika bis nach Asien (u. a. Japan). Diese wertvollen Jahre haben mir technisch wie auch im Umgang mit den unterschiedlichsten Kulturen viel mitgegeben – ein echter Gewinn für jedes internationale Projekt.",
    werdegangEyebrow: "Werdegang",
    werdegangTitle: "Der berufliche Weg",
    werdegangLead: "Vom Elektromonteur über die Luftfahrt bis zur industriellen Automation – über 25 Jahre technische Praxis als Basis für zuverlässige Lösungen.",
    erfolgeEyebrow: "Erfolge & Meilensteine",
    erfolgeTitle: "Was ich in über 25 Jahren erreicht habe",
    erfolgeLead: "Ein Auszug aus erfolgreich umgesetzten Projekten im In- und Ausland.",
    valuesEyebrow: "Werte",
    valuesTitle: "Worauf Sie sich verlassen können",
    values: [
      { title: "Produktneutralität", text: "Unabhängige Empfehlungen im Interesse Ihrer Anlage – nicht eines Herstellers." },
      { title: "Präzision", text: "Saubere Konzepte, durchgängige Programmarchitektur, nachvollziehbare Dokumentation." },
      { title: "Zuverlässigkeit", text: "Termintreue und Support über die Inbetriebnahme hinaus." },
      { title: "Internationale Erfahrung", text: "Projekte und Inbetriebnahmen in Europa, Nord- und Südamerika." },
    ],
    partnerEyebrow: "Partnernetzwerk",
    partnerTitle: "Gemeinsam stärker",
    partnerLead: "Mein eingespieltes Netzwerk von Partnerunternehmen in der Schweiz, Europa und den USA – für Projekte jeder Grösse.",
  },
  en: {
    metaTitle: "About me",
    metaDesc: "About me – Ernesto Lienhard, Technician HF Automation. My career, my strengths in the Siemens world (STEP 7, TIA Portal, PCS 7, WinCC) and an international partner network.",
    eyebrow: "About me",
    h1: "About me",
    subtitle: "I am your specialist for Siemens automation in industrial machine and plant engineering: SIMATIC STEP 7 Classic, TIA Portal and PCS 7, visualization with WinCC Unified and WinCC OA, and seamless connectivity via OPC UA, PROFINET and PROFIBUS – from consulting to commissioning.",
    focusEyebrow: "Areas of focus",
    focusTitle: "Where my strengths lie",
    focusAreas: [
      { title: "Control technology", text: "Control and process technology for demanding industrial plants." },
      { title: "PLC software development", text: "Effective, maintainable PLC software with a clear structure and consistent architecture." },
      { title: "Communication & interfaces", text: "Networking via Modbus RTU/TCP and OPC UA – including OPC UA GDS Push." },
      { title: "Process visualization", text: "Process visualization and supervisory control – particularly strong with WinCC Unified and WinCC OA." },
      { title: "Migration & modernization", text: "Migration of legacy controllers (S5 → S7 → TIA Portal) and modernization from WinCC flexible to WinCC Unified." },
      { title: "System engineering & training", text: "System engineering as well as training and instruction of your staff." },
    ],
    portraitLabel: `Portrait · ${siteConfig.contact.person}`,
    portraitNote: "Image placeholder – to be provided by the client.",
    mgmtEyebrow: "Management",
    role: "Technician HF Automation",
    bio1: "With over 25 years of experience in installation, automation and commissioning, I run Lienhard Automation with technical depth and an international outlook. My strength lies in the Siemens world: SIMATIC STEP 7 Classic, TIA Portal and PCS 7, programmed in FBD, LAD, STL and SCL, including safety controllers.",
    bio2: "In visualization and supervisory control I am particularly strong with WinCC Unified and WinCC OA; I implement the clean networking of plants via OPC UA, Modbus (RTU/TCP), PROFINET and PROFIBUS – from the first consultation to on-site commissioning.",
    bio3: "For over ten years I worked mostly abroad – on five continents, from North and South America across all of Europe and Africa to Asia (including Japan). These valuable years taught me a great deal, technically as well as in dealing with the most diverse cultures – a real asset for any international project.",
    werdegangEyebrow: "Career",
    werdegangTitle: "The professional path",
    werdegangLead: "From electrician through aviation to industrial automation – over 25 years of technical practice as a basis for reliable solutions.",
    erfolgeEyebrow: "Achievements & milestones",
    erfolgeTitle: "What I have achieved in over 25 years",
    erfolgeLead: "A selection of successfully implemented projects at home and abroad.",
    valuesEyebrow: "Values",
    valuesTitle: "What you can rely on",
    values: [
      { title: "Vendor independence", text: "Independent recommendations in the interest of your plant – not of a manufacturer." },
      { title: "Precision", text: "Clean concepts, consistent program architecture, traceable documentation." },
      { title: "Reliability", text: "On-time delivery and support beyond commissioning." },
      { title: "International experience", text: "Projects and commissioning in Europe, North and South America." },
    ],
    partnerEyebrow: "Partner network",
    partnerTitle: "Stronger together",
    partnerLead: "My well-established network of partner companies in Switzerland, Europe and the USA – for projects of any size.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const t = params.locale === "en" ? T.en : T.de;
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/unternehmen" } };
}

export default function UnternehmenPage({ params }: { params: { locale: string } }) {
  const locale = params.locale === "en" ? "en" : "de";
  const t = T[locale];
  const career = getCareer(locale);
  const achievements = getAchievements(locale);
  const partners = getPartners(locale);

  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">{t.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">{t.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">{t.subtitle}</p>
        </Container>
      </section>

      {/* Focus areas */}
      <Section tone="light">
        <SectionHeading eyebrow={t.focusEyebrow} title={t.focusTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {focusIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{area.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Management */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.3fr]">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl2 border border-steel-200 bg-navy-900">
              <div aria-hidden className="h-full w-full bg-grid-navy [background-size:28px_28px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white">
                  <Users className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-steel-300">{t.portraitLabel}</p>
                <p className="max-w-[14rem] text-xs text-steel-500">{t.portraitNote}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t.mgmtEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{siteConfig.contact.person}</h2>
            <p className="mt-2 text-lg font-medium text-accent-600">{t.role}</p>
            <p className="mt-5 text-lg leading-relaxed text-steel-600">{t.bio1}</p>
            <p className="mt-4 leading-relaxed text-steel-600">{t.bio2}</p>
            <p className="mt-4 leading-relaxed text-steel-600">{t.bio3}</p>
          </div>
        </div>
      </Section>

      {/* Career timeline */}
      <Section tone="light">
        <SectionHeading eyebrow={t.werdegangEyebrow} title={t.werdegangTitle} lead={t.werdegangLead} />
        <ol className="mt-12 max-w-3xl">
          {career.map((station, i) => (
            <Reveal key={`${station.title}-${i}`} delay={(i % 4) * 0.06}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                {i < career.length - 1 ? (
                  <span aria-hidden className="absolute left-[11px] top-7 h-full w-px bg-steel-200" />
                ) : null}
                <span aria-hidden className="relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                </span>
                <div className="pt-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">{station.period}</span>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">{station.title}</h3>
                  {station.org ? <p className="text-sm font-medium text-steel-500">{station.org}</p> : null}
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">{station.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Achievements */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.erfolgeEyebrow} title={t.erfolgeTitle} lead={t.erfolgeLead} />
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
        <SectionHeading eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.map((v, i) => (
            <div key={v.title} className="h-full rounded-xl2 border border-steel-200 bg-steel-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                {valueIcons[i]}
              </div>
              <h3 className="mt-4 font-bold text-navy-900">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partner network */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.partnerEyebrow} title={t.partnerTitle} lead={t.partnerLead} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-start gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900">{partner.name}</h3>
                <p className="mt-1 text-sm text-steel-500">{partner.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
