/** i18n configuration: supported locales and helpers. */

// All locales that have translations in the code.
export const allLocales = ["de", "en", "es", "fr", "it", "pt"] as const;
export type Locale = (typeof allLocales)[number];

// Active locales — routed, generated and shown in the switcher.
export const locales = ["de", "en", "es", "fr", "it", "pt"] as const;

export const defaultLocale: Locale = "de";

/** Resolve a raw param to an active locale (falls back to the default). */
export function pageLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value) ? (value as Locale) : "de";
}

/** Display names for the language switcher. */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
};

/** Short codes shown in compact UI. */
export const localeShort: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
  fr: "FR",
  it: "IT",
  pt: "PT",
};

/** True only for currently active locales. */
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
