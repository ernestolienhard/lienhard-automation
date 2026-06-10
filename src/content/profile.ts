/**
 * Profile of Ernesto Lienhard – career & achievements.
 * Locale-aware (de/en/es/fr/it/pt). No CV facts are invented.
 */
import { pageLocale, type Locale } from "@/i18n/config";

export type CareerEntry = {
  period: string;
  title: string;
  org?: string;
  text: string;
};

const careerByLocale: Record<Locale, CareerEntry[]> = {
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
  fr: [
    { period: "Formation", title: "Apprentissage d'électricien", text: "Solide formation pratique et électrotechnique : le fondement de toute la carrière." },
    { period: "3 ans", title: "Électronicien aéronautique", org: "SR Technics", text: "Travail exigeant d'électronique et de systèmes sur avions, avec les plus hautes exigences de précision, de sécurité et de fiabilité." },
    { period: "2001–2003", title: "Machines d'emballage, international", org: "SIG-Pack Verpackung AG", text: "Logiciel et mises en service sur des machines d'emballage à haute performance en Amérique latine, en Europe et aux États-Unis : l'entrée dans la construction internationale de machines et d'installations." },
    { period: "2003–2004", title: "Mises en service internationales", org: "Romaco", text: "Mises en service et missions logicielles en Europe, aux États-Unis, au Mexique et en Jordanie." },
    { period: "2005–2011", title: "Lignes internationales de treillis et de radiateurs", org: "Schlatter AG", text: "Développement logiciel et mise en service de lignes de soudage, de treillis et de radiateurs dans le monde entier, notamment en Turquie, en Lettonie, au Brésil et au Mexique." },
    { period: "Formation continue", title: "Technicien HF en automatisation", text: "Formation continue avec une solide base technique pour des solutions d'automatisation réfléchies et fiables." },
    { period: "depuis 2013", title: "Indépendant – Lienhard Automation GmbH", org: "projets propres et mandats internationaux", text: "Projets d'automatisation propres (notamment STEP/eaux usées et modernisation WinCC) ainsi que, en partie en parallèle, des mandats internationaux, notamment pour Tecvil et Siemens Logistics AG (DHL, La Poste suisse)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Formation continue en cours d'emploi en gestion d'entreprise, pour la direction entrepreneuriale et le développement de sa propre entreprise." },
  ],
  it: [
    { period: "Formazione", title: "Apprendistato come elettricista", text: "Solida formazione pratica ed elettrotecnica: il fondamento dell'intera carriera." },
    { period: "3 anni", title: "Elettronico aeronautico", org: "SR Technics", text: "Impegnativo lavoro di elettronica e sistemi su aeromobili, con i massimi requisiti di precisione, sicurezza e affidabilità." },
    { period: "2001–2003", title: "Macchine per imballaggio, internazionale", org: "SIG-Pack Verpackung AG", text: "Software e messe in servizio su macchine per imballaggio ad alte prestazioni in America Latina, Europa e USA: l'ingresso nella costruzione internazionale di macchine e impianti." },
    { period: "2003–2004", title: "Messe in servizio internazionali", org: "Romaco", text: "Messe in servizio e interventi software in Europa, USA, Messico e Giordania." },
    { period: "2005–2011", title: "Linee internazionali di reti e radiatori", org: "Schlatter AG", text: "Sviluppo software e messa in servizio di linee di saldatura, reti e radiatori in tutto il mondo, tra cui Turchia, Lettonia, Brasile e Messico." },
    { period: "Formazione continua", title: "Tecnico HF in automazione", text: "Formazione continua con una solida base tecnica per soluzioni di automazione ben studiate e affidabili." },
    { period: "dal 2013", title: "Lavoratore autonomo – Lienhard Automation GmbH", org: "progetti propri e incarichi internazionali", text: "Progetti di automazione propri (tra cui IDA/acque reflue e modernizzazione WinCC) nonché, in parte in parallelo, incarichi internazionali, tra cui per Tecvil e Siemens Logistics AG (DHL, Posta svizzera)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Formazione continua in economia aziendale, parallela al lavoro, per la gestione imprenditoriale e lo sviluppo della propria azienda." },
  ],
  pt: [
    { period: "Formação", title: "Aprendizagem de eletricista", text: "Sólida formação prática e eletrotécnica: a base de toda a carreira." },
    { period: "3 anos", title: "Técnico de eletrónica aeronáutica", org: "SR Technics", text: "Trabalho exigente de eletrónica e sistemas em aeronaves, com os mais elevados requisitos de precisão, segurança e fiabilidade." },
    { period: "2001–2003", title: "Máquinas de embalagem, internacional", org: "SIG-Pack Verpackung AG", text: "Software e colocações em serviço em máquinas de embalagem de alto desempenho na América Latina, Europa e EUA: a entrada na construção internacional de máquinas e instalações." },
    { period: "2003–2004", title: "Colocações em serviço internacionais", org: "Romaco", text: "Colocações em serviço e trabalhos de software na Europa, EUA, México e Jordânia." },
    { period: "2005–2011", title: "Linhas internacionais de redes e radiadores", org: "Schlatter AG", text: "Desenvolvimento de software e colocação em serviço de linhas de soldadura, redes e radiadores em todo o mundo, incluindo Turquia, Letónia, Brasil e México." },
    { period: "Formação contínua", title: "Técnico HF em automação", text: "Formação contínua com uma sólida base técnica para soluções de automação bem pensadas e fiáveis." },
    { period: "desde 2013", title: "Trabalhador independente – Lienhard Automation GmbH", org: "projetos próprios e mandatos internacionais", text: "Projetos de automação próprios (entre outros ETAR/águas residuais e modernização de WinCC) bem como, em parte em paralelo, mandatos internacionais, entre outros para a Tecvil e a Siemens Logistics AG (DHL, Correios da Suíça)." },
    { period: "2025–2026", title: "Professional Bachelor in Business Administration", text: "Formação contínua em gestão de empresas, em regime pós-laboral, para a gestão empresarial e o desenvolvimento da própria empresa." },
  ],
};

