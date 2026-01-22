/**
 * Central Site Configuration
 * Update contact info here and it will reflect throughout the entire website
 */

export const siteConfig = {
  // Organization Info
  name: "NWRFHP",
  fullName: "North West Regional Fund for Health Promotion",
  tagline: "Promoting sustainable quality healthcare for the population of North West Region, Cameroon since 1987.",
  description: "Promoting sustainable quality healthcare for the population of North West Region, Cameroon since 1987.",
  foundedYear: 1987,

  // Contact Information
  contact: {
    phone: {
      primary: "+237 651 421 052",
      primaryRaw: "+237651421052", // For tel: links
      secondary: "+237 677 123 456",
      secondaryRaw: "+237677123456",
    },
    email: {
      primary: "info@nwrfhp.org",
      support: "support@nwrfhp.org",
      partnerships: "partnerships@nwrfhp.org",
    },
    whatsapp: {
      number: "+237 651 421 052",
      numberRaw: "237651421052", // For wa.me links (no + sign)
      link: "https://wa.me/237651421052",
    },
  },

  // Location
  location: {
    address: "Commercial Avenue",
    city: "Bamenda",
    region: "North West Region",
    country: "Cameroon",
    fullAddress: "Commercial Avenue, Bamenda, North West Region, Cameroon",
    shortAddress: "Bamenda, North West Region, Cameroon",
    coordinates: {
      lat: 5.9631,
      lng: 10.1591,
    },
    googleMapsUrl: "https://maps.google.com/?q=5.9631,10.1591",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/nwrfhp",
    instagram: "https://instagram.com/nwrfhp",
    twitter: "https://twitter.com/nwrfhp",
    linkedin: "https://linkedin.com/company/nwrfhp",
    youtube: "https://youtube.com/@nwrfhp",
  },

  // Key Statistics
  stats: {
    healthFacilities: 217,
    communitiesServed: "500K+",
    yearsOfService: new Date().getFullYear() - 1987,
    healthWorkers: 850,
    medicineAvailability: "95%",
  },

  // Navigation Links
  navLinks: [
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],

  // Footer Links
  footerLinks: {
    programs: [
      { label: "Essential Medicines", href: "/programs/essential-medicines" },
      { label: "Community Health", href: "/programs/community-health" },
      { label: "Health Coverage", href: "/programs/universal-health-coverage" },
      { label: "All Programs", href: "/programs" },
    ],
    organization: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
