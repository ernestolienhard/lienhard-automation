/**
 * Project references — sourced from the existing lienhard-automation.ch
 * "Referenzen" page and the public client list on the home page.
 *
 * IMPORTANT: Do not fabricate clients or projects. Only add new entries that
 * the client has confirmed are public and accurate.
 */

export type ProjectCategory =
  | "infrastruktur"
  | "logistik"
  | "abwasser"
  | "stahl"
  | "retrofit";

export const categoryLabels: Record<ProjectCategory, string> = {
  infrastruktur: "Infrastruktur & Energie",
  logistik: "Logistik & Sortieranlagen",
  abwasser: "Abwasser & ARA",
  stahl: "Stahl- & Industrieanlagen",
  retrofit: "Retrofit & Migration",
};

export type Project = {
  year: string;
  title: string;
  location: string;
  category: ProjectCategory;
  technologies: string[];
  description: string;
};

export const projects: Project[] = [
  {
    year: "2024–2026",
    title: "EKZ – Öffentliche Beleuchtung, Kanton Zürich",
    location: "Kanton Zürich",
    category: "infrastruktur",
    technologies: ["WinCC OA", "TIA Portal", "S7-1500", "OPC UA", "OPC UA GDS Push"],
    description:
      "Zentrale, sichere Lichtsteuerung für die Elektrizitätswerke des Kantons Zürich (EKZ): rund 3'000 SPS (SIMATIC S7-1500) in über 2'500 Trafostationen, gesteuert mit WinCC OA SCADA und programmiert im TIA Portal. Verschlüsselte OPC-UA-Kommunikation inkl. OPC UA GDS Push für die zentrale Zertifikatsverwaltung. Realisiert mit Siemens.",
  },
  {
    year: "2019–2021",
    title: "Mix-Mail Verteilzentrum – Schweizerische Post",
    location: "Zürich Mülligen",
    category: "logistik",
    technologies: ["Siemens", "Cross-Belt-Sorter", "Fördertechnik", "Automatisierung"],
    description:
      "Software-Entwicklung für die vollautomatische Sortierung von Mischsendungen (Mix-Mail) – eine Weltneuheit in der Sortierung. Anlagenleistung bis 19'000 Sendungen/Stunde, ca. 1'400 Zielstellen und 5 Cross-Belt-Sorter auf zwei Ebenen. Realisiert mit Siemens Postal, Parcel & Airport Logistics.",
  },
  {
    year: "2016–2018",
    title: "DHL Gateway Basel – neues Logistikzentrum",
    location: "Basel",
    category: "logistik",
    technologies: ["Siemens", "Fördertechnik", "Automatisierung"],
    description:
      "Software-Entwicklung für ein komplettes Logistikzentrum von DHL Express – Konzepte für Steuerung, Automatisierung sowie anlagen- und applikationsspezifische Software. Verantwortlich für die Fördertechnik mit über 500 Bändern, Sortern und Endstellen; Sortierleistung rund 10'000 Sendungen/Stunde. Realisiert mit Siemens Logistics AG.",
  },
  {
    year: "2013–2016",
    title: "ARA Zermatt – grösste Membranbiologieanlage der Schweiz",
    location: "Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA", "HLK", "SCADA"],
    description:
      "Neuprogrammierung der gesamten Kläranlage samt HLK – die grösste Membranbiologieanlage der Schweiz, in einer Kaverne im Berginnern. Steuerung mit über 10 SIMATIC-CPUs (STEP 7) und WinCC OA als SCADA-Leitsystem; Ausbaugrösse 60'000 Einwohner.",
  },
  {
    year: "2026",
    title: "SBB – Querwagen 360°, Zürich Altstetten",
    location: "Zürich Altstetten",
    category: "retrofit",
    technologies: ["STEP 7", "TIA Portal"],
    description:
      "Hochrüstung der bestehenden SPS von STEP 7 auf TIA Portal samt Software-Anpassung für die Querwagen-Verschiebung mit 360-Grad-Funktion. Realisiert mit Siemens.",
  },
  {
    year: "2025–2026",
    title: "Equinix – Rechenzentrum-Erweiterung",
    location: "Schweiz",
    category: "infrastruktur",
    technologies: ["PCS 7", "Modbus RTU", "Modbus TCP"],
    description:
      "Erweiterung eines bestehenden Rechenzentrums um ein neues Stockwerk samt Generatoren-System; Datenverarbeitung via Modbus RTU und TCP. Realisiert mit Siemens.",
  },
  {
    year: "2023",
    title: "Equinix – PCS 7 Upgrade auf V9.1",
    location: "Schweiz",
    category: "infrastruktur",
    technologies: ["PCS 7 V9.1", "PH", "IF"],
    description:
      "Hochrüstung eines bestehenden Rechenzentrum-Projekts auf SIMATIC PCS 7 V9.1 (inkl. PH und IF). Realisiert mit Siemens.",
  },
  {
    year: "2023",
    title: "Equinix – PCS 7 Upgrade auf V9.1 (2. Standort)",
    location: "Schweiz",
    category: "infrastruktur",
    technologies: ["PCS 7 V9.1", "PH", "IF"],
    description:
      "Hochrüstung eines weiteren bestehenden Rechenzentrum-Projekts auf SIMATIC PCS 7 V9.1 (inkl. PH und IF). Realisiert mit Siemens.",
  },
  {
    year: "2018",
    title: "Regenbecken-Steuerung ARA Reinach",
    location: "ARA Reinach ZH",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description:
      "Programmierung der Steuerung für diverse Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2018",
    title: "Abwasserwärme-Nutzungsanlage ARA Elgg",
    location: "ARA Elgg ZH",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description:
      "Erweiterung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA).",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerung Sennhof",
    location: "Sennhof ZH",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerung Huggenberg",
    location: "Huggenberg ZH",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerung Dickbuch",
    location: "Dickbuch ZH",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerung Hauptwil",
    location: "Hauptwil SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerung Niederwil",
    location: "Niederwil SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2016",
    title: "Abwasserwärme-Nutzungsanlage ARA Lugano",
    location: "ARA Lugano TI",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA).",
  },
  {
    year: "2016",
    title: "Abwasserwärme-Nutzungsanlage ARA Zermatt",
    location: "ARA Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA).",
  },
  {
    year: "2015",
    title: "Abwasserwärme-Nutzungsanlage ARA Zermatt",
    location: "ARA Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA).",
  },
  {
    year: "2015",
    title: "Abwasserwärme-Nutzungsanlage ARA Oensingen",
    location: "ARA Oensingen SO",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Programmierung der Steuerung der Abwasserwärme-Nutzungsanlage (S7/WinCC OA).",
  },
  {
    year: "2015",
    title: "Regenbecken-Steuerung Arnegg",
    location: "Arnegg SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2015",
    title: "Regenbecken-Steuerung Andwil",
    location: "Andwil SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (TIA Portal/WinCC OA).",
  },
  {
    year: "2015",
    title: "Regenbecken-Steuerung ARA Zermatt",
    location: "ARA Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Programmierung der Steuerung für ein Regenbecken (S7/WinCC OA).",
  },
  {
    year: "2015",
    title: "Wasserwerk-Station Henessen",
    location: "Henessen SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description: "Steuerungsprogrammierung einer Wasserwerk-Station (TIA Portal/WinCC OA).",
  },
  {
    year: "2015",
    title: "Abwasserreinigungsanlage Rheinfelden",
    location: "Rheinfelden AG",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Steuerungsprogrammierung der Abwasserreinigungsanlage (S7/WinCC OA).",
  },
  {
    year: "2014",
    title: "Lüftungs- & Heizungssystem ARA Zermatt",
    location: "ARA Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "HLK"],
    description: "Programmierung des Lüftungs- und Heizungssystems der Kläranlage Zermatt.",
  },
  {
    year: "2015",
    title: "Sicherheitssteuerung Schlammverbrennung",
    location: "Werdhölzli, Zürich",
    category: "abwasser",
    technologies: ["S7-400 H", "Safety"],
    description:
      "Programmierung der fehlersicheren Sicherheitssteuerung auf S7-400 H-System für die Schlammverbrennungsanlage Werdhölzli.",
  },
  {
    year: "2014",
    title: "Sicherheitssteuerung Schlammverbrennung",
    location: "Werdhölzli, Zürich",
    category: "abwasser",
    technologies: ["S7-400 H", "Safety"],
    description:
      "Programmierung der fehlersicheren Sicherheitssteuerung auf S7-400 H-System für die Schlammverbrennungsanlage Werdhölzli.",
  },
  {
    year: "2013",
    title: "Steuerungsprogrammierung ARA Buchs",
    location: "ARA Buchs ZH",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description: "Steuerungsprogrammierung der Kläranlage ARA Buchs ZH (S7/WinCC OA).",
  },
  {
    year: "2005–2011",
    title: "Gitteranlage MG630 – TALLERES Y ACEROS",
    location: "Mexiko",
    category: "stahl",
    technologies: ["Siemens S7", "Schweisstechnik"],
    description: "Software-Entwicklung und Inbetriebsetzung der Gitteranlage MG630.",
  },
  {
    year: "2005–2011",
    title: "Radiatorenstrasse – Celikpan",
    location: "Türkei",
    category: "stahl",
    technologies: ["Siemens S7", "Schweisstechnik"],
    description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse.",
  },
  {
    year: "2005–2011",
    title: "Radiatorenstrasse – TIPRO Baltic",
    location: "Lettland",
    category: "stahl",
    technologies: ["Siemens S7", "Schweisstechnik"],
    description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse.",
  },
  {
    year: "2005–2011",
    title: "Radiatorenstrasse – Lida-Baltia",
    location: "Weissrussland",
    category: "stahl",
    technologies: ["Siemens S7", "Schweisstechnik"],
    description: "Software-Entwicklung und Inbetriebsetzung der Radiatorenstrasse.",
  },
  {
    year: "2014",
    title: "Schweissansteuerung Superflex (Jäger)",
    location: "Horth, Deutschland",
    category: "stahl",
    technologies: ["Siemens", "TCW Schweissprozessor"],
    description:
      "Schweissansteuerung an einer Superflex (Jäger) auf Siemens und TCW Schweissprozessor.",
  },
  {
    year: "2005–2011",
    title: "Gitteranlage Gerdau – Umbau S5 → S7",
    location: "Brasilien",
    category: "retrofit",
    technologies: ["Siemens S5", "Siemens S7"],
    description: "Umbau der Gitteranlage von S5- auf S7-Steuerung.",
  },
  {
    year: "2005–2011",
    title: "Gitteranlage MG320 BDW – Umbau S5 → S7",
    location: "Deutschland",
    category: "retrofit",
    technologies: ["Siemens S5", "Siemens S7"],
    description: "Umbau der Gitteranlage MG320 von S5- auf S7-Steuerung.",
  },
  {
    year: "2014",
    title: "Umbau MG320 S5 → S7",
    location: "Kehl, Deutschland",
    category: "retrofit",
    technologies: ["Siemens S5", "Siemens S7"],
    description: "Umbau einer MG320 von S5- auf S7-Steuerung.",
  },
  {
    year: "2014",
    title: "Software-Erweiterung Kaltziehanlage",
    location: "Warren, USA",
    category: "retrofit",
    technologies: ["Siemens S7"],
    description: "Software-Erweiterung einer Kaltziehanlage.",
  },
];

/** High-level project categories for the references intro / overview. */
export const referenceHighlights: {
  category: ProjectCategory;
  description: string;
}[] = [
  {
    category: "infrastruktur",
    description:
      "Kritische Infrastruktur und Energie: öffentliche Beleuchtung (EKZ) und Rechenzentren (Equinix) – mit WinCC OA, TIA Portal, PCS 7 und OPC UA.",
  },
  {
    category: "logistik",
    description:
      "Software-Entwicklung für Paket- und Mischsendungs-Sortieranlagen – u. a. für DHL Express und die Schweizerische Post.",
  },
  {
    category: "abwasser",
    description:
      "ARA-Projekte, Regenbecken, Abwasserwärmerückgewinnung und Sicherheitssteuerungen in der ganzen Schweiz.",
  },
  {
    category: "stahl",
    description:
      "Internationale Inbetriebnahmen von Stahl- und Industrieanlagen in Europa und Amerika.",
  },
  {
    category: "retrofit",
    description:
      "Modernisierung bestehender Anlagen und Migration von Altsteuerungen (S5 → S7 → TIA).",
  },
];
