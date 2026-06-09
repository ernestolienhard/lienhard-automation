/** i18n configuration: supported locales and helpers. */

// All locales that have translations in the code (kept for possible later use).
export const allLocales = ["de", "en", "es", "it", "pt"] as const;
export type Locale = (typeof allLocales)[number];

// Active locales — only these are routed, generated and shown in the switcher.
// Add "es", "it", "pt" here to activate the dormant translations.
export const locales = ["de", "en"] as const;

export const defaultLocale: Locale = "de";

/** Display names for the language switcher. */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
};

/** Short codes shown in compact UI. */
export const localeShort: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
  it: "IT",
  pt: "PT",
};

/** True only for currently active locales (de, en). */
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
