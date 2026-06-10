/**
 * Core competencies – control/process engineering, visualization and
 * industrial communication. Locale-aware (de/en/es/fr/it/pt).
 */
import { pageLocale, type Locale } from "@/i18n/config";

export type TechCategory = {
  vendor: string;
  items: string[];
};

const byLocale: Record<Locale, TechCategory[]> = {
  de: [
    { vendor: "Steuerungs- & Prozessleittechnik", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programmierung in FUP, KOP, AWL & SCL", "Safety / Sicherheitssteuerungen"] },
    { vendor: "Visualisierung & SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Prozessvisualisierung"] },
    { vendor: "Kommunikation & Schnittstellen", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
  en: [
    { vendor: "Control & process engineering", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programming in FBD, LAD, STL & SCL", "Safety / fail-safe controllers"] },
    { vendor: "Visualization & SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Process visualization"] },
    { vendor: "Communication & interfaces", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
  es: [
    { vendor: "Tecnología de control y proceso", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programación en FUP, KOP, AWL y SCL", "Safety / controladores de seguridad"] },
    { vendor: "Visualización y SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Visualización de procesos"] },
    { vendor: "Comunicación e interfaces", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
  fr: [
    { vendor: "Commande et conduite de process", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programmation en CONT, LOG, LIST & SCL", "Safety / commandes de sécurité"] },
    { vendor: "Visualisation et SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Visualisation de process"] },
    { vendor: "Communication et interfaces", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
  it: [
    { vendor: "Controllo e conduzione di processo", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programmazione in FUP, KOP, AWL e SCL", "Safety / controllori di sicurezza"] },
    { vendor: "Visualizzazione e SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Visualizzazione di processo"] },
    { vendor: "Comunicazione e interfacce", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
  pt: [
    { vendor: "Controlo e condução de processo", items: ["SIMATIC STEP 7 Classic", "SIMATIC PCS 7", "TIA Portal", "Programação em FBD, LAD, STL e SCL", "Safety / controladores de segurança"] },
    { vendor: "Visualização e SCADA", items: ["WinCC Unified", "WinCC OA", "WinCC", "Visualização de processo"] },
    { vendor: "Comunicação e interfaces", items: ["OPC UA", "Modbus RTU / TCP", "PROFINET", "PROFIBUS"] },
  ],
};

export function getTechnologies(locale: string): TechCategory[] {
  return byLocale[pageLocale(locale)];
}
