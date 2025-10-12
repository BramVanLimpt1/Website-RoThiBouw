// @project
import { Benefit2 } from '@/blocks/benefit';

/***************************  BENEFIT 2 - DATA  ***************************/

const data = {
  heading: 'Made to fit your workflow, you are in control',
  bgImage: '/assets/images/graphics/ai/background1.svg',
  blockDetail: [
    { counter: 90, defaultUnit: '%', caption: 'Power of AI for navigation and communication' },
    {
      counter: 10,
      defaultUnit: 'x',
      caption: 'Achieving faster sales through streamlined processes.'
    },
    {
      counter: 25,
      defaultUnit: '%',
      caption: 'Reduction in overall costs, attributed to optimized'
    }
  ]
};

/***************************  BLOCK - BENEFIT 2  ***************************/

export default function BlockBenefit2() {
  return <Benefit2 {...data} />;
}
