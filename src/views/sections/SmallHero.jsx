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

/***************************  SMALL HERO - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Small Hero' }
];

/***************************  SMALL HERO - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Small Hero Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero1
    },
    src: PRIVIEW_PATH.smallHero.smallHero1
  },
  {
    typeset: {
      heading: 'Small Hero Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero2
    },
    src: PRIVIEW_PATH.smallHero.smallHero2
  },
  {
    typeset: {
      heading: 'Small Hero Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero3
    },
    src: PRIVIEW_PATH.smallHero.smallHero3
  },
  {
    typeset: {
      heading: 'Small Hero Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero4
    },
    src: PRIVIEW_PATH.smallHero.smallHero4
  },
  {
    typeset: {
      heading: 'Small Hero Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero5
    },
    src: PRIVIEW_PATH.smallHero.smallHero5
  },
  {
    typeset: {
      heading: 'Small Hero Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero6
    },
    src: PRIVIEW_PATH.smallHero.smallHero6
  },
  {
    typeset: {
      heading: 'Small Hero Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.smallHero.variant.smallHero7
    },
    src: PRIVIEW_PATH.smallHero.smallHero7
  }
];

/***************************  SECTIONS - SMALL HERO  ***************************/

export default function SmallHero() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Small Hero Sections`, breadcrumbs }} />
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
