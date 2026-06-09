import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { SIEMENS_CYBER_URL } from "@/content/cybersecurity";
import { isLocale, type Locale } from "@/i18n/config";
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

type Item = { title: string; detail: string };
type Content = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1a: string;
  h1accent: string;
  subtitle: string;
  ctaHero: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  reasons: Item[];
  approachEyebrow: string;
  approachTitle: string;
  approachP1: string;
  approachP2: React.ReactNode;
  approachCta: string;
  approachPoints: string[];
  topicsEyebrow: string;
  topicsTitle: string;
  topicsLead: string;
  topics: Item[];
  note: string;
  noteBtn: string;
  ctaTitle: string;
  ctaLead: string;
};

const b = (s: string) => <strong className="text-white">{s}</strong>;

const C: Record<Locale, Content> = {
  de: {
    metaTitle: "Cybersecurity",
    metaDesc:
      "Industrielle Cybersecurity (OT-Security) ist ein hochspezialisiertes Fachgebiet. Lienhard Automation arbeitet dabei mit ausgewiesenen Security-Experten zusammen – sichere Automatisierung und Spezialwissen aus einer Hand.",
    eyebrow: "Cybersecurity · OT-Security",
    h1a: "Sichere Automatisierung – ",
    h1accent: "gemeinsam mit Experten",
    subtitle:
      "Industrielle Cybersecurity ist ein eigenes, hochspezialisiertes Fachgebiet. Bei diesen Themen arbeiten wir eng mit ausgewiesenen Security-Partnern zusammen – so erhalten Sie sichere, zuverlässige Automatisierung und das nötige Spezialwissen aus einer Hand.",
    ctaHero: "Thema besprechen",
    whyEyebrow: "Warum es zählt",
    whyTitle: "OT-Security ist anders als IT-Security",
    whyLead:
      "Industrielle Anlagen haben eigene Anforderungen – geprägt von maximaler Verfügbarkeit, langen Lebenszyklen und gewachsenen Umgebungen.",
    reasons: [
      { title: "Vernetzte Produktion", detail: "Mehr Vernetzung, Fernzugriff und IIoT vergrössern die Angriffsfläche industrieller Anlagen." },
      { title: "Verfügbarkeit zuerst", detail: "In der OT zählt maximale Anlagenverfügbarkeit – Schutzmassnahmen müssen den Betrieb sichern, nicht stören." },
      { title: "Lange Lebenszyklen", detail: "Anlagen laufen über Jahrzehnte. Gewachsene Alt-Systeme brauchen einen besonderen, durchdachten Schutz." },
    ],
    approachEyebrow: "Unser Ansatz",
    approachTitle: "Gemeinsam mit spezialisierten Security-Partnern",
    approachP1:
      "Automatisierung ist unser Kerngeschäft. Für die industrielle Cybersecurity holen wir gezielt ausgewiesene Experten an Bord, die sich täglich mit nichts anderem beschäftigen.",
    approachP2: (
      <>
        Für Sie bedeutet das: {b("ein Ansprechpartner")}, durchgängige
        Verantwortung und ein Vorgehen, das sich an anerkannten Standards wie{" "}
        {b("IEC 62443")} und dem {b("Defense-in-Depth")}-Prinzip orientiert.
      </>
    ),
    approachCta: "Unverbindlich anfragen",
    approachPoints: [
      "Ausgewiesene Cybersecurity-Experten im Netzwerk",
      "Ein Ansprechpartner für Automatisierung und Security",
      "Vorgehen nach IEC 62443 & Defense-in-Depth",
      "Fokus auf Verfügbarkeit Ihrer Anlage",
    ],
    topicsEyebrow: "Themenfelder",
    topicsTitle: "Was wir mit unseren Partnern abdecken",
    topicsLead:
      "Von der Standortbestimmung bis zum laufenden Schutz – die Spezialthemen übernehmen unsere Partner, koordiniert über Lienhard Automation.",
    topics: [
      { title: "Security-Assessment & Risikoanalyse", detail: "Schwachstellen und Risiken Ihrer Anlage transparent machen und bewerten." },
      { title: "IT/OT-Netzwerksegmentierung", detail: "Zonen, Zellenschutz und Perimeterschutz nach dem Defense-in-Depth-Prinzip." },
      { title: "Systemhärtung & Patch-Management", detail: "Härtung von Systemen sowie Schwachstellen- und Update-Management." },
      { title: "Monitoring & Notfallmanagement", detail: "Überwachung, Backup/Recovery und ein klarer Plan für den Ernstfall." },
    ],
    note: "Mehr Hintergrund zur industriellen Cybersecurity und zu anerkannten Standards finden Sie u. a. bei Siemens. SIMATIC, WinCC und IEC 62443 sind Marken bzw. Standards der jeweiligen Rechteinhaber.",
    noteBtn: "Industrial Cybersecurity",
    ctaTitle: "Cybersecurity ein Thema für Ihre Anlage?",
    ctaLead:
      "Sprechen Sie uns an – wir bringen die passenden Security-Experten an Bord und bleiben Ihr fester Ansprechpartner für die Automatisierung.",
  },
  en: {
    metaTitle: "Cybersecurity",
    metaDesc:
      "Industrial cybersecurity (OT security) is a highly specialised field. Lienhard Automation works with proven security experts – secure automation and specialist knowledge from a single source.",
    eyebrow: "Cybersecurity · OT security",
    h1a: "Secure automation – ",
    h1accent: "together with experts",
    subtitle:
      "Industrial cybersecurity is a field of its own, highly specialised. On these topics we work closely with proven security partners – so you get secure, reliable automation and the necessary specialist knowledge from a single source.",
    ctaHero: "Discuss the topic",
    whyEyebrow: "Why it matters",
    whyTitle: "OT security is different from IT security",
    whyLead:
      "Industrial plants have their own requirements – shaped by maximum availability, long life cycles and grown environments.",
    reasons: [
      { title: "Connected production", detail: "More connectivity, remote access and IIoT increase the attack surface of industrial plants." },
      { title: "Availability first", detail: "In OT, maximum plant availability counts – protective measures must secure operations, not disrupt them." },
      { title: "Long life cycles", detail: "Plants run for decades. Grown legacy systems need special, well-considered protection." },
    ],
    approachEyebrow: "Our approach",
    approachTitle: "Together with specialised security partners",
    approachP1:
      "Automation is our core business. For industrial cybersecurity we deliberately bring proven experts on board who deal with nothing else every day.",
    approachP2: (
      <>
        For you this means: {b("a single point of contact")}, end-to-end
        responsibility and an approach based on recognised standards such as{" "}
        {b("IEC 62443")} and the {b("defense-in-depth")} principle.
      </>
    ),
    approachCta: "Enquire without obligation",
    approachPoints: [
      "Proven cybersecurity experts in the network",
      "One point of contact for automation and security",
      "Approach based on IEC 62443 & defense-in-depth",
      "Focus on the availability of your plant",
    ],
    topicsEyebrow: "Topic areas",
    topicsTitle: "What we cover with our partners",
    topicsLead:
      "From the initial assessment to ongoing protection – the specialist topics are handled by our partners, coordinated through Lienhard Automation.",
    topics: [
      { title: "Security assessment & risk analysis", detail: "Make the vulnerabilities and risks of your plant transparent and assess them." },
      { title: "IT/OT network segmentation", detail: "Zones, cell protection and perimeter protection following the defense-in-depth principle." },
      { title: "System hardening & patch management", detail: "Hardening of systems as well as vulnerability and update management." },
      { title: "Monitoring & incident response", detail: "Monitoring, backup/recovery and a clear plan for emergencies." },
    ],
    note: "More background on industrial cybersecurity and recognised standards can be found, among others, at Siemens. SIMATIC, WinCC and IEC 62443 are trademarks or standards of their respective owners.",
    noteBtn: "Industrial Cybersecurity",
    ctaTitle: "Is cybersecurity a topic for your plant?",
    ctaLead:
      "Get in touch – we bring the right security experts on board and remain your reliable point of contact for automation.",
  },
  es: {
    metaTitle: "Ciberseguridad",
    metaDesc:
      "La ciberseguridad industrial (seguridad OT) es un campo altamente especializado. Lienhard Automation colabora con expertos en seguridad acreditados: automatización segura y conocimiento especializado de un solo proveedor.",
    eyebrow: "Ciberseguridad · Seguridad OT",
    h1a: "Automatización segura, ",
    h1accent: "junto a expertos",
    subtitle:
      "La ciberseguridad industrial es un campo propio y altamente especializado. En estos temas colaboramos estrechamente con socios de seguridad acreditados, para que reciba una automatización segura y fiable y el conocimiento especializado necesario de un solo proveedor.",
    ctaHero: "Hablar del tema",
    whyEyebrow: "Por qué importa",
    whyTitle: "La seguridad OT es distinta de la seguridad IT",
    whyLead:
      "Las instalaciones industriales tienen requisitos propios, marcados por la máxima disponibilidad, ciclos de vida largos y entornos heredados.",
    reasons: [
      { title: "Producción conectada", detail: "Mayor conectividad, acceso remoto e IIoT amplían la superficie de ataque de las instalaciones industriales." },
      { title: "La disponibilidad primero", detail: "En la OT cuenta la máxima disponibilidad: las medidas de protección deben asegurar la operación, no perturbarla." },
      { title: "Ciclos de vida largos", detail: "Las instalaciones funcionan durante décadas. Los sistemas heredados requieren una protección especial y bien pensada." },
    ],
    approachEyebrow: "Nuestro enfoque",
    approachTitle: "Junto a socios de seguridad especializados",
    approachP1:
      "La automatización es nuestro negocio principal. Para la ciberseguridad industrial incorporamos de forma selectiva a expertos acreditados que no se dedican a otra cosa.",
    approachP2: (
      <>
        Para usted esto significa: {b("un único interlocutor")}, responsabilidad
        de principio a fin y un procedimiento basado en estándares reconocidos
        como {b("IEC 62443")} y el principio de {b("defensa en profundidad")}.
      </>
    ),
    approachCta: "Consultar sin compromiso",
    approachPoints: [
      "Expertos en ciberseguridad acreditados en la red",
      "Un único interlocutor para automatización y seguridad",
      "Procedimiento según IEC 62443 y defensa en profundidad",
      "Foco en la disponibilidad de su instalación",
    ],
    topicsEyebrow: "Áreas temáticas",
    topicsTitle: "Lo que cubrimos con nuestros socios",
    topicsLead:
      "Desde el diagnóstico inicial hasta la protección continua: los temas especializados los asumen nuestros socios, coordinados a través de Lienhard Automation.",
    topics: [
      { title: "Evaluación de seguridad y análisis de riesgos", detail: "Hacer transparentes y evaluar las vulnerabilidades y los riesgos de su instalación." },
      { title: "Segmentación de redes IT/OT", detail: "Zonas, protección de celdas y protección perimetral según el principio de defensa en profundidad." },
      { title: "Endurecimiento de sistemas y gestión de parches", detail: "Endurecimiento de sistemas y gestión de vulnerabilidades y actualizaciones." },
      { title: "Monitorización y gestión de emergencias", detail: "Supervisión, copia de seguridad/recuperación y un plan claro para casos de emergencia." },
    ],
    note: "Encontrará más información sobre ciberseguridad industrial y estándares reconocidos, entre otros, en Siemens. SIMATIC, WinCC e IEC 62443 son marcas o estándares de sus respectivos titulares.",
    noteBtn: "Industrial Cybersecurity",
    ctaTitle: "¿Es la ciberseguridad un tema para su instalación?",
    ctaLead:
      "Póngase en contacto con nosotros: incorporamos a los expertos en seguridad adecuados y seguimos siendo su interlocutor de confianza para la automatización.",
  },
  it: {
    metaTitle: "Cybersecurity",
    metaDesc:
      "La cybersecurity industriale (sicurezza OT) è un settore altamente specializzato. Lienhard Automation collabora con esperti di sicurezza qualificati: automazione sicura e know-how specialistico da un unico interlocutore.",
    eyebrow: "Cybersecurity · Sicurezza OT",
    h1a: "Automazione sicura, ",
    h1accent: "insieme agli esperti",
    subtitle:
      "La cybersecurity industriale è un settore a sé, altamente specializzato. Su questi temi collaboriamo strettamente con partner di sicurezza qualificati, così ricevete un'automazione sicura e affidabile e il know-how specialistico necessario da un unico interlocutore.",
    ctaHero: "Parliamone",
    whyEyebrow: "Perché conta",
    whyTitle: "La sicurezza OT è diversa dalla sicurezza IT",
    whyLead:
      "Gli impianti industriali hanno esigenze proprie, segnate dalla massima disponibilità, da lunghi cicli di vita e da ambienti stratificati.",
    reasons: [
      { title: "Produzione connessa", detail: "Maggiore connettività, accesso remoto e IIoT aumentano la superficie d'attacco degli impianti industriali." },
      { title: "Prima la disponibilità", detail: "Nell'OT conta la massima disponibilità dell'impianto: le misure di protezione devono garantire l'esercizio, non disturbarlo." },
      { title: "Lunghi cicli di vita", detail: "Gli impianti funzionano per decenni. I sistemi legacy stratificati richiedono una protezione particolare e ben studiata." },
    ],
    approachEyebrow: "Il nostro approccio",
    approachTitle: "Insieme a partner di sicurezza specializzati",
    approachP1:
      "L'automazione è il nostro core business. Per la cybersecurity industriale coinvolgiamo in modo mirato esperti qualificati che si occupano ogni giorno solo di questo.",
    approachP2: (
      <>
        Per voi questo significa: {b("un unico interlocutore")}, responsabilità
        end-to-end e un approccio basato su standard riconosciuti come{" "}
        {b("IEC 62443")} e sul principio {b("defense-in-depth")}.
      </>
    ),
    approachCta: "Richiedi senza impegno",
    approachPoints: [
      "Esperti di cybersecurity qualificati nella rete",
      "Un unico interlocutore per automazione e sicurezza",
      "Approccio secondo IEC 62443 e defense-in-depth",
      "Focus sulla disponibilità del vostro impianto",
    ],
    topicsEyebrow: "Ambiti tematici",
    topicsTitle: "Cosa copriamo con i nostri partner",
    topicsLead:
      "Dalla valutazione iniziale alla protezione continua: i temi specialistici sono gestiti dai nostri partner, coordinati tramite Lienhard Automation.",
    topics: [
      { title: "Security assessment e analisi dei rischi", detail: "Rendere trasparenti e valutare le vulnerabilità e i rischi del vostro impianto." },
      { title: "Segmentazione di rete IT/OT", detail: "Zone, protezione delle celle e protezione perimetrale secondo il principio defense-in-depth." },
      { title: "Hardening dei sistemi e patch management", detail: "Hardening dei sistemi nonché gestione delle vulnerabilità e degli aggiornamenti." },
      { title: "Monitoraggio e gestione delle emergenze", detail: "Monitoraggio, backup/recovery e un piano chiaro per i casi di emergenza." },
    ],
    note: "Maggiori informazioni sulla cybersecurity industriale e sugli standard riconosciuti sono disponibili, tra l'altro, presso Siemens. SIMATIC, WinCC e IEC 62443 sono marchi o standard dei rispettivi titolari.",
    noteBtn: "Industrial Cybersecurity",
    ctaTitle: "La cybersecurity è un tema per il vostro impianto?",
    ctaLead:
      "Contattateci: coinvolgiamo gli esperti di sicurezza giusti e restiamo il vostro interlocutore di riferimento per l'automazione.",
  },
  pt: {
    metaTitle: "Cibersegurança",
    metaDesc:
      "A cibersegurança industrial (segurança OT) é uma área altamente especializada. A Lienhard Automation colabora com especialistas de segurança reconhecidos: automação segura e conhecimento especializado de uma única fonte.",
    eyebrow: "Cibersegurança · Segurança OT",
    h1a: "Automação segura, ",
    h1accent: "em conjunto com especialistas",
    subtitle:
      "A cibersegurança industrial é uma área própria e altamente especializada. Nestes temas trabalhamos em estreita colaboração com parceiros de segurança reconhecidos, para que receba uma automação segura e fiável e o conhecimento especializado necessário de uma única fonte.",
    ctaHero: "Falar sobre o tema",
    whyEyebrow: "Porque é importante",
    whyTitle: "A segurança OT é diferente da segurança IT",
    whyLead:
      "As instalações industriais têm requisitos próprios, marcados pela máxima disponibilidade, ciclos de vida longos e ambientes herdados.",
    reasons: [
      { title: "Produção conectada", detail: "Mais conectividade, acesso remoto e IIoT aumentam a superfície de ataque das instalações industriais." },
      { title: "Disponibilidade em primeiro lugar", detail: "Na OT conta a máxima disponibilidade da instalação: as medidas de proteção devem assegurar a operação, não perturbá-la." },
      { title: "Ciclos de vida longos", detail: "As instalações funcionam durante décadas. Os sistemas herdados exigem uma proteção especial e bem pensada." },
    ],
    approachEyebrow: "A nossa abordagem",
    approachTitle: "Em conjunto com parceiros de segurança especializados",
    approachP1:
      "A automação é o nosso negócio principal. Para a cibersegurança industrial trazemos de forma direcionada especialistas reconhecidos que se dedicam diariamente apenas a isso.",
    approachP2: (
      <>
        Para si, isto significa: {b("um único interlocutor")}, responsabilidade
        de ponta a ponta e uma abordagem baseada em normas reconhecidas como{" "}
        {b("IEC 62443")} e no princípio {b("defense-in-depth")}.
      </>
    ),
    approachCta: "Pedir sem compromisso",
    approachPoints: [
      "Especialistas de cibersegurança reconhecidos na rede",
      "Um único interlocutor para automação e segurança",
      "Abordagem segundo IEC 62443 e defense-in-depth",
      "Foco na disponibilidade da sua instalação",
    ],
    topicsEyebrow: "Áreas temáticas",
    topicsTitle: "O que cobrimos com os nossos parceiros",
    topicsLead:
      "Do diagnóstico inicial à proteção contínua: os temas especializados são assumidos pelos nossos parceiros, coordenados através da Lienhard Automation.",
    topics: [
      { title: "Avaliação de segurança e análise de riscos", detail: "Tornar transparentes e avaliar as vulnerabilidades e os riscos da sua instalação." },
      { title: "Segmentação de redes IT/OT", detail: "Zonas, proteção de células e proteção de perímetro segundo o princípio defense-in-depth." },
      { title: "Hardening de sistemas e gestão de patches", detail: "Hardening de sistemas, bem como gestão de vulnerabilidades e atualizações." },
      { title: "Monitorização e gestão de emergências", detail: "Monitorização, backup/recuperação e um plano claro para situações de emergência." },
    ],
    note: "Mais informações sobre cibersegurança industrial e normas reconhecidas podem ser encontradas, entre outros, na Siemens. SIMATIC, WinCC e IEC 62443 são marcas ou normas dos respetivos titulares.",
    noteBtn: "Industrial Cybersecurity",
    ctaTitle: "A cibersegurança é um tema para a sua instalação?",
    ctaLead:
      "Contacte-nos: trazemos os especialistas de segurança certos e continuamos a ser o seu interlocutor de confiança para a automação.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: "/cybersecurity" },
  };
}

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

