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

/***************************  BENEFIT - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Benefit' }
];

/***************************  BENEFIT - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Benefit Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit1
    },
    src: PRIVIEW_PATH.benefit.benefit1
  },
  {
    typeset: {
      heading: 'Benefit Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit2
    },
    src: PRIVIEW_PATH.benefit.benefit2
  },
  {
    typeset: {
      heading: 'Benefit Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit3
    },
    src: PRIVIEW_PATH.benefit.benefit3
  },
  {
    typeset: {
      heading: 'Benefit Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit4
    },
    src: PRIVIEW_PATH.benefit.benefit4
  },
  {
    typeset: {
      heading: 'Benefit Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit5
    },
    src: PRIVIEW_PATH.benefit.benefit5
  },
  {
    typeset: {
      heading: 'Benefit Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit6
    },
    src: PRIVIEW_PATH.benefit.benefit6
  },
  {
    typeset: {
      heading: 'Benefit Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit7
    },
    src: PRIVIEW_PATH.benefit.benefit7
  },
  {
    typeset: {
      heading: 'Benefit Section - 08',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit8
    },
    src: PRIVIEW_PATH.benefit.benefit8
  },
  {
    typeset: {
      heading: 'Benefit Section - 09',
      caption: '',
      figmaLink: FIGMA_LINK.benefit.variant.benefit9
    },
    src: PRIVIEW_PATH.benefit.benefit9
  }
];

/***************************  SECTIONS - BENEFIT  ***************************/

export default function Benefit() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Benefit Sections`, breadcrumbs }} />
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
