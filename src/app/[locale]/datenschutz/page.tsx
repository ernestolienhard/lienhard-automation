import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const en = params.locale === "en";
  return {
    title: en ? "Privacy" : "Datenschutz",
    description: en
      ? "Privacy policy of Lienhard Automation GmbH under the Swiss Data Protection Act (DSG)."
      : "Datenschutzerklärung der Lienhard Automation GmbH gemäss schweizerischem Datenschutzgesetz (DSG).",
    alternates: { canonical: "/datenschutz" },
  };
}

const { contact } = siteConfig;

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  const en = params.locale === "en";
  const responsible = (
    <p>
      {siteConfig.legalName}
      <br />
      {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
      <br />
      {en ? "Email" : "E-Mail"}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <br />
      {en ? "Phone" : "Telefon"}: <a href={contact.phoneHref}>{contact.phone}</a>
    </p>
  );

  return (
    <LegalPage title={en ? "Privacy policy" : "Datenschutzerklärung"} locale={params.locale}>
      {en ? (
        <>
          <p>
            The protection of your personal data is important to me. I process
            your personal data in accordance with the Swiss Data Protection Act
            (DSG) and – where applicable – the General Data Protection Regulation
            (GDPR).
          </p>
          <h2>1. Controller</h2>
          {responsible}
          <h2>2. Processing of personal data when visiting the website</h2>
          <p>
            When you access this website, technically necessary data (e.g. IP
            address, date and time of access, browser type) are processed by the
            hosting provider (Vercel). These data serve the secure and stable
            operation of the website and are not merged with other data sources.
          </p>
          <h2>3. Contact form</h2>
          <p>
            If you send me an enquiry via the contact form, the data you provide
            (name, email address and message) are stored to process your
            enquiry. Storage takes place in a database of my service provider
            Supabase. I do not pass on this data to third parties without your
            consent and use it solely to answer your enquiry.
          </p>
          <h2>4. Service providers used (processors)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – hosting and delivery of the website.</li>
            <li><strong>Supabase</strong> – storage of contact enquiries.</li>
            <li><em>[Add further services if used – e.g. Resend for email notifications, analytics tools, etc.]</em></li>
          </ul>
          <h2>5. Cookies</h2>
          <p>
            This website currently uses only technically necessary cookies. If
            analytics or marketing cookies are used in the future, this section
            must be supplemented accordingly and a cookie banner integrated if
            necessary. <em>[To be reviewed by the client.]</em>
          </p>
          <h2>6. Your rights</h2>
          <p>
            Within the framework of the statutory requirements, you have the right
            to information, correction, deletion and restriction of the processing
            of your personal data, as well as the right to data portability. A
            message to the contact address above is sufficient to exercise these
            rights.
          </p>
          <h2>7. Retention</h2>
          <p>
            I retain personal data only for as long as is necessary for the stated
            purposes or as required by statutory retention periods.
          </p>
          <h2>8. Changes</h2>
          <p>
            I reserve the right to adapt this privacy policy so that it always
            complies with the current legal requirements.
          </p>
          <p className="text-sm text-steel-500">
            Last updated: <em>[add date on publication]</em>
          </p>
        </>
      ) : (
        <>
          <p>
            Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen.
            Ich bearbeite Ihre Personendaten im Einklang mit dem schweizerischen
            Datenschutzgesetz (DSG) sowie – soweit anwendbar – der
            Datenschutz-Grundverordnung (DSGVO).
          </p>
          <h2>1. Verantwortliche Stelle</h2>
          {responsible}
          <h2>2. Bearbeitung von Personendaten beim Besuch der Website</h2>
          <p>
            Beim Aufruf dieser Website werden durch den Hosting-Provider (Vercel)
            technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Datum und
            Uhrzeit des Zugriffs, Browsertyp). Diese Daten dienen dem sicheren und
            stabilen Betrieb der Website und werden nicht mit anderen Datenquellen
            zusammengeführt.
          </p>
          <h2>3. Kontaktformular</h2>
          <p>
            Wenn Sie mir über das Kontaktformular eine Anfrage zukommen lassen,
            werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse und
            Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Die Speicherung
            erfolgt in einer Datenbank meines Dienstleisters Supabase. Ich gebe
            diese Daten nicht ohne Ihre Einwilligung an Dritte weiter und verwende
            sie ausschliesslich zur Beantwortung Ihrer Anfrage.
          </p>
          <h2>4. Eingesetzte Dienstleister (Auftragsbearbeiter)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – Hosting und Auslieferung der Website.</li>
            <li><strong>Supabase</strong> – Speicherung von Kontaktanfragen.</li>
            <li><em>[Weitere Dienste ergänzen, falls verwendet – z. B. Resend für E-Mail-Benachrichtigungen, Analyse-Tools etc.]</em></li>
          </ul>
          <h2>5. Cookies</h2>
          <p>
            Diese Website verwendet derzeit nur technisch notwendige Cookies.
            Sollten zukünftig Analyse- oder Marketing-Cookies eingesetzt werden,
            ist dieser Abschnitt entsprechend zu ergänzen und gegebenenfalls ein
            Cookie-Banner einzubinden. <em>[Vom Kunden zu prüfen.]</em>
          </p>
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft,
            Berichtigung, Löschung und Einschränkung der Bearbeitung Ihrer
            Personendaten sowie das Recht auf Datenübertragbarkeit. Zur Ausübung
            dieser Rechte genügt eine Mitteilung an die oben genannte
            Kontaktadresse.
          </p>
          <h2>7. Aufbewahrung</h2>
          <p>
            Ich bewahre Personendaten nur so lange auf, wie dies für die genannten
            Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es
            verlangen.
          </p>
          <h2>8. Änderungen</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie
            stets den aktuellen rechtlichen Anforderungen entspricht.
          </p>
          <p className="text-sm text-steel-500">
            Stand: <em>[Datum bei Veröffentlichung ergänzen]</em>
          </p>
        </>
      )}
    </LegalPage>
  );
}
