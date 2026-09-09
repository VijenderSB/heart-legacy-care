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
  // PLACEHOLDER numbers — replace with verified clinic numbers.
  phoneDisplay: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsappDisplay: "+91 00000 00000",
  whatsappHref: "https://wa.me/910000000000",
  email: "appointments@example.com",
  emailHref: "mailto:appointments@example.com",
};

/** PLACEHOLDER — confirm current hospital associations, designations and OPD schedules before publishing. */
export const hospital = {
  name: "Hospital Name (to be confirmed)",
  addressLines: ["Address line 1", "Address line 2", "New Delhi, India — PIN"],
  opdDays: "Monday to Saturday (to be confirmed)",
  opdTimings: "10:00 AM – 4:00 PM (to be confirmed)",
  appointmentPhoneDisplay: "+91 00000 00000",
  appointmentPhoneHref: "tel:+910000000000",
  // PLACEHOLDER Google Maps embed — replace `q=` with the verified hospital address.
  mapsEmbedSrc: "https://www.google.com/maps?q=New+Delhi&output=embed",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=New+Delhi",
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
