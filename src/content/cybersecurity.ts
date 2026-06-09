/**
 * Content for the "Cybersecurity" marketing page.
 *
 * Positioning: Industrial / OT cybersecurity is a highly specialized field.
 * Lienhard Automation does NOT claim to be the security expert itself — the
 * core message is that we tackle these topics TOGETHER with proven external
 * security partners, while remaining the customer's single point of contact.
 *
 * Keep this marketing-light and honest: capabilities are attributed to the
 * partners; Lienhard provides the automation know-how and coordination.
 */

/** Why OT/industrial security matters (short, marketing). */
export const securityReasons: { title: string; detail: string }[] = [
  {
    title: "Vernetzte Produktion",
    detail:
      "Mehr Vernetzung, Fernzugriff und IIoT vergrössern die Angriffsfläche industrieller Anlagen.",
  },
  {
    title: "Verfügbarkeit zuerst",
    detail:
      "In der OT zählt maximale Anlagenverfügbarkeit – Schutzmassnahmen müssen den Betrieb sichern, nicht stören.",
  },
  {
    title: "Lange Lebenszyklen",
    detail:
      "Anlagen laufen über Jahrzehnte. Gewachsene Alt-Systeme brauchen einen besonderen, durchdachten Schutz.",
  },
];

/** High-level topics our specialized partners cover (not a Lienhard catalog). */
export const partnerTopics: { title: string; detail: string }[] = [
  {
    title: "Security-Assessment & Risikoanalyse",
    detail:
      "Schwachstellen und Risiken Ihrer Anlage transparent machen und bewerten.",
  },
  {
    title: "IT/OT-Netzwerksegmentierung",
    detail:
      "Zonen, Zellenschutz und Perimeterschutz nach dem Defense-in-Depth-Prinzip.",
  },
  {
    title: "Systemhärtung & Patch-Management",
    detail:
      "Härtung von Systemen sowie Schwachstellen- und Update-Management.",
  },
  {
    title: "Monitoring & Notfallmanagement",
    detail:
      "Überwachung, Backup/Recovery und ein klarer Plan für den Ernstfall.",
  },
];

export const SIEMENS_CYBER_URL =
  "https://www.siemens.com/de-ch/company/digital-transformation/cybersecurity/";
