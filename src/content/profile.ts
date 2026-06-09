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
    period: "2001–2003",
    title: "Verpackungsmaschinen, international",
    org: "SIG-Pack Verpackung AG",
    text: "Software und Inbetriebnahmen an Hochleistungs-Verpackungsmaschinen in Lateinamerika, Europa und den USA – der Einstieg in den internationalen Maschinen- und Anlagenbau.",
  },
  {
    period: "2003–2004",
    title: "Internationale Inbetriebnahmen",
    org: "Romaco",
    text: "Inbetriebnahmen und Software-Einsätze in Europa, den USA, Mexiko und Jordanien.",
  },
  {
    period: "2005–2011",
    title: "Internationale Gitter- & Radiatorenanlagen",
    org: "Schlatter AG",
    text: "Software-Entwicklung und Inbetriebsetzung von Schweiss-, Gitter- und Radiatorenanlagen weltweit – u. a. Türkei, Lettland, Brasilien und Mexiko.",
  },
  {
    period: "Weiterbildung",
    title: "Techniker HF Automation",
    text: "Weiterbildung mit fundierter technischer Basis für durchdachte, zuverlässige Automatisierungslösungen.",
  },
  {
    period: "seit 2013",
    title: "Selbstständig – Lienhard Automation",
    org: "eigene Projekte & internationale Mandate",
    text: "Eigene Automatisierungsprojekte (u. a. ARA/Abwasser und WinCC-Modernisierung) sowie – teils parallel – internationale Mandate, u. a. für Tecvil und Siemens Logistics AG (DHL, Schweizerische Post).",
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
  "Migration von Altsteuerungen (S5 → S7 → TIA Portal) und Software-Erweiterungen bestehender Anlagen",
  "Stahl- & Industrieanlagen: internationale SPS-Programmierung und Inbetriebnahme",
];
