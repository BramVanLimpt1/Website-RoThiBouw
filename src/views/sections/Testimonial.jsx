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

/***************************  TESTIMONIAL - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Testimonial' }
];

/***************************  TESTIMONIAL - DATA  ***************************/

const sectionsData = [
  {
    typeset: {
      heading: 'Testimonial Section - 01',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial1
    },
    src: PRIVIEW_PATH.testimonial.testimonial1
  },
  {
    typeset: {
      heading: 'Testimonial Section - 02',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial2
    },
    src: PRIVIEW_PATH.testimonial.testimonial2
  },
  {
    typeset: {
      heading: 'Testimonial Section - 03',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial3
    },
    src: PRIVIEW_PATH.testimonial.testimonial3
  },
  {
    typeset: {
      heading: 'Testimonial Section - 04',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial4
    },
    src: PRIVIEW_PATH.testimonial.testimonial4
  },
  {
    typeset: {
      heading: 'Testimonial Section - 05',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial5
    },
    src: PRIVIEW_PATH.testimonial.testimonial5
  },
  {
    typeset: {
      heading: 'Testimonial Section - 06',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial6
    },
    src: PRIVIEW_PATH.testimonial.testimonial6
  },
  {
    typeset: {
      heading: 'Testimonial Section - 07',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial7
    },
    src: PRIVIEW_PATH.testimonial.testimonial7
  },
  {
    typeset: {
      heading: 'Testimonial Section - 08',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial8
    },
    src: PRIVIEW_PATH.testimonial.testimonial8
  },
  {
    typeset: {
      heading: 'Testimonial Section - 09',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial9
    },
    src: PRIVIEW_PATH.testimonial.testimonial9
  },
  {
    typeset: {
      heading: 'Testimonial Section - 10',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial10
    },
    src: PRIVIEW_PATH.testimonial.testimonial10
  },
  {
    typeset: {
      heading: 'Testimonial Section - 11',
      caption: '',
      figmaLink: FIGMA_LINK.testimonial.variant.testimonial11
    },
    src: PRIVIEW_PATH.testimonial.testimonial11
  }
];

/***************************  SECTIONS - TESTIMONIAL  ***************************/

export default function Testimonial() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Testimonial Section`, breadcrumbs }} />
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
