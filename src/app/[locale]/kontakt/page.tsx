import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";
import { isLocale } from "@/i18n/config";
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

const C: Record<"de" | "en", Content> = {
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
      "Contact Lienhard Automation GmbH in Zurich. Request a project, arrange a consultation or call directly – I look forward to your message.",
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
};

const { contact } = siteConfig;

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const t = params.locale === "en" ? C.en : C.de;
  return { title: t.metaTitle, description: t.metaDesc, alternates: { canonical: "/kontakt" } };
}

export default function KontaktPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = isLocale(params.locale) && params.locale === "en" ? C.en : C.de;

  const details = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.labelAddress,
      lines: [
        siteConfig.legalName,
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
                <div className="relative aspect-[16/10] bg-navy-900">
                  <div aria-hidden className="h-full w-full bg-grid-navy [background-size:24px_24px]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                    <MapPin className="h-7 w-7 text-accent-400" />
                    <p className="text-sm font-medium text-steel-300">
                      {contact.street}, {contact.postalCode} {contact.city}
                    </p>
                    <p className="max-w-xs text-xs text-steel-500">{t.mapNote}</p>
                  </div>
                </div>
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
