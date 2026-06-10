/**
 * Partner network – locale-aware (de/en/es). Company names are kept; only the
 * country in the location is localized.
 */

export type Partner = { name: string; location: string };

type L = "de" | "en" | "es";
const pick = (locale: string): L => (locale === "en" ? "en" : locale === "es" ? "es" : "de");

const byLocale: Record<L, Partner[]> = {
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
  es: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Suiza" },
    { name: "Buchmann Software", location: "Bülach, Suiza" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, EE. UU." },
    { name: "TECVIL SARL", location: "Neuve Eglise, Francia" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Alemania" },
  ],
};

export function getPartners(locale: string): Partner[] {
  return byLocale[pick(locale)];
}
