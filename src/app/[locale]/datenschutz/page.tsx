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
      {siteConfig.contact.person}
      <br />
      {contact.street}, {contact.postalCode} {contact.city}, {contact.country}
      <br />
      {emailLabels[l] ?? emailLabels.de}: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <br />
      {phoneLabels[l] ?? phoneLabels.de}: <a href={contact.phoneHref}>{contact.phone}</a>
    </p>
  );

  return (
    <LegalPage title={title}>
      {es ? (
        <>
          <h2>1. ¿De qué trata esta política de privacidad?</h2>
          <p>
            La {getLegalName(l)} (en adelante «nosotros») trata datos personales
            que le conciernen cuando visita este sitio web, se pone en contacto con
            nosotros a través del formulario de contacto, por correo electrónico o
            por teléfono, o se relaciona de otro modo con nosotros. Son «datos
            personales» todas las informaciones que se refieren a una persona
            identificada o identificable; «tratar» significa cualquier manejo de los
            mismos (p. ej. recoger, almacenar, utilizar, comunicar).
          </p>
          <p>
            Esta política de privacidad está orientada tanto a la Ley suiza de
            protección de datos (DSG) como, en su caso, al Reglamento General de
            Protección de Datos (RGPD) de la UE. Si el RGPD es aplicable y en qué
            medida depende del caso concreto.
          </p>

          <h2>2. ¿Quién es responsable del tratamiento de sus datos?</h2>
          <p>El responsable del tratamiento de datos según esta política de privacidad es:</p>
          {responsible}
          <p>
            Para cualquier pregunta sobre protección de datos o para ejercer sus
            derechos, puede dirigirse en cualquier momento a esta dirección.
          </p>

          <h2>3. ¿Qué datos personales tratamos?</h2>
          <p>Según el contacto, tratamos distintas categorías de datos personales:</p>
          <ul>
            <li>
              <strong>Datos de comunicación:</strong> cuando nos contacta a través
              del formulario de contacto, por correo electrónico o por teléfono,
              tratamos los datos que facilita —en particular su nombre, dirección de
              correo electrónico y el contenido de su mensaje— así como otros datos
              accesorios de la comunicación.
            </li>
            <li>
              <strong>Datos técnicos / archivos de registro del servidor:</strong>{" "}
              al visitar el sitio web, su navegador transmite automáticamente datos
              por motivos técnicos. Entre ellos figuran, en particular, la dirección
              IP, la fecha y hora del acceso, la página o el archivo solicitados, el
              volumen de datos transferido, el tipo y la versión del navegador, el
              sistema operativo y la página visitada anteriormente (URL de
              referencia). Por lo general, no podemos deducir su identidad a partir
              de estos datos.
            </li>
          </ul>
          <p>
            No está obligado a facilitarnos datos personales. No obstante,
            determinados datos son necesarios para que podamos tramitar su consulta
            (p. ej. en el formulario de contacto).
          </p>

          <h2>4. ¿Con qué fines tratamos sus datos personales?</h2>
          <p>Tratamos datos personales, en particular, con los siguientes fines:</p>
          <ul>
            <li>para responder y tramitar sus consultas, así como para el mantenimiento del contacto;</li>
            <li>para la prestación, el funcionamiento seguro y estable y la optimización de este sitio web;</li>
            <li>para garantizar la seguridad informática y prevenir abusos (p. ej. el análisis de datos de registro en caso de sospecha concreta);</li>
            <li>para cumplir obligaciones legales y salvaguardar nuestros intereses legítimos (p. ej. el ejercicio o la defensa de pretensiones jurídicas).</li>
          </ul>
          <p>
            No utilizamos sus datos para publicidad, no elaboramos perfiles de
            personalidad ni realizamos seguimiento (tracking).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Este sitio web utiliza exclusivamente cookies técnicamente necesarias,
            imprescindibles para el funcionamiento y la seguridad del sitio web
            (p. ej. para la selección de idioma). No utilizamos cookies de análisis,
            seguimiento ni marketing. Puede limitar o eliminar las cookies en la
            configuración de su navegador; en tal caso, es posible que el sitio web
            ya no funcione por completo.
          </p>

          <h2>6. ¿A quién comunicamos sus datos?</h2>
          <p>
            Para el funcionamiento del sitio web y la tramitación de sus consultas,
            recurrimos a proveedores de servicios cuidadosamente seleccionados que
            tratan datos personales por encargo nuestro y conforme a nuestras
            instrucciones (encargados del tratamiento):
          </p>
          <ul>
            <li><strong>Vercel Inc.:</strong> alojamiento y entrega del sitio web (archivos de registro del servidor).</li>
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.):</strong> envío y recepción de su consulta de contacto por correo electrónico a través de nuestro buzón de Microsoft 365.</li>
            <li>
              <strong>Google (Google Ireland Limited):</strong> representación del
              mapa incrustado en la página de contacto («Google Maps»). Al abrir la
              página de contacto, su dirección IP se transmite a Google para que
              pueda mostrarse el mapa. Detalles:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            Una comunicación a otros destinatarios (p. ej. autoridades o tribunales)
            solo se produce en la medida en que estemos legalmente obligados o
            autorizados a ello o usted haya dado su consentimiento.
          </p>

          <h2>7. ¿Comunicamos datos personales al extranjero?</h2>
          <p>
            Algunos de los proveedores mencionados pueden tratar datos también fuera
            de Suiza y del EEE, en particular en EE. UU. En la medida en que un país
            no garantice un nivel de protección de datos adecuado, basamos la
            transferencia en garantías apropiadas, en particular las cláusulas
            contractuales tipo de la Comisión Europea o las cláusulas reconocidas
            por el EDÖB, o en otra base legalmente admisible (p. ej. su
            consentimiento o la ejecución del contrato).
          </p>

          <h2>8. ¿Durante cuánto tiempo conservamos los datos personales?</h2>
          <p>
            Tratamos los datos personales solo durante el tiempo necesario para los
            fines indicados o exigido por los plazos legales de conservación. Los
            datos de comunicación de las consultas se conservan mientras sea
            necesario para tramitar su solicitud y posibles preguntas de
            seguimiento. Los archivos de registro del servidor se almacenan solo
            durante un tiempo limitado. Posteriormente, los datos se eliminan o
            anonimizan, salvo que existan obligaciones legales o contractuales que
            lo impidan.
          </p>

          <h2>9. ¿En qué bases jurídicas se basa el tratamiento?</h2>
          <p>
            Conforme al derecho suizo, podemos tratar datos personales siempre que
            ello sea admisible según la DSG. En la medida en que sea aplicable el
            RGPD, basamos el tratamiento, según el caso, en: su consentimiento
            (art. 6, ap. 1, letra a RGPD), la ejecución de un contrato o de medidas
            precontractuales (art. 6, ap. 1, letra b RGPD), el cumplimiento de
            obligaciones legales (art. 6, ap. 1, letra c RGPD) o nuestros intereses
            legítimos en el funcionamiento seguro del sitio web y en la respuesta a
            las consultas (art. 6, ap. 1, letra f RGPD).
          </p>

          <h2>10. ¿Cómo protegemos sus datos?</h2>
          <p>
            Adoptamos medidas de seguridad técnicas y organizativas adecuadas para
            proteger sus datos personales frente a accesos no autorizados, pérdida o
            uso indebido (p. ej. transmisión cifrada mediante HTTPS). No obstante, no
            es posible una protección completa frente a todos los riesgos; un riesgo
            residual no puede excluirse.
          </p>

          <h2>11. ¿Qué derechos tiene usted?</h2>
          <p>
            En el marco del derecho de protección de datos aplicable, tiene en
            particular el derecho de información, rectificación, supresión y
            limitación del tratamiento de sus datos personales, así como el derecho
            a la portabilidad de los datos. En la medida en que tratemos datos sobre
            la base de su consentimiento, puede revocarlo en cualquier momento con
            efecto para el futuro. Para ejercer estos derechos basta con un mensaje a
            la dirección de contacto indicada en el punto 2; para verificar su
            identidad podemos solicitar un comprobante. Estos derechos están sujetos
            a requisitos y limitaciones legales.
          </p>
          <p>
            Asimismo, tiene derecho a presentar una reclamación ante la autoridad de
            control competente. La autoridad competente en Suiza es el Encargado
            Federal de Protección de Datos y Transparencia (EDÖB),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Modificaciones</h2>
          <p>
            Podemos adaptar esta política de privacidad en cualquier momento para
            que cumpla siempre con los requisitos legales vigentes y con nuestro
            tratamiento de datos. Se aplica la versión publicada en cada momento en
            este sitio web.
          </p>
          <p className="text-sm text-steel-500">Última actualización: junio de 2026</p>
        </>
      ) : en ? (
        <>
          <h2>1. What is this privacy policy about?</h2>
          <p>
            {getLegalName(l)} (hereinafter «we» or «us») processes personal data
            concerning you when you visit this website, contact us via the contact
            form, by email or telephone, or otherwise deal with us. «Personal data»
            means any information relating to an identified or identifiable person;
            «process» means any handling of it (e.g. collecting, storing, using,
            disclosing).
          </p>
          <p>
            This privacy policy is based on both the Swiss Data Protection Act (DSG)
            and – where applicable – the EU General Data Protection Regulation
            (GDPR). Whether and to what extent the GDPR applies depends on the
            individual case.
          </p>

          <h2>2. Who is responsible for processing your data?</h2>
          <p>The controller responsible for the data processing under this privacy policy is:</p>
          {responsible}
          <p>
            For any questions about data protection or to exercise your rights, you
            can contact this address at any time.
          </p>

          <h2>3. What personal data do we process?</h2>
          <p>Depending on the context, we process various categories of personal data:</p>
          <ul>
            <li>
              <strong>Communication data:</strong> when you contact us via the
              contact form, by email or telephone, we process the data you provide
              – in particular your name, email address and the content of your
              message – as well as other peripheral data of the communication.
            </li>
            <li>
              <strong>Technical data / server log files:</strong> when you visit the
              website, your browser automatically transmits data for technical
              reasons. This includes in particular the IP address, the date and time
              of access, the page or file requested, the volume of data transferred,
              the browser type and version, the operating system and the previously
              visited page (referrer URL). As a rule, we cannot deduce your identity
              from this data.
            </li>
          </ul>
          <p>
            You are not obliged to provide us with personal data. However, certain
            information is necessary so that we can process your enquiry (e.g. in the
            contact form).
          </p>

          <h2>4. For what purposes do we process your personal data?</h2>
          <p>We process personal data in particular for the following purposes:</p>
          <ul>
            <li>to answer and process your enquiries and to maintain contact;</li>
            <li>to provide, securely and stably operate and optimise this website;</li>
            <li>to ensure IT security and prevent misuse (e.g. analysing log data in the event of concrete suspicion);</li>
            <li>to comply with legal obligations and to safeguard our legitimate interests (e.g. asserting or defending legal claims).</li>
          </ul>
          <p>
            We do not use your data for advertising, do not create personality
            profiles and do not engage in tracking.
          </p>

          <h2>5. Cookies</h2>
          <p>
            This website uses exclusively technically necessary cookies that are
            required for the operation and security of the website (e.g. for
            language selection). We do not use any analytics, tracking or marketing
            cookies. You can restrict or delete cookies in your browser settings; in
            that case the website may no longer function fully.
          </p>

          <h2>6. To whom do we disclose your data?</h2>
          <p>
            For the operation of the website and the processing of your enquiries,
            we use carefully selected service providers who process personal data on
            our behalf and in accordance with our instructions (processors):
          </p>
          <ul>
            <li><strong>Vercel Inc.:</strong> hosting and delivery of the website (server log files).</li>
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.):</strong> sending and receiving your contact enquiry by email via our Microsoft 365 mailbox.</li>
            <li>
              <strong>Google (Google Ireland Limited):</strong> display of the
              embedded map on the contact page («Google Maps»). When the contact
              page is opened, your IP address is transmitted to Google so that the
              map can be displayed. Details:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            Disclosure to other recipients (e.g. authorities or courts) only takes
            place to the extent that we are legally obliged or entitled to do so or
            you have consented.
          </p>

          <h2>7. Do we disclose personal data abroad?</h2>
          <p>
            Some of the aforementioned service providers may also process data
            outside Switzerland and the EEA, in particular in the USA. Insofar as a
            country does not guarantee an adequate level of data protection, we base
            the transfer on appropriate safeguards, in particular the European
            Commission's standard contractual clauses or the clauses recognised by
            the FDPIC, or on another legally permissible basis (e.g. your consent or
            the performance of the contract).
          </p>

          <h2>8. How long do we retain personal data?</h2>
          <p>
            We process personal data only for as long as is necessary for the stated
            purposes or required by statutory retention periods. Communication data
            from enquiries is retained for as long as is necessary to process your
            request and any follow-up questions. Server log files are stored only for
            a limited time. Afterwards, the data is deleted or anonymised, unless
            legal or contractual obligations prevent this.
          </p>

          <h2>9. On what legal bases is the data processing based?</h2>
          <p>
            Under Swiss law, we may process personal data provided this is permitted
            under the DSG. Insofar as the GDPR applies, we base the processing,
            depending on the case, on: your consent (Art. 6(1)(a) GDPR), the
            performance of a contract or pre-contractual measures (Art. 6(1)(b)
            GDPR), compliance with legal obligations (Art. 6(1)(c) GDPR) or our
            legitimate interests in the secure operation of the website and in
            answering enquiries (Art. 6(1)(f) GDPR).
          </p>

          <h2>10. How do we protect your data?</h2>
          <p>
            We take appropriate technical and organisational security measures to
            protect your personal data against unauthorised access, loss or misuse
            (e.g. encrypted transmission via HTTPS). However, complete protection
            against all risks is not possible; a residual risk cannot be excluded.
          </p>

          <h2>11. What rights do you have?</h2>
          <p>
            Within the framework of applicable data protection law, you have in
            particular the right to information, correction, deletion and
            restriction of the processing of your personal data, as well as the
            right to data portability. Insofar as we process data on the basis of
            your consent, you can revoke it at any time with effect for the future.
            A message to the contact address stated in section 2 is sufficient to
            exercise these rights; we may request proof to verify your identity.
            These rights are subject to statutory requirements and limitations.
          </p>
          <p>
            You also have the right to lodge a complaint with the competent
            supervisory authority. The competent authority in Switzerland is the
            Federal Data Protection and Information Commissioner (FDPIC),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Changes</h2>
          <p>
            We may adapt this privacy policy at any time so that it always complies
            with the current legal requirements and our data processing. The version
            published on this website at the relevant time applies.
          </p>
          <p className="text-sm text-steel-500">Last updated: June 2026</p>
        </>
      ) : l === "fr" ? (
        <>
          <h2>1. De quoi s'agit-il dans cette politique de confidentialité ?</h2>
          <p>
            {getLegalName(l)} (ci-après «nous») traite des données personnelles
            vous concernant lorsque vous visitez ce site web, prenez contact avec
            nous via le formulaire de contact, par e-mail ou par téléphone, ou avez
            affaire à nous d'une autre manière. Les «données personnelles» sont
            toutes les informations se rapportant à une personne identifiée ou
            identifiable ; «traiter» désigne toute manipulation de celles-ci (p. ex.
            collecte, conservation, utilisation, communication).
          </p>
          <p>
            Cette politique de confidentialité s'aligne à la fois sur la loi suisse
            sur la protection des données (LPD) et, le cas échéant, sur le Règlement
            général sur la protection des données (RGPD) de l'UE. La question de
            savoir si et dans quelle mesure le RGPD s'applique dépend du cas
            d'espèce.
          </p>

          <h2>2. Qui est responsable du traitement de vos données ?</h2>
          <p>Le responsable du traitement des données selon cette politique de confidentialité est :</p>
          {responsible}
          <p>
            Pour toute question relative à la protection des données ou pour exercer
            vos droits, vous pouvez vous adresser à tout moment à cette adresse.
          </p>

          <h2>3. Quelles données personnelles traitons-nous ?</h2>
          <p>Selon le contexte, nous traitons différentes catégories de données personnelles :</p>
          <ul>
            <li>
              <strong>Données de communication :</strong> lorsque vous nous
              contactez via le formulaire de contact, par e-mail ou par téléphone,
              nous traitons les données que vous fournissez – en particulier votre
              nom, votre adresse e-mail et le contenu de votre message – ainsi que
              d'autres données accessoires de la communication.
            </li>
            <li>
              <strong>Données techniques / fichiers journaux du serveur :</strong>{" "}
              lors de la visite du site web, votre navigateur transmet
              automatiquement des données pour des raisons techniques. Il s'agit
              notamment de l'adresse IP, de la date et de l'heure de l'accès, de la
              page ou du fichier consulté, du volume de données transféré, du type et
              de la version du navigateur, du système d'exploitation et de la page
              précédemment visitée (URL de référence). En règle générale, nous ne
              pouvons pas déduire votre identité de ces données.
            </li>
          </ul>
          <p>
            Vous n'êtes pas obligé de nous communiquer des données personnelles.
            Certaines informations sont toutefois nécessaires pour que nous puissions
            traiter votre demande (p. ex. dans le formulaire de contact).
          </p>

          <h2>4. À quelles fins traitons-nous vos données personnelles ?</h2>
          <p>Nous traitons des données personnelles notamment aux fins suivantes :</p>
          <ul>
            <li>pour répondre à vos demandes et les traiter, ainsi que pour entretenir le contact ;</li>
            <li>pour la mise à disposition, l'exploitation sûre et stable et l'optimisation de ce site web ;</li>
            <li>pour garantir la sécurité informatique et prévenir les abus (p. ex. l'analyse des données de journalisation en cas de soupçon concret) ;</li>
            <li>pour respecter des obligations légales et préserver nos intérêts légitimes (p. ex. faire valoir ou défendre des prétentions juridiques).</li>
          </ul>
          <p>
            Nous n'utilisons pas vos données à des fins publicitaires, n'établissons
            pas de profils de personnalité et ne pratiquons pas de suivi (tracking).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Ce site web utilise exclusivement des cookies techniquement nécessaires,
            indispensables au fonctionnement et à la sécurité du site (p. ex. pour le
            choix de la langue). Nous n'utilisons aucun cookie d'analyse, de suivi ou
            de marketing. Vous pouvez restreindre ou supprimer les cookies dans les
            paramètres de votre navigateur ; le cas échéant, le site web pourrait ne
            plus fonctionner entièrement.
          </p>

          <h2>6. À qui communiquons-nous vos données ?</h2>
          <p>
            Pour l'exploitation du site web et le traitement de vos demandes, nous
            faisons appel à des prestataires soigneusement sélectionnés qui traitent
            des données personnelles pour notre compte et selon nos instructions
            (sous-traitants) :
          </p>
          <ul>
            <li><strong>Vercel Inc. :</strong> hébergement et diffusion du site web (fichiers journaux du serveur).</li>
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.) :</strong> envoi et réception de votre demande de contact par e-mail via notre boîte Microsoft 365.</li>
            <li>
              <strong>Google (Google Ireland Limited) :</strong> affichage de la
              carte intégrée sur la page de contact («Google Maps»). Lors de
              l'ouverture de la page de contact, votre adresse IP est transmise à
              Google afin que la carte puisse être affichée. Détails :{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            Une communication à d'autres destinataires (p. ex. autorités ou
            tribunaux) n'a lieu que dans la mesure où nous y sommes légalement tenus
            ou autorisés ou si vous y avez consenti.
          </p>

          <h2>7. Communiquons-nous des données personnelles à l'étranger ?</h2>
          <p>
            Certains des prestataires précités peuvent également traiter des données
            en dehors de la Suisse et de l'EEE, en particulier aux États-Unis. Dans
            la mesure où un pays ne garantit pas un niveau de protection des données
            adéquat, nous fondons le transfert sur des garanties appropriées, en
            particulier les clauses contractuelles types de la Commission européenne
            ou les clauses reconnues par le PFPDT, ou sur une autre base légalement
            admissible (p. ex. votre consentement ou l'exécution du contrat).
          </p>

          <h2>8. Combien de temps conservons-nous les données personnelles ?</h2>
          <p>
            Nous ne traitons les données personnelles que le temps nécessaire aux
            finalités indiquées ou requis par les délais légaux de conservation. Les
            données de communication issues des demandes sont conservées aussi
            longtemps que nécessaire pour traiter votre demande et d'éventuelles
            questions de suivi. Les fichiers journaux du serveur ne sont conservés
            que pour une durée limitée. Ensuite, les données sont supprimées ou
            anonymisées, sauf obligations légales ou contractuelles contraires.
          </p>

          <h2>9. Sur quelles bases juridiques repose le traitement des données ?</h2>
          <p>
            Selon le droit suisse, nous pouvons traiter des données personnelles dans
            la mesure où cela est admissible en vertu de la LPD. Dans la mesure où le
            RGPD s'applique, nous fondons le traitement, selon le cas, sur : votre
            consentement (art. 6, par. 1, let. a RGPD), l'exécution d'un contrat ou de
            mesures précontractuelles (art. 6, par. 1, let. b RGPD), le respect
            d'obligations légales (art. 6, par. 1, let. c RGPD) ou nos intérêts
            légitimes à l'exploitation sûre du site web et à la réponse aux demandes
            (art. 6, par. 1, let. f RGPD).
          </p>

          <h2>10. Comment protégeons-nous vos données ?</h2>
          <p>
            Nous prenons des mesures de sécurité techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre tout accès non
            autorisé, perte ou usage abusif (p. ex. transmission chiffrée via HTTPS).
            Une protection complète contre tous les risques n'est toutefois pas
            possible ; un risque résiduel ne peut être exclu.
          </p>

          <h2>11. Quels sont vos droits ?</h2>
          <p>
            Dans le cadre du droit applicable en matière de protection des données,
            vous disposez notamment du droit d'accès, de rectification, d'effacement
            et de limitation du traitement de vos données personnelles, ainsi que du
            droit à la portabilité des données. Dans la mesure où nous traitons des
            données sur la base de votre consentement, vous pouvez le révoquer à tout
            moment avec effet pour l'avenir. Pour exercer ces droits, un message à
            l'adresse de contact indiquée au point 2 suffit ; nous pouvons demander
            une preuve pour vérifier votre identité. Ces droits sont soumis à des
            conditions et limitations légales.
          </p>
          <p>
            Vous avez en outre le droit de déposer une réclamation auprès de
            l'autorité de surveillance compétente. L'autorité compétente en Suisse
            est le Préposé fédéral à la protection des données et à la transparence
            (PFPDT),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Modifications</h2>
          <p>
            Nous pouvons adapter cette politique de confidentialité à tout moment
            afin qu'elle réponde toujours aux exigences légales en vigueur et à notre
            traitement des données. La version publiée sur ce site web fait foi.
          </p>
          <p className="text-sm text-steel-500">Dernière mise à jour : juin 2026</p>
        </>
      ) : l === "it" ? (
        <>
          <h2>1. Di cosa tratta questa informativa sulla privacy?</h2>
          <p>
            La {getLegalName(l)} (di seguito «noi») tratta dati personali che vi
            riguardano quando visitate questo sito web, ci contattate tramite il
            modulo di contatto, per e-mail o per telefono, o avete altrimenti a che
            fare con noi. Sono «dati personali» tutte le informazioni che si
            riferiscono a una persona identificata o identificabile; «trattare»
            indica qualsiasi operazione con essi (p. es. raccogliere, conservare,
            utilizzare, comunicare).
          </p>
          <p>
            Questa informativa sulla privacy è orientata sia alla legge svizzera
            sulla protezione dei dati (LPD) sia, ove applicabile, al Regolamento
            generale sulla protezione dei dati (GDPR) dell'UE. Se e in che misura il
            GDPR sia applicabile dipende dal caso concreto.
          </p>

          <h2>2. Chi è responsabile del trattamento dei vostri dati?</h2>
          <p>Responsabile del trattamento dei dati ai sensi della presente informativa è:</p>
          {responsible}
          <p>
            Per qualsiasi domanda sulla protezione dei dati o per esercitare i vostri
            diritti, potete rivolgervi in qualsiasi momento a questo indirizzo.
          </p>

          <h2>3. Quali dati personali trattiamo?</h2>
          <p>A seconda del contesto, trattiamo diverse categorie di dati personali:</p>
          <ul>
            <li>
              <strong>Dati di comunicazione:</strong> quando ci contattate tramite
              il modulo di contatto, per e-mail o per telefono, trattiamo i dati che
              fornite – in particolare nome, indirizzo e-mail e il contenuto del
              vostro messaggio – nonché altri dati accessori della comunicazione.
            </li>
            <li>
              <strong>Dati tecnici / file di log del server:</strong> visitando il
              sito web, il vostro browser trasmette automaticamente dati per ragioni
              tecniche. Tra questi figurano in particolare l'indirizzo IP, la data e
              l'ora dell'accesso, la pagina o il file richiesto, il volume di dati
              trasferito, il tipo e la versione del browser, il sistema operativo e
              la pagina visitata in precedenza (URL referrer). Di norma non possiamo
              dedurre la vostra identità da questi dati.
            </li>
          </ul>
          <p>
            Non siete tenuti a fornirci dati personali. Tuttavia, determinati dati
            sono necessari affinché possiamo gestire la vostra richiesta (p. es. nel
            modulo di contatto).
          </p>

          <h2>4. Per quali finalità trattiamo i vostri dati personali?</h2>
          <p>Trattiamo dati personali in particolare per le seguenti finalità:</p>
          <ul>
            <li>per rispondere alle vostre richieste e gestirle, nonché per mantenere il contatto;</li>
            <li>per la messa a disposizione, il funzionamento sicuro e stabile e l'ottimizzazione di questo sito web;</li>
            <li>per garantire la sicurezza informatica e prevenire abusi (p. es. l'analisi dei dati di log in caso di sospetto concreto);</li>
            <li>per adempiere a obblighi di legge e tutelare i nostri interessi legittimi (p. es. far valere o difendere pretese giuridiche).</li>
          </ul>
          <p>
            Non utilizziamo i vostri dati per la pubblicità, non creiamo profili di
            personalità e non effettuiamo alcun tracciamento (tracking).
          </p>

          <h2>5. Cookie</h2>
          <p>
            Questo sito web utilizza esclusivamente cookie tecnicamente necessari,
            indispensabili per il funzionamento e la sicurezza del sito (p. es. per
            la selezione della lingua). Non utilizziamo cookie di analisi,
            tracciamento o marketing. Potete limitare o eliminare i cookie nelle
            impostazioni del vostro browser; in tal caso il sito web potrebbe non
            funzionare più completamente.
          </p>

          <h2>6. A chi comunichiamo i vostri dati?</h2>
          <p>
            Per il funzionamento del sito web e la gestione delle vostre richieste ci
            avvaliamo di fornitori di servizi accuratamente selezionati che trattano
            dati personali per nostro conto e secondo le nostre istruzioni
            (responsabili del trattamento):
          </p>
          <ul>
            <li><strong>Vercel Inc.:</strong> hosting e distribuzione del sito web (file di log del server).</li>
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.):</strong> invio e ricezione della vostra richiesta di contatto via e-mail tramite la nostra casella Microsoft 365.</li>
            <li>
              <strong>Google (Google Ireland Limited):</strong> visualizzazione della
              mappa integrata nella pagina dei contatti («Google Maps»). All'apertura
              della pagina dei contatti, il vostro indirizzo IP viene trasmesso a
              Google affinché la mappa possa essere visualizzata. Dettagli:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            Una comunicazione ad altri destinatari (p. es. autorità o tribunali)
            avviene solo nella misura in cui siamo legalmente obbligati o autorizzati
            a farlo o voi abbiate dato il vostro consenso.
          </p>

          <h2>7. Comunichiamo dati personali all'estero?</h2>
          <p>
            Alcuni dei fornitori menzionati possono trattare dati anche al di fuori
            della Svizzera e del SEE, in particolare negli USA. Nella misura in cui
            un Paese non garantisce un livello adeguato di protezione dei dati,
            basiamo il trasferimento su garanzie appropriate, in particolare le
            clausole contrattuali tipo della Commissione europea o le clausole
            riconosciute dall'IFPDT, oppure su un'altra base legalmente ammissibile
            (p. es. il vostro consenso o l'esecuzione del contratto).
          </p>

          <h2>8. Per quanto tempo conserviamo i dati personali?</h2>
          <p>
            Trattiamo i dati personali solo per il tempo necessario alle finalità
            indicate o richiesto dai termini di conservazione previsti dalla legge. I
            dati di comunicazione delle richieste vengono conservati finché necessario
            per gestire la vostra richiesta ed eventuali domande successive. I file di
            log del server vengono conservati solo per un periodo limitato.
            Successivamente i dati vengono cancellati o anonimizzati, salvo obblighi
            legali o contrattuali contrari.
          </p>

          <h2>9. Su quali basi giuridiche si fonda il trattamento dei dati?</h2>
          <p>
            Secondo il diritto svizzero possiamo trattare dati personali nella misura
            in cui ciò è ammesso dalla LPD. Nella misura in cui si applica il GDPR,
            basiamo il trattamento, a seconda del caso, su: il vostro consenso (art.
            6, par. 1, lett. a GDPR), l'esecuzione di un contratto o di misure
            precontrattuali (art. 6, par. 1, lett. b GDPR), l'adempimento di obblighi
            legali (art. 6, par. 1, lett. c GDPR) o i nostri interessi legittimi al
            funzionamento sicuro del sito web e alla risposta alle richieste (art. 6,
            par. 1, lett. f GDPR).
          </p>

          <h2>10. Come proteggiamo i vostri dati?</h2>
          <p>
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per
            proteggere i vostri dati personali da accessi non autorizzati, perdita o
            uso improprio (p. es. trasmissione cifrata tramite HTTPS). Una protezione
            completa contro tutti i rischi non è tuttavia possibile; un rischio
            residuo non può essere escluso.
          </p>

          <h2>11. Quali diritti avete?</h2>
          <p>
            Nell'ambito del diritto applicabile in materia di protezione dei dati,
            avete in particolare il diritto di accesso, rettifica, cancellazione e
            limitazione del trattamento dei vostri dati personali, nonché il diritto
            alla portabilità dei dati. Nella misura in cui trattiamo dati sulla base
            del vostro consenso, potete revocarlo in qualsiasi momento con effetto per
            il futuro. Per esercitare questi diritti è sufficiente un messaggio
            all'indirizzo di contatto indicato al punto 2; per verificare la vostra
            identità possiamo richiedere una prova. Questi diritti sono soggetti a
            condizioni e limitazioni legali.
          </p>
          <p>
            Avete inoltre il diritto di presentare un reclamo all'autorità di
            controllo competente. L'autorità competente in Svizzera è l'Incaricato
            federale della protezione dei dati e della trasparenza (IFPDT),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Modifiche</h2>
          <p>
            Possiamo adattare questa informativa sulla privacy in qualsiasi momento
            affinché sia sempre conforme ai requisiti legali vigenti e al nostro
            trattamento dei dati. Fa fede la versione di volta in volta pubblicata su
            questo sito web.
          </p>
          <p className="text-sm text-steel-500">Ultimo aggiornamento: giugno 2026</p>
        </>
      ) : l === "pt" ? (
        <>
          <h2>1. De que trata esta política de privacidade?</h2>
          <p>
            A {getLegalName(l)} (a seguir «nós») trata dados pessoais que lhe dizem
            respeito quando visita este site, entra em contacto connosco através do
            formulário de contacto, por e-mail ou telefone, ou se relaciona de outra
            forma connosco. São «dados pessoais» todas as informações que se referem
            a uma pessoa identificada ou identificável; «tratar» significa qualquer
            operação com os mesmos (p. ex. recolher, armazenar, utilizar, comunicar).
          </p>
          <p>
            Esta política de privacidade orienta-se tanto pela Lei suíça de proteção
            de dados (LPD) como, quando aplicável, pelo Regulamento Geral sobre a
            Proteção de Dados (RGPD) da UE. Se e em que medida o RGPD é aplicável
            depende do caso concreto.
          </p>

          <h2>2. Quem é responsável pelo tratamento dos seus dados?</h2>
          <p>O responsável pelo tratamento dos dados ao abrigo desta política de privacidade é:</p>
          {responsible}
          <p>
            Para quaisquer questões sobre proteção de dados ou para exercer os seus
            direitos, pode dirigir-se a qualquer momento a este endereço.
          </p>

          <h2>3. Que dados pessoais tratamos?</h2>
          <p>Consoante o contexto, tratamos diferentes categorias de dados pessoais:</p>
          <ul>
            <li>
              <strong>Dados de comunicação:</strong> quando nos contacta através do
              formulário de contacto, por e-mail ou telefone, tratamos os dados que
              fornece – em particular o seu nome, endereço de e-mail e o conteúdo da
              sua mensagem – bem como outros dados acessórios da comunicação.
            </li>
            <li>
              <strong>Dados técnicos / ficheiros de registo do servidor:</strong> ao
              visitar o site, o seu navegador transmite automaticamente dados por
              motivos técnicos. Entre eles figuram, em particular, o endereço IP, a
              data e hora do acesso, a página ou o ficheiro solicitado, o volume de
              dados transferido, o tipo e a versão do navegador, o sistema operativo
              e a página visitada anteriormente (URL de referência). Em regra, não
              podemos deduzir a sua identidade a partir destes dados.
            </li>
          </ul>
          <p>
            Não é obrigado a fornecer-nos dados pessoais. No entanto, determinados
            dados são necessários para que possamos tratar o seu pedido (p. ex. no
            formulário de contacto).
          </p>

          <h2>4. Para que finalidades tratamos os seus dados pessoais?</h2>
          <p>Tratamos dados pessoais, em particular, para as seguintes finalidades:</p>
          <ul>
            <li>para responder aos seus pedidos e tratá-los, bem como para manter o contacto;</li>
            <li>para a disponibilização, o funcionamento seguro e estável e a otimização deste site;</li>
            <li>para garantir a segurança informática e prevenir abusos (p. ex. a análise de dados de registo em caso de suspeita concreta);</li>
            <li>para cumprir obrigações legais e salvaguardar os nossos interesses legítimos (p. ex. fazer valer ou defender pretensões jurídicas).</li>
          </ul>
          <p>
            Não utilizamos os seus dados para publicidade, não criamos perfis de
            personalidade nem efetuamos qualquer rastreio (tracking).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Este site utiliza exclusivamente cookies tecnicamente necessários,
            indispensáveis ao funcionamento e à segurança do site (p. ex. para a
            seleção do idioma). Não utilizamos cookies de análise, rastreio ou
            marketing. Pode limitar ou eliminar os cookies nas definições do seu
            navegador; nesse caso, o site poderá deixar de funcionar na íntegra.
          </p>

          <h2>6. A quem comunicamos os seus dados?</h2>
          <p>
            Para o funcionamento do site e o tratamento dos seus pedidos, recorremos
            a prestadores de serviços cuidadosamente selecionados que tratam dados
            pessoais por nossa conta e de acordo com as nossas instruções
            (subcontratantes):
          </p>
          <ul>
            <li><strong>Vercel Inc.:</strong> alojamento e entrega do site (ficheiros de registo do servidor).</li>
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.):</strong> envio e receção do seu pedido de contacto por e-mail através da nossa caixa de correio Microsoft 365.</li>
            <li>
              <strong>Google (Google Ireland Limited):</strong> apresentação do mapa
              integrado na página de contacto («Google Maps»). Ao abrir a página de
              contacto, o seu endereço IP é transmitido à Google para que o mapa
              possa ser apresentado. Detalhes:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </li>
          </ul>
          <p>
            A comunicação a outros destinatários (p. ex. autoridades ou tribunais)
            só ocorre na medida em que estejamos legalmente obrigados ou autorizados
            a fazê-lo ou tenha dado o seu consentimento.
          </p>

          <h2>7. Comunicamos dados pessoais para o estrangeiro?</h2>
          <p>
            Alguns dos prestadores referidos podem tratar dados também fora da Suíça
            e do EEE, em particular nos EUA. Na medida em que um país não garanta um
            nível adequado de proteção de dados, baseamos a transferência em
            garantias apropriadas, em particular as cláusulas contratuais-tipo da
            Comissão Europeia ou as cláusulas reconhecidas pelo EDÖB, ou noutra base
            legalmente admissível (p. ex. o seu consentimento ou a execução do
            contrato).
          </p>

          <h2>8. Durante quanto tempo conservamos os dados pessoais?</h2>
          <p>
            Tratamos os dados pessoais apenas durante o tempo necessário para as
            finalidades indicadas ou exigido pelos prazos legais de conservação. Os
            dados de comunicação dos pedidos são conservados enquanto for necessário
            para tratar o seu pedido e eventuais questões de seguimento. Os ficheiros
            de registo do servidor são armazenados apenas durante um período
            limitado. Posteriormente, os dados são eliminados ou anonimizados, salvo
            obrigações legais ou contratuais em contrário.
          </p>

          <h2>9. Em que bases jurídicas assenta o tratamento dos dados?</h2>
          <p>
            Ao abrigo do direito suíço, podemos tratar dados pessoais desde que tal
            seja admissível nos termos da LPD. Na medida em que o RGPD seja
            aplicável, baseamos o tratamento, consoante o caso, em: o seu
            consentimento (art. 6.º, n.º 1, al. a) RGPD), a execução de um contrato
            ou de medidas pré-contratuais (art. 6.º, n.º 1, al. b) RGPD), o
            cumprimento de obrigações legais (art. 6.º, n.º 1, al. c) RGPD) ou os
            nossos interesses legítimos no funcionamento seguro do site e na resposta
            aos pedidos (art. 6.º, n.º 1, al. f) RGPD).
          </p>

          <h2>10. Como protegemos os seus dados?</h2>
          <p>
            Adotamos medidas de segurança técnicas e organizativas adequadas para
            proteger os seus dados pessoais contra acesso não autorizado, perda ou
            utilização indevida (p. ex. transmissão cifrada via HTTPS). No entanto,
            uma proteção completa contra todos os riscos não é possível; um risco
            residual não pode ser excluído.
          </p>

          <h2>11. Que direitos tem?</h2>
          <p>
            No âmbito do direito de proteção de dados aplicável, tem, em particular, o
            direito de acesso, retificação, eliminação e limitação do tratamento dos
            seus dados pessoais, bem como o direito à portabilidade dos dados. Na
            medida em que tratemos dados com base no seu consentimento, pode revogá-lo
            a qualquer momento com efeitos para o futuro. Para exercer estes direitos,
            basta uma mensagem para o endereço de contacto indicado no ponto 2; para
            verificar a sua identidade, podemos solicitar um comprovativo. Estes
            direitos estão sujeitos a requisitos e limitações legais.
          </p>
          <p>
            Tem ainda o direito de apresentar uma reclamação junto da autoridade de
            controlo competente. A autoridade competente na Suíça é o Encarregado
            Federal da Proteção de Dados e da Transparência (EDÖB),{" "}
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>.
          </p>

          <h2>12. Alterações</h2>
          <p>
            Podemos adaptar esta política de privacidade a qualquer momento para que
            cumpra sempre os requisitos legais em vigor e o nosso tratamento de dados.
            Aplica-se a versão publicada em cada momento neste site.
          </p>
          <p className="text-sm text-steel-500">Última atualização: junho de 2026</p>
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
          {responsible}
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
            <li><strong>Microsoft (Microsoft Ireland Operations Ltd.):</strong> Versand und Empfang Ihrer Kontaktanfrage per E-Mail über unser Microsoft-365-Postfach.</li>
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
