// @project
import branding from '@/branding.json';
import { Feature22 } from '@/blocks/feature';

/***************************  FEATURE 22 - DATA  ***************************/

const data = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan' }
    }
  ]
};

/***************************  BLOCK - FEATURE 22  ***************************/

export default function BlockFeature22() {
  return <Feature22 {...data} />;
}
