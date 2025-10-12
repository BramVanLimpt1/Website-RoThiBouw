// @project
import { Pricing5 } from '@/blocks/pricing';

/***************************  PRICING 5 - DATA  ***************************/

const data = {
  heading: 'The Affordable Unfair Advantage',
  caption: 'Choose the plan that aligns with your cloud management requirements.',
  defaultUnit: 'per user/month',
  user: 'Best for 1-50 users',
  plans: [
    {
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
      title: 'Plus',
      price: 6,
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

/***************************  BLOCK - PRICING 5  ***************************/

export default function BlockPricing5() {
  return <Pricing5 {...data} />;
}
