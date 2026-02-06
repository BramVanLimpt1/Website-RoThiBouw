// @project
import branding from '@/branding.json';

/***************************  FOOTER - 9 DATA  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/**
 * Left Section: Company Info with Locations and Contact Details
 * Displays logo and a list of contact information with icons
 */
export const companyInfo = {
  infoItems: [
    {
      labelKey: 'forms.location',
      icon: 'tabler-map-pin',
      value: 'Hooge-Mierde / Reusel'
    },
    {
      labelKey: 'footer.phoneRoy',
      icon: 'tabler-phone',
      value: '+31612345678',
      href: 'tel:+31612345678'
    },
    {
      labelKey: 'footer.phoneThijs',
      icon: 'tabler-phone',
      value: '+31687654321',
      href: 'tel:+31687654321'
    },
    {
      labelKey: 'footer.email',
      icon: 'tabler-mail',
      value: 'info@rothibouw.nl',
      href: 'mailto:info@rothibouw.nl'
    },
    {
      labelKey: 'footer.kvkNumber',
      icon: 'tabler-building',
      value: '12345678'
    },
    {
      labelKey: 'footer.btwNumber',
      icon: 'tabler-certificate',
      value: 'NL123456789B01'
    }
  ]
};

/**
 * Right Section: Footer Link Columns
 * Fully configurable columns with menu items
 */
export const footerColumns = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'nav.company',
    menu: [
      {
        label: 'nav.about',
        link: { href: '/about' }
      },
      {
        label: 'nav.contact',
        link: { href: '/contact' }
      },
      {
        label: 'nav.projects',
        link: { href: '/projects' }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'nav.support',
    menu: [
      {
        label: 'nav.faq',
        link: { href: '/faq' }
      },
      {
        label: 'nav.contact',
        link: { href: branding.company.socialLink.support, ...linkProps }
      }
    ]
  },
  {
    id: 'legal',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'footer.legal',
    menu: [
      {
        label: 'footer.privacyPolicy',
        link: { href: '/privacy-policy' }
      },
      {
        label: 'footer.termsConditions',
        link: { href: '/terms-condition' }
      }
    ]
  }
];

/**
 * Bottom Bar Configuration
 * Copyright and social links
 */
export const bottomBar = {
  copyrightType: 'TYPE3', // Can be 'TYPE1', 'TYPE2', 'TYPE3', etc.
  socials: [
    {
      icon: 'tabler-filled-linkedin',
      href: branding.company.socialLink.linkedin,
      label: 'LinkedIn',
      ...linkProps
    }
  ]
};