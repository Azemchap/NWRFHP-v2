/**
 * Centralized contact information configuration
 * All contact details should be referenced from this file
 */

export const CONTACTS = {
  phone: process.env.NEXT_PUBLIC_PHONE || '+237611222333',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '+237611222333',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@nwrfhp.org',
} as const;

export const SOCIAL_LINKS = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/nwrfhp',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/nwrfhp',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/nwrfhp',
} as const;

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'North West Regional Fund for Health Promotion',
  shortName: 'NWRFHP',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;
