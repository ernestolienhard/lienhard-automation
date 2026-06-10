/**
 * Project references – locale-aware (de/en). Language-neutral fields (year,
 * location, category) live in `base`; translated fields (title, description,
 * technologies) live in `txt` and are merged per locale.
 *
 * Do not fabricate clients or projects.
 */

export type ProjectCategory =
  | "infrastruktur"
  | "logistik"
  | "abwasser"
  | "stahl"
  | "retrofit";

export type Project = {
  year: string;
  title: string;
  location: string;
  category: ProjectCategory;
  technologies: string[];
  description: string;
};

type Base = { year: string; location: string; category: ProjectCategory };
type Txt = { title: string; description: string; technologies: string[] };

const base: Base[] = [
  { year: "2024–2026", location: "Kanton Zürich", category: "infrastruktur" },
  { year: "2019–2021", location: "Zürich Mülligen", category: "logistik" },
  { year: "2016–2018", location: "Basel", category: "logistik" },
  { year: "2013–2016", location: "Zermatt VS", category: "abwasser" },
  { year: "2026", location: "Zürich Altstetten", category: "retrofit" },
  { year: "2025–2026", location: "Schweiz", category: "infrastruktur" },
  { year: "2023", location: "Schweiz", category: "infrastruktur" },
  { year: "2023", location: "Schweiz", category: "infrastruktur" },
  { year: "2018", location: "ARA Reinach ZH", category: "abwasser" },
  { year: "2018", location: "ARA Elgg ZH", category: "abwasser" },
  { year: "2017", location: "Sennhof ZH", category: "abwasser" },
  { year: "2017", location: "Huggenberg ZH", category: "abwasser" },
  { year: "2017", location: "Dickbuch ZH", category: "abwasser" },
  { year: "2017", location: "Hauptwil SG", category: "abwasser" },
  { year: "2017", location: "Niederwil SG", category: "abwasser" },
  { year: "2016", location: "ARA Lugano TI", category: "abwasser" },
  { year: "2016", location: "ARA Zermatt VS", category: "abwasser" },
  { year: "2015", location: "ARA Zermatt VS", category: "abwasser" },
  { year: "2015", location: "ARA Oensingen SO", category: "abwasser" },
  { year: "2015", location: "Arnegg SG", category: "abwasser" },
  { year: "2015", location: "Andwil SG", category: "abwasser" },
  { year: "2015", location: "ARA Zermatt VS", category: "abwasser" },
  { year: "2015", location: "Henessen SG", category: "abwasser" },
  { year: "2015", location: "Rheinfelden AG", category: "abwasser" },
  { year: "2014", location: "ARA Zermatt VS", category: "abwasser" },
  { year: "2015", location: "Werdhölzli, Zürich", category: "abwasser" },
  { year: "2014", location: "Werdhölzli, Zürich", category: "abwasser" },
  { year: "2013", location: "ARA Buchs ZH", category: "abwasser" },
  { year: "2005–2011", location: "Mexiko", category: "stahl" },
  { year: "2005–2011", location: "Türkei", category: "stahl" },
  { year: "2005–2011", location: "Lettland", category: "stahl" },
  { year: "2005–2011", location: "Weissrussland", category: "stahl" },
  { year: "2014", location: "Horth, Deutschland", category: "stahl" },
  { year: "2005–2011", location: "Brasilien", category: "retrofit" },
  { year: "2005–2011", location: "Deutschland", category: "retrofit" },
  { year: "2014", location: "Kehl, Deutschland", category: "retrofit" },
  { year: "2014", location: "Warren, USA", category: "retrofit" },
];

