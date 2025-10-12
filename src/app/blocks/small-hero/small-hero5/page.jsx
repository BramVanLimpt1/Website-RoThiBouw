// @project
import { SmallHero5 } from '@/blocks/small-hero';

/***************************  SMALL HERO 5 - DATA  ***************************/

const data = {
  heading: 'Seize the Future of Business ✦ Technology',
  caption: 'Our SaaS platform delivers a flawless user experience and unmatched results.',
  exploreBtn: { children: 'Get Started' },
  list: ['Optimize Cloud Costs', 'Automated Scaling for Efficiency', 'Real-time Performance Insights', 'Predictive Cost Analytics']
};

/***************************  BLOCK - SMALL HERO 5  ***************************/

export default function BlockSmallHero5() {
  return <SmallHero5 {...data} />;
}
