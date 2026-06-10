/**
 * Profile of Ernesto Lienhard – career & achievements. Locale-aware (de/en/es).
 *
 * Facts are from verified sources (his own statements, real references); no CV
 * facts are invented.
 */

export type CareerEntry = {
  period: string;
  title: string;
  org?: string;
  text: string;
};

type L = "de" | "en" | "es";
const pick = (locale: string): L => (locale === "en" ? "en" : locale === "es" ? "es" : "de");

const careerByLocale: Record<L, CareerEntry[]> = {
  de: [
    { period: "Ausbildung", title: "Lehre als Elektromonteur", text: "Solide handwerkliche und elektrotechnische Grundausbildung – das Fundament der gesamten Laufbahn." },
    { period: "3 Jahre", title: "Flugzeug-Elektroniker", org: "SR Technics", text: "Anspruchsvolle Elektronik- und Systemarbeit an Flugzeugen – mit höchsten Anforderungen an Präzision, Sicherheit und Zuverlässigkeit." },
    { period: "2001–2003", title: "Verpackungsmaschinen, international", org: "SIG-Pack Verpackung AG", text: "Software und Inbetriebnahmen an Hochleistungs-Verpackungsmaschinen in Lateinamerika, Europa und den USA – der Einstieg in den internationalen Maschinen- und Anlagenbau." },
    { period: "2003–2004", title: "Internationale Inbetriebnahmen", org: "Romaco", text: "Inbetriebnahmen und Software-Einsätze in Europa, den USA, Mexiko und Jordanien." },
    { period: "2005–2011", title: "Internationale Gitter- & Radiatorenanlagen", org: "Schlatter AG", text: "Software-Entwicklung und Inbetriebsetzung von Schweiss-, Gitter- und Radiatorenanlagen weltweit – u. a. Türkei, Lettland, Brasilien und Mexiko." },
    { period: "Weiterbildung", title: "Techniker HF Automation", text: "Weiterbildung mit fundierter technischer Basis für durchdachte, zuverlässige Automatisierungslösungen." },
    { period: "seit 2013", title: "Selbstständig – Lienhard Automation GmbH", org: "eigene Projekte & internationale Mandate", text: "Eigene Automatisierungsprojekte (u. a. ARA/Abwasser und WinCC-Modernisierung) sowie – teils parallel – internationale Mandate, u. a. für Tecvil und Siemens Logistics AG (DHL, Schweizerische Post)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Berufsbegleitende Weiterbildung in Betriebswirtschaft – für die unternehmerische Führung und Weiterentwicklung des eigenen Betriebs." },
  ],
  en: [
    { period: "Apprenticeship", title: "Apprenticeship as an electrician", text: "Solid hands-on and electrical training – the foundation of the entire career." },
    { period: "3 years", title: "Aircraft electronics technician", org: "SR Technics", text: "Demanding electronics and systems work on aircraft – with the highest demands on precision, safety and reliability." },
    { period: "2001–2003", title: "Packaging machines, international", org: "SIG-Pack Verpackung AG", text: "Software and commissioning on high-performance packaging machines in Latin America, Europe and the USA – the entry into international machine and plant engineering." },
    { period: "2003–2004", title: "International commissioning", org: "Romaco", text: "Commissioning and software assignments in Europe, the USA, Mexico and Jordan." },
    { period: "2005–2011", title: "International grid & radiator lines", org: "Schlatter AG", text: "Software development and commissioning of welding, grid and radiator lines worldwide – including Turkey, Latvia, Brazil and Mexico." },
    { period: "Further education", title: "Technician HF Automation", text: "Further education with a sound technical basis for well-considered, reliable automation solutions." },
    { period: "since 2013", title: "Self-employed – Lienhard Automation GmbH", org: "own projects & international assignments", text: "Own automation projects (incl. WWTP/wastewater and WinCC modernization) as well as – partly in parallel – international assignments, including for Tecvil and Siemens Logistics AG (DHL, Swiss Post)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Part-time further education in business administration – for the entrepreneurial management and development of my own company." },
  ],
  es: [
    { period: "Formación", title: "Aprendizaje de electricista", text: "Sólida formación práctica y electrotécnica: la base de toda la trayectoria." },
    { period: "3 años", title: "Técnico en electrónica de aeronaves", org: "SR Technics", text: "Exigente trabajo de electrónica y sistemas en aeronaves, con las máximas exigencias de precisión, seguridad y fiabilidad." },
    { period: "2001–2003", title: "Máquinas de envasado, internacional", org: "SIG-Pack Verpackung AG", text: "Software y puestas en marcha en máquinas de envasado de alto rendimiento en América Latina, Europa y EE. UU.: la entrada en la construcción internacional de máquinas e instalaciones." },
    { period: "2003–2004", title: "Puestas en marcha internacionales", org: "Romaco", text: "Puestas en marcha y trabajos de software en Europa, EE. UU., México y Jordania." },
    { period: "2005–2011", title: "Líneas internacionales de mallas y radiadores", org: "Schlatter AG", text: "Desarrollo de software y puesta en marcha de líneas de soldadura, mallas y radiadores en todo el mundo, entre otros en Turquía, Letonia, Brasil y México." },
    { period: "Formación continua", title: "Técnico HF en automatización", text: "Formación continua con una sólida base técnica para soluciones de automatización bien pensadas y fiables." },
    { period: "desde 2013", title: "Autónomo – Lienhard Automation GmbH", org: "proyectos propios y encargos internacionales", text: "Proyectos de automatización propios (entre otros EDAR/aguas residuales y modernización de WinCC) así como, en parte en paralelo, encargos internacionales, entre otros para Tecvil y Siemens Logistics AG (DHL, Correos de Suiza)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Formación continua a tiempo parcial en administración de empresas, para la dirección empresarial y el desarrollo de la propia empresa." },
  ],
};

