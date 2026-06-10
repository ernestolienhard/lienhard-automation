import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig, getLegalName } from "@/lib/site";
import { pageLocale, type Locale } from "@/i18n/config";
import { Mail, MapPin, Phone, Clock } from "@/components/ui/icons";

type Content = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  role: string;
  labelAddress: string;
  labelPhone: string;
  labelEmail: string;
  labelAvailability: string;
  availability: string;
  mapNote: string;
  formTitle: string;
  formIntro: string;
};

const C: Record<Locale, Content> = {
  de: {
    metaTitle: "Kontakt",
    metaDesc:
      "Kontaktieren Sie Lienhard Automation GmbH in Zürich. Projekt anfragen, Beratung vereinbaren oder direkt anrufen – ich freue mich auf Ihre Nachricht.",
    eyebrow: "Kontakt",
    h1: "Kontakt aufnehmen",
    subtitle:
      "Beschreiben Sie mir Ihr Projekt oder vereinbaren Sie eine unverbindliche Beratung. Ich melde mich rasch bei Ihnen zurück.",
    role: "Geschäftsführer · Techniker HF Automation",
    labelAddress: "Adresse",
    labelPhone: "Telefon",
    labelEmail: "E-Mail",
    labelAvailability: "Erreichbarkeit",
    availability: "Mo – Fr, nach Vereinbarung",
    mapNote:
      "Kartenplatzhalter – hier kann eine Google-Maps- oder OpenStreetMap-Karte eingebettet werden.",
    formTitle: "Projekt anfragen",
    formIntro:
      "Füllen Sie das Formular aus – ich antworte in der Regel innerhalb eines Werktags.",
  },
  en: {
    metaTitle: "Contact",
    metaDesc:
      "Contact Lienhard Automation LLC in Zurich. Request a project, arrange a consultation or call directly – I look forward to your message.",
    eyebrow: "Contact",
    h1: "Get in touch",
    subtitle:
      "Describe your project to me or arrange a no-obligation consultation. I will get back to you quickly.",
    role: "Managing Director · Technician HF Automation",
    labelAddress: "Address",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelAvailability: "Availability",
    availability: "Mon – Fri, by arrangement",
    mapNote:
      "Map placeholder – a Google Maps or OpenStreetMap map can be embedded here.",
    formTitle: "Request a project",
    formIntro:
      "Fill in the form – I usually reply within one working day.",
  },
  es: {
    metaTitle: "Contacto",
    metaDesc:
      "Contacte con Lienhard Automation S.L. en Zúrich. Solicite un proyecto, concierte una consulta o llame directamente: espero su mensaje.",
    eyebrow: "Contacto",
    h1: "Póngase en contacto",
    subtitle:
      "Descríbame su proyecto o concierte una consulta sin compromiso. Le responderé enseguida.",
    role: "Director · Técnico HF en automatización",
    labelAddress: "Dirección",
    labelPhone: "Teléfono",
    labelEmail: "Correo electrónico",
    labelAvailability: "Disponibilidad",
    availability: "Lu – Vi, con cita previa",
    mapNote:
      "Marcador de mapa: aquí se puede insertar un mapa de Google Maps u OpenStreetMap.",
    formTitle: "Solicitar un proyecto",
    formIntro:
      "Rellene el formulario: normalmente respondo en un día laborable.",
  },
  fr: {
    metaTitle: "Contact",
    metaDesc:
      "Contactez Lienhard Automation SARL à Zurich. Demandez un projet, convenez d'un conseil ou appelez directement : j'attends votre message.",
    eyebrow: "Contact",
    h1: "Prendre contact",
    subtitle:
      "Décrivez-moi votre projet ou convenez d'un conseil sans engagement. Je vous recontacte rapidement.",
    role: "Gérant · Technicien HF en automatisation",
    labelAddress: "Adresse",
    labelPhone: "Téléphone",
    labelEmail: "E-mail",
    labelAvailability: "Disponibilité",
    availability: "Lun – Ven, sur rendez-vous",
    mapNote:
      "Emplacement réservé à la carte : une carte Google Maps ou OpenStreetMap peut être intégrée ici.",
    formTitle: "Demander un projet",
    formIntro:
      "Remplissez le formulaire : je réponds généralement dans un jour ouvrable.",
  },
  it: {
    metaTitle: "Contatto",
    metaDesc:
      "Contattate Lienhard Automation SAGL a Zurigo. Richiedete un progetto, fissate una consulenza o chiamate direttamente: attendo il vostro messaggio.",
    eyebrow: "Contatto",
    h1: "Mettiti in contatto",
    subtitle:
      "Descrivetemi il vostro progetto o fissate una consulenza senza impegno. Vi richiamo rapidamente.",
    role: "Amministratore · Tecnico HF in automazione",
    labelAddress: "Indirizzo",
    labelPhone: "Telefono",
    labelEmail: "E-mail",
    labelAvailability: "Disponibilità",
    availability: "Lun – Ven, su appuntamento",
    mapNote:
      "Segnaposto per la mappa: qui è possibile integrare una mappa Google Maps o OpenStreetMap.",
    formTitle: "Richiedi un progetto",
    formIntro:
      "Compilate il modulo: di solito rispondo entro un giorno lavorativo.",
  },
  pt: {
    metaTitle: "Contacto",
    metaDesc:
      "Contacte a Lienhard Automation Lda. em Zurique. Solicite um projeto, marque uma consulta ou ligue diretamente: aguardo a sua mensagem.",
    eyebrow: "Contacto",
    h1: "Entre em contacto",
    subtitle:
      "Descreva-me o seu projeto ou marque uma consulta sem compromisso. Entro em contacto consigo rapidamente.",
    role: "Gerente · Técnico HF em automação",
    labelAddress: "Endereço",
    labelPhone: "Telefone",
    labelEmail: "E-mail",
    labelAvailability: "Disponibilidade",
    availability: "Seg – Sex, com marcação",
    mapNote:
      "Marcador de mapa: aqui pode ser integrado um mapa do Google Maps ou OpenStreetMap.",
    formTitle: "Solicitar um projeto",
    formIntro:
      "Preencha o formulário: normalmente respondo no prazo de um dia útil.",
  },
};

