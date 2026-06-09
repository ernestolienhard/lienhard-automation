import type { Locale } from "../config";
import { defaultLocale } from "../config";
import type { Dict } from "./types";
import de from "./de";
import en from "./en";
import es from "./es";
import it from "./it";
import pt from "./pt";

const dictionaries: Record<Locale, Dict> = { de, en, es, it, pt };

/** Returns the dictionary for a locale, falling back to the default locale. */
export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Dict };
