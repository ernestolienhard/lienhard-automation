import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";
import { pageLocale } from "@/i18n/config";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const l = pageLocale(params.locale);
  const title = l === "en" ? "Privacy" : l === "es" ? "Privacidad" : "Datenschutz";
  const description =
    l === "en"
      ? "Privacy policy of Lienhard Automation GmbH under the Swiss Data Protection Act (DSG)."
      : l === "es"
        ? "Política de privacidad de Lienhard Automation GmbH conforme a la Ley suiza de protección de datos (DSG)."
        : "Datenschutzerklärung der Lienhard Automation GmbH gemäss schweizerischem Datenschutzgesetz (DSG).";
  return { title, description, alternates: { canonical: "/datenschutz" } };
}

const { contact } = siteConfig;

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  const l = pageLocale(params.locale);
  const en = l === "en";
  const es = l === "es";
  const title = en ? "Privacy policy" : es ? "Política de privacidad" : "Datenschutzerklärung";
  const responsible = (
    <p>
      {siteConfig.legalName}
      <br />
      {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
      <br />
      {es ? "Correo electrónico" : en ? "Email" : "E-Mail"}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <br />
      {es ? "Teléfono" : en ? "Phone" : "Telefon"}: <a href={contact.phoneHref}>{contact.phone}</a>
    </p>
  );

  return (
    <LegalPage title={title} locale={params.locale}>
      {es ? (
        <>
          <p>
            La protección de sus datos personales es importante para mí. Trato sus
            datos personales conforme a la Ley suiza de protección de datos (DSG)
            y, en su caso, al Reglamento General de Protección de Datos (RGPD).
          </p>
          <h2>1. Responsable</h2>
          {responsible}
          <h2>2. Tratamiento de datos personales al visitar el sitio web</h2>
          <p>
            Al acceder a este sitio web, el proveedor de alojamiento (Vercel)
            trata datos técnicamente necesarios (p. ej., dirección IP, fecha y
            hora del acceso, tipo de navegador). Estos datos sirven para el
            funcionamiento seguro y estable del sitio web y no se combinan con
            otras fuentes de datos.
          </p>
          <h2>3. Formulario de contacto</h2>
          <p>
            Si me envía una consulta a través del formulario de contacto, los
            datos que facilite (nombre, dirección de correo electrónico y mensaje)
            se almacenan para tramitar su consulta. El almacenamiento se realiza
            en una base de datos de mi proveedor de servicios Supabase. No
            transmito estos datos a terceros sin su consentimiento y los utilizo
            exclusivamente para responder a su consulta.
          </p>
          <h2>4. Proveedores de servicios utilizados (encargados del tratamiento)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – alojamiento y entrega del sitio web.</li>
            <li><strong>Supabase</strong> – almacenamiento de consultas de contacto.</li>
            <li><em>[Añadir más servicios si se utilizan, p. ej. Resend para notificaciones por correo electrónico, herramientas de análisis, etc.]</em></li>
          </ul>
          <h2>5. Cookies</h2>
          <p>
            Este sitio web utiliza actualmente solo cookies técnicamente
            necesarias. Si en el futuro se utilizan cookies de análisis o
            marketing, esta sección debe ampliarse en consecuencia e integrarse,
            en su caso, un banner de cookies. <em>[A revisar por el cliente.]</em>
          </p>
          <h2>6. Sus derechos</h2>
          <p>
            En el marco de los requisitos legales, tiene derecho a información,
            rectificación, supresión y limitación del tratamiento de sus datos
            personales, así como el derecho a la portabilidad de los datos. Para
            ejercer estos derechos basta con un mensaje a la dirección de contacto
            indicada arriba.
          </p>
          <h2>7. Conservación</h2>
          <p>
            Conservo los datos personales solo durante el tiempo necesario para
            los fines indicados o exigido por los plazos legales de conservación.
          </p>
          <h2>8. Modificaciones</h2>
          <p>
            Me reservo el derecho de adaptar esta política de privacidad para que
            siempre cumpla con los requisitos legales vigentes.
          </p>
          <p className="text-sm text-steel-500">
            Última actualización: <em>[añadir fecha en la publicación]</em>
          </p>
        </>
      ) : en ? (
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
