// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import Simulator from '@/components/Simulator';
import SimulatorTypeset from '@/components/SimulatorTypeset';
import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types

/***************************  HERO - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Hero' }
];

/***************************  HERO - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Hero Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero1
    },
    src: PRIVIEW_PATH.hero.hero1
  },
  {
    typeset: {
      heading: 'Hero Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero2
    },
    src: PRIVIEW_PATH.hero.hero2
  },
  {
    typeset: {
      heading: 'Hero Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero3
    },
    src: PRIVIEW_PATH.hero.hero3
  },
  {
    typeset: {
      heading: 'Hero Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero4
    },
    src: PRIVIEW_PATH.hero.hero4
  },
  {
    typeset: {
      heading: 'Hero Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero5
    },
    src: PRIVIEW_PATH.hero.hero5
  },
  {
    typeset: {
      heading: 'Hero Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero6
    },
    src: PRIVIEW_PATH.hero.hero6
  },
  {
    typeset: {
      heading: 'Hero Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero7
    },
    src: PRIVIEW_PATH.hero.hero7
  },
  {
    typeset: {
      heading: 'Hero Section - 08',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero8
    },
    src: PRIVIEW_PATH.hero.hero8
  },
  {
    typeset: {
      heading: 'Hero Section - 09',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero9
    },
    src: PRIVIEW_PATH.hero.hero9
  },
  {
    typeset: {
      heading: 'Hero Section - 10',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero10
    },
    src: PRIVIEW_PATH.hero.hero10
  },
  {
    typeset: {
      heading: 'Hero Section - 11',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero11
    },
    src: PRIVIEW_PATH.hero.hero11
  },
  {
    typeset: {
      heading: 'Hero Section - 12',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero12
    },
    src: PRIVIEW_PATH.hero.hero12
  },
  {
    typeset: {
      heading: 'Hero Section - 13',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero13
    },
    src: PRIVIEW_PATH.hero.hero13
  },
  {
    typeset: {
      heading: 'Hero Section - 14',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero14
    },
    src: PRIVIEW_PATH.hero.hero14
  },
  {
    typeset: {
      heading: 'Hero Section - 15',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero15
    },
    src: PRIVIEW_PATH.hero.hero15
  },
  {
    typeset: {
      heading: 'Hero Section - 16',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero16
    },
    src: PRIVIEW_PATH.hero.hero16
  },
  {
    typeset: {
      heading: 'Hero Section - 17',
      caption: '',
      figmaLink: FIGMA_LINK.hero.variant.hero17
    },
    src: PRIVIEW_PATH.hero.hero17
  }
];

/***************************  SECTIONS - HERO  ***************************/

export default function Hero() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Hero Sections`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
