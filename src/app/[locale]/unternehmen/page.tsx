import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { getPartners } from "@/content/partners";
import { getCareer, getAchievements } from "@/content/profile";
import { pageLocale } from "@/i18n/config";
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
  es: {
    metaTitle: "Sobre mí",
    metaDesc: "Sobre mí – Ernesto Lienhard, Técnico HF en automatización. Mi trayectoria, mis fortalezas en el mundo Siemens (STEP 7, TIA Portal, PCS 7, WinCC) y una red internacional de socios.",
    eyebrow: "Sobre mí",
    h1: "Sobre mí",
    subtitle: "Soy su especialista en automatización Siemens en la construcción industrial de máquinas e instalaciones: SIMATIC STEP 7 Classic, TIA Portal y PCS 7, visualización con WinCC Unified y WinCC OA, y conectividad integral mediante OPC UA, PROFINET y PROFIBUS, del asesoramiento a la puesta en marcha.",
    focusEyebrow: "Áreas de trabajo",
    focusTitle: "Dónde están mis fortalezas",
    focusAreas: [
      { title: "Tecnología de control", text: "Tecnología de control y proceso para instalaciones industriales exigentes." },
      { title: "Desarrollo de software de PLC", text: "Software de PLC eficaz y mantenible con una estructura clara y una arquitectura coherente." },
      { title: "Comunicación e interfaces", text: "Conexión en red mediante Modbus RTU/TCP y OPC UA, incl. OPC UA GDS Push." },
      { title: "Visualización de procesos", text: "Visualización de procesos y control de supervisión, especialmente sólido con WinCC Unified y WinCC OA." },
      { title: "Migración y modernización", text: "Migración de controladores antiguos (S5 → S7 → TIA Portal) y modernización de WinCC flexible a WinCC Unified." },
      { title: "Ingeniería de sistemas y formación", text: "Ingeniería de sistemas, así como formación e instrucción de sus empleados." },
    ],
    portraitLabel: `Retrato · ${siteConfig.contact.person}`,
    portraitNote: "Marcador de imagen: a proporcionar por el cliente.",
    mgmtEyebrow: "Dirección",
    role: "Técnico HF en automatización",
    bio1: "Con más de 25 años de experiencia en montaje, automatización y puesta en marcha, dirijo Lienhard Automation con profundidad técnica y visión internacional. Mi fortaleza está en el mundo Siemens: SIMATIC STEP 7 Classic, TIA Portal y PCS 7, programado en FUP, KOP, AWL y SCL, incl. controladores de seguridad.",
    bio2: "En visualización y control de supervisión soy especialmente sólido con WinCC Unified y WinCC OA; la conexión en red limpia de las instalaciones la realizo mediante OPC UA, Modbus (RTU/TCP), PROFINET y PROFIBUS, del primer asesoramiento a la puesta en marcha in situ.",
    bio3: "Durante más de diez años trabajé mayoritariamente en el extranjero, en cinco continentes, desde América del Norte y del Sur, pasando por toda Europa y África, hasta Asia (entre otros Japón). Estos valiosos años me aportaron mucho, tanto técnicamente como en el trato con las culturas más diversas: una auténtica ventaja para cualquier proyecto internacional.",
    werdegangEyebrow: "Trayectoria",
    werdegangTitle: "El camino profesional",
    werdegangLead: "De electricista, pasando por la aviación, hasta la automatización industrial: más de 25 años de práctica técnica como base para soluciones fiables.",
    erfolgeEyebrow: "Logros e hitos",
    erfolgeTitle: "Lo que he logrado en más de 25 años",
    erfolgeLead: "Una selección de proyectos implementados con éxito en el país y en el extranjero.",
    valuesEyebrow: "Valores",
    valuesTitle: "Aquello en lo que puede confiar",
    values: [
      { title: "Independencia del fabricante", text: "Recomendaciones independientes en interés de su instalación, no de un fabricante." },
      { title: "Precisión", text: "Conceptos limpios, arquitectura de programa coherente, documentación trazable." },
      { title: "Fiabilidad", text: "Cumplimiento de plazos y soporte más allá de la puesta en marcha." },
      { title: "Experiencia internacional", text: "Proyectos y puestas en marcha en Europa, América del Norte y del Sur." },
    ],
    partnerEyebrow: "Red de socios",
    partnerTitle: "Más fuertes juntos",
    partnerLead: "Mi red consolidada de empresas asociadas en Suiza, Europa y EE. UU., para proyectos de cualquier tamaño.",
  },
  fr: {
    metaTitle: "À propos",
    metaDesc: "À propos – Ernesto Lienhard, technicien HF en automatisation. Mon parcours, mes points forts dans l'univers Siemens (STEP 7, TIA Portal, PCS 7, WinCC) et un réseau de partenaires international.",
    eyebrow: "À propos",
    h1: "À propos",
    subtitle: "Je suis votre spécialiste de l'automatisation Siemens dans la construction industrielle de machines et d'installations : SIMATIC STEP 7 Classic, TIA Portal et PCS 7, visualisation avec WinCC Unified et WinCC OA, et connectivité intégrale via OPC UA, PROFINET et PROFIBUS, du conseil à la mise en service.",
    focusEyebrow: "Domaines de travail",
    focusTitle: "Où se situent mes points forts",
    focusAreas: [
      { title: "Technique de commande", text: "Technique de commande et de process pour des installations industrielles exigeantes." },
      { title: "Développement de logiciels API", text: "Logiciel API efficace et maintenable avec une structure claire et une architecture cohérente." },
      { title: "Communication et interfaces", text: "Mise en réseau via Modbus RTU/TCP et OPC UA, y compris OPC UA GDS Push." },
      { title: "Visualisation de process", text: "Visualisation de process et conduite, particulièrement solide avec WinCC Unified et WinCC OA." },
      { title: "Migration et modernisation", text: "Migration d'anciennes commandes (S5 → S7 → TIA Portal) et modernisation de WinCC flexible vers WinCC Unified." },
      { title: "Ingénierie système et formation", text: "Ingénierie système ainsi que formation et initiation de vos collaborateurs." },
    ],
    portraitLabel: `Portrait · ${siteConfig.contact.person}`,
    portraitNote: "Image réservée : à fournir par le client.",
    mgmtEyebrow: "Direction",
    role: "Technicien HF en automatisation",
    bio1: "Avec plus de 25 ans d'expérience en montage, automatisation et mise en service, je dirige Lienhard Automation avec une profondeur technique et une vision internationale. Mon point fort se situe dans l'univers Siemens : SIMATIC STEP 7 Classic, TIA Portal et PCS 7, programmés en CONT, LOG, LIST et SCL, y compris les commandes de sécurité.",
    bio2: "En visualisation et conduite, je suis particulièrement solide avec WinCC Unified et WinCC OA ; je réalise la mise en réseau propre des installations via OPC UA, Modbus (RTU/TCP), PROFINET et PROFIBUS, du premier conseil à la mise en service sur site.",
    bio3: "Pendant plus de dix ans, j'ai travaillé majoritairement à l'étranger, sur cinq continents, de l'Amérique du Nord et du Sud à l'Asie (dont le Japon) en passant par toute l'Europe et l'Afrique. Ces années précieuses m'ont beaucoup apporté, tant sur le plan technique que dans les relations avec les cultures les plus diverses : un véritable atout pour tout projet international.",
    werdegangEyebrow: "Parcours",
    werdegangTitle: "Le chemin professionnel",
    werdegangLead: "D'électricien à l'automatisation industrielle, en passant par l'aviation : plus de 25 ans de pratique technique comme base de solutions fiables.",
    erfolgeEyebrow: "Réalisations et jalons",
    erfolgeTitle: "Ce que j'ai accompli en plus de 25 ans",
    erfolgeLead: "Un aperçu de projets réalisés avec succès en Suisse et à l'étranger.",
    valuesEyebrow: "Valeurs",
    valuesTitle: "Ce sur quoi vous pouvez compter",
    values: [
      { title: "Indépendance vis-à-vis du fabricant", text: "Des recommandations indépendantes dans l'intérêt de votre installation, pas d'un fabricant." },
      { title: "Précision", text: "Concepts propres, architecture de programme cohérente, documentation traçable." },
      { title: "Fiabilité", text: "Respect des délais et support au-delà de la mise en service." },
      { title: "Expérience internationale", text: "Projets et mises en service en Europe, en Amérique du Nord et du Sud." },
    ],
    partnerEyebrow: "Réseau de partenaires",
    partnerTitle: "Plus forts ensemble",
    partnerLead: "Mon réseau bien rodé d'entreprises partenaires en Suisse, en Europe et aux États-Unis, pour des projets de toute taille.",
  },
  it: {
    metaTitle: "Chi sono",
    metaDesc: "Chi sono – Ernesto Lienhard, tecnico HF in automazione. Il mio percorso, i miei punti di forza nel mondo Siemens (STEP 7, TIA Portal, PCS 7, WinCC) e una rete di partner internazionale.",
    eyebrow: "Chi sono",
    h1: "Chi sono",
    subtitle: "Sono il vostro specialista per l'automazione Siemens nella costruzione industriale di macchine e impianti: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualizzazione con WinCC Unified e WinCC OA, e connettività integrale tramite OPC UA, PROFINET e PROFIBUS, dalla consulenza alla messa in servizio.",
    focusEyebrow: "Ambiti di lavoro",
    focusTitle: "Dove si trovano i miei punti di forza",
    focusAreas: [
      { title: "Tecnologia di controllo", text: "Tecnologia di controllo e di processo per impianti industriali esigenti." },
      { title: "Sviluppo software PLC", text: "Software PLC efficace e manutenibile con una struttura chiara e un'architettura coerente." },
      { title: "Comunicazione e interfacce", text: "Collegamento in rete tramite Modbus RTU/TCP e OPC UA, incl. OPC UA GDS Push." },
      { title: "Visualizzazione di processi", text: "Visualizzazione di processi e conduzione, particolarmente solida con WinCC Unified e WinCC OA." },
      { title: "Migrazione e modernizzazione", text: "Migrazione di vecchi controllori (S5 → S7 → TIA Portal) e modernizzazione da WinCC flexible a WinCC Unified." },
      { title: "Ingegneria di sistema e formazione", text: "Ingegneria di sistema nonché formazione e istruzione dei vostri collaboratori." },
    ],
    portraitLabel: `Ritratto · ${siteConfig.contact.person}`,
    portraitNote: "Segnaposto immagine: da fornire a cura del cliente.",
    mgmtEyebrow: "Direzione",
    role: "Tecnico HF in automazione",
    bio1: "Con oltre 25 anni di esperienza nel montaggio, nell'automazione e nella messa in servizio, dirigo Lienhard Automation con profondità tecnica e visione internazionale. Il mio punto di forza è nel mondo Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, programmati in FUP, KOP, AWL e SCL, inclusi i controllori di sicurezza.",
    bio2: "Nella visualizzazione e conduzione sono particolarmente solido con WinCC Unified e WinCC OA; il collegamento in rete pulito degli impianti lo realizzo tramite OPC UA, Modbus (RTU/TCP), PROFINET e PROFIBUS, dalla prima consulenza alla messa in servizio in loco.",
    bio3: "Per oltre dieci anni ho lavorato prevalentemente all'estero, in cinque continenti, dall'America del Nord e del Sud, passando per tutta l'Europa e l'Africa, fino all'Asia (tra cui il Giappone). Questi anni preziosi mi hanno dato molto, sia tecnicamente sia nel rapporto con le culture più diverse: un vero vantaggio per qualsiasi progetto internazionale.",
    werdegangEyebrow: "Percorso",
    werdegangTitle: "Il percorso professionale",
    werdegangLead: "Dall'elettricista all'automazione industriale, passando per l'aviazione: oltre 25 anni di pratica tecnica come base per soluzioni affidabili.",
    erfolgeEyebrow: "Risultati e traguardi",
    erfolgeTitle: "Cosa ho realizzato in oltre 25 anni",
    erfolgeLead: "Una selezione di progetti realizzati con successo in Svizzera e all'estero.",
    valuesEyebrow: "Valori",
    valuesTitle: "Ciò su cui potete contare",
    values: [
      { title: "Indipendenza dal produttore", text: "Raccomandazioni indipendenti nell'interesse del vostro impianto, non di un produttore." },
      { title: "Precisione", text: "Concetti puliti, architettura di programma coerente, documentazione tracciabile." },
      { title: "Affidabilità", text: "Rispetto delle scadenze e supporto oltre la messa in servizio." },
      { title: "Esperienza internazionale", text: "Progetti e messe in servizio in Europa, America del Nord e del Sud." },
    ],
    partnerEyebrow: "Rete di partner",
    partnerTitle: "Più forti insieme",
    partnerLead: "La mia rete consolidata di aziende partner in Svizzera, Europa e USA, per progetti di qualsiasi dimensione.",
  },
  pt: {
    metaTitle: "Sobre mim",
    metaDesc: "Sobre mim – Ernesto Lienhard, técnico HF em automação. O meu percurso, os meus pontos fortes no mundo Siemens (STEP 7, TIA Portal, PCS 7, WinCC) e uma rede internacional de parceiros.",
    eyebrow: "Sobre mim",
    h1: "Sobre mim",
    subtitle: "Sou o seu especialista em automação Siemens na construção industrial de máquinas e instalações: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, visualização com WinCC Unified e WinCC OA, e conectividade integral através de OPC UA, PROFINET e PROFIBUS, do aconselhamento à colocação em serviço.",
    focusEyebrow: "Áreas de trabalho",
    focusTitle: "Onde estão os meus pontos fortes",
    focusAreas: [
      { title: "Tecnologia de controlo", text: "Tecnologia de controlo e de processo para instalações industriais exigentes." },
      { title: "Desenvolvimento de software de PLC", text: "Software de PLC eficaz e fácil de manter com uma estrutura clara e uma arquitetura coerente." },
      { title: "Comunicação e interfaces", text: "Ligação em rede através de Modbus RTU/TCP e OPC UA, incl. OPC UA GDS Push." },
      { title: "Visualização de processos", text: "Visualização de processos e condução, particularmente sólida com WinCC Unified e WinCC OA." },
      { title: "Migração e modernização", text: "Migração de controladores antigos (S5 → S7 → TIA Portal) e modernização de WinCC flexible para WinCC Unified." },
      { title: "Engenharia de sistemas e formação", text: "Engenharia de sistemas, bem como formação e instrução dos seus colaboradores." },
    ],
    portraitLabel: `Retrato · ${siteConfig.contact.person}`,
    portraitNote: "Marcador de imagem: a fornecer pelo cliente.",
    mgmtEyebrow: "Direção",
    role: "Técnico HF em automação",
    bio1: "Com mais de 25 anos de experiência em montagem, automação e colocação em serviço, dirijo a Lienhard Automation com profundidade técnica e visão internacional. O meu ponto forte está no mundo Siemens: SIMATIC STEP 7 Classic, TIA Portal e PCS 7, programados em FBD, LAD, STL e SCL, incluindo controladores de segurança.",
    bio2: "Em visualização e condução sou particularmente sólido com WinCC Unified e WinCC OA; a ligação em rede limpa das instalações realizo-a através de OPC UA, Modbus (RTU/TCP), PROFINET e PROFIBUS, do primeiro aconselhamento à colocação em serviço no local.",
    bio3: "Durante mais de dez anos trabalhei maioritariamente no estrangeiro, em cinco continentes, desde a América do Norte e do Sul, passando por toda a Europa e África, até à Ásia (incluindo o Japão). Estes anos valiosos deram-me muito, tanto a nível técnico como no trato com as mais diversas culturas: uma verdadeira vantagem para qualquer projeto internacional.",
    werdegangEyebrow: "Percurso",
    werdegangTitle: "O caminho profissional",
    werdegangLead: "De eletricista à automação industrial, passando pela aviação: mais de 25 anos de prática técnica como base para soluções fiáveis.",
    erfolgeEyebrow: "Conquistas e marcos",
    erfolgeTitle: "O que alcancei em mais de 25 anos",
    erfolgeLead: "Uma seleção de projetos implementados com sucesso na Suíça e no estrangeiro.",
    valuesEyebrow: "Valores",
    valuesTitle: "Aquilo em que pode confiar",
    values: [
      { title: "Independência do fabricante", text: "Recomendações independentes no interesse da sua instalação, não de um fabricante." },
      { title: "Precisão", text: "Conceitos limpos, arquitetura de programa coerente, documentação rastreável." },
      { title: "Fiabilidade", text: "Cumprimento de prazos e suporte para além da colocação em serviço." },
      { title: "Experiência internacional", text: "Projetos e colocações em serviço na Europa, América do Norte e do Sul." },
    ],
    partnerEyebrow: "Rede de parceiros",
    partnerTitle: "Mais fortes juntos",
    partnerLead: "A minha rede consolidada de empresas parceiras na Suíça, Europa e EUA, para projetos de qualquer dimensão.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const t = T[pageLocale(params.locale)];
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/unternehmen" } };
}

export default function UnternehmenPage({ params }: { params: { locale: string } }) {
  const locale = pageLocale(params.locale);
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
