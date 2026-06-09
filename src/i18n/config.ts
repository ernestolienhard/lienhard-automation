/** i18n configuration: supported locales and helpers. */
export const locales = ["de", "en", "es", "it", "pt"] as const;
export type Locale = (typeof locales)[number];

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

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
