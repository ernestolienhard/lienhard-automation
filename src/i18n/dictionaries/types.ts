/**
 * Shape of a translation dictionary. Phase 1 covers the global chrome
 * (navigation, footer, shared buttons, language switcher). Page-body sections
 * are added in later phases.
 */
export type Dict = {
  nav: {
    leistungen: string;
    unifiedModernisierung: string;
    cybersecurity: string;
    sinemaRc: string;
    unternehmen: string;
    referenzen: string;
    kontakt: string;
  };
  cta: {
    projektAnfragen: string;
    beratungVereinbaren: string;
    defaultTitle: string;
    defaultLead: string;
  };
  contact: {
    phoneLabel: string;
    emailLabel: string;
  };
  footer: {
    brandDesc: string;
    navigation: string;
    rechtliches: string;
    kontakt: string;
    rightsReserved: string;
    madeIn: string;
  };
  legal: {
    impressum: string;
    datenschutz: string;
  };
  common: {
    skipToContent: string;
    language: string;
    backToHome: string;
  };
};
