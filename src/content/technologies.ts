/**
 * Core competencies – control/process engineering, visualization and
 * industrial communication. Locale-aware (de/en).
 */

export type TechCategory = {
  vendor: string;
  items: string[];
};

const byLocale: Record<"de" | "en", TechCategory[]> = {
  de: [
    {
      vendor: "Steuerungs- & Prozessleittechnik",
      items: [
        "SIMATIC STEP 7 Classic",
        "SIMATIC PCS 7",
        "TIA Portal",
        "Programmierung in FUP, KOP, AWL & SCL",
        "Safety / Sicherheitssteuerungen",
      ],
    },
    {
      vendor: "Visualisierung & SCADA",
      items: ["WinCC Unified", "WinCC OA", "WinCC", "Prozessvisualisierung"],
    },
    {
      vendor: "Kommunikation & Schnittstellen",
      items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"],
    },
  ],
  en: [
    {
      vendor: "Control & process engineering",
      items: [
        "SIMATIC STEP 7 Classic",
        "SIMATIC PCS 7",
        "TIA Portal",
        "Programming in FBD, LAD, STL & SCL",
        "Safety / fail-safe controllers",
      ],
    },
    {
      vendor: "Visualization & SCADA",
      items: ["WinCC Unified", "WinCC OA", "WinCC", "Process visualization"],
    },
    {
      vendor: "Communication & interfaces",
      items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"],
    },
  ],
};

export function getTechnologies(locale: string): TechCategory[] {
  return locale === "en" ? byLocale.en : byLocale.de;
}
