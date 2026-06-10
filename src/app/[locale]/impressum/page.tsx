import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";
import { pageLocale } from "@/i18n/config";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const l = pageLocale(params.locale);
  const title = l === "en" ? "Imprint" : l === "es" ? "Aviso legal" : "Impressum";
  const description =
    l === "en"
      ? "Imprint and provider identification of Lienhard Automation GmbH."
      : l === "es"
        ? "Aviso legal e identificación del prestador de Lienhard Automation GmbH."
        : "Impressum und Anbieterkennzeichnung der Lienhard Automation GmbH.";
  return { title, description, alternates: { canonical: "/impressum" }, robots: { index: true, follow: true } };
}

const { contact } = siteConfig;

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  const l = pageLocale(params.locale);
  const en = l === "en";
  const es = l === "es";
  const title = en ? "Imprint" : es ? "Aviso legal" : "Impressum";

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
  const phoneLabel = es ? "Teléfono" : en ? "Phone" : "Telefon";
  const emailLabel = es ? "Correo electrónico" : en ? "Email" : "E-Mail";
  const contactBlock = (
    <p>
      {phoneLabel}: <a href={contact.phoneHref}>{contact.phone}</a>
      <br />
      {emailLabel}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  );

  return (
    <LegalPage title={title} locale={params.locale}>
      {es ? (
        <>
          <h2>Datos del prestador</h2>
          {address}
          <h2>Persona autorizada para representar</h2>
          <p>{contact.person}, Director</p>
          <h2>Contacto</h2>
          {contactBlock}
          <h2>Registro mercantil / UID</h2>
          <p>
            Inscripción en el registro mercantil: <em>[añadir número UID / de registro mercantil]</em>
            <br />
            Número de IVA: <em>[añadir número de IVA, si lo hay]</em>
          </p>
          <h2>Exención de responsabilidad</h2>
          <p>
            Los contenidos de este sitio web se han elaborado con el mayor cuidado
            posible. No obstante, no se asume ninguna garantía sobre la exactitud,
            integridad y actualidad de los contenidos. De los contenidos de los
            enlaces externos son responsables exclusivamente sus operadores.
          </p>
          <h2>Derechos de autor</h2>
          <p>
            Los contenidos publicados en este sitio web están sujetos a la
            legislación suiza de derechos de autor. Cualquier uso fuera de los
            límites de los derechos de autor requiere el consentimiento previo por
            escrito del autor correspondiente.
          </p>
          <p className="text-sm text-steel-500">
            Última actualización: <em>[añadir fecha en la publicación]</em>
          </p>
        </>
      ) : en ? (
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
