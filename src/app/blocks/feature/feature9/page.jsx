// @project
import { Feature9 } from '@/blocks/feature';

/***************************  FEATURE 9 - DATA  ***************************/

const data = {
  heading: 'Streamline Your Business with Our CRM Solution',
  caption: 'Discover the features that will transform your customer relationships',
  features: [
    {
      icon: 'custom-brain',
      title: 'AI-Powered Analytics',
      content: 'Leverage AI for Predictive Insights and Sales Opportunities.'
    },
    {
      icon: 'custom-path',
      title: 'Journey Mapping',
      content: 'Customer experiences at every touchpoint with it.'
    },
    {
      icon: 'custom-statastic',
      title: 'Voice & Speech Analytics',
      content: 'Actionable insights from customer interactions through it.'
    },
    {
      icon: 'custom-remote',
      title: 'Sales Gamification',
      content: 'Boost sales team motivation and performance with it.'
    },
    {
      icon: 'custom-lock',
      title: 'Subscription Management',
      content: 'Effortlessly handle and optimize subscriptions with it.'
    },
    {
      icon: 'custom-interface',
      title: 'Intuitive Interface',
      content: 'Simplify user interactions & enhance usability with it.'
    }
  ]
};

/***************************  BLOCK - FEATURE 9  ***************************/

export default function BlockFeature9() {
  return <Feature9 {...data} />;
}