const { contact } = siteConfig;

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const t = C[pageLocale(params.locale)];
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/kontakt" } };
}

export default function KontaktPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = pageLocale(params.locale);
  const t = C[locale];
  const legalName = getLegalName(locale);

  const details = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.labelAddress,
      lines: [
        legalName,
        contact.street,
        `${contact.postalCode} ${contact.city}, ${contact.country}`,
      ],
    },
    { icon: <Phone className="h-5 w-5" />, label: t.labelPhone, lines: [contact.phone], href: contact.phoneHref },
    { icon: <Mail className="h-5 w-5" />, label: t.labelEmail, lines: [contact.email], href: `mailto:${contact.email}` },
    { icon: <Clock className="h-5 w-5" />, label: t.labelAvailability, lines: [t.availability] },
  ];

  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">{t.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">{t.subtitle}</p>
        </Container>
      </section>

      <section className="bg-steel-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">{contact.person}</h2>
              <p className="mt-1 text-accent-600">{t.role}</p>

              <dl className="mt-8 space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <dt className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                      <span className="sr-only">{d.label}</span>
                      {d.icon}
                    </dt>
                    <dd>
                      <p className="text-xs uppercase tracking-wide text-steel-500">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="font-medium text-navy-900 hover:text-accent-600">
                          {d.lines[0]}
                        </a>
                      ) : (
                        d.lines.map((line) => (
                          <p key={line} className="text-navy-900">{line}</p>
                        ))
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 overflow-hidden rounded-xl2 border border-steel-200">
                <iframe
                  title={`${legalName} – ${contact.street}, ${contact.postalCode} ${contact.city}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${contact.street}, ${contact.postalCode} ${contact.city}, ${contact.country}`,
                  )}&z=16&output=embed`}
                  className="block aspect-[16/10] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="rounded-xl2 border border-steel-200 bg-white p-7 shadow-card sm:p-9">
              <h2 className="text-2xl font-bold text-navy-900">{t.formTitle}</h2>
              <p className="mt-2 text-steel-600">{t.formIntro}</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
