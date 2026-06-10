import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig, getLegalName } from "@/lib/site";
import { pageLocale } from "@/i18n/config";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const l = pageLocale(params.locale);
  const title = l === "en" ? "Privacy" : l === "es" ? "Privacidad" : "Datenschutz";
  const description =
    l === "en"
      ? "Privacy policy of Lienhard Automation LLC under the Swiss Data Protection Act (DSG)."
      : l === "es"
        ? "Política de privacidad de Lienhard Automation S.L. conforme a la Ley suiza de protección de datos (DSG)."
        : "Datenschutzerklärung der Lienhard Automation GmbH gemäss schweizerischem Datenschutzgesetz (DSG).";
  return { title, description, alternates: { canonical: "/datenschutz" } };
}

const { contact } = siteConfig;

export default function DatenschutzPage({ params }: { params: { locale: string } }) {
  const l = pageLocale(params.locale);
  const en = l === "en";
  const es = l === "es";
  const titles: Record<string, string> = { de: "Datenschutzerklärung", en: "Privacy policy", es: "Política de privacidad", fr: "Politique de confidentialité", it: "Informativa sulla privacy", pt: "Política de privacidade" };
  const emailLabels: Record<string, string> = { de: "E-Mail", en: "Email", es: "Correo electrónico", fr: "E-mail", it: "E-mail", pt: "E-mail" };
  const phoneLabels: Record<string, string> = { de: "Telefon", en: "Phone", es: "Teléfono", fr: "Téléphone", it: "Telefono", pt: "Telefone" };
  const title = titles[l] ?? titles.de;
  const responsible = (
    <p>
      {getLegalName(l)}
      <br />
      {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
      <br />
      {emailLabels[l] ?? emailLabels.de}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <br />
      {phoneLabels[l] ?? phoneLabels.de}: <a href={contact.phoneHref}>{contact.phone}</a>
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
          <h3>Google Maps</h3>
          <p>
            En la página de contacto se incrusta un mapa de Google Maps (Google
            Ireland Limited, Irlanda). Al abrir esa página, su dirección IP se
            transmite a Google para que el mapa pueda mostrarse en su navegador.
            No tenemos influencia sobre ello. Más información en la política de
            privacidad de Google:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>
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
          <h3>Google Maps</h3>
          <p>
            The contact page embeds a Google Maps map (Google Ireland Limited,
            Ireland). When you open that page, your IP address is transmitted to
            Google so that the map can be displayed in your browser. We have no
            influence over this. Further information can be found in Google's
            privacy policy:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>
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
      ) : l === "fr" ? (
        <>
          <p>
            La protection de vos données personnelles me tient à cœur. Je traite
            vos données personnelles conformément à la loi suisse sur la
            protection des données (LPD) et, le cas échéant, au Règlement général
            sur la protection des données (RGPD).
          </p>
          <h2>1. Responsable du traitement</h2>
          {responsible}
          <h2>2. Traitement des données lors de la visite du site web</h2>
          <p>
            Lors de l'accès à ce site web, des données techniquement nécessaires
            (p. ex. adresse IP, date et heure de l'accès, type de navigateur)
            sont traitées par l'hébergeur (Vercel). Ces données servent à
            l'exploitation sûre et stable du site web et ne sont pas regroupées
            avec d'autres sources de données.
          </p>
          <h2>3. Formulaire de contact</h2>
          <p>
            Si vous m'envoyez une demande via le formulaire de contact, les
            données que vous fournissez (nom, adresse e-mail et message) sont
            enregistrées pour traiter votre demande. L'enregistrement a lieu dans
            une base de données de mon prestataire Supabase. Je ne transmets pas
            ces données à des tiers sans votre consentement et les utilise
            exclusivement pour répondre à votre demande.
          </p>
          <h2>4. Prestataires utilisés (sous-traitants)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – hébergement et diffusion du site web.</li>
            <li><strong>Supabase</strong> – stockage des demandes de contact.</li>
            <li><em>[Ajouter d'autres services le cas échéant, p. ex. Resend pour les notifications par e-mail, outils d'analyse, etc.]</em></li>
          </ul>
          <h3>Google Maps</h3>
          <p>
            La page de contact intègre une carte Google Maps (Google Ireland
            Limited, Irlande). Lors de l'ouverture de cette page, votre adresse IP
            est transmise à Google afin que la carte puisse s'afficher dans votre
            navigateur. Nous n'avons aucune influence sur ce point. Vous trouverez
            de plus amples informations dans la politique de confidentialité de
            Google :{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>
          <h2>5. Cookies</h2>
          <p>
            Ce site web n'utilise actuellement que des cookies techniquement
            nécessaires. Si des cookies d'analyse ou de marketing sont utilisés à
            l'avenir, cette section devra être complétée en conséquence et, le cas
            échéant, une bannière de cookies intégrée. <em>[À vérifier par le client.]</em>
          </p>
          <h2>6. Vos droits</h2>
          <p>
            Dans le cadre des dispositions légales, vous avez le droit d'accès, de
            rectification, d'effacement et de limitation du traitement de vos
            données personnelles, ainsi que le droit à la portabilité des données.
            Pour exercer ces droits, un message à l'adresse de contact indiquée
            ci-dessus suffit.
          </p>
          <h2>7. Conservation</h2>
          <p>
            Je ne conserve les données personnelles que le temps nécessaire aux
            finalités indiquées ou requis par les délais légaux de conservation.
          </p>
          <h2>8. Modifications</h2>
          <p>
            Je me réserve le droit d'adapter cette politique de confidentialité
            afin qu'elle réponde toujours aux exigences légales en vigueur.
          </p>
          <p className="text-sm text-steel-500">
            Dernière mise à jour : <em>[ajouter la date lors de la publication]</em>
          </p>
        </>
      ) : l === "it" ? (
        <>
          <p>
            La protezione dei vostri dati personali è per me importante. Tratto i
            vostri dati personali conformemente alla legge svizzera sulla
            protezione dei dati (LPD) e, ove applicabile, al Regolamento generale
            sulla protezione dei dati (GDPR).
          </p>
          <h2>1. Titolare del trattamento</h2>
          {responsible}
          <h2>2. Trattamento dei dati durante la visita del sito web</h2>
          <p>
            Accedendo a questo sito web, l'hosting provider (Vercel) tratta dati
            tecnicamente necessari (p. es. indirizzo IP, data e ora dell'accesso,
            tipo di browser). Questi dati servono al funzionamento sicuro e
            stabile del sito web e non vengono combinati con altre fonti di dati.
          </p>
          <h2>3. Modulo di contatto</h2>
          <p>
            Se mi inviate una richiesta tramite il modulo di contatto, i dati da
            voi forniti (nome, indirizzo e-mail e messaggio) vengono memorizzati
            per gestire la vostra richiesta. La memorizzazione avviene in un
            database del mio fornitore di servizi Supabase. Non trasmetto questi
            dati a terzi senza il vostro consenso e li utilizzo esclusivamente per
            rispondere alla vostra richiesta.
          </p>
          <h2>4. Fornitori di servizi utilizzati (responsabili del trattamento)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – hosting e distribuzione del sito web.</li>
            <li><strong>Supabase</strong> – memorizzazione delle richieste di contatto.</li>
            <li><em>[Aggiungere altri servizi se utilizzati, p. es. Resend per le notifiche e-mail, strumenti di analisi, ecc.]</em></li>
          </ul>
          <h3>Google Maps</h3>
          <p>
            Nella pagina dei contatti è integrata una mappa di Google Maps (Google
            Ireland Limited, Irlanda). Aprendo questa pagina, il vostro indirizzo
            IP viene trasmesso a Google affinché la mappa possa essere
            visualizzata nel vostro browser. Non abbiamo alcuna influenza su
            questo. Ulteriori informazioni nell'informativa sulla privacy di
            Google:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>
          <h2>5. Cookie</h2>
          <p>
            Questo sito web utilizza attualmente solo cookie tecnicamente
            necessari. Se in futuro verranno utilizzati cookie di analisi o di
            marketing, questa sezione dovrà essere integrata di conseguenza e, se
            necessario, dovrà essere inserito un banner dei cookie. <em>[Da verificare a cura del cliente.]</em>
          </p>
          <h2>6. I vostri diritti</h2>
          <p>
            Nell'ambito delle disposizioni di legge, avete il diritto di accesso,
            rettifica, cancellazione e limitazione del trattamento dei vostri dati
            personali, nonché il diritto alla portabilità dei dati. Per esercitare
            questi diritti è sufficiente un messaggio all'indirizzo di contatto
            indicato sopra.
          </p>
          <h2>7. Conservazione</h2>
          <p>
            Conservo i dati personali solo per il tempo necessario alle finalità
            indicate o richiesto dai termini di conservazione previsti dalla legge.
          </p>
          <h2>8. Modifiche</h2>
          <p>
            Mi riservo il diritto di adattare questa informativa sulla privacy
            affinché sia sempre conforme ai requisiti legali vigenti.
          </p>
          <p className="text-sm text-steel-500">
            Ultimo aggiornamento: <em>[aggiungere la data alla pubblicazione]</em>
          </p>
        </>
      ) : l === "pt" ? (
        <>
          <p>
            A proteção dos seus dados pessoais é importante para mim. Trato os
            seus dados pessoais de acordo com a Lei suíça de proteção de dados
            (LPD) e, quando aplicável, com o Regulamento Geral sobre a Proteção de
            Dados (RGPD).
          </p>
          <h2>1. Responsável pelo tratamento</h2>
          {responsible}
          <h2>2. Tratamento de dados ao visitar o site</h2>
          <p>
            Ao aceder a este site, o fornecedor de alojamento (Vercel) trata dados
            tecnicamente necessários (p. ex. endereço IP, data e hora do acesso,
            tipo de navegador). Estes dados servem para o funcionamento seguro e
            estável do site e não são combinados com outras fontes de dados.
          </p>
          <h2>3. Formulário de contacto</h2>
          <p>
            Se me enviar um pedido através do formulário de contacto, os dados que
            fornecer (nome, endereço de e-mail e mensagem) são armazenados para
            tratar o seu pedido. O armazenamento é feito numa base de dados do meu
            prestador de serviços Supabase. Não transmito estes dados a terceiros
            sem o seu consentimento e utilizo-os exclusivamente para responder ao
            seu pedido.
          </p>
          <h2>4. Prestadores de serviços utilizados (subcontratantes)</h2>
          <ul>
            <li><strong>Vercel Inc.</strong> – alojamento e entrega do site.</li>
            <li><strong>Supabase</strong> – armazenamento de pedidos de contacto.</li>
            <li><em>[Adicionar outros serviços, se utilizados, p. ex. Resend para notificações por e-mail, ferramentas de análise, etc.]</em></li>
          </ul>
          <h3>Google Maps</h3>
          <p>
            Na página de contacto está integrado um mapa do Google Maps (Google
            Ireland Limited, Irlanda). Ao abrir essa página, o seu endereço IP é
            transmitido à Google para que o mapa possa ser apresentado no seu
            navegador. Não temos qualquer influência sobre isso. Mais informações
            na política de privacidade da Google:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>
          <h2>5. Cookies</h2>
          <p>
            Este site utiliza atualmente apenas cookies tecnicamente necessários.
            Se no futuro forem utilizados cookies de análise ou de marketing, esta
            secção deve ser complementada em conformidade e, se necessário,
            integrado um banner de cookies. <em>[A rever pelo cliente.]</em>
          </p>
          <h2>6. Os seus direitos</h2>
          <p>
            No âmbito dos requisitos legais, tem o direito de acesso, retificação,
            eliminação e limitação do tratamento dos seus dados pessoais, bem como
            o direito à portabilidade dos dados. Para exercer estes direitos,
            basta uma mensagem para o endereço de contacto indicado acima.
          </p>
          <h2>7. Conservação</h2>
          <p>
            Conservo os dados pessoais apenas durante o tempo necessário para as
            finalidades indicadas ou exigido pelos prazos legais de conservação.
          </p>
          <h2>8. Alterações</h2>
          <p>
            Reservo-me o direito de adaptar esta política de privacidade para que
            cumpra sempre os requisitos legais em vigor.
          </p>
          <p className="text-sm text-steel-500">
            Última atualização: <em>[adicionar data na publicação]</em>
          </p>
        </>
      ) : (
        <>
          <h2>1. Worum geht es in dieser Datenschutzerklärung?</h2>
          <p>
            Die {getLegalName(l)} (nachfolgend «wir» oder «uns») bearbeitet
            Personendaten, die Sie betreffen, wenn Sie diese Website besuchen, mit
            uns über das Kontaktformular, per E-Mail oder Telefon in Kontakt treten
            oder anderweitig mit uns zu tun haben. «Personendaten» sind alle
            Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen;
            «bearbeiten» meint jeden Umgang damit (z. B. Erheben, Speichern,
            Verwenden, Bekanntgeben).
          </p>
          <p>
            Diese Datenschutzerklärung ist sowohl am schweizerischen
            Datenschutzgesetz (DSG) als auch – soweit anwendbar – an der
            EU-Datenschutz-Grundverordnung (DSGVO) ausgerichtet. Ob und inwieweit
            die DSGVO anwendbar ist, hängt vom Einzelfall ab.
          </p>

          <h2>2. Wer ist für die Bearbeitung Ihrer Daten verantwortlich?</h2>
          <p>
            Verantwortlich für die Datenbearbeitung nach dieser Datenschutzerklärung
            ist:
          </p>
          <p>
            {getLegalName(l)}
            <br />
            {siteConfig.contact.person}
            <br />
            {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
            <br />
            E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            Telefon: <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p>
            Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie
            sich jederzeit an diese Adresse wenden.
          </p>

          <h2>3. Welche Personendaten bearbeiten wir?</h2>
          <p>Je nach Kontakt bearbeiten wir verschiedene Kategorien von Personendaten:</p>
          <ul>
            <li>
              <strong>Kommunikationsdaten:</strong> Wenn Sie uns über das
              Kontaktformular, per E-Mail oder Telefon kontaktieren, bearbeiten wir
              die von Ihnen angegebenen Daten – insbesondere Name, E-Mail-Adresse
              und den Inhalt Ihrer Nachricht – sowie weitere Randdaten der
              Kommunikation.
            </li>
            <li>
              <strong>Technische Daten / Server-Logfiles:</strong> Beim Besuch der
              Website übermittelt Ihr Browser aus technischen Gründen automatisch
              Daten. Dazu gehören insbesondere die IP-Adresse, Datum und Uhrzeit
              des Zugriffs, die aufgerufene Seite bzw. Datei, die übertragene
              Datenmenge, Browsertyp und -version, das Betriebssystem sowie die
              zuvor besuchte Seite (Referrer-URL). Aus diesen Daten können wir in
              der Regel nicht auf Ihre Person schliessen.
            </li>
          </ul>
          <p>
            Sie sind nicht verpflichtet, uns Personendaten bekanntzugeben. Bestimmte
            Angaben sind jedoch erforderlich, damit wir Ihre Anfrage bearbeiten
            können (z. B. im Kontaktformular).
          </p>

          <h2>4. Zu welchen Zwecken bearbeiten wir Ihre Personendaten?</h2>
          <p>Wir bearbeiten Personendaten insbesondere zu folgenden Zwecken:</p>
          <ul>
            <li>zur Beantwortung und Bearbeitung Ihrer Anfragen sowie zur Kontaktpflege;</li>
            <li>zur Bereitstellung, zum sicheren und stabilen Betrieb sowie zur Optimierung dieser Website;</li>
            <li>zur Gewährleistung der IT-Sicherheit und zur Abwehr von Missbrauch (z. B. Auswertung von Log-Daten bei konkretem Verdacht);</li>
            <li>zur Einhaltung gesetzlicher Pflichten und zur Wahrung unserer berechtigten Interessen (z. B. Durchsetzung oder Abwehr von Rechtsansprüchen).</li>
          </ul>
          <p>
            Wir verwenden Ihre Daten nicht für Werbung, erstellen keine
            Persönlichkeitsprofile und betreiben kein Tracking.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Diese Website verwendet ausschliesslich technisch notwendige Cookies,
            die für den Betrieb und die Sicherheit der Website erforderlich sind
            (z. B. zur Sprachauswahl). Wir setzen keine Analyse-, Tracking- oder
            Marketing-Cookies ein. Sie können Cookies in Ihren Browsereinstellungen
            einschränken oder löschen; die Website kann dann allenfalls nicht mehr
            vollständig funktionieren.
          </p>

          <h2>6. An wen geben wir Daten weiter?</h2>
          <p>
            Für den Betrieb der Website und die Bearbeitung Ihrer Anfragen setzen
            wir sorgfältig ausgewählte Dienstleister ein, die Personendaten in
            unserem Auftrag und nach unseren Weisungen bearbeiten
            (Auftragsbearbeiter):
          </p>
          <ul>
            <li><strong>Vercel Inc.</strong> – Hosting und Auslieferung der Website (Server-Logfiles).</li>
            <li><strong>Supabase</strong> – Speicherung der über das Kontaktformular übermittelten Anfragen.</li>
            <li>
              <strong>Google (Google Ireland Limited)</strong> – Darstellung der
              eingebetteten Karte auf der Kontaktseite («Google Maps»). Beim Aufruf
              der Kontaktseite wird Ihre IP-Adresse an Google übertragen, damit die
              Karte dargestellt werden kann. Einzelheiten:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            Eine Weitergabe an weitere Empfänger (z. B. Behörden oder Gerichte)
            erfolgt nur, soweit wir gesetzlich dazu verpflichtet oder berechtigt
            sind oder Sie eingewilligt haben.
          </p>

          <h2>7. Geben wir Personendaten ins Ausland bekannt?</h2>
          <p>
            Einzelne der vorgenannten Dienstleister können Daten auch ausserhalb
            der Schweiz und des EWR bearbeiten, insbesondere in den USA. Soweit ein
            Land kein angemessenes Datenschutzniveau gewährleistet, stützen wir die
            Übermittlung auf geeignete Garantien, insbesondere die
            Standardvertragsklauseln der Europäischen Kommission bzw. die vom EDÖB
            anerkannten Vertragsklauseln, oder auf eine andere gesetzlich zulässige
            Grundlage (z. B. Ihre Einwilligung oder die Vertragsabwicklung).
          </p>

          <h2>8. Wie lange bewahren wir Personendaten auf?</h2>
          <p>
            Wir bearbeiten Personendaten nur so lange, wie es für die genannten
            Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten es
            verlangen. Kommunikationsdaten aus Anfragen bewahren wir auf, solange
            dies zur Bearbeitung Ihres Anliegens und allfälliger Anschlussfragen
            nötig ist. Server-Logfiles werden nur für eine begrenzte Zeit
            gespeichert. Danach werden die Daten gelöscht oder anonymisiert, sofern
            keine gesetzlichen oder vertraglichen Pflichten entgegenstehen.
          </p>

          <h2>9. Auf welchen Rechtsgrundlagen beruht die Datenbearbeitung?</h2>
          <p>
            Nach schweizerischem Recht dürfen wir Personendaten bearbeiten, sofern
            dies nach dem DSG zulässig ist. Soweit die DSGVO anwendbar ist, stützen
            wir die Bearbeitung je nach Fall auf: Ihre Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO), die Erfüllung eines Vertrags oder vorvertraglicher
            Massnahmen (Art. 6 Abs. 1 lit. b DSGVO), die Erfüllung rechtlicher
            Pflichten (Art. 6 Abs. 1 lit. c DSGVO) oder unsere berechtigten
            Interessen am sicheren Betrieb der Website und an der Beantwortung von
            Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h2>10. Wie schützen wir Ihre Daten?</h2>
          <p>
            Wir treffen angemessene technische und organisatorische
            Sicherheitsmassnahmen, um Ihre Personendaten vor unberechtigtem
            Zugriff, Verlust oder Missbrauch zu schützen (z. B. verschlüsselte
            Übertragung via HTTPS). Ein vollständiger Schutz vor allen Risiken ist
            allerdings nicht möglich; ein Restrisiko lässt sich nicht ausschliessen.
          </p>

          <h2>11. Welche Rechte haben Sie?</h2>
          <p>
            Im Rahmen des anwendbaren Datenschutzrechts haben Sie insbesondere das
            Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Bearbeitung Ihrer Personendaten sowie das Recht auf
            Datenübertragbarkeit. Soweit wir Daten auf Basis Ihrer Einwilligung
            bearbeiten, können Sie diese jederzeit mit Wirkung für die Zukunft
            widerrufen. Zur Ausübung dieser Rechte genügt eine Mitteilung an die
            unter Ziffer 2 genannte Kontaktadresse; zur Identitätsprüfung können wir
            einen Nachweis verlangen. Diese Rechte unterliegen gesetzlichen
            Voraussetzungen und Einschränkungen.
          </p>
          <p>
            Sie haben zudem das Recht, bei der zuständigen Aufsichtsbehörde
            Beschwerde zu erheben. Zuständige Behörde in der Schweiz ist der
            Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Änderungen</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit anpassen, damit sie
            stets den aktuellen rechtlichen Anforderungen und unserer
            Datenbearbeitung entspricht. Es gilt die jeweils auf dieser Website
            veröffentlichte Fassung.
          </p>
          <p className="text-sm text-steel-500">Stand: Juni 2026</p>
        </>
      )}
    </LegalPage>
  );
}
