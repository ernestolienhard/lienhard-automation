import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Lienhard Automation GmbH.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

const { contact } = siteConfig;

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäss Anbieterkennzeichnung</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {contact.street}
        <br />
        {contact.postalCode} {contact.city}
        <br />
        {contact.country}
      </p>

      <h2>Vertretungsberechtigte Person</h2>
      <p>{contact.person}, Geschäftsführer</p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href={contact.phoneHref}>{contact.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <h2>Handelsregister / UID</h2>
      <p>
        {/* PLATZHALTER */}
        Handelsregistereintrag: <em>[UID-Nummer / Handelsregister-Nummer ergänzen]</em>
        <br />
        Mehrwertsteuernummer: <em>[MWST-Nummer ergänzen, falls vorhanden]</em>
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird
        jedoch keine Gewähr übernommen. Für Inhalte externer Links sind
        ausschliesslich deren Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte unterliegen dem
        schweizerischen Urheberrecht. Jede Verwertung ausserhalb der Grenzen des
        Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des
        jeweiligen Urhebers.
      </p>

      <p className="text-sm text-steel-500">
        Stand: <em>[Datum bei Veröffentlichung ergänzen]</em>
      </p>
    </LegalPage>
  );
}
