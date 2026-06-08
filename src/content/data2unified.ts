/**
 * Content for the HMI-modernization homepage (SIMATIC WinCC Classic → Unified
 * mit dem Siemens-Add-in "Data2Unified").
 *
 * QUELLE / ATTRIBUTION:
 * Die fachlichen Informationen zu Data2Unified stammen aus dem offiziellen
 * Siemens-Beitrag (SiePortal Entry ID 109770510). "Data2Unified", "SIMATIC",
 * "WinCC", "TIA Portal" und "Siemens" sind Marken der Siemens AG. Lienhard
 * Automation ist Dienstleister und unterstützt bei der Umsetzung – die
 * Add-in-Dateien werden ausschliesslich von Siemens bereitgestellt; wir
 * verlinken auf die offizielle Quelle und hosten keine Siemens-Dateien.
 */

export const SIEMENS_ENTRY_ID = "109770510";
export const SIEMENS_ARTICLE_URL =
  "https://support.industry.siemens.com/cs/document/109770510/hmi-modernization-with-data2unified-a-tia-portal-add-in?dti=0&lc=en-CH";

/** What the Data2Unified add-in can convert to WinCC Unified. */
export const supportedConversions: { title: string; detail: string }[] = [
  {
    title: "Bildobjekte",
    detail:
      "„Basisobjekte“ (z. B. Textfeld, Rechteck) und „Elemente“ (z. B. Schaltfläche, E/A-Feld); Controls wie die Meldeanzeige werden in Grösse und Position übernommen.",
  },
  {
    title: "Animationen",
    detail: "Animationen auf den unterstützten Bildobjekten.",
  },
  {
    title: "Systemfunktionen",
    detail:
      "Ausgewählte Systemfunktionen auf unterstützten Bildobjekten (über Skripte).",
  },
  {
    title: "Bilder & Bildverwaltung",
    detail:
      "Bilder und Bildverwaltung – z. B. Vorlagen, Pop-up-Bilder und Slide-in-Bilder.",
  },
  {
    title: "Faceplates",
    detail: "Teile der Faceplate-Implementierung.",
  },
  {
    title: "HMI-Variablen",
    detail: "HMI-Variablen – ausgenommen UDT-Strukturen.",
  },
  {
    title: "HMI-Meldungen",
    detail: "Übernahme der HMI-Meldungen (Alarme).",
  },
  {
    title: "Archive & Archivvariablen",
    detail: "Archive und zugehörige Archivvariablen.",
  },
  {
    title: "Text- & Grafiklisten",
    detail: "Text- und Grafiklisten werden konvertiert.",
  },
];

/** Highlights of the latest add-in release. */
export const improvementsV64 = {
  version: "V6.4",
  items: [
    "Neuer Ansatz für die Ersetzung von Sonderzeichen",
    "Konvertierung von Grafiklisten",
    "Verbesserte Softwarestabilität und Bugfixes bei Bildobjekten und Variablen",
  ],
};

/** The Classic → Data2Unified → Unified process. */
export const conversionFlow: { step: string; title: string; detail: string }[] =
  [
    {
      step: "01",
      title: "SIMATIC WinCC Classic",
      detail: "Ihr bestehendes Projekt im TIA Portal – gewachsenes Engineering.",
    },
    {
      step: "02",
      title: "Data2Unified (D2U)",
      detail:
        "Das Siemens-Add-in übernimmt vorhandene Projektinhalte ins Unified-Umfeld.",
    },
    {
      step: "03",
      title: "SIMATIC WinCC Unified",
      detail:
        "Moderne Visualisierung auf SIMATIC HMI Unified Panels und Unified PC.",
    },
  ];

/**
 * How Lienhard Automation adds value. Data2Unified ist ausdrücklich KEIN
 * vollständiges Migrationswerkzeug – manuelle Anpassungen vor und nach der
 * Konvertierung sind nötig. Genau hier liegt unsere Dienstleistung.
 */
export const serviceSteps: { title: string; detail: string }[] = [
  {
    title: "Analyse & Modernisierungs-Check",
    detail:
      "Wir prüfen mit dem WinCC Unified Modernization Checker und dem Smart Advisor, welche Projektinhalte migrierbar sind und wo Aufwand entsteht.",
  },
  {
    title: "Konvertierung mit Data2Unified",
    detail:
      "Übernahme der bestehenden Projektinhalte ins Unified-Umfeld – Sie müssen Ihre Konfiguration nicht von Grund auf neu erstellen.",
  },
  {
    title: "Manuelle Anpassung",
    detail:
      "Data2Unified ist kein vollständiges Migrationswerkzeug: vor und nach der Konvertierung sind manuelle Anpassungen nötig. Diese übernehmen wir fachgerecht.",
  },
  {
    title: "Test & Inbetriebnahme",
    detail:
      "Validierung auf SIMATIC HMI Unified Panels, Funktionstest im laufenden Prozess und Begleitung bis zur Endabnahme.",
  },
];

/** Official Siemens downloads (hosted by Siemens — we only link to them). */
export const downloads: {
  release: string;
  support: string;
  files: { label: string; size: string }[];
}[] = [
  {
    release: "Data2Unified Add-in V6.4",
    support: "Unterstützung für TIA Portal V21",
    files: [
      { label: "Data2Unified Add-in V6.4 (.zip)", size: "20,4 MB" },
      { label: "Dokumentation Data2Unified V6.4 (PDF)", size: "2,2 MB" },
      { label: "ReadMe OSS Data2Unified V6.4 (HTML)", size: "3,2 MB" },
    ],
  },
  {
    release: "Data2Unified Add-in V5.1.1",
    support: "Unterstützung für TIA Portal V20",
    files: [
      { label: "Data2Unified Add-in V5.1 (.zip)", size: "19,1 MB" },
      { label: "Dokumentation Data2Unified V5.1 (PDF)", size: "2,2 MB" },
      { label: "ReadMe OSS Data2Unified V5.0 (HTML)", size: "3,3 MB" },
    ],
  },
];

/** Related Siemens tools / articles referenced in the source entry. */
export const relatedLinks: {
  title: string;
  entryId?: string;
  url: string;
}[] = [
  {
    title: "Data2Unified – offizieller Siemens-Beitrag (Downloads & Handbuch)",
    entryId: SIEMENS_ENTRY_ID,
    url: SIEMENS_ARTICLE_URL,
  },
  {
    title: "Umstieg von Comfort Panels auf Unified Comfort Panels",
    entryId: "109768002",
    url: "https://support.industry.siemens.com/cs/document/109768002",
  },
  {
    title: "WinCC Unified Modernization Checker",
    entryId: "109820536",
    url: "https://support.industry.siemens.com/cs/document/109820536",
  },
  {
    title: "WinCC Unified Smart Advisor",
    entryId: "109908595",
    url: "https://support.industry.siemens.com/cs/document/109908595",
  },
];

export const securityNote = {
  text: "Zum Schutz von Anlagen, Systemen, Maschinen und Netzwerken vor Cyber-Bedrohungen ist es notwendig, ein ganzheitliches, modernes IT-Security-Konzept umzusetzen und kontinuierlich aufrechtzuerhalten. Produkte und Lösungen von Siemens bilden dabei einen Baustein. Wir berücksichtigen diese Anforderungen bei jeder Modernisierung.",
  url: "https://www.siemens.com/cybersecurity",
};

/** Languages the original Siemens article is available in (informational). */
export const sourceLanguages = [
  "Deutsch",
  "Englisch",
  "Spanisch",
  "Italienisch",
  "Chinesisch (vereinfacht)",
  "Französisch",
];
