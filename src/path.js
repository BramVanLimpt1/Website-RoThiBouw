function path(urlChunks) {
  return urlChunks.join('/');
}

export const SECTION_PATH = '/sections';
export const ADMIN_PATH = '#';
export const BUY_NOW_URL = '#';
export const FREEBIES_URL = '#';
export const DOCS_URL = '#';
export const BLOCK_PATH = '/blocks';
const AUTH_PATH = 'auth';

export const PAGE_PATH = {
  // auth pages path
  login: path([SECTION_PATH, AUTH_PATH, 'login']),
  forgotPassword: path([SECTION_PATH, AUTH_PATH, 'forgot-password']),
  newPassword: path([SECTION_PATH, AUTH_PATH, 'new-password']),
  otpVerification: path([SECTION_PATH, AUTH_PATH, 'otp-verification']),
  register: path([SECTION_PATH, AUTH_PATH, 'register']),

  about: path([SECTION_PATH, 'about']),
  benefit: path([SECTION_PATH, 'benefit']),
  blog: path([SECTION_PATH, 'blog']),
  clientele: path([SECTION_PATH, 'clientele']),
  color: path([SECTION_PATH, 'color']),
  comingSoon: path([SECTION_PATH, 'coming-soon']),
  contactUs: path([SECTION_PATH, 'contact-us']),
  cookie: path([SECTION_PATH, 'cookie']),
  cta: path([SECTION_PATH, 'cta']),
  earlyAccess: path([SECTION_PATH, 'early-access']),
  error404: path([SECTION_PATH, 'error404']),
  error500: path([SECTION_PATH, 'error500']),
  faq: path([SECTION_PATH, 'faq']),
  feature: path([SECTION_PATH, 'feature']),
  footer: path([SECTION_PATH, 'footer']),
  gallery: path([SECTION_PATH, 'gallery']),
  hero: path([SECTION_PATH, 'hero']),
  icon: path([SECTION_PATH, 'icon']),
  integration: path([SECTION_PATH, 'integration']),
  megaMenu: path([SECTION_PATH, 'mega-menu']),
  navbar: path([SECTION_PATH, 'navbar']),
  onboard: path([SECTION_PATH, 'onboard']),
  other: path([SECTION_PATH, 'other']),
  pricing: path([SECTION_PATH, 'pricing']),
  process: path([SECTION_PATH, 'process']),
  privacyPolicy: path([SECTION_PATH, 'privacy-policy']),
  smallHero: path([SECTION_PATH, 'small-hero']),
  team: path([SECTION_PATH, 'team']),
  testimonial: path([SECTION_PATH, 'testimonial']),
  termsCondition: path([SECTION_PATH, 'terms-condition']),
  topOffer: path([SECTION_PATH, 'top-offer']),
  typography: path([SECTION_PATH, 'typography']),
  underMaintenance: path([SECTION_PATH, 'under-maintenance']),

  // pages path
  aboutPage: '/about',
  careerPage: '/career',
  contactPage: '/contact',
  faqPage: '/faq',
  pricingPage: '/pricing',
  privacyPolicyPage: '/privacy-policy',
  termsConditionPage: '/terms-condition'
};
