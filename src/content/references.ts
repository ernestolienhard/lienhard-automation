/**
 * Project references — sourced from the existing lienhard-automation.ch
 * "Referenzen" page and the public client list on the home page.
 *
 * IMPORTANT: Do not fabricate clients or projects. Only add new entries that
 * the client has confirmed are public and accurate.
 */

export type ProjectCategory =
  | "logistik"
  | "abwasser"
  | "stahl"
  | "retrofit";

export const categoryLabels: Record<ProjectCategory, string> = {
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
    year: "2018",
    title: "Steuerung mehrerer Regenbecken",
    location: "ARA Reinach ZH",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description:
      "Programmierung der Steuerung für mehrere Regenbecken sowie Integration in die übergeordnete Leittechnik.",
  },
  {
    year: "2018",
    title: "Ausbau Abwasserwärmerückgewinnung",
    location: "ARA Elgg ZH",
    category: "abwasser",
    technologies: ["Siemens S7", "TIA Portal"],
    description:
      "Erweiterung des bestehenden Systems zur Abwasserwärmerückgewinnung.",
  },
  {
    year: "2017",
    title: "Regenbecken-Steuerungen (5 Projekte)",
    location: "Sennhof, Huggenberg, Dickbuch, Hauptwil, Niederwil",
    category: "abwasser",
    technologies: ["Siemens S7", "TIA Portal", "WinCC OA"],
    description:
      "Programmierung von fünf Regenbecken-Steuerungen in den Regionen Zürich und St. Gallen.",
  },
  {
    year: "2016",
    title: "Abwasserwärmerückgewinnung",
    location: "ARA Zermatt VS & ARA Lugano TI",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description:
      "Programmierung der Anlagen zur Abwasserwärmerückgewinnung an zwei Standorten.",
  },
  {
    year: "2015",
    title: "Sicherheitssteuerung Schlammverbrennung",
    location: "Werdhölzli, Zürich",
    category: "abwasser",
    technologies: ["Siemens S7", "Safety"],
    description:
      "Sicherheitssteuerung für die Schlammverbrennung sowie weitere Aufträge: Wärmerückgewinnung (ARA Zermatt, ARA Oensingen), Regenbecken und Wasseraufbereitung.",
  },
  {
    year: "2014",
    title: "Migration S5 → S7 & Schweissanlagen",
    location: "Schweiz",
    category: "retrofit",
    technologies: ["Siemens S5", "Siemens S7", "Safety"],
    description:
      "Umbau von Schweissanlagen, Migration von Altsteuerungen (S5 auf S7), Software-Erweiterungen und Sicherheitssteuerungs-Programmierung.",
  },
  {
    year: "2013",
    title: "Steuerung & Membranbiologie",
    location: "ARA Buchs ZH & ARA Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7"],
    description:
      "Steuerungsprogrammierung ARA Buchs ZH sowie Membranbiologie-Anlage ARA Zermatt VS.",
  },
  {
    year: "International",
    title: "Stahl- & Industrieanlagen",
    location: "Mexiko, Türkei, Brasilien, Lettland, Belarus, Deutschland",
    category: "stahl",
    technologies: ["Siemens S7", "TIA Portal", "WinCC OA"],
    description:
      "Inbetriebnahmen und SPS-Programmierung u. a. für TALLERES Y ACEROS (MX), Celikpan (TR), Gerdau (BR), TIPRO BALTIC (LV), Lida-Baltia (BY) und BDW GmbH (DE).",
  },
];

/** High-level project categories for the references intro / overview. */
export const referenceHighlights: {
  category: ProjectCategory;
  description: string;
}[] = [
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
      "Modernisierung bestehender Anlagen und Migration von Altsteuerungen (S5 → S7).",
  },
];