export default function CybersecurityPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {t.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              {t.h1a}
              <span className="text-accent-400">{t.h1accent}</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              {t.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                {t.ctaHero}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 — Why it matters */}
      <Section tone="light">
        <SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle} lead={t.whyLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-4 rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {reasonIcons[i]}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{reason.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Partnership */}
      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow-on-dark">{t.approachEyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.approachTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-300">{t.approachP1}</p>
            <p className="mt-4 leading-relaxed text-steel-300">{t.approachP2}</p>
            <div className="mt-8">
              <ButtonLink href="/kontakt" size="lg">
                {t.approachCta}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3">
            {t.approachPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl2 border border-navy-700 bg-navy-800/60 p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <span className="text-sm text-steel-200">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4 — Topics */}
      <Section tone="light">
        <SectionHeading eyebrow={t.topicsEyebrow} title={t.topicsTitle} lead={t.topicsLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.topics.map((topic, i) => (
            <Reveal key={topic.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {topicIcons[i]}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{topic.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{topic.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl2 border border-steel-200 bg-steel-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
              <Users className="h-5 w-5" />
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-steel-600">{t.note}</p>
          </div>
          <ButtonLink href={SIEMENS_CYBER_URL} variant="ghost" target="_blank" rel="noopener noreferrer" className="shrink-0">
            {t.noteBtn}
            <ExternalLink className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Section>

      <ContactCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
