// @project
import { BUY_NOW_URL } from '@/path';

export const pricing = {
  heading: 'Clear and transparent pricing, no hidden fees',
  caption: 'Model is straightforward and transparent, ensuring no unexpected fees or charges.',
  plans: [
    {
      animationDelay: 0.2,
      title: 'Basic Plan',
      description: 'Ideal for individuals and small businesses with basic data needs.',
      active: false,
      price: 19,
      features: [
        {
          id: 1,
          label: 'Email marketing '
        },
        {
          id: 2,
          label: 'Marketing, sales, workflow'
        },
        {
          id: 3,
          label: 'Up to 10 Individual Users'
        },
        {
          id: 4,
          label: 'Up to 3 seats'
        },
        {
          id: 5,
          label: 'Lead managements'
        }
      ],
      about:
        '*For smaller teams seeking to streamline sales, marketing, and basic business processes through automation, a user-friendly CRM solution is ideal.',
      exploreLink: { children: 'Best for individuals', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      animationDelay: 0.4,
      title: 'Pro Plan (Recommended)',
      description: 'Designed for growing businesses and teams with moderate data requirements.',
      active: true,
      price: 49,
      features: [
        {
          id: 1,
          label: 'Advanced lead optimization'
        },
        {
          id: 2,
          label: 'Enhanced landing pages & sales'
        },
        {
          id: 3,
          label: 'Ecommerce tools'
        },
        {
          id: 4,
          label: 'Advanced reporting'
        },
        {
          id: 5,
          label: 'No seat limits'
        }
      ],
      about:
        '**For teams aiming to expand rapidly and requiring sophisticated ecommerce and reporting functionalities, a CRM solution with advanced features is indispensable.',
      exploreLink: { children: 'Designed for growing businesses', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
    },
    {
      animationDelay: 0.6,
      title: 'Enterprises Plan',
      description: 'Tailored for large enterprises with high-volume data needs and specialized requirements.',
      active: false,
      price: 99,
      features: [
        {
          id: 1,
          label: 'Premium CRM & sales manage'
        },
        {
          id: 2,
          label: 'Advanced marketing & sales tools'
        },
        {
          id: 5,
          label: 'Custom user access control'
        },
        {
          id: 8,
          label: 'Affiliate management & Collaboration'
        },
        {
          id: 11,
          label: 'Priority Support'
        }
      ],
      about:
        '*For large enterprises with high-volume data needs and specialized requirements, our Enterprise Plan offers unlimited data usage and 24/7 dedicated support.',
      exploreLink: { children: 'Best for individuals', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
    }
  ]
};
