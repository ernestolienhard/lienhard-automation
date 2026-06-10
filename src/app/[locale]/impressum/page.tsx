import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const en = params.locale === "en";
  return {
    title: en ? "Imprint" : "Impressum",
    description: en
      ? "Imprint and provider identification of Lienhard Automation GmbH."
      : "Impressum und Anbieterkennzeichnung der Lienhard Automation GmbH.",
    alternates: { canonical: "/impressum" },
    robots: { index: true, follow: true },
  };
}

const { contact } = siteConfig;

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  const en = params.locale === "en";
  const address = (
    <p>
      {siteConfig.legalName}
      <br />
      {contact.street}
      <br />
      {contact.postalCode} {contact.city}
      <br />
      {contact.country}
    </p>
  );
  const contactBlock = (
    <p>
      {en ? "Phone" : "Telefon"}: <a href={contact.phoneHref}>{contact.phone}</a>
      <br />
      {en ? "Email" : "E-Mail"}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  );

  return (
    <LegalPage title={en ? "Imprint" : "Impressum"} locale={params.locale}>
      {en ? (
        <>
          <h2>Provider information</h2>
          {address}
          <h2>Authorised representative</h2>
          <p>{contact.person}, Managing Director</p>
          <h2>Contact</h2>
          {contactBlock}
          <h2>Commercial register / UID</h2>
          <p>
            Commercial register entry: <em>[add UID / commercial register number]</em>
            <br />
            VAT number: <em>[add VAT number, if available]</em>
          </p>
          <h2>Disclaimer</h2>
          <p>
            The contents of this website were created with the greatest possible
            care. However, no guarantee is given for the accuracy, completeness
            and timeliness of the contents. The operators of external links are
            solely responsible for their contents.
          </p>
          <h2>Copyright</h2>
          <p>
            The contents published on this website are subject to Swiss copyright
            law. Any use outside the limits of copyright requires the prior
            written consent of the respective author.
          </p>
          <p className="text-sm text-steel-500">
            Last updated: <em>[add date on publication]</em>
          </p>
        </>
      ) : (
        <>
          <h2>Angaben gemäss Anbieterkennzeichnung</h2>
          {address}
          <h2>Vertretungsberechtigte Person</h2>
          <p>{contact.person}, Geschäftsführer</p>
          <h2>Kontakt</h2>
          {contactBlock}
          <h2>Handelsregister / UID</h2>
          <p>
            Handelsregistereintrag: <em>[UID-Nummer / Handelsregister-Nummer ergänzen]</em>
            <br />
            Mehrwertsteuernummer: <em>[MWST-Nummer ergänzen, falls vorhanden]</em>
          </p>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte wird jedoch keine Gewähr übernommen. Für Inhalte externer
            Links sind ausschliesslich deren Betreiber verantwortlich.
          </p>
          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            schweizerischen Urheberrecht. Jede Verwertung ausserhalb der Grenzen
            des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des
            jeweiligen Urhebers.
          </p>
          <p className="text-sm text-steel-500">
            Stand: <em>[Datum bei Veröffentlichung ergänzen]</em>
          </p>
        </>
      )}
    </LegalPage>
  );
}
