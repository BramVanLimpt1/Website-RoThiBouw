// @project
import { Benefit3 } from '@/blocks/benefit';

/***************************  BENEFIT 3 - DATA  ***************************/

const data = {
  heading: 'Tailored for Your Process',
  caption: 'Advanced Analytics and Reporting, Tracking Customer Behavior, Sales Trends, and More',
  bgImage: '/assets/images/graphics/ai/background1.svg',
  exploreBtn: { children: 'Get Started - It’s Free Now' },
  blockDetail: [
    { counter: 90, defaultUnit: '%', caption: 'Power of AI for navigation and communication' },
    { counter: 10, defaultUnit: 'x', caption: 'Achieving faster sales through streamlined processes.' }
  ]
};

/***************************  BLOCK - BENEFIT 3  ***************************/

export default function BlockBenefit3() {
  return <Benefit3 {...data} />;
}
