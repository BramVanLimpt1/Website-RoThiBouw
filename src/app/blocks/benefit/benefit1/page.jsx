// @project
import { Benefit1 } from '@/blocks/benefit';

/***************************  BENEFIT 1 - DATA  ***************************/

const data = {
  heading: 'Made to fit your workflow, you are in control',
  caption: 'With advanced analytics and reporting, you can track customer behavior, sales trends, & many more to make',
  bgImage: '/assets/images/graphics/ai/background1.svg',
  blockDetail: [
    { counter: 90, defaultUnit: '%', caption: 'Power of AI for navigation and communication' },
    { counter: 10, defaultUnit: 'x', caption: 'Achieving faster sales through streamlined processes.' }
  ]
};

/***************************  BLOCK - BENEFIT 1  ***************************/

export default function BlockBenefit1() {
  return <Benefit1 {...data} />;
}
