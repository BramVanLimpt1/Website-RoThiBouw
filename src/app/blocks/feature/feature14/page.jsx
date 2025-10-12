// @project
import { Feature14 } from '@/blocks/feature';

/***************************  FEATURE 14 - DATA  ***************************/

const data = {
  heading: 'Dynamic Task Automation',
  image1: { light: '/assets/images/graphics/ai/graphics2-light.svg', dark: '/assets/images/graphics/ai/graphics2-dark.svg' },
  image2: { light: '/assets/images/graphics/ai/graphics17-light.svg', dark: '/assets/images/graphics/ai/graphics17-dark.svg' },
  title: 'Dynamic Task Automation',
  description: 'Automate dynamic tasks to enhance workflow efficiency.',
  title2: 'Workflow Optimization',
  description2: 'Optimize workflows for increased productivity and efficiency.',
  actionBtn: { children: 'Explore all Features' },
  cards: [
    {
      icon: 'tabler-artboard',
      title: 'Scalable Data Pipelines',
      description: 'Build and manage scalable and efficient data processing pipelines.'
    },
    {
      icon: 'tabler-devices-code',
      title: 'Cross-Platform',
      description: 'Compatibility with various platforms for versatile data.'
    },
    {
      icon: 'tabler-route',
      title: 'Workflow Optimization',
      description: 'Optimize workflows for increased productivity and efficiency.'
    }
  ]
};

/***************************  BLOCK - FEATURE 14  ***************************/

export default function BlockFeature14() {
  return <Feature14 {...data} />;
}
