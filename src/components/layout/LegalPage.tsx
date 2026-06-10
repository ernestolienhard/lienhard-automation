import { Container } from "@/components/ui/Container";

const banner = {
  de: (
    <>
      <strong className="font-semibold">⚠ Hinweis – Platzhaltertext:</strong>{" "}
      Dieser rechtliche Text ist ein unverbindlicher Entwurf und muss vor der
      Veröffentlichung durch den Kunden bzw. eine rechtskundige Person geprüft
      und angepasst werden. Er stellt keine Rechtsberatung dar.
    </>
  ),
  en: (
    <>
      <strong className="font-semibold">⚠ Note – placeholder text:</strong> This
      legal text is a non-binding draft and must be reviewed and adapted by the
      client or a legally qualified person before publication. It does not
      constitute legal advice.
    </>
  ),
};

/** Shared wrapper + prose styling for the legal pages. */
export function LegalPage({
  title,
  locale = "de",
  children,
}: {
  title: string;
  locale?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-steel-200 bg-navy-950 text-white">
        <Container className="py-14 sm:py-16">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        {/* Review banner — clearly flags placeholder legal text. */}
        <div className="mb-10 rounded-xl2 border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          {locale === "en" ? banner.en : banner.de}
        </div>

        <div className="prose-legal max-w-3xl space-y-6 text-steel-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-navy-900 [&_a]:text-accent-600 [&_a]:underline [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </>
  );
}
