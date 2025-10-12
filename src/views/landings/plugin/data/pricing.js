export const pricing = {
  heading: 'Flexible Pricing Plans',
  caption: 'Choose the plan that aligns with your cloud management requirements.',
  defaultUnit: '/mth',
  plans: [
    {
      title: 'Heavy plan',
      description: 'Our everything included plan. includes 5 users to get you started.',
      active: true,
      price: { monthly: 109, yearly: 99 },
      features: [
        { id: 1, label: 'Includes 5 Users' },
        { id: 2, label: 'Access to Basic Feature' },
        { id: 3, label: 'Additional User at ', badge: '$45/m per user' },
        { id: 4, label: 'Basic Reporting & Analytics' },
        { id: 5, label: 'Up to 10 Individual Users' },
        { id: 6, label: 'Up to 10 Individual Users' },
        { id: 7, label: '40 GB Individual Data Users' },
        { id: 8, label: '10,000 Visitor' }
      ],
      exploreLink: { children: 'Try for Free' }
    },
    {
      title: 'Customize Plan',
      description: 'Our everything included plan. includes 5 users to get you started.',
      active: false,
      features: [
        { id: 1, label: 'Custom Pricing' },
        { id: 2, label: 'Custom Onboarding Support' },
        { id: 3, label: 'Multi-Location support' },
        { id: 4, label: 'Custom Integration' }
      ],
      exploreLink: { children: 'Contact Us' }
    }
  ]
};
