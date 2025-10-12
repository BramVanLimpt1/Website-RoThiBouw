// @project
import { Hero4 } from '@/blocks/hero';

/***************************  HERO 4 - DATA  ***************************/

const data = {
  chip: {
    label: 'New Beta Version is Release ',
    link: { children: 'explore now', href: '#' }
  },
  headLine: 'Smooth CRM Control, Business Expansion Simplified',
  captionLine: 'Empowering Businesses with a Customizable, Data-Driven CRM Solution.',
  image1: { light: '/assets/images/graphics/ai/graphics9-light.svg', dark: '/assets/images/graphics/ai/graphics9-dark.svg' },
  image2: { light: '/assets/images/graphics/ai/desktop1-light.svg', dark: '/assets/images/graphics/ai/desktop1-dark.svg' },
  listData: [
    { icon: 'custom-statastic', title: '90%', description: 'Sales Growth' },
    { icon: 'custom-remote', title: '80%', description: 'Power of AI' }
  ]
};

/***************************  BLOCK - HERO 4  ***************************/

export default function BlockHero4() {
  return <Hero4 {...data} />;
}
