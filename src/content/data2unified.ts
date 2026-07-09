/**
 * Content for the "WinCC-Modernisierung" page.
 *
 * Positioning: Lienhard Automation (Ernesto Lienhard) as THE expert for
 * modernizing WinCC visualizations — from WinCC flexible and WinCC Classic to
 * SIMATIC WinCC Unified. The Siemens "Data2Unified" add-in is only one of the
 * tools used, not the headline.
 *
 * ATTRIBUTION: "SIMATIC", "WinCC", "WinCC flexible", "WinCC Unified",
 * "Data2Unified" and "TIA Portal" are trademarks of Siemens AG. Lienhard
 * Automation is an independent service provider, not a Siemens dealer.
 */

export const SIEMENS_ENTRY_ID = "109770510";
export const SIEMENS_ARTICLE_URL =
  "https://support.industry.siemens.com/cs/document/109770510/hmi-modernization-with-data2unified-a-tia-portal-add-in?dti=0&lc=en-CH";

/** Why customers choose Lienhard for the modernization. */
export const whyMe: { title: string; detail: string }[] = [
  {
    title: "Von WinCC flexible bis Unified",
    detail:
      "Ich modernisiere über alle Generationen hinweg – WinCC flexible, WinCC Classic (V7) und WinCC Comfort/Advanced bis SIMATIC WinCC Unified.",
  },
  {
    title: "Jeden Schritt im Griff",
    detail:
      "Analyse, Konzept, Migration, Anpassung, Test und Inbetriebnahme: Ich kenne den gesamten Weg aus jahrelanger Projektpraxis – nicht aus der Theorie.",
  },
  {
    title: "Wo Standard-Tools aufhören",
    detail:
      "Automatische Konverter bringen Sie nur einen Teil des Wegs. Die entscheidenden manuellen Anpassungen davor und danach sind genau meine Stärke.",
  },
  {
    title: "Begleitung, Support & Schulung",
    detail:
      "Ich unterstütze Sie von der ersten Beratung über die Umsetzung bis zum laufenden Support – und schule Ihr Team auf der neuen Umgebung.",
  },
];

/** The modernization path: legacy → modernization → Unified. */
export const conversionFlow: { step: string; title: string; detail: string }[] =
  [
    {
      step: "01",
      title: "WinCC flexible / WinCC Classic",
      detail:
        "Ihre bestehende, über Jahre gewachsene Visualisierung – das wertvolle Fundament.",
    },
    {
      step: "02",
      title: "Modernisierung",
      detail:
        "Analyse, Migration und gezielte Anpassung – Schritt für Schritt, ohne Ihr Prozess-Know-how zu verlieren.",
    },
    {
      step: "03",
      title: "WinCC Unified",
      detail:
        "Zukunftssichere Visualisierung auf SIMATIC HMI Unified Panels und Unified PC.",
    },
  ];

/**
 * The step-by-step service — the core selling point: "I accompany you through
 * every step."
 */
export const serviceSteps: { title: string; detail: string }[] = [
  {
    title: "Analyse & Modernisierungs-Check",
    detail:
      "Bestandsaufnahme Ihres Projekts und eine realistische Einschätzung von Umfang, Aufwand und Risiken.",
  },
  {
    title: "Konzept & Planung",
    detail:
      "Migrationsstrategie, Zeitplan und klare Bedien- und Designvorgaben für die neue WinCC-Unified-Oberfläche.",
  },
  {
    title: "Migration der Projektinhalte",
    detail:
      "Übernahme von Bildern, Variablen, Meldungen, Archiven und Skripten – effizient mit bewährten Werkzeugen.",
  },
  {
    title: "Anpassung & Optimierung",
    detail:
      "Manuelle Nacharbeit, Optimierung der Bedienoberfläche und Umsetzung neuer Unified-Funktionen.",
  },
  {
    title: "Test & Inbetriebnahme",
    detail:
      "Funktionsprüfung auf Unified Panels, Validierung im laufenden Prozess und Begleitung bis zur Endabnahme.",
  },
  {
    title: "Support & Schulung",
    detail:
      "Einweisung Ihres Teams und verlässlicher Support über die Inbetriebnahme hinaus.",
  },
];

/** What gets carried over during a modernization (shows the depth of work). */
export const supportedConversions: { title: string; detail: string }[] = [
  {
    title: "Bilder & Bildverwaltung",
    detail:
      "Bilder, Vorlagen, Pop-up- und Slide-in-Bilder samt Struktur und Navigation.",
  },
  {
    title: "Bildobjekte",
    detail:
      "Basisobjekte (Textfeld, Rechteck), Elemente (Schaltfläche, E/A-Feld) und Controls wie die Meldeanzeige.",
  },
  {
    title: "Animationen & Dynamik",
    detail: "Animationen und Dynamisierungen auf den unterstützten Objekten.",
  },
  {
    title: "Skripte & Systemfunktionen",
    detail:
      "Ausgewählte Systemfunktionen und Skripte werden übernommen und angepasst.",
  },
  {
    title: "HMI-Variablen",
    detail: "Übernahme der HMI-Variablen und Anbindung an die Steuerung.",
  },
  {
    title: "Meldungen & Alarme",
    detail: "HMI-Meldungen inklusive Klassen und Texten.",
  },
  {
    title: "Archive & Trends",
    detail: "Archive und Archivvariablen für historische Daten und Trends.",
  },
  {
    title: "Text- & Grafiklisten",
    detail: "Mehrsprachige Text- und Grafiklisten.",
  },
  {
    title: "Faceplates",
    detail: "Wiederverwendbare Faceplates und deren Implementierung.",
  },
];

/** Tools & sources used during analysis and migration (credibility, not ads). */
export const relatedLinks: {
  title: string;
  entryId?: string;
  url: string;
}[] = [
  {
    title: "Data2Unified – TIA-Portal-Add-in (Siemens)",
    entryId: SIEMENS_ENTRY_ID,
    url: SIEMENS_ARTICLE_URL,
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
  {
    title: "Umstieg von Comfort Panels auf Unified Comfort Panels",
    entryId: "109768002",
    url: "https://support.industry.siemens.com/cs/document/109768002",
  },
];
