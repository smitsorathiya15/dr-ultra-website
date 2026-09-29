/**
 * siteConfig
 * ------------------------------------------------------------------
 * Central, non-secret configuration for the whole site: company
 * details, navigation, social links, contact info. Every component
 * that needs "the phone number" or "the nav links" imports from
 * here instead of hard-coding text inline, so a rebrand or content
 * change touches exactly one file.
 *
 * Values that differ between local/staging/production (API URL,
 * maps embed, site URL) are read from Vite's import.meta.env, which
 * is populated from the .env file (see .env.example).
 * ------------------------------------------------------------------
 */
const siteConfig = {
  companyName: 'Dr. Ultra',
  legalName: 'Dr. Ultra',
  tagline: 'Electrical Insulating Varnishes & Resins',
  shortDescription:
    'High performance electrical insulating varnishes, wire enamels and resin systems — engineered with German technology, made in India.',

  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.drultra.co.in',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  mapsEmbedSrc: import.meta.env.VITE_GOOGLE_MAPS_EMBED_SRC || '',

  contact: {
    email: 'drultra01@gmail.com',
    phones: ['+91 97277 52613', '+91 70165 54356'],
    // Number the Contact page's "Chat on WhatsApp" button opens a chat with.
    // Kept as one plain international-format string (with the leading +) so
    // it can also be shown as text anywhere; WhatsAppButton strips it down
    // to digits-only when building the wa.me link, per wa.me's requirements.
    whatsappNumber: '+91 70165 54356',
    address: 'Dr. Ultra Manufacturing Unit, GIDC Industrial Estate, Gujarat, India',
    addressNote:
      'Placeholder address — replace with your registered office / factory address in src/config/siteConfig.js',
  },

  social: {
    facebook: 'https://facebook.com/drultra',
    instagram: 'https://instagram.com/drultra',
    linkedin: 'https://linkedin.com/company/drultra',
    youtube: '',
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default siteConfig;
