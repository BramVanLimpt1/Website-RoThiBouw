// @project
import Other1 from '@/blocks/other/Other1';
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

/***************************  OTHER 1 - DATA  ***************************/

const data = {
  heading: 'Customizable Building Blocks',
  description: 'Kickstart your SaaS landing page design with pre-designed templates featuring versatile components.',
  primaryBtn: { children: 'Explore all Blocks', href: SECTION_PATH },
  sections: [
    {
      title: 'Hero',
      subTitle: '17 Different Variants',
      image: { light: `${imagePrefix}/hero-light.svg`, dark: `${imagePrefix}/hero-dark.svg` },
      link: PAGE_PATH.hero
    },
    {
      title: 'Call to Action',
      subTitle: '12 Different Variants',
      image: { light: `${imagePrefix}/cta-light.svg`, dark: `${imagePrefix}/cta-dark.svg` },
      link: PAGE_PATH.cta
    },
    {
      title: 'Feature',
      subTitle: '23 Different Variants',
      image: { light: `${imagePrefix}/feature-light.svg`, dark: `${imagePrefix}/feature-dark.svg` },
      link: PAGE_PATH.feature
    },
    {
      title: 'Benefits',
      subTitle: '9 Different Variants',
      image: { light: `${imagePrefix}/benefits-light.svg`, dark: `${imagePrefix}/benefits-dark.svg` },
      link: PAGE_PATH.benefit
    },
    {
      title: 'Process',
      subTitle: '7 Different Variants',
      image: { light: `${imagePrefix}/process-light.svg`, dark: `${imagePrefix}/process-dark.svg` },
      link: PAGE_PATH.process
    },
    {
      title: 'Integration',
      subTitle: '8 Different Variants',
      image: { light: `${imagePrefix}/integration-light.svg`, dark: `${imagePrefix}/integration-dark.svg` },
      link: PAGE_PATH.integration
    }
  ]
};

/***************************  BLOCK - OTHER 1  ***************************/

export default function BlockOther1() {
  return <Other1 {...data} />;
}
