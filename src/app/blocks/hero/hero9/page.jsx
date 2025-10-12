// @mui
import Typography from '@mui/material/Typography';

// @project
import { Hero9 } from '@/blocks/hero';

/***************************  HERO 9 - DATA  ***************************/

const data = {
  chip: {
    label: <Typography sx={{ color: 'text.secondary' }}>✦&nbsp;&nbsp; CloudHarmony&apos;s &nbsp;&nbsp;✦</Typography>
  },
  headLine: 'Real-time Performance Monitoring',
  captionLine: 'Identify and resolve issues proactively for uninterrupted operations.',
  primaryBtn: { children: 'Try Predictive Cost Analytics' },
  image: { light: '/assets/images/graphics/ai/desktop1-light.svg', dark: '/assets/images/graphics/ai/desktop1-dark.svg' },
  listData: [
    { icon: 'tabler-settings-up', title: 'Automated Scaling for Efficiency' },
    { icon: 'tabler-chart-histogram', title: 'Real-time Performance Insights' }
  ]
};

/***************************  BLOCK - HERO 9  ***************************/

export default function BlockHero9() {
  return <Hero9 {...data} />;
}
