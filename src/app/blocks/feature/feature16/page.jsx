// @project
import { Feature16 } from '@/blocks/feature';

/***************************  FEATURE 16 - DATA  ***************************/

const data = {
  heading: 'Regulatory Compliance Tools',
  caption: `Adhere to industry regulations effortlessly with DataNest's built-in compliance tools.`,
  actionBtn: { children: 'Explore all Features' },
  cards: [
    {
      icon: 'tabler-artboard',
      title: 'Scalable Data Pipelines',
      description: 'Build and manage scalable and efficient data processing pipelines.'
    },
    {
      icon: 'tabler-database',
      title: 'Data Quality Assurance',
      description: 'Tools to ensure and maintain high data quality and integrity.'
    },
    {
      icon: 'tabler-route',
      title: 'Workflow Optimization',
      description: 'Optimize workflows for increased productivity and efficiency.'
    },
    {
      icon: 'tabler-briefcase',
      title: 'Dynamic Task Automation',
      description: 'Automate dynamic tasks to enhance workflow efficiency.'
    }
  ]
};

/***************************  BLOCK - FEATURE 16  ***************************/

export default function BlockFeature16() {
  return <Feature16 {...data} />;
}
