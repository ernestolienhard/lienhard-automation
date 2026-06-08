import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone, Clock } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Lienhard Automation GmbH in Zürich. Projekt anfragen, Beratung vereinbaren oder direkt anrufen – wir freuen uns auf Ihre Nachricht.",
  alternates: { canonical: "/kontakt" },
};

const { contact } = siteConfig;

const details = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Adresse",
    lines: [
      siteConfig.legalName,
      contact.street,
      `${contact.postalCode} ${contact.city}, ${contact.country}`,
    ],
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telefon",
    lines: [contact.phone],
    href: contact.phoneHref,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "E-Mail",
    lines: [contact.email],
    href: `mailto:${contact.email}`,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Erreichbarkeit",
    lines: ["Mo – Fr, nach Vereinbarung"],
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-16 sm:py-20">
          <p className="eyebrow-on-dark">Kontakt</p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Kontakt aufnehmen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">
            Beschreiben Sie uns Ihr Projekt oder vereinbaren Sie eine
            unverbindliche Beratung. Wir melden uns rasch bei Ihnen zurück.
          </p>
        </Container>
      </section>

      <section className="bg-steel-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {contact.person}
              </h2>
              <p className="mt-1 text-accent-600">{contact.role}</p>

              <dl className="mt-8 space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <dt className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-sm">
                      <span className="sr-only">{d.label}</span>
                      {d.icon}
                    </dt>
                    <dd>
                      <p className="text-xs uppercase tracking-wide text-steel-500">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-medium text-navy-900 hover:text-accent-600"
                        >
                          {d.lines[0]}
                        </a>
                      ) : (
                        d.lines.map((line) => (
                          <p key={line} className="text-navy-900">
                            {line}
                          </p>
                        ))
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Map placeholder — replace with an embedded map iframe later */}
              <div className="mt-8 overflow-hidden rounded-xl2 border border-steel-200">
                <div className="relative aspect-[16/10] bg-navy-900">
                  <div
                    aria-hidden
                    className="h-full w-full bg-grid-navy [background-size:24px_24px]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                    <MapPin className="h-7 w-7 text-accent-400" />
                    <p className="text-sm font-medium text-steel-300">
                      {contact.street}, {contact.postalCode} {contact.city}
                    </p>
                    <p className="max-w-xs text-xs text-steel-500">
                      {/* MAP PLACEHOLDER: siehe README, Abschnitt "Karte
                      einbetten" */}
                      Kartenplatzhalter – hier kann eine Google-Maps- oder
                      OpenStreetMap-Karte eingebettet werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl2 border border-steel-200 bg-white p-7 shadow-card sm:p-9">
              <h2 className="text-2xl font-bold text-navy-900">
                Projekt anfragen
              </h2>
              <p className="mt-2 text-steel-600">
                Füllen Sie das Formular aus – wir antworten in der Regel
                innerhalb eines Werktags.
              </p>
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
