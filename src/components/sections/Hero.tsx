import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/ui/icons";

const C = {
  de: {
    eyebrow: "Ihr Spezialist für Siemens-Automatisierung",
    h1a: "Automation. ",
    h1accent: "Engineering.",
    h1b: " Weltweit.",
    subtitle:
      "Spezialisiert auf die Siemens-Welt: SIMATIC STEP 7 Classic, TIA Portal und PCS 7, Visualisierung mit WinCC Unified und WinCC OA sowie durchgängige Vernetzung über OPC UA, PROFINET und PROFIBUS. Von der Programmierung bis zur Inbetriebnahme – präzise und weltweit.",
    ctaPrimary: "Projekt anfragen",
    ctaSecondary: "Unsere Leistungen",
    points: ["SIMATIC-Spezialist", "WinCC Unified & WinCC OA", "Über 25 Jahre Erfahrung"],
  },
  en: {
    eyebrow: "Your specialist for Siemens automation",
    h1a: "Automation. ",
    h1accent: "Engineering.",
    h1b: " Worldwide.",
    subtitle:
      "Specialised in the Siemens world: SIMATIC STEP 7 Classic, TIA Portal and PCS 7, visualization with WinCC Unified and WinCC OA, and seamless connectivity via OPC UA, PROFINET and PROFIBUS. From programming to commissioning – precise and worldwide.",
    ctaPrimary: "Request a project",
    ctaSecondary: "Our services",
    points: ["SIMATIC specialist", "WinCC Unified & WinCC OA", "Over 25 years of experience"],
  },
};

export function Hero({ locale }: { locale: string }) {
  const t = locale === "en" ? C.en : C.de;
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow-on-dark animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {t.eyebrow}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight animate-fade-up sm:text-6xl">
            {t.h1a}
            <span className="text-accent-400">{t.h1accent}</span>
            {t.h1b}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
            {t.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
            <ButtonLink href="/kontakt" size="lg">
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/leistungen" variant="outline-light" size="lg">
              {t.ctaSecondary}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up">
            {t.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-steel-200">
                <Check className="h-4 w-4 text-accent-400" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
