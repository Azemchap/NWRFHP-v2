import { Heart, Camera, Users, Phone, Info, type LucideIcon } from 'lucide-react';

/**
 * Central Site Configuration
 * Update contact info here and it will reflect throughout the entire website
 */

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavigationLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface NavigationGroup {
  title: string;
  links: Omit<NavigationLink, 'icon'>[];
}

// ============================================
// NAVIGATION CONFIG
// ============================================

/**
 * Main navigation links used in header, mobile menu, and footer
 * Order matters - links appear in this order throughout the site
 */
export const navigationLinks: NavigationLink[] = [
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/programs', label: 'Our Programs', icon: Heart },
  { href: '/team', label: 'Our Team', icon: Users },
  { href: '/contact', label: 'Get in Touch', icon: Phone },
  { href: '/gallery', label: 'Gallery', icon: Camera },
];

// ============================================
// SITE CONFIG
// ============================================

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
    address: "Hospital Round About",
    city: "Bamenda",
    region: "North West Region",
    country: "Cameroon",
    fullAddress: "Bamenda Regional Hospital, North West Region, Cameroon",
    shortAddress: "Regional Hospital, Bamenda, NWR, CM",
    coordinates: {
      lat: 5.9607799,
      lng: 10.1476556,
    },
    googleMapsUrl: "https://maps.google.com/?q=5.9607799,10.1476556",
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
    healthFacilities: 430,
    communityPharmacies: 430,
    communitiesServed: 500,
    populationServed: 2.2, // In millions (2.2M)
    yearsOfService: new Date().getFullYear() - 1987,
    healthWorkers: 850,
    medicineAvailability: 95,
    healthDistricts: 21,
  },

  // Footer Links
  footerLinks: {
    programs: [
      { label: "Essential Medicines", href: "/programs/essential-medicines" },
      { label: "Community Health", href: "/programs/community-health" },
      { label: "Health Coverage", href: "/programs/universal-health-coverage" },
      { label: "Maternal Health", href: "/programs/maternal-child-health" },
      { label: "All Programs", href: "/programs" },
    ],
    organization: [
      { label: "Gallery", href: "/gallery" },
      { label: "Our Team", href: "/team" },
      { label: "UHC Services", href: "/health" },
      { label: "About Us", href: "/about" },
    ],
    quickLinks: [
      { label: "Contact Us", href: "/contact" },
      { label: "Health Voucher", href: "/health" },
      { label: "Hemodialysis", href: "/programs/hemodialysis" },
      { label: "Disease Management", href: "/programs/disease-management" },
    ],
  },
} as const;

// Type exports for TypeScript
export type SiteConfig = typeof siteConfig;
