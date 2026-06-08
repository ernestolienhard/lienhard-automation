/**
 * Supported control & drive systems — from the existing Leistungen page.
 */

export type TechCategory = {
  vendor: string;
  items: string[];
};

export const technologies: TechCategory[] = [
  {
    vendor: "Siemens Automation & Drives",
    items: ["SPS S5 / S7", "S7-1200 / S7-1500", "TIA Portal", "SINAMICS"],
  },
  {
    vendor: "Visualisierung & Leittechnik",
    items: ["WinCC OA", "WinCC", "Prozessvisualisierung"],
  },
];
