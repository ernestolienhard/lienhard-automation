/**
 * Partner network — from the existing Unternehmen page.
 */

export type Partner = {
  name: string;
  location: string;
};

export const partners: Partner[] = [
  { name: "Vonaarburg Engineering", location: "Meisterschwanden, Schweiz" },
  { name: "Buchmann Software", location: "Bülach, Schweiz" },
  { name: "TECVIL North America", location: "The Woodlands, Texas, USA" },
  { name: "TECVIL SARL", location: "Neuve Eglise, Frankreich" },
  { name: "Eckardt Engineering", location: "Mühlhausen, Deutschland" },
];

/** Public client references shown on the existing home page. */
export const clients: string[] = [
  "Roche",
  "Merck",
  "Boehringer Ingelheim",
  "Schlatter",
  "Romaco",
  "Rittmeyer",
];