const achievementsByLocale: Record<L, string[]> = {
  de: [
    "Mix-Mail Verteilzentrum für die Schweizerische Post (Zürich Mülligen) – Weltneuheit in der Sortierung, bis 19'000 Sendungen/Stunde",
    "DHL Gateway Basel: Software-Entwicklung für ein neues Logistikzentrum mit über 500 Bändern, Sortern und Endstellen",
    "Internationale Inbetriebnahmen in Mexiko, Türkei, Brasilien, Lettland, Belarus und Deutschland",
    "Sicherheitssteuerung für die Schlammverbrennung (Werdhölzli, Zürich)",
    "Zahlreiche ARA-Projekte: Regenbecken, Abwasserwärmerückgewinnung und Membranbiologie",
    "Migration von Altsteuerungen (S5 → S7 → TIA Portal) und Software-Erweiterungen bestehender Anlagen",
    "Stahl- & Industrieanlagen: internationale SPS-Programmierung und Inbetriebnahme",
  ],
  en: [
    "Mix-Mail distribution centre for Swiss Post (Zurich Mülligen) – a world first in sorting, up to 19,000 items per hour",
    "DHL Gateway Basel: software development for a new logistics centre with more than 500 belts, sorters and chutes",
    "International commissioning in Mexico, Turkey, Brazil, Latvia, Belarus and Germany",
    "Safety controller for the sludge incineration plant (Werdhölzli, Zurich)",
    "Numerous wastewater-treatment projects: stormwater tanks, wastewater heat recovery and membrane biology",
    "Migration of legacy controllers (S5 → S7 → TIA Portal) and software extensions of existing plants",
    "Steel & industrial plants: international PLC programming and commissioning",
  ],
  es: [
    "Centro de distribución Mix-Mail para Correos de Suiza (Zúrich Mülligen): una novedad mundial en clasificación, hasta 19 000 envíos por hora",
    "DHL Gateway Basilea: desarrollo de software para un nuevo centro logístico con más de 500 cintas, clasificadores y destinos",
    "Puestas en marcha internacionales en México, Turquía, Brasil, Letonia, Bielorrusia y Alemania",
    "Control de seguridad para la incineración de lodos (Werdhölzli, Zúrich)",
    "Numerosos proyectos de EDAR: tanques de tormenta, recuperación de calor de aguas residuales y biología de membrana",
    "Migración de controladores antiguos (S5 → S7 → TIA Portal) y ampliaciones de software de instalaciones existentes",
    "Instalaciones siderúrgicas e industriales: programación y puesta en marcha de PLC a nivel internacional",
  ],
};

export function getCareer(locale: string): CareerEntry[] {
  return careerByLocale[pick(locale)];
}
export function getAchievements(locale: string): string[] {
  return achievementsByLocale[pick(locale)];
}
