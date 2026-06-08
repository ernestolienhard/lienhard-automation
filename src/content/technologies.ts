/**
 * Core competencies — control/process engineering, visualization and
 * industrial communication. Based on the owner's stated key strengths.
 */

export type TechCategory = {
  vendor: string;
  items: string[];
};

export const technologies: TechCategory[] = [
  {
    vendor: "Steuerungs- & Prozessleittechnik",
    items: [
      "SIMATIC STEP 7 Classic",
      "SIMATIC PCS 7",
      "TIA Portal",
      "Programmierung in FUP, KOP & AWL",
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
];
