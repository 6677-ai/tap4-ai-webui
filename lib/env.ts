export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.VERCEL_URL}`;

export const { GOOGLE_TRACKING_ID, GOOGLE_ADSENSE_URL, CONTACT_US_EMAIL } = process.env as Record<string, string>;
