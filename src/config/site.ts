/**
 * SINGLE SOURCE OF EDITABLE SITE CONTENT.
 *
 * PLACEHOLDER — confirm every phone number, hospital detail, OPD schedule and
 * social link with Dr. Sinha's office before publishing the website.
 */

export const doctor = {
  name: "Dr. Subhash Kumar Sinha",
  shortName: "Dr. S. K. Sinha",
  title: "Senior Cardiothoracic & Vascular Surgeon",
  positioning: "Pioneer in Beating Heart Surgery",
  experienceYears: "40+",
};

export const contact = {
  // From Dr. Sinha's practice listings — confirm WhatsApp number is WhatsApp-enabled.
  phoneDisplay: "+91 98113 21668",
  phoneHref: "tel:+919811321668",
  whatsappDisplay: "+91 98113 21668",
  whatsappHref: "https://wa.me/919811321668",
  email: "drsinhacardiacsurgeon@gmail.com",
  emailHref: "mailto:drsinhacardiacsurgeon@gmail.com",
};

/** From Max Healthcare / practice listings — confirm OPD days and timings before publishing. */
export const hospital = {
  name: "Max Super Speciality Hospital, Saket",
  addressLines: ["Saket Institutional Area", "Saket", "New Delhi, Delhi 110017"],
  opdDays: "Monday to Saturday (to be confirmed)",
  opdTimings: "10:00 AM – 4:00 PM (to be confirmed)",
  appointmentPhoneDisplay: "+91 98113 21668",
  appointmentPhoneHref: "tel:+919811321668",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Max+Super+Speciality+Hospital+Saket+New+Delhi&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Max+Super+Speciality+Hospital,+Saket+Institutional+Area,+Saket,+New+Delhi+110017",
};

/** PLACEHOLDER — add verified profile URLs, or remove entries that do not exist. */
export const socialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Contact", to: "/contact" },
] as const;

export const globalDisclaimer =
  "The information on this website is intended for general education and does not replace an individual medical consultation. Treatment recommendations depend on clinical evaluation and relevant investigations. In a medical emergency, contact the nearest emergency department immediately.";
