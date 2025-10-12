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

/***************************  TOP OFFER - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Top Offer' }
];

/***************************  TOP OFFER - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Top Offer Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.topOffer.variant.topOffer1
    },
    src: PRIVIEW_PATH.topOffer.topOffer1
  },
  {
    typeset: {
      heading: 'Top Offer Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.topOffer.variant.topOffer2
    },
    src: PRIVIEW_PATH.topOffer.topOffer2
  },
  {
    typeset: {
      heading: 'Top Offer Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.topOffer.variant.topOffer3
    },
    src: PRIVIEW_PATH.topOffer.topOffer3
  },
  {
    typeset: {
      heading: 'Top Offer Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.topOffer.variant.topOffer4
    },
    src: PRIVIEW_PATH.topOffer.topOffer4
  },
  {
    typeset: {
      heading: 'Top Offer Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.topOffer.variant.topOffer5
    },
    src: PRIVIEW_PATH.topOffer.topOffer5
  }
];

/***************************  SECTIONS - TOP OFFER  ***************************/

export default function TopOffer() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Top Offer Sections`, breadcrumbs }} />
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
