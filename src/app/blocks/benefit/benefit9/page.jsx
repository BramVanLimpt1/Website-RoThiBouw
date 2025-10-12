// @project
import branding from '@/branding.json';
import { Benefit9 } from '@/blocks/benefit';

/***************************  BENEFIT 9 - DATA  ***************************/

const data = {
  heading: 'Data Processing at its Peak',
  caption: `See the success stories of organizations scaling with ${branding.brandName}`,
  exploreBtn: { children: 'Get Started - It’s Free Now' },
  blockDetail: [
    { counter: 99, defaultUnit: '%', caption: 'Compression Efficiency Achieved' },
    { counter: 40, defaultUnit: '%', caption: 'Reduction in Storage Costs' },
    { counter: 80, defaultUnit: '%', caption: 'Reduction in Over-Provisioning' },
    { counter: 4.5, defaultUnit: '/5', caption: 'Average User Satisfaction Rating' }
  ]
};

/***************************  BLOCK - BENEFIT 9  ***************************/

export default function BlockBenefit9() {
  return <Benefit9 {...data} />;
}