const achievementsByLocale: Record<Locale, string[]> = {
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
  fr: [
    "Centre de tri Mix-Mail pour La Poste suisse (Zurich Mülligen) : une première mondiale en matière de tri, jusqu'à 19 000 envois par heure",
    "DHL Gateway Bâle : développement logiciel pour un nouveau centre logistique avec plus de 500 convoyeurs, trieurs et exutoires",
    "Mises en service internationales au Mexique, en Turquie, au Brésil, en Lettonie, au Bélarus et en Allemagne",
    "Commande de sécurité pour l'incinération des boues (Werdhölzli, Zurich)",
    "Nombreux projets de STEP : bassins d'orage, récupération de chaleur des eaux usées et biologie membranaire",
    "Migration d'anciennes commandes (S5 → S7 → TIA Portal) et extensions logicielles d'installations existantes",
    "Installations sidérurgiques et industrielles : programmation API et mise en service à l'international",
  ],
  it: [
    "Centro di smistamento Mix-Mail per la Posta svizzera (Zurigo Mülligen): una novità mondiale nello smistamento, fino a 19 000 invii all'ora",
    "DHL Gateway Basilea: sviluppo software per un nuovo centro logistico con oltre 500 nastri, sorter e scivoli",
    "Messe in servizio internazionali in Messico, Turchia, Brasile, Lettonia, Bielorussia e Germania",
    "Controllo di sicurezza per l'incenerimento dei fanghi (Werdhölzli, Zurigo)",
    "Numerosi progetti di IDA: bacini di pioggia, recupero di calore dalle acque reflue e biologia a membrana",
    "Migrazione di vecchi controllori (S5 → S7 → TIA Portal) ed estensioni software di impianti esistenti",
    "Impianti siderurgici e industriali: programmazione PLC e messa in servizio a livello internazionale",
  ],
  pt: [
    "Centro de distribuição Mix-Mail para os Correios da Suíça (Zurique Mülligen): uma novidade mundial na triagem, até 19 000 envios por hora",
    "DHL Gateway Basileia: desenvolvimento de software para um novo centro logístico com mais de 500 tapetes, sorters e destinos",
    "Colocações em serviço internacionais no México, Turquia, Brasil, Letónia, Bielorrússia e Alemanha",
    "Controlo de segurança para a incineração de lamas (Werdhölzli, Zurique)",
    "Numerosos projetos de ETAR: bacias de tempestade, recuperação de calor de águas residuais e biologia de membrana",
    "Migração de controladores antigos (S5 → S7 → TIA Portal) e ampliações de software de instalações existentes",
    "Instalações siderúrgicas e industriais: programação de PLC e colocação em serviço a nível internacional",
  ],
};

export function getCareer(locale: string): CareerEntry[] {
  return careerByLocale[pageLocale(locale)];
}
export function getAchievements(locale: string): string[] {
  return achievementsByLocale[pageLocale(locale)];
}
