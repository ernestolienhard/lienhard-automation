/**
 * Project references — sourced from the existing lienhard-automation.com
 * "Referenzen" page and the public client list on the home page.
 *
 * IMPORTANT: Do not fabricate clients or projects. Only add new entries that
 * the client has confirmed are public and accurate.
 */

export type ProjectCategory =
  | "abwasser"
  | "pharma"
  | "stahl"
  | "druck"
  | "retrofit";

export const categoryLabels: Record<ProjectCategory, string> = {
  abwasser: "Abwasser & ARA",
  pharma: "Pharma & Bioreaktoren",
  stahl: "Stahl- & Industrieanlagen",
  druck: "Drucksysteme",
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
  {
    year: "International",
    title: "Pharma- & Bioreaktor-Systeme",
    location: "Schweiz & international",
    category: "pharma",
    technologies: ["Siemens S7", "WinCC OA", "TIA Portal"],
    description:
      "Automatisierungs- und Visualisierungsprojekte im pharmazeutischen Umfeld – u. a. für Roche, Merck und Boehringer Ingelheim.",
  },
];

/** High-level project categories for the references intro / overview. */
export const referenceHighlights: {
  category: ProjectCategory;
  description: string;
}[] = [
  {
    category: "abwasser",
    description:
      "ARA-Projekte, Regenbecken, Abwasserwärmerückgewinnung und Sicherheitssteuerungen in der ganzen Schweiz.",
  },
  {
    category: "pharma",
    description:
      "Automatisierung und Visualisierung für anspruchsvolle Pharma- und Bioreaktor-Systeme.",
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
