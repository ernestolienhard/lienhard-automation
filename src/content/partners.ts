/**
 * Partner network – locale-aware (de/en/es/fr/it/pt). Company names are kept;
 * only the country in the location is localized.
 */
import { pageLocale, type Locale } from "@/i18n/config";

export type Partner = { name: string; location: string };

const byLocale: Record<Locale, Partner[]> = {
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
  fr: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Suisse" },
    { name: "Buchmann Software", location: "Bülach, Suisse" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, États-Unis" },
    { name: "TECVIL SARL", location: "Neuve Eglise, France" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Allemagne" },
  ],
  it: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Svizzera" },
    { name: "Buchmann Software", location: "Bülach, Svizzera" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, USA" },
    { name: "TECVIL SARL", location: "Neuve Eglise, Francia" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Germania" },
  ],
  pt: [
    { name: "Vonaarburg Engineering", location: "Meisterschwanden, Suíça" },
    { name: "Buchmann Software", location: "Bülach, Suíça" },
    { name: "TECVIL North America", location: "The Woodlands, Texas, EUA" },
    { name: "TECVIL SARL", location: "Neuve Eglise, França" },
    { name: "Eckardt Engineering", location: "Mühlhausen, Alemanha" },
  ],
};

export function getPartners(locale: string): Partner[] {
  return byLocale[pageLocale(locale)];
}
