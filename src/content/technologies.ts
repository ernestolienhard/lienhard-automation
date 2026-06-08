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
    vendor: "Rockwell Automation",
    items: ["RSLogix 500", "RSLogix 5000", "PLC-5", "Logix 500 & 5000"],
  },
  {
    vendor: "Bosch Rexroth",
    items: ["EcoDrive", "IndraDrive", "Achsen-Technologie"],
  },
  {
    vendor: "Lenze",
    items: ["Antriebstechnik"],
  },
  {
    vendor: "SEW-EURODRIVE",
    items: ["Antriebstechnik"],
  },
  {
    vendor: "Visualisierung & Leittechnik",
    items: ["WinCC OA", "WinCC", "Prozessvisualisierung"],
  },
];
