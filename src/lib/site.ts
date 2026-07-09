/**
 * Central site configuration.
 * Edit company details, navigation, and contact info here — these values are
 * reused across the header, footer, metadata, structured data, and legal pages.
 */

export const siteConfig = {
  name: "Lienhard Automation",
  legalName: "Lienhard Automation GmbH",
  tagline: "Automation. Engineering. Weltweit.",
  description:
    "Lienhard Automation GmbH entwickelt Automatisierungslösungen für den industriellen Maschinen- und Anlagenbau – SPS-Engineering, Projektierung und Inbetriebnahme. Weltweit im Einsatz.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://lienhard-automation.ch",
  locale: "de_CH",
  contact: {
    person: "Ernesto Lienhard",
    role: "Geschäftsführer · Techniker HF Automation",
    street: "Freilagerstrasse 71",
    postalCode: "8047",
    city: "Zürich",
    country: "Schweiz",
    phone: "+41 79 701 18 21",
    phoneHref: "tel:+41797011821",
    email: "info@lienhard-automation.ch",
  },
  /** Commercial register identifier (UID). VAT number is derived from it. */
  registration: {
    uid: "CHE-459.098.587",
    /** Set to false if the company is not registered for VAT (hides the line). */
    vatRegistered: true,
  },
} as const;

/**
 * Localized legal-form suffix for the company name. The registered entity is a
 * Swiss GmbH; de/fr/it are its official Swiss-language forms, en/es/pt are the
 * common equivalents.
 */
export const legalSuffix: Record<string, string> = {
  de: "GmbH",
  en: "LLC",
  es: "S.L.",
  fr: "SARL",
  it: "SAGL",
  pt: "Lda.",
};

/** Full company name with the locale-appropriate legal-form suffix. */
export function getLegalName(locale: string): string {
  return `${siteConfig.name} ${legalSuffix[locale] ?? legalSuffix.de}`;
}

/** Swiss VAT-number suffix per language (same number, language-specific tag). */
const vatSuffix: Record<string, string> = {
  de: "MWST",
  en: "MWST",
  es: "IVA",
  fr: "TVA",
  it: "IVA",
  pt: "IVA",
};

/** VAT number in the locale-appropriate form, or null if not registered. */
export function getVatNumber(locale: string): string | null {
  if (!siteConfig.registration.vatRegistered) return null;
  return `${siteConfig.registration.uid} ${vatSuffix[locale] ?? "MWST"}`;
}

/** Nav items reference a translation key (Dict.nav / Dict.legal) plus a path. */
export type NavItem = { key: string; href: string };

export const mainNav: NavItem[] = [
  { key: "leistungen", href: "/leistungen" },
  { key: "unifiedModernisierung", href: "/unified-modernisierung" },
  { key: "sinemaRc", href: "/sinema-rc" },
  { key: "unternehmen", href: "/unternehmen" },
  { key: "referenzen", href: "/referenzen" },
  { key: "kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { key: "impressum", href: "/impressum" },
  { key: "datenschutz", href: "/datenschutz" },
];
