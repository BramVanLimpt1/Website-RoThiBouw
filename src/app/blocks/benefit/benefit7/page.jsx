// @project
import branding from '@/branding.json';
import { Benefit7 } from '@/blocks/benefit';

/***************************  BENEFIT 7 - DATA  ***************************/

const data = {
  heading: 'Data Processing at its Peak',
  caption: `See the success stories of organizations scaling with ${branding.brandName}`,
  bgImage1: { light: '/assets/images/graphics/ai/graphics4-light.svg', dark: '/assets/images/graphics/ai/graphics4-dark.svg' },
  bgImage2: '/assets/images/benefit/benefit.svg',
  blockDetail: [
    { counter: 80, defaultUnit: '%', caption: 'Reduction in Over-Provisioning' },
    { counter: 3, defaultUnit: 'X', caption: 'Increase in Data Processing Speed' },
    { counter: 99, defaultUnit: '%', caption: 'Compression Efficiency Achieved' },
    { counter: 4.5, defaultUnit: '/5', caption: 'Average User Satisfaction Rating' }
  ]
};

/***************************  BLOCK - BENEFIT 7  ***************************/

export default function BlockBenefit7() {
  return <Benefit7 {...data} />;
}