const txt: Record<"de" | "en", Txt[]> = {
  de: [
    { title: "EKZ – Öffentliche Beleuchtung, Kanton Zürich", technologies: ["WinCC OA", "TIA Portal", "S7-1500", "OPC UA", "OPC UA GDS Push"], description: "Zentrale, sichere Lichtsteuerung für die Elektrizitätswerke des Kantons Zürich (EKZ): rund 3'000 SPS (SIMATIC S7-1500) in über 2'500 Trafostationen, gesteuert mit WinCC OA SCADA und programmiert im TIA Portal. Verschlüsselte OPC-UA-Kommunikation inkl. OPC UA GDS Push für die zentrale Zertifikatsverwaltung. Realisiert mit Siemens Schweiz DI AG." },
    { title: "Mix-Mail Verteilzentrum – Schweizerische Post", technologies: ["Siemens", "Cross-Belt-Sorter", "Fördertechnik", "Automatisierung"], description: "Software-Entwicklung für die vollautomatische Sortierung von Mischsendungen (Mix-Mail) – eine Weltneuheit in der Sortierung. Anlagenleistung bis 19'000 Sendungen/Stunde, ca. 1'400 Zielstellen und 5 Cross-Belt-Sorter auf zwei Ebenen. Realisiert mit Siemens Postal, Parcel & Airport Logistics." },
    { title: "DHL Gateway Basel – neues Logistikzentrum", technologies: ["Siemens", "Fördertechnik", "Automatisierung"], description: "Software-Entwicklung für ein komplettes Logistikzentrum von DHL Express – Konzepte für Steuerung, Automatisierung sowie anlagen- und applikationsspezifische Software. Verantwortlich für die Fördertechnik mit über 500 Bändern, Sortern und Endstellen; Sortierleistung rund 10'000 Sendungen/Stunde. Realisiert mit Siemens Logistics AG." },
    { title: "ARA Zermatt – grösste Membranbiologieanlage der Schweiz", technologies: ["Siemens S7", "WinCC OA", "HLK", "SCADA"], description: "Neuprogrammierung der gesamten Kläranlage samt HLK – die grösste Membranbiologieanlage der Schweiz, in einer Kaverne im Berginnern. Steuerung mit über 10 SIMATIC-CPUs (STEP 7) und WinCC OA als SCADA-Leitsystem; Ausbaugrösse 60'000 Einwohner." },
    { title: "SBB – Querwagen 360°, Zürich Altstetten", technologies: ["STEP 7", "TIA Portal"], description: "Hochrüstung der bestehenden SPS von STEP 7 auf TIA Portal samt Software-Anpassung für die Querwagen-Verschiebung mit 360-Grad-Funktion. Realisiert mit Siemens Schweiz DI AG." },
    { title: "Equinix – Rechenzentrum-Erweiterung", technologies: ["PCS 7", "Modbus RTU", "Modbus TCP"], description: "Erweiterung eines bestehenden Rechenzentrums um ein neues Stockwerk samt Generatoren-System; Datenverarbeitung via Modbus RTU und TCP. Realisiert mit Siemens Schweiz DI AG." },
    { title: "Equinix – PCS 7 Upgrade auf V9.1", technologies: ["PCS 7 V9.1", "PH", "IF"], description: "Hochrüstung eines bestehenden Rechenzentrum-Projekts auf SIMATIC PCS 7 V9.1 (inkl. PH und IF). Realisiert mit Siemens Schweiz DI AG." },
    { title: "Equinix – PCS 7 Upgrade auf V9.1 (2. Standort)", technologies: ["PCS 7 V9.1", "PH", "IF"], description: "Hochrüstung eines weiteren bestehenden Rechenzentrum-Projekts auf SIMATIC PCS 7 V9.1 (inkl. PH und IF). Realisiert mit Siemens Schweiz DI AG." },
    { title: "Regenbecken-Steuerung ARA Reinach", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für diverse Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Abwasserwärme-Nutzungsanlage ARA Elgg", technologies: ["Siemens S7", "WinCC OA"], description: "Erweiterung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA)." },
    { title: "Regenbecken-Steuerung Sennhof", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung Huggenberg", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung Dickbuch", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung Hauptwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung Niederwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Abwasserwärme-Nutzungsanlage ARA Lugano", technologies: ["Siemens S7", "WinCC OA"], description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA)." },
    { title: "Abwasserwärme-Nutzungsanlage ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA)." },
    { title: "Abwasserwärme-Nutzungsanlage ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA)." },
    { title: "Abwasserwärme-Nutzungsanlage ARA Oensingen", technologies: ["Siemens S7", "WinCC OA"], description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA)." },
    { title: "Regenbecken-Steuerung Arnegg", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung Andwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA)." },
    { title: "Regenbecken-Steuerung ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programmierung der Steuerung für ein Regenbecken (S7/WinCC OA)." },
    { title: "Wasserwerk-Station Henessen", technologies: ["TIA Portal", "WinCC OA"], description: "Steuerungsprogrammierung einer Wasserwerk-Station (TIA Portal/WinCC OA)." },
    { title: "Abwasserreinigungsanlage Rheinfelden", technologies: ["Siemens S7", "WinCC OA"], description: "Steuerungsprogrammierung der Abwasserreinigungsanlage (S7/WinCC OA)." },
    { title: "Lüftungs- & Heizungssystem ARA Zermatt", technologies: ["Siemens S7", "HLK"], description: "Programmierung des Lüftungs- und Heizungssystems der Kläranlage Zermatt." },
    { title: "Sicherheitssteuerung Schlammverbrennung", technologies: ["S7-400 H", "Safety"], description: "Programmierung der fehlersicheren Sicherheitssteuerung auf S7-400 H-System für die Schlammverbrennungsanlage Werdhölzli." },
    { title: "Sicherheitssteuerung Schlammverbrennung", technologies: ["S7-400 H", "Safety"], description: "Programmierung der fehlersicheren Sicherheitssteuerung auf S7-400 H-System für die Schlammverbrennungsanlage Werdhölzli." },
    { title: "Steuerungsprogrammierung ARA Buchs", technologies: ["Siemens S7", "WinCC OA"], description: "Steuerungsprogrammierung der Kläranlage ARA Buchs ZH (S7/WinCC OA)." },
    { title: "Gitteranlage MG630 – TALLERES Y ACEROS", technologies: ["Siemens S7", "Schweisstechnik"], description: "Software-Entwicklung und Inbetriebsetzung der Gitteranlage MG630." },
    { title: "Radiatorenstrasse – Celikpan", technologies: ["Siemens S7", "Schweisstechnik"], description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse." },
    { title: "Radiatorenstrasse – TIPRO Baltic", technologies: ["Siemens S7", "Schweisstechnik"], description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse." },
    { title: "Radiatorenstrasse – Lida-Baltia", technologies: ["Siemens S7", "Schweisstechnik"], description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse." },
    { title: "Schweissansteuerung Superflex (Jäger)", technologies: ["Siemens", "TCW Schweissprozessor"], description: "Schweissansteuerung an einer Superflex (Jäger) auf Siemens und TCW Schweissprozessor." },
    { title: "Gitteranlage Gerdau – Umbau S5 → S7", technologies: ["Siemens S5", "Siemens S7"], description: "Umbau der Gitteranlage von S5- auf S7-Steuerung." },
    { title: "Gitteranlage MG320 BDW – Umbau S5 → S7", technologies: ["Siemens S5", "Siemens S7"], description: "Umbau der Gitteranlage MG320 von S5- auf S7-Steuerung." },
    { title: "Umbau MG320 S5 → S7", technologies: ["Siemens S5", "Siemens S7"], description: "Umbau einer MG320 von S5- auf S7-Steuerung." },
    { title: "Software-Erweiterung Kaltziehanlage", technologies: ["Siemens S7"], description: "Software-Erweiterung einer Kaltziehanlage." },
  ],
  en: [
    { title: "EKZ – public lighting, Canton of Zurich", technologies: ["WinCC OA", "TIA Portal", "S7-1500", "OPC UA", "OPC UA GDS Push"], description: "Central, secure lighting control for the electricity utility of the Canton of Zurich (EKZ): around 3,000 PLCs (SIMATIC S7-1500) in more than 2,500 transformer stations, controlled with WinCC OA SCADA and programmed in TIA Portal. Encrypted OPC UA communication incl. OPC UA GDS Push for central certificate management. Realized with Siemens Schweiz DI AG." },
    { title: "Mix-Mail distribution centre – Swiss Post", technologies: ["Siemens", "Cross-belt sorter", "Conveyor tech", "Automation"], description: "Software development for the fully automated sorting of mixed mail (Mix-Mail) – a world first in sorting. Plant capacity up to 19,000 items per hour, approx. 1,400 chutes and 5 cross-belt sorters on two levels. Realized with Siemens Postal, Parcel & Airport Logistics." },
    { title: "DHL Gateway Basel – new logistics centre", technologies: ["Siemens", "Conveyor tech", "Automation"], description: "Software development for a complete DHL Express logistics centre – concepts for control, automation and plant- and application-specific software. Responsible for the conveyor technology with more than 500 belts, sorters and chutes; sorting capacity around 10,000 items per hour. Realized with Siemens Logistics AG." },
    { title: "ARA Zermatt – largest membrane-biology plant in Switzerland", technologies: ["Siemens S7", "WinCC OA", "HVAC", "SCADA"], description: "Reprogramming of the entire wastewater plant including HVAC – the largest membrane-biology plant in Switzerland, in a cavern inside the mountain. Control with more than 10 SIMATIC CPUs (STEP 7) and WinCC OA as SCADA system; design size 60,000 population equivalents." },
    { title: "SBB – transfer car 360°, Zurich Altstetten", technologies: ["STEP 7", "TIA Portal"], description: "Upgrade of the existing PLC from STEP 7 to TIA Portal including software adaptation for the transfer-car shift with 360-degree function. Realized with Siemens Schweiz DI AG." },
    { title: "Equinix – data-centre extension", technologies: ["PCS 7", "Modbus RTU", "Modbus TCP"], description: "Extension of an existing data centre by a new floor including a generator system; data processing via Modbus RTU and TCP. Realized with Siemens Schweiz DI AG." },
    { title: "Equinix – PCS 7 upgrade to V9.1", technologies: ["PCS 7 V9.1", "PH", "IF"], description: "Upgrade of an existing data-centre project to SIMATIC PCS 7 V9.1 (incl. PH and IF). Realized with Siemens Schweiz DI AG." },
    { title: "Equinix – PCS 7 upgrade to V9.1 (2nd site)", technologies: ["PCS 7 V9.1", "PH", "IF"], description: "Upgrade of another existing data-centre project to SIMATIC PCS 7 V9.1 (incl. PH and IF). Realized with Siemens Schweiz DI AG." },
    { title: "Stormwater tank control – ARA Reinach", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for several stormwater tanks (TIA Portal/WinCC OA)." },
    { title: "Wastewater heat-recovery plant – ARA Elgg", technologies: ["Siemens S7", "WinCC OA"], description: "Extension of the control system for the wastewater heat-recovery plant (S7/WinCC OA)." },
    { title: "Stormwater tank control – Sennhof", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – Huggenberg", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – Dickbuch", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – Hauptwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – Niederwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Wastewater heat-recovery plant – ARA Lugano", technologies: ["Siemens S7", "WinCC OA"], description: "Programming of the control system for the wastewater heat-recovery plant (S7/WinCC OA)." },
    { title: "Wastewater heat-recovery plant – ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programming of the control system for the wastewater heat-recovery plant (S7/WinCC OA)." },
    { title: "Wastewater heat-recovery plant – ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programming of the control system for the wastewater heat-recovery plant (S7/WinCC OA)." },
    { title: "Wastewater heat-recovery plant – ARA Oensingen", technologies: ["Siemens S7", "WinCC OA"], description: "Programming of the control system for the wastewater heat-recovery plant (S7/WinCC OA)." },
    { title: "Stormwater tank control – Arnegg", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – Andwil", technologies: ["TIA Portal", "WinCC OA"], description: "Programming of the control system for a stormwater tank (TIA Portal/WinCC OA)." },
    { title: "Stormwater tank control – ARA Zermatt", technologies: ["Siemens S7", "WinCC OA"], description: "Programming of the control system for a stormwater tank (S7/WinCC OA)." },
    { title: "Water-works station Henessen", technologies: ["TIA Portal", "WinCC OA"], description: "Control programming of a water-works station (TIA Portal/WinCC OA)." },
    { title: "Wastewater treatment plant Rheinfelden", technologies: ["Siemens S7", "WinCC OA"], description: "Control programming of the wastewater treatment plant (S7/WinCC OA)." },
    { title: "Ventilation & heating system – ARA Zermatt", technologies: ["Siemens S7", "HVAC"], description: "Programming of the ventilation and heating system of the Zermatt wastewater plant." },
    { title: "Safety controller – sludge incineration", technologies: ["S7-400 H", "Safety"], description: "Programming of the fail-safe safety controller on an S7-400 H system for the Werdhölzli sludge incineration plant." },
    { title: "Safety controller – sludge incineration", technologies: ["S7-400 H", "Safety"], description: "Programming of the fail-safe safety controller on an S7-400 H system for the Werdhölzli sludge incineration plant." },
    { title: "Control programming – ARA Buchs", technologies: ["Siemens S7", "WinCC OA"], description: "Control programming of the ARA Buchs ZH wastewater plant (S7/WinCC OA)." },
    { title: "Grid line MG630 – TALLERES Y ACEROS", technologies: ["Siemens S7", "Welding"], description: "Software development and commissioning of the MG630 grid line." },
    { title: "Radiator line – Celikpan", technologies: ["Siemens S7", "Welding"], description: "Software development and commissioning of the radiator line." },
    { title: "Radiator line – TIPRO Baltic", technologies: ["Siemens S7", "Welding"], description: "Software development and commissioning of the radiator line." },
    { title: "Radiator line – Lida-Baltia", technologies: ["Siemens S7", "Welding"], description: "Software development and commissioning of the radiator line." },
    { title: "Welding control Superflex (Jäger)", technologies: ["Siemens", "TCW welding processor"], description: "Welding control on a Superflex (Jäger) using Siemens and a TCW welding processor." },
    { title: "Grid line Gerdau – S5 → S7 conversion", technologies: ["Siemens S5", "Siemens S7"], description: "Conversion of the grid line from S5 to S7 control." },
    { title: "Grid line MG320 BDW – S5 → S7 conversion", technologies: ["Siemens S5", "Siemens S7"], description: "Conversion of the MG320 grid line from S5 to S7 control." },
    { title: "MG320 conversion S5 → S7", technologies: ["Siemens S5", "Siemens S7"], description: "Conversion of an MG320 from S5 to S7 control." },
    { title: "Software extension – cold-drawing plant", technologies: ["Siemens S7"], description: "Software extension of a cold-drawing plant." },
  ],
};

const categoryLabelsByLocale: Record<"de" | "en", Record<ProjectCategory, string>> = {
  de: {
    infrastruktur: "Infrastruktur & Energie",
    logistik: "Logistik & Sortieranlagen",
    abwasser: "Abwasser & ARA",
    stahl: "Stahl- & Industrieanlagen",
    retrofit: "Retrofit & Migration",
  },
  en: {
    infrastruktur: "Infrastructure & energy",
    logistik: "Logistics & sorting",
    abwasser: "Wastewater & WWTP",
    stahl: "Steel & industrial plants",
    retrofit: "Retrofit & migration",
  },
};

const highlightsByLocale: Record<"de" | "en", { category: ProjectCategory; description: string }[]> = {
  de: [
    { category: "infrastruktur", description: "Kritische Infrastruktur und Energie: öffentliche Beleuchtung (EKZ) und Rechenzentren (Equinix) – mit WinCC OA, TIA Portal, PCS 7 und OPC UA." },
    { category: "logistik", description: "Software-Entwicklung für Paket- und Mischsendungs-Sortieranlagen – u. a. für DHL Express und die Schweizerische Post." },
    { category: "abwasser", description: "ARA-Projekte, Regenbecken, Abwasserwärmerückgewinnung und Sicherheitssteuerungen in der ganzen Schweiz." },
    { category: "stahl", description: "Internationale Inbetriebnahmen von Stahl- und Industrieanlagen in Europa und Amerika." },
    { category: "retrofit", description: "Modernisierung bestehender Anlagen und Migration von Altsteuerungen (S5 → S7 → TIA)." },
  ],
  en: [
    { category: "infrastruktur", description: "Critical infrastructure and energy: public lighting (EKZ) and data centres (Equinix) – with WinCC OA, TIA Portal, PCS 7 and OPC UA." },
    { category: "logistik", description: "Software development for parcel and mixed-mail sorting plants – including for DHL Express and Swiss Post." },
    { category: "abwasser", description: "Wastewater plant projects, stormwater tanks, wastewater heat recovery and safety controllers throughout Switzerland." },
    { category: "stahl", description: "International commissioning of steel and industrial plants in Europe and the Americas." },
    { category: "retrofit", description: "Modernization of existing plants and migration of legacy controllers (S5 → S7 → TIA)." },
  ],
};

export function getProjects(locale: string): Project[] {
  const t = locale === "en" ? txt.en : txt.de;
  return base.map((b, i) => ({ ...b, ...t[i] }));
}
export function getCategoryLabels(locale: string): Record<ProjectCategory, string> {
  return locale === "en" ? categoryLabelsByLocale.en : categoryLabelsByLocale.de;
}
export function getReferenceHighlights(locale: string) {
  return locale === "en" ? highlightsByLocale.en : highlightsByLocale.de;
}
