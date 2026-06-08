import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Lienhard Automation GmbH gemäss schweizerischem Datenschutzgesetz (DSG).",
  alternates: { canonical: "/datenschutz" },
};

const { contact } = siteConfig;

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir
        bearbeiten Ihre Personendaten im Einklang mit dem schweizerischen
        Datenschutzgesetz (DSG) sowie – soweit anwendbar – der
        Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        {siteConfig.legalName}
        <br />
        {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
        <br />
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
      </p>

      <h2>2. Bearbeitung von Personendaten beim Besuch der Website</h2>
      <p>
        Beim Aufruf unserer Website werden durch den Hosting-Provider (Vercel)
        technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Datum und
        Uhrzeit des Zugriffs, Browsertyp). Diese Daten dienen dem sicheren und
        stabilen Betrieb der Website und werden nicht mit anderen Datenquellen
        zusammengeführt.
      </p>

      <h2>3. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular eine Anfrage zukommen lassen,
        werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse und
        Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Die Speicherung
        erfolgt in einer Datenbank unseres Dienstleisters Supabase. Wir geben
        diese Daten nicht ohne Ihre Einwilligung an Dritte weiter und verwenden
        sie ausschliesslich zur Beantwortung Ihrer Anfrage.
      </p>

      <h2>4. Eingesetzte Dienstleister (Auftragsbearbeiter)</h2>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> – Hosting und Auslieferung der Website.
        </li>
        <li>
          <strong>Supabase</strong> – Speicherung von Kontaktanfragen.
        </li>
        <li>
          {/* PLATZHALTER: weitere Dienste ergänzen, z. B. E-Mail-Versand */}
          <em>[Weitere Dienste ergänzen, falls verwendet – z. B. Resend für E-Mail-Benachrichtigungen, Analyse-Tools etc.]</em>
        </li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        {/* PLATZHALTER */}
        Diese Website verwendet derzeit nur technisch notwendige Cookies. Sollten
        zukünftig Analyse- oder Marketing-Cookies eingesetzt werden, ist dieser
        Abschnitt entsprechend zu ergänzen und gegebenenfalls ein
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
        Wir bewahren Personendaten nur so lange auf, wie dies für die genannten
        Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es
        verlangen.
      </p>

      <h2>8. Änderungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht.
      </p>

      <p className="text-sm text-steel-500">
        Stand: <em>[Datum bei Veröffentlichung ergänzen]</em>
      </p>
    </LegalPage>
  );
}
