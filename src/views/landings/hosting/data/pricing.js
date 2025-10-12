export const pricing = {
  heading: 'The Affordable Unfair Advantage',
  caption: 'Choose the plan that aligns with your cloud management requirements.',
  defaultUnit: 'per user/month',
  user: 'Best for 1-50 users',
  plans: [
    {
      animationDelay: 0.2,
      title: 'Free',
      description: 'Free for everyone',
      active: false,
      plan: 'Free Plan',
      exploreLink: { children: 'Get Started with free' },
      features: [
        { id: 1, label: 'Limited members' },
        { id: 2, label: '50 issues (+unlimited archived)' },
        { id: 3, label: 'No Import and No export' },
        { id: 4, label: 'All intergation, API, Webhooks' }
      ]
    },
    {
      animationDelay: 0.4,
      title: 'Standard',
      active: true,
      price: { monthly: 12, yearly: 8 },
      exploreLink: { children: 'Get Started with Standard' },
      features: [
        { id: 1, label: 'Unlimited members' },
        { id: 2, label: '150 issues (+unlimited archived)' },
        { id: 3, label: 'Import and No export' },
        { id: 4, label: 'All intergation, API, Webhooks' }
      ]
    },
    {
      animationDelay: 0.6,
      title: 'Plus',
      price: { monthly: 16, yearly: 12 },
      active: false,
      plan: 'Annual Billing Only',
      link: { children: 'Contact Us', href: '#' },
      exploreLink: { children: 'Get Started with Plus' },
      features: [
        { id: 1, label: 'Unlimited members' },
        { id: 2, label: '250+ issues (+unlimited archived)' },
        { id: 3, label: 'Import and export' },
        { id: 4, label: 'All intergation, API, Webhooks' }
      ]
    }
  ]
};
