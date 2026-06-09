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
    street: "Feilagerstrasse 71",
    postalCode: "8047",
    city: "Zürich",
    country: "Schweiz",
    phone: "+41 79 701 18 21",
    phoneHref: "tel:+41797011821",
    email: "info@lienhard-automation.ch",
  },
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Unified Modernisierung", href: "/unified-modernisierung" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Unternehmen", href: "/unternehmen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
