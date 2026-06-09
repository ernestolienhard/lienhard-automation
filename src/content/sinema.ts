/**
 * Content for the "SINEMA RC" (SINEMA Remote Connect) page.
 *
 * Positioning: Ernesto Lienhard as an expert for secure remote maintenance
 * with SINEMA Remote Connect – offering a hosted SINEMA RC server in a data
 * centre, or building/operating a customer's own SINEMA RC system.
 *
 * ATTRIBUTION: "SINEMA", "SINEMA Remote Connect", "SCALANCE" and "Siemens" are
 * trademarks of Siemens AG. Lienhard Automation is an independent service
 * provider, not a Siemens dealer.
 */

export const SIEMENS_SINEMA_URL =
  "https://www.siemens.com/de-de/products/scalance/sinema-remote-connect/";

/** Why secure remote maintenance with SINEMA RC. */
export const whyPoints: { title: string; detail: string }[] = [
  {
    title: "Zertifikatsbasierte Sicherheit",
    detail:
      "Verschlüsselte VPN-Tunnel mit zertifikatsbasierter Authentifizierung – Zugriff nur für autorisierte Personen.",
  },
  {
    title: "Hinter Firewalls & ohne feste IP",
    detail:
      "Funktioniert ohne öffentliche Fix-IP und durch Firewalls hindurch – die Anlage baut die Verbindung selbst auf.",
  },
  {
    title: "Zentrale Verwaltung",
    detail:
      "Alle Fernverbindungen zentral verwaltet – übersichtlich, nachvollziehbar und skalierbar.",
  },
  {
    title: "Schnelle Hilfe ohne Anreise",
    detail:
      "Störungen analysieren, Programme anpassen und Anlagen betreuen – weltweit, ohne Reisezeit.",
  },
];

/** My two service models. */
export const offerings: { title: string; detail: string }[] = [
  {
    title: "Gehosteter SINEMA RC Server",
    detail:
      "Ich betreibe für Sie einen SINEMA Remote Connect Server in einem Rechenzentrum. Sie nutzen sichere Fernwartung als Service – ohne eigene Server-Infrastruktur, inklusive Einrichtung, Updates und Backup.",
  },
  {
    title: "Ihr eigenes SINEMA RC System",
    detail:
      "Ich baue Ihr eigenes SINEMA Remote Connect System auf und richte es ein – bei Ihnen vor Ort oder in einem gemieteten Rechenzentrum. So behalten Sie die volle Kontrolle über Ihre Fernzugriffe.",
  },
];

/** How a remote-maintenance connection is set up. */
export const flow: { step: string; title: string; detail: string }[] = [
  {
    step: "01",
    title: "Anlage & SCALANCE-Router",
    detail:
      "Vor Ort verbindet ein SCALANCE-Router (z. B. M-800) Ihre Maschine oder Anlage mit dem SINEMA RC Server.",
  },
  {
    step: "02",
    title: "SINEMA RC Server im Rechenzentrum",
    detail:
      "Der Server vermittelt die sicheren, zertifikatsbasierten VPN-Tunnel und verwaltet alle Zugriffe zentral.",
  },
  {
    step: "03",
    title: "Sicherer Fernzugriff",
    detail:
      "Sie oder Ihre Techniker greifen verschlüsselt auf die Anlage zu – für Fernwartung, Diagnose und Support.",
  },
];
