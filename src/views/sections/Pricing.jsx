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

/***************************  PRICING - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Pricing' }
];

/***************************  PRICING - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Pricing Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing1
    },
    src: PRIVIEW_PATH.pricing.pricing1
  },
  {
    typeset: {
      heading: 'Pricing Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing2
    },
    src: PRIVIEW_PATH.pricing.pricing2
  },
  {
    typeset: {
      heading: 'Pricing Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing3
    },
    src: PRIVIEW_PATH.pricing.pricing3
  },
  {
    typeset: {
      heading: 'Pricing Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing4
    },
    src: PRIVIEW_PATH.pricing.pricing4
  },
  {
    typeset: {
      heading: 'Pricing Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing5
    },
    src: PRIVIEW_PATH.pricing.pricing5
  },
  {
    typeset: {
      heading: 'Pricing Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing6
    },
    src: PRIVIEW_PATH.pricing.pricing6
  },
  {
    typeset: {
      heading: 'Pricing Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing7
    },
    src: PRIVIEW_PATH.pricing.pricing7
  },
  {
    typeset: {
      heading: 'Pricing Section - 08',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing8
    },
    src: PRIVIEW_PATH.pricing.pricing8
  },
  {
    typeset: {
      heading: 'Pricing Section - 09',
      caption: '',
      figmaLink: FIGMA_LINK.pricing.variant.pricing9
    },
    src: PRIVIEW_PATH.pricing.pricing9
  }
];

/***************************  SECTIONS - PRICING  ***************************/

export default function Pricing() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Pricing Sections`, breadcrumbs }} />
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
