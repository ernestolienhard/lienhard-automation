import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig, getLegalName, getVatNumber } from "@/lib/site";
import { pageLocale } from "@/i18n/config";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const l = pageLocale(params.locale);
  const title = l === "en" ? "Imprint" : l === "es" ? "Aviso legal" : "Impressum";
  const description =
    l === "en"
      ? "Imprint and provider identification of Lienhard Automation LLC."
      : l === "es"
        ? "Aviso legal e identificación del prestador de Lienhard Automation S.L."
        : "Impressum und Anbieterkennzeichnung der Lienhard Automation GmbH.";
  return { title, description, alternates: { canonical: "/impressum" }, robots: { index: true, follow: true } };
}

const { contact } = siteConfig;

export default function ImpressumPage({ params }: { params: { locale: string } }) {
  const l = pageLocale(params.locale);
  const en = l === "en";
  const es = l === "es";
  const titles: Record<string, string> = { de: "Impressum", en: "Imprint", es: "Aviso legal", fr: "Mentions légales", it: "Note legali", pt: "Informação legal" };
  const title = titles[l] ?? titles.de;

  const address = (
    <p>
      {getLegalName(l)}
      <br />
      {contact.street}
      <br />
      {contact.postalCode} {contact.city}
      <br />
      {contact.country}
    </p>
  );
  const phoneLabels: Record<string, string> = { de: "Telefon", en: "Phone", es: "Teléfono", fr: "Téléphone", it: "Telefono", pt: "Telefone" };
  const emailLabels: Record<string, string> = { de: "E-Mail", en: "Email", es: "Correo electrónico", fr: "E-mail", it: "E-mail", pt: "E-mail" };
  const phoneLabel = phoneLabels[l] ?? phoneLabels.de;
  const emailLabel = emailLabels[l] ?? emailLabels.de;
  const uid = siteConfig.registration.uid;
  const vat = getVatNumber(l);
  const contactBlock = (
    <p>
      {phoneLabel}: <a href={contact.phoneHref}>{contact.phone}</a>
      <br />
      {emailLabel}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  );

  return (
    <LegalPage title={title}>
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
            Inscripción en el registro mercantil (Registro Mercantil del Cantón de Zúrich): {uid}
            {vat ? (
              <>
                <br />
                Número de IVA: {vat}
              </>
            ) : null}
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
            Commercial register entry (Commercial Registry Office of the Canton of Zurich): {uid}
            {vat ? (
              <>
                <br />
                VAT number: {vat}
              </>
            ) : null}
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
      ) : l === "fr" ? (
        <>
          <h2>Coordonnées du prestataire</h2>
          {address}
          <h2>Personne autorisée à représenter</h2>
          <p>{contact.person}, Gérant</p>
          <h2>Contact</h2>
          {contactBlock}
          <h2>Registre du commerce / IDE</h2>
          <p>
            Inscription au registre du commerce (Office du registre du commerce du canton de Zurich) : {uid}
            {vat ? (
              <>
                <br />
                Numéro de TVA : {vat}
              </>
            ) : null}
          </p>
          <h2>Clause de non-responsabilité</h2>
          <p>
            Les contenus de ce site web ont été élaborés avec le plus grand soin.
            Toutefois, aucune garantie n'est donnée quant à l'exactitude,
            l'exhaustivité et l'actualité des contenus. Les exploitants des liens
            externes sont seuls responsables de leurs contenus.
          </p>
          <h2>Droit d'auteur</h2>
          <p>
            Les contenus publiés sur ce site web sont soumis au droit d'auteur
            suisse. Toute utilisation en dehors des limites du droit d'auteur
            nécessite l'accord écrit préalable de l'auteur respectif.
          </p>
          <p className="text-sm text-steel-500">
            Dernière mise à jour : <em>[ajouter la date lors de la publication]</em>
          </p>
        </>
      ) : l === "it" ? (
        <>
          <h2>Dati del prestatore</h2>
          {address}
          <h2>Persona autorizzata a rappresentare</h2>
          <p>{contact.person}, Amministratore</p>
          <h2>Contatto</h2>
          {contactBlock}
          <h2>Registro di commercio / IDI</h2>
          <p>
            Iscrizione al registro di commercio (Ufficio del registro di commercio del Cantone di Zurigo): {uid}
            {vat ? (
              <>
                <br />
                Numero IVA: {vat}
              </>
            ) : null}
          </p>
          <h2>Esclusione di responsabilità</h2>
          <p>
            I contenuti di questo sito web sono stati elaborati con la massima
            cura. Tuttavia, non si assume alcuna garanzia per l'esattezza, la
            completezza e l'attualità dei contenuti. Dei contenuti dei link
            esterni sono responsabili esclusivamente i rispettivi gestori.
          </p>
          <h2>Diritto d'autore</h2>
          <p>
            I contenuti pubblicati su questo sito web sono soggetti al diritto
            d'autore svizzero. Qualsiasi utilizzo al di fuori dei limiti del
            diritto d'autore richiede il previo consenso scritto del rispettivo
            autore.
          </p>
          <p className="text-sm text-steel-500">
            Ultimo aggiornamento: <em>[aggiungere la data alla pubblicazione]</em>
          </p>
        </>
      ) : l === "pt" ? (
        <>
          <h2>Dados do prestador</h2>
          {address}
          <h2>Pessoa autorizada a representar</h2>
          <p>{contact.person}, Gerente</p>
          <h2>Contacto</h2>
          {contactBlock}
          <h2>Registo comercial / UID</h2>
          <p>
            Inscrição no registo comercial (Conservatória do Registo Comercial do Cantão de Zurique): {uid}
            {vat ? (
              <>
                <br />
                Número de IVA: {vat}
              </>
            ) : null}
          </p>
          <h2>Exclusão de responsabilidade</h2>
          <p>
            Os conteúdos deste site foram elaborados com o maior cuidado possível.
            No entanto, não se assume qualquer garantia quanto à exatidão,
            integridade e atualidade dos conteúdos. Pelos conteúdos das ligações
            externas são exclusivamente responsáveis os respetivos operadores.
          </p>
          <h2>Direitos de autor</h2>
          <p>
            Os conteúdos publicados neste site estão sujeitos à legislação suíça
            de direitos de autor. Qualquer utilização fora dos limites dos
            direitos de autor requer o consentimento prévio por escrito do
            respetivo autor.
          </p>
          <p className="text-sm text-steel-500">
            Última atualização: <em>[adicionar data na publicação]</em>
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
            Handelsregistereintrag (Handelsregisteramt des Kantons Zürich): {uid}
            {vat ? (
              <>
                <br />
                Mehrwertsteuernummer: {vat}
              </>
            ) : null}
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
