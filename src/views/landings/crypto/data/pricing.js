export const pricing = {
  heading: 'Flexible Pricing Plans',
  caption: 'Choose a plan that suits your needs and scale with flexibility.',
  defaultUnit: '/month',
  plans: [
    {
      title: 'Basic Plan',
      description: 'Ideal for individuals and small businesses with basic data needs.',
      active: false,
      price: 19,
      features: [
        { id: 1, label: 'Access to Basic Feature' },
        { id: 2, label: 'Basic Reporting & Analytics' },
        { id: 3, label: 'Up to 10 Individual Users' },
        { id: 6, label: '5 GB Individual Data Users' },
        { id: 9, label: '100 Visitor' }
      ],
      about:
        '*Get started with our Basic Plan for essential data needs. Perfect for individuals and small businesses looking for reliable data solutions.',
      exploreLink: { children: 'Best for individuals' }
    },
    {
      title: 'Pro Plan (Recommended)',
      description: 'Designed for growing businesses and teams with moderate data requirements.',
      active: true,
      price: 49,
      features: [
        { id: 1, label: 'Access to Basic Feature' },
        { id: 2, label: 'Basic Reporting & Analytics' },
        { id: 4, label: 'Up to 100 Individual Users' },
        { id: 7, label: '15 GB Individual Data Users' },
        { id: 10, label: '1,000 Visitor' }
      ],
      about:
        '*Get started with our Basic Plan for essential data needs. Perfect for individuals and small businesses looking for reliable data solutions.',
      exploreLink: { children: 'Designed for growing businesses' }
    },
    {
      title: 'Enterprises Plan',
      description: 'Tailored for large enterprises with high-volume data needs and specialized requirements.',
      active: false,
      price: 99,
      features: [
        { id: 1, label: 'Access to Basic Feature' },
        { id: 2, label: 'Basic Reporting & Analytics' },
        { id: 5, label: 'Up to 1k Individual Users' },
        { id: 8, label: '40 GB Individual Data Users' },
        { id: 11, label: '10,000 Visitor' }
      ],
      about:
        '*For large enterprises with high-volume data needs and specialized requirements, our Enterprise Plan offers unlimited data usage and 24/7 dedicated support.',
      exploreLink: { children: 'Best for individuals' }
    }
  ]
};
