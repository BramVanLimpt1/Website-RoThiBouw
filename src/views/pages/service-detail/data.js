// Service detail page data configuration

export const services = [
  {
    slug: 'dakwerken',
    titleKey: 'services.dakwerken.title',
    icon: 'tabler-home',
    heroImage: '/assets/home/image_1.jpg',
    descriptionTitleKey: 'services.dakwerken.descriptionTitle',
    descriptionKey: 'services.dakwerken.description',
    descriptionImage: '/assets/home/image_2.jpg',
    features: [
      'services.dakwerken.features.f1',
      'services.dakwerken.features.f2',
      'services.dakwerken.features.f3',
      'services.dakwerken.features.f4',
      'services.dakwerken.features.f5',
      'services.dakwerken.features.f6'
    ],
    featureImage: '/assets/home/image_3.jpg',
    relatedCategories: ['dakwerken']
  },
  {
    slug: 'timmerwerk',
    titleKey: 'services.timmerwerk.title',
    icon: 'tabler-tool',
    heroImage: '/assets/home/image_2.jpg',
    descriptionTitleKey: 'services.timmerwerk.descriptionTitle',
    descriptionKey: 'services.timmerwerk.description',
    descriptionImage: '/assets/home/image_3.jpg',
    features: [
      'services.timmerwerk.features.f1',
      'services.timmerwerk.features.f2',
      'services.timmerwerk.features.f3',
      'services.timmerwerk.features.f4',
      'services.timmerwerk.features.f5',
      'services.timmerwerk.features.f6'
    ],
    featureImage: '/assets/home/image_1.jpg',
    relatedCategories: ['buitenconstructies']
  },
  {
    slug: 'renovaties',
    titleKey: 'services.renovaties.title',
    icon: 'tabler-paint',
    heroImage: '/assets/home/image_3.jpg',
    descriptionTitleKey: 'services.renovaties.descriptionTitle',
    descriptionKey: 'services.renovaties.description',
    descriptionImage: '/assets/home/image_1.jpg',
    features: [
      'services.renovaties.features.f1',
      'services.renovaties.features.f2',
      'services.renovaties.features.f3',
      'services.renovaties.features.f4',
      'services.renovaties.features.f5',
      'services.renovaties.features.f6'
    ],
    featureImage: '/assets/home/image_2.jpg',
    relatedCategories: ['aanbouw-renovatie', 'renovatie']
  },
  {
    slug: 'dakkapellen',
    titleKey: 'services.dakkapellen.title',
    icon: 'tabler-building',
    heroImage: '/assets/home/image_1.jpg',
    descriptionTitleKey: 'services.dakkapellen.descriptionTitle',
    descriptionKey: 'services.dakkapellen.description',
    descriptionImage: '/assets/home/image_3.jpg',
    features: [
      'services.dakkapellen.features.f1',
      'services.dakkapellen.features.f2',
      'services.dakkapellen.features.f3',
      'services.dakkapellen.features.f4',
      'services.dakkapellen.features.f5',
      'services.dakkapellen.features.f6'
    ],
    featureImage: '/assets/home/image_2.jpg',
    relatedCategories: ['dakwerken']
  },
  {
    slug: 'tuinoverkappingen',
    titleKey: 'services.tuinoverkappingen.title',
    icon: 'tabler-umbrella',
    heroImage: '/assets/home/image_2.jpg',
    descriptionTitleKey: 'services.tuinoverkappingen.descriptionTitle',
    descriptionKey: 'services.tuinoverkappingen.description',
    descriptionImage: '/assets/home/image_1.jpg',
    features: [
      'services.tuinoverkappingen.features.f1',
      'services.tuinoverkappingen.features.f2',
      'services.tuinoverkappingen.features.f3',
      'services.tuinoverkappingen.features.f4',
      'services.tuinoverkappingen.features.f5',
      'services.tuinoverkappingen.features.f6'
    ],
    featureImage: '/assets/home/image_3.jpg',
    relatedCategories: ['buitenconstructies']
  },
  {
    slug: 'muurbouw',
    titleKey: 'services.muurbouw.title',
    icon: 'tabler-wall',
    heroImage: '/assets/home/image_3.jpg',
    descriptionTitleKey: 'services.muurbouw.descriptionTitle',
    descriptionKey: 'services.muurbouw.description',
    descriptionImage: '/assets/home/image_2.jpg',
    features: [
      'services.muurbouw.features.f1',
      'services.muurbouw.features.f2',
      'services.muurbouw.features.f3',
      'services.muurbouw.features.f4',
      'services.muurbouw.features.f5',
      'services.muurbouw.features.f6'
    ],
    featureImage: '/assets/home/image_1.jpg',
    relatedCategories: ['renovatie']
  }
];

// Shared process steps for all service pages
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

// Services navigation data (reuses same format as ContactUs3)
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
