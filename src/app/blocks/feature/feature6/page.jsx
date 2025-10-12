// @project
import { Feature6 } from '@/blocks/feature';

/***************************  FEATURE 6 - DATA  ***************************/

const data = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  image: { light: '/assets/images/graphics/ai/desktop1-light.svg', dark: '/assets/images/graphics/ai/desktop1-dark.svg' },
  features: [
    {
      icon: 'tabler-chart-histogram',
      title: 'Parallel Processing',
      content: 'Process data in parallel, significantly boosting data processing speed.'
    },
    {
      icon: 'tabler-devices-code',
      title: 'Cross-Platform',
      content: 'Compatibility with various platforms for versatile data processing.'
    },
    {
      icon: 'tabler-keyframe-align-center',
      title: 'Automated Scaling',
      content: 'Ensures optimal performance without manual intervention.'
    },
    {
      icon: 'tabler-settings-up',
      title: 'Enhances Flexibility',
      content: 'Enhances flexibility and resilience in a multi-cloud environment.'
    }
  ]
};

/***************************  BLOCK - FEATURE 6  ***************************/

export default function BlockFeature6() {
  return <Feature6 {...data} />;
}
