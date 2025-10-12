// @project
import { BUY_NOW_URL } from '@/path';

export const feature1 = {
  heading: 'Unlock Peak Efficiency with Our CRM Solution',
  caption: 'Experience peak efficiency with our CRM solution, revolutionizing productivity and success.',
  blockData1: {
    image: { light: '/assets/images/graphics/crm/graphics1-light.svg', dark: '/assets/images/graphics/crm/graphics1-dark.svg' },
    title: 'Reporting and Analytics',
    description: 'Generate reports and analyze data to track performance and make informed decisions.'
  },
  blockData2: {
    image: { light: '/assets/images/graphics/crm/graphics1-light.svg', dark: '/assets/images/graphics/crm/graphics1-dark.svg' },
    title: 'Easy Customization',
    description: 'User customization allows for tailored experiences to meet individual needs.'
  },
  blockData3: {
    image: { light: '/assets/images/graphics/crm/desktop1-light.svg', dark: '/assets/images/graphics/crm/desktop1-dark.svg' },
    title: 'Increase your revenue',
    description: 'Boost your earnings and expand your financial growth.'
  },
  actionBtn: { children: 'Get Started', href: BUY_NOW_URL, target: '_blank', rel: 'noopener noreferrer' }
};

export const feature9 = {
  heading: 'Explore our robust CRM features',
  caption: 'Automate repetitive tasks and streamline processes for increased efficiency.',
  features: [
    {
      icon: 'custom-brain',
      title: 'Collaboration Tools',
      content: 'Enhance teamwork with collaboration tools.'
    },
    {
      icon: 'custom-path',
      title: 'Workflow Automation',
      content: 'Improve efficiency with task automation.'
    },
    {
      icon: 'custom-statastic',
      title: 'Integration Capabilities',
      content: 'Effortlessly integrate with other platforms.'
    },
    {
      icon: 'custom-remote',
      title: 'Lead Management',
      content: 'Track and nurture leads throughout the sales funnel.'
    },
    {
      icon: 'custom-lock',
      title: 'Email Integration',
      content: 'Effortlessly track and manage email communications within the CRM.'
    },
    {
      icon: 'custom-interface',
      title: 'Support Ticketing',
      content: 'Efficiently handle customer inquiries and support tickets within the CRM.'
    }
  ]
};
