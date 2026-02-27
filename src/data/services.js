// Source of truth for all service data.
// Import from here in any file that needs service data.

export const services = [
  {
    slug: 'dakwerken',
    titleKey: 'services.dakwerken.title',
    icon: 'tabler-home',
    heroImage: '/assets/temp/placeholder.png',
    descriptionTitleKey: 'services.dakwerken.descriptionTitle',
    descriptionKey: 'services.dakwerken.description',
    descriptionImage: '/assets/temp/placeholder.png',
    features: [
      'services.dakwerken.features.f1',
      'services.dakwerken.features.f2',
      'services.dakwerken.features.f3',
      'services.dakwerken.features.f4',
      'services.dakwerken.features.f5',
      'services.dakwerken.features.f6'
    ],
    featureImage: '/assets/temp/placeholder.png',
    relatedCategories: ['dakwerken']
  },
  {
    slug: 'timmerwerk',
    titleKey: 'services.timmerwerk.title',
    icon: 'tabler-tool',
    heroImage: '/assets/temp/placeholder.png',
    descriptionTitleKey: 'services.timmerwerk.descriptionTitle',
    descriptionKey: 'services.timmerwerk.description',
    descriptionImage: '/assets/temp/placeholder.png',
    features: [
      'services.timmerwerk.features.f1',
      'services.timmerwerk.features.f2',
      'services.timmerwerk.features.f3',
      'services.timmerwerk.features.f4',
      'services.timmerwerk.features.f5',
      'services.timmerwerk.features.f6'
    ],
    featureImage: '/assets/temp/placeholder.png',
    relatedCategories: ['timmerwerk']
  },
  {
    slug: 'renovaties',
    titleKey: 'services.renovaties.title',
    icon: 'tabler-paint',
    heroImage: '/assets/temp/placeholder.png',
    descriptionTitleKey: 'services.renovaties.descriptionTitle',
    descriptionKey: 'services.renovaties.description',
    descriptionImage: '/assets/temp/placeholder.png',
    features: [
      'services.renovaties.features.f1',
      'services.renovaties.features.f2',
      'services.renovaties.features.f3',
      'services.renovaties.features.f4',
      'services.renovaties.features.f5',
      'services.renovaties.features.f6'
    ],
    featureImage: '/assets/temp/placeholder.png',
    relatedCategories: ['renovaties']
  },
  {
    slug: 'verduurzaming',
    titleKey: 'services.verduurzaming.title',
    icon: 'tabler-building',
    heroImage: '/assets/temp/placeholder.png',
    descriptionTitleKey: 'services.verduurzaming.descriptionTitle',
    descriptionKey: 'services.verduurzaming.description',
    descriptionImage: '/assets/temp/placeholder.png',
    features: [
      'services.verduurzaming.features.f1',
      'services.verduurzaming.features.f2',
      'services.verduurzaming.features.f3',
      'services.verduurzaming.features.f4',
      'services.verduurzaming.features.f5',
      'services.verduurzaming.features.f6'
    ],
    featureImage: '/assets/temp/placeholder.png',
    relatedCategories: ['verduurzaming']
  },
  {
    slug: 'houtConstructies',
    titleKey: 'services.houtConstructies.title',
    icon: 'tabler-wall',
    heroImage: '/assets/temp/placeholder.png',
    descriptionTitleKey: 'services.houtConstructies.descriptionTitle',
    descriptionKey: 'services.houtConstructies.description',
    descriptionImage: '/assets/temp/placeholder.png',
    features: [
      'services.houtConstructies.features.f1',
      'services.houtConstructies.features.f2',
      'services.houtConstructies.features.f3',
      'services.houtConstructies.features.f4',
      'services.houtConstructies.features.f5',
      'services.houtConstructies.features.f6'
    ],
    featureImage: '/assets/temp/placeholder.png',
    relatedCategories: ['houtConstructies']
  }
];

export const serviceProcessSteps = {
  heading: 'services.process.heading',
  caption: 'services.process.caption',
  cards: [
    {
      number: '01',
      title: 'services.process.step1.title',
      description: 'services.process.step1.description'
    },
    {
      number: '02',
      title: 'services.process.step2.title',
      description: 'services.process.step2.description'
    },
    {
      number: '03',
      title: 'services.process.step3.title',
      description: 'services.process.step3.description'
    }
  ]
};

export const servicesNavigationData = {
  heading: 'services.navigation.heading',
  caption: 'services.navigation.caption',
  list: services.map((service) => ({
    icon: service.icon,
    title: service.titleKey,
    content: `services.${service.slug}.descriptionTitle`,
    link: {
      href: `/services/${service.slug}`,
      children: 'common.learnMore'
    }
  }))
};
