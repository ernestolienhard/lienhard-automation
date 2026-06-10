/**
 * Partner network – locale-aware (de/en). Company names are kept; only the
 * country in the location is localized.
 */

export type Partner = { name: string; location: string };

const byLocale: Record<"de" | "en", Partner[]> = {
  de: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Schweiz" },
    { name: "Buchmann Software", location: "Bülach, Schweiz" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, USA" },
    { name: "TECVIL SARL", location: "Neuve Eglise, Frankreich" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Deutschland" },
  ],
  en: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Switzerland" },
    { name: "Buchmann Software", location: "Bülach, Switzerland" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, USA" },
    { name: "TECVIL SARL", location: "Neuve Eglise, France" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Germany" },
  ],
};

export function getPartners(locale: string): Partner[] {
  return locale === "en" ? byLocale.en : byLocale.de;
}
