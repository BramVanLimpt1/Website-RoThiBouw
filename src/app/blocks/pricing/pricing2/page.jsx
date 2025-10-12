// @project
import { Pricing2 } from '@/blocks/pricing';

/***************************  PRICING 2 - DATA  ***************************/

const data = {
  heading: 'Our Pricing That’s Simple with No Hidden Fees',
  caption: 'Discover the features that will transform your customer relationships',
  features: [
    { id: 1, label: 'One End Product' },
    { id: 2, label: 'No attribution required' },
    { id: 3, label: 'Basic Reporting & Analytics' },
    { id: 4, label: 'TypeScript' },
    { id: 5, label: 'Figma Design Resources' },
    { id: 6, label: 'Create Multiple Products' },
    { id: 7, label: 'Create a SaaS Project' },
    { id: 8, label: 'Resale Product' },
    { id: 9, label: 'Separate sale of our UI Elements?' },
    { id: 10, label: 'Infinite Visitor' },
    { id: 11, label: 'Unlimited Space' }
  ],
  plans: [
    {
      title: 'Basic',
      description: 'Tailored for large enterprises with high-volume data needs.',
      active: false,
      price: { monthly: 19, yearly: 199 },
      features: [1, 3, 4, 7, 10],
      about:
        '*Get started with our Basic Plan for essential data needs. Perfect for individuals and small businesses looking for reliable data solutions.',
      exploreLink: { children: 'Individuals' }
    },
    {
      title: 'Pro',
      description: 'Tailored for large enterprises with high-volume data needs.',
      active: true,
      price: { monthly: 49, yearly: 499 },
      features: [1, 3, 4, 5, 6, 7, 10],
      about:
        '*Get started with our Basic Plan for essential data needs. Perfect for individuals and small businesses looking for reliable data solutions.',
      exploreLink: { children: 'Buisiness' }
    },
    {
      title: 'Enter-prise',
      description: 'Tailored for large enterprise with high-volume data needs.',
      active: false,
      price: { monthly: 99, yearly: 1099 },
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      about:
        '*For large enterprises with high-volume data needs and specialized requirements, our Enterprise Plan offers unlimited data usage and 24/7 dedicated support.',
      exploreLink: { children: 'Enterprise' }
    }
  ]
};

/***************************  BLOCK - PRICING 2  ***************************/

export default function BlockPricing2() {
  return <Pricing2 {...data} />;
}
