// @project
import branding from '@/branding.json';
import { Benefit8 } from '@/blocks/benefit';

/***************************  BENEFIT 8 - DATA  ***************************/

const data = {
  heading: 'Parallel Processing Excellence',
  caption: `Experience the power of parallel processing with ${branding.brandName}`,
  blockDetail: [
    { counter: 99, defaultUnit: '%', progress: 99, caption: 'Compression Efficiency Achieved' },
    { counter: 40, defaultUnit: '%', progress: 40, caption: 'Reduction in Storage Costs' },
    { counter: 80, defaultUnit: '%', progress: 80, caption: 'Reduction in Over-Provisioning' },
    { counter: 4.5, defaultUnit: '/5', progress: 90, caption: 'Average User Satisfaction Rating' }
  ]
};

/***************************  BLOCK - BENEFIT 8  ***************************/

export default function BlockBenefit8() {
  return <Benefit8 {...data} />;
}
