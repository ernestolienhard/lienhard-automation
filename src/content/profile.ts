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
    period: "Ausbildung",
    title: "Lehre als Elektromonteur",
    text: "Solide handwerkliche und elektrotechnische Grundausbildung – das Fundament der gesamten Laufbahn.",
  },
  {
    period: "3 Jahre",
    title: "Flugzeug-Elektroniker",
    org: "SR Technics",
    text: "Anspruchsvolle Elektronik- und Systemarbeit an Flugzeugen – mit höchsten Anforderungen an Präzision, Sicherheit und Zuverlässigkeit.",
  },
  {
    period: "Industrie",
    title: "Verpackungsmaschinen",
    org: "SIG Pack",
    text: "Elektronik und Steuerungstechnik an Hochleistungs-Verpackungsmaschinen – der Einstieg in den industriellen Maschinen- und Anlagenbau.",
  },
  {
    period: "Automation",
    title: "Zurück in die Welt der Automation",
    org: "national & international",
    text: "Umfangreiche Projekterfahrung in SPS-Engineering, Prozessleittechnik und Inbetriebnahme – in der Schweiz und weltweit.",
  },
  {
    period: "Weiterbildung",
    title: "Techniker HF Automation",
    text: "Weiterbildung mit fundierter technischer Basis für durchdachte, zuverlässige Automatisierungslösungen.",
  },
  {
    period: "Spezialisierung",
    title: "Siemens-Welt & Visualisierung",
    org: "STEP 7 Classic · TIA Portal · PCS 7 · WinCC Unified/OA",
    text: "Vertiefte Expertise in Steuerungs-, Leit- und Kommunikationstechnik (OPC UA, Modbus, PROFINET, PROFIBUS) sowie in Sicherheitssteuerungen (Safety).",
  },
  {
    period: "Heute",
    title: "Gründer & Geschäftsführer",
    org: "Lienhard Automation GmbH, Zürich",
    text: "Aufbau und Leitung des eigenen Automatisierungs-Engineerings mit internationalem Partnernetzwerk – von der Beratung bis zur Inbetriebnahme.",
  },
];

/**
 * Erfolge & Meilensteine – ausschliesslich aus den realen Referenzen
 * abgeleitet. Weitere konkrete Erfolge (mit Zahlen) gerne ergänzen.
 */
export const achievements: string[] = [
  "Mix-Mail Verteilzentrum für die Schweizerische Post (Zürich Mülligen) – Weltneuheit in der Sortierung, bis 19'000 Sendungen/Stunde",
  "DHL Gateway Basel: Software-Entwicklung für ein neues Logistikzentrum mit über 500 Bändern, Sortern und Endstellen",
  "Internationale Inbetriebnahmen in Mexiko, Türkei, Brasilien, Lettland, Belarus und Deutschland",
  "Sicherheitssteuerung für die Schlammverbrennung (Werdhölzli, Zürich)",
  "Zahlreiche ARA-Projekte: Regenbecken, Abwasserwärmerückgewinnung und Membranbiologie",
  "Migration von Altsteuerungen (S5 → S7) und Software-Erweiterungen bestehender Anlagen",
  "Stahl- & Industrieanlagen: internationale SPS-Programmierung und Inbetriebnahme",
];
