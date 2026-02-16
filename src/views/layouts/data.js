
/***************************  FOOTER - 9 DATA  ***************************/

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
      value: '96317299'
    },
    {
      labelKey: 'footer.btwNumber',
      icon: 'tabler-certificate',
      value: 'NL867559755B01'
    }
  ]
};

/**
 * Bottom Bar Configuration
 * Copyright and legal links
 */
export const bottomBar = {
  copyrightType: 'TYPE3', // Can be 'TYPE1', 'TYPE2', 'TYPE3', etc.
  legalLinks: [
    {
      label: 'footer.privacyPolicy',
      href: '/privacy-policy'
    },
    {
      label: 'footer.termsConditions',
      href: '/terms-condition'
    }
  ]
};