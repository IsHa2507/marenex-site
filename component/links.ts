// src/constants/links.ts
export const servicesList = [
  { title: "Repair & Programming", slug: "repair-programming" },
  { title: "GMDSS Radio Survey", slug: "gmdss-radio-survey" },
  { title: "VDR Annual Survey", slug: "vdr-annual-survey" },
  { title: "Magnetic Compass Calibration", slug: "magnetic-compass-calibration" },
  { title: "Calibration Services", slug: "calibration-services" },
  { title: "Marine Services", slug: "marine-services" },
];

export const footerQuickLinks = [
 
  ...servicesList.map((s) => ({ title: s.title, href: `/services?type=${s.slug}` })),
 
];
