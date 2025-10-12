// @project
import branding from '@/branding.json';
import { Benefit6 } from '@/blocks/benefit';

/***************************  BENEFIT 6 - DATA  ***************************/

const data = {
  heading: 'Data Processing at its Peak',
  caption: `See the success stories of organizations scaling with ${branding.brandName}`,
  bgImage: { light: '/assets/images/graphics/ai/graphics4-light.svg', dark: '/assets/images/graphics/ai/graphics4-dark.svg' },
  blockDetail: [
    { counter: 99, defaultUnit: '%', caption: 'Compression Efficiency Achieved' },
    { counter: 40, defaultUnit: '%', caption: 'Reduction in Storage Costs' },
    { counter: 80, defaultUnit: '%', caption: 'Reduction in Over-Provisioning' }
  ]
};

/***************************  BLOCK - BENEFIT 6  ***************************/

export default function BlockBenefit6() {
  return <Benefit6 {...data} />;
}
