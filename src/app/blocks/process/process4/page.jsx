// @project
import { Process4 } from '@/blocks/process';

/***************************  PROCESS 4 - DATA  ***************************/

const data = {
  heading: 'Scalable Data Pipelines Creation',
  caption: 'Streamline data workflows for maximum productivity and flexibility.',
  cards: [
    {
      title: 'Automated Scaling Process',
      description: 'Ensures optimal performance without manual intervention.',
      image: { light: '/assets/images/graphics/ai/graphics11-light.svg', dark: '/assets/images/graphics/ai/graphics11-dark.svg' },
      icon: 'tabler-artboard'
    },
    {
      title: 'Real-Time Performance Monitoring',
      description: 'Proactively addresses issues to maintain uninterrupted operations.',
      image: { light: '/assets/images/graphics/ai/graphics10-light.svg', dark: '/assets/images/graphics/ai/graphics10-dark.svg' },
      icon: 'tabler-database'
    },
    {
      title: 'Multi-Cloud Orchestration',
      description: 'Enhances flexibility and resilience in a multi-cloud environment.',
      image: { light: '/assets/images/graphics/ai/graphics9-light.svg', dark: '/assets/images/graphics/ai/graphics9-dark.svg' },
      icon: 'tabler-route'
    }
  ]
};

/***************************  BLOCK - PROCESS 4  ***************************/

export default function BlockProcess4() {
  return <Process4 {...data} />;
}
