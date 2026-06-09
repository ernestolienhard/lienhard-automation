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
    year: "2013–2016",
    title: "ARA Zermatt – grösste Membranbiologieanlage der Schweiz",
    location: "Zermatt VS",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA", "HLK", "SCADA"],
    description:
      "Neuprogrammierung der gesamten Kläranlage samt HLK – die grösste Membranbiologieanlage der Schweiz, in einer Kaverne im Berginnern. Steuerung mit über 10 SIMATIC-CPUs (STEP 7) und WinCC OA als SCADA-Leitsystem; Ausbaugrösse 60'000 Einwohner.",
  },
  {
    year: "2015–2018",
    title: "Abwasserwärme-Nutzungsanlagen",
    location: "ARA Zermatt, Oensingen, Lugano & Elgg",
    category: "abwasser",
    technologies: ["Siemens S7", "TIA Portal", "WinCC OA"],
    description:
      "Programmierung mehrerer Anlagen zur Abwasserwärme-Nutzung (S7/WinCC OA) an verschiedenen Kläranlagen in der Schweiz und im Tessin.",
  },
  {
    year: "2015–2018",
    title: "Regenbecken-Steuerungen (diverse Standorte)",
    location: "ZH, SG & VS",
    category: "abwasser",
    technologies: ["TIA Portal", "Siemens S7", "WinCC OA"],
    description:
      "Programmierung zahlreicher Regenbecken-Steuerungen (TIA Portal/WinCC OA) – u. a. ARA Reinach, Sennhof, Huggenberg, Dickbuch, Hauptwil, Niederwil, Arnegg, Andwil und Zermatt.",
  },
  {
    year: "2015",
    title: "Abwasserreinigungsanlage Rheinfelden",
    location: "Rheinfelden AG",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description:
      "Steuerungsprogrammierung der Abwasserreinigungsanlage Rheinfelden.",
  },
  {
    year: "2015",
    title: "Wasserwerk-Station Henessen",
    location: "Henessen SG",
    category: "abwasser",
    technologies: ["TIA Portal", "WinCC OA"],
    description:
      "Steuerungsprogrammierung einer Wasserwerk-Station (TIA Portal/WinCC OA).",
  },
  {
    year: "2013",
    title: "Steuerungsprogrammierung ARA Buchs",
    location: "ARA Buchs ZH",
    category: "abwasser",
    technologies: ["Siemens S7", "WinCC OA"],
    description:
      "Steuerungsprogrammierung der Kläranlage ARA Buchs ZH (S7/WinCC OA).",
  },
  {
    year: "2014–2015",
    title: "Sicherheitssteuerung Schlammverbrennung",
    location: "Werdhölzli, Zürich",
    category: "abwasser",
    technologies: ["S7-400 H", "Safety"],
    description:
      "Programmierung der fehlersicheren Sicherheitssteuerung auf S7-400 H-System für die Schlammverbrennungsanlage Werdhölzli.",
  },
  {
    year: "2005–2011",
    title: "Internationale Gitter- & Radiatorenanlagen",
    location: "MX · TR · BR · LV · BY · DE",
    category: "stahl",
    technologies: ["Siemens S7", "Schweisstechnik"],
    description:
      "Software-Entwicklung und Inbetriebsetzung von Gitter- und Radiatorenanlagen – u. a. TALLERES Y ACEROS (MX, MG630), Celikpan (TR), TIPRO Baltic (LV) und Lida-Baltia (BY); inklusive Umbauten S5 → S7 bei Gerdau (BR) und BDW (DE).",
  },
  {
    year: "2014",
    title: "Schweiss-, Umbau- & Software-Projekte",
    location: "Deutschland & USA",
    category: "retrofit",
    technologies: ["Siemens S5", "Siemens S7"],
    description:
      "Schweissansteuerung Superflex (Jäger, Horth) auf Siemens/TCW, Migration MG320 S5 → S7 (Kehl) sowie Software-Erweiterung einer Kaltziehanlage (Warren, USA).",
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
