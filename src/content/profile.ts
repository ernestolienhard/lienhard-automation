/**
 * Profil von Ernesto Lienhard – Werdegang & Erfolge (Unternehmen-Seite).
 *
 * HINWEIS: LinkedIn kann technisch nicht ausgelesen werden. Die folgenden
 * Angaben stammen aus belegten Quellen (bisherige Website-Inhalte, Referenzen
 * sowie den vom Inhaber selbst genannten Kompetenzen). Konkrete Jahreszahlen,
 * frühere Arbeitgeber/Stationen und Zertifikate bitte hier ergänzen – sie sind
 * bewusst NICHT erfunden.
 */

/** Beruflicher Werdegang (Timeline). `period` kann mit konkreten Jahren ergänzt werden. */
export const career: {
  period: string;
  title: string;
  org?: string;
  text: string;
}[] = [
  {
    period: "Heute",
    title: "Gründer & Geschäftsführer",
    org: "Lienhard Automation GmbH, Zürich",
    text: "Aufbau und Leitung des eigenen Automatisierungs-Engineerings mit internationalem Partnernetzwerk – von der Beratung bis zur Inbetriebnahme.",
  },
  {
    period: "13+ Jahre",
    title: "Automation, Montage & Inbetriebnahme",
    org: "national & international",
    text: "Umfangreiche Projekterfahrung in SPS-Engineering, Prozessleittechnik und Inbetriebnahme – in der Schweiz und weltweit.",
  },
  {
    period: "Spezialisierung",
    title: "Siemens-Welt & Visualisierung",
    org: "STEP 7 Classic · TIA Portal · PCS 7 · WinCC Unified/OA",
    text: "Vertiefte Expertise in Steuerungs-, Leit- und Kommunikationstechnik (OPC UA, Modbus, PROFINET, PROFIBUS) sowie in Sicherheitssteuerungen (Safety).",
  },
  {
    period: "Ausbildung",
    title: "Techniker HF Automation",
    text: "Fundierte technische Ausbildung als Basis für durchdachte, zuverlässige Automatisierungslösungen.",
  },
];

/**
 * Erfolge & Meilensteine – ausschliesslich aus den realen Referenzen
 * abgeleitet. Weitere konkrete Erfolge (mit Zahlen) gerne ergänzen.
 */
export const achievements: string[] = [
  "Internationale Inbetriebnahmen in Mexiko, Türkei, Brasilien, Lettland, Belarus und Deutschland",
  "Sicherheitssteuerung für die Schlammverbrennung (Werdhölzli, Zürich)",
  "Zahlreiche ARA-Projekte: Regenbecken, Abwasserwärmerückgewinnung und Membranbiologie",
  "Automatisierung im Pharma-Umfeld – u. a. für Roche, Merck und Boehringer Ingelheim",
  "Migration von Altsteuerungen (S5 → S7) und Software-Erweiterungen bestehender Anlagen",
  "Stahl- & Industrieanlagen: internationale SPS-Programmierung und Inbetriebnahme",
];
