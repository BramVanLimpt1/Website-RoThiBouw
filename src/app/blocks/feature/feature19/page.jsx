// @project
import { Feature19 } from '@/blocks/feature';

/***************************  FEATURE 19 - DATA  ***************************/

const data = {
  heading: 'Adaptive Workflow Solutions',
  caption: `Adapt to changing needs, streamline processes, and boost productivity with ease.`,
  blockData1: {
    actionBtn: { children: 'Learn More' },
    image: { dark: '/assets/images/graphics/ai/graphics4-dark.svg', light: '/assets/images/graphics/ai/graphics4-light.svg' },
    title: 'Dynamic Task Automation',
    description: 'Adapt to changing needs, streamline processes, and boost productivity with ease.'
  },
  blockData2: {
    actionBtn: { children: 'Learn More' },
    image: { dark: '/assets/images/graphics/ai/graphics5-dark.svg', light: '/assets/images/graphics/ai/graphics5-light.svg' },
    title: 'Workflow Analytics',
    description: 'Gain insights into workflows for continuous improvement.'
  },
  blockData3: { description: 'Tailor workflows to adapt to changing business needs.' },
  blockData4: { description: 'Prioritize tasks dynamically for optimized task management.' }
};

/***************************  BLOCK - FEATURE 19  ***************************/

export default function BlockFeature19() {
  return <Feature19 {...data} />;
}
