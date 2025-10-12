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

/***************************  BLOG - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Blog' }
];

/***************************  BLOG - DATA  ***************************/

const caption = '';

const sectionsData = [
  { typeset: { heading: 'Blog Section - 01', caption, figmaLink: FIGMA_LINK.blog.variant.blog1 }, src: PRIVIEW_PATH.blog.blog1 },
  { typeset: { heading: 'Blog Section - 02', caption, figmaLink: FIGMA_LINK.blog.variant.blog2 }, src: PRIVIEW_PATH.blog.blog2 },
  { typeset: { heading: 'Blog Section - 03', caption, figmaLink: FIGMA_LINK.blog.variant.blog3 }, src: PRIVIEW_PATH.blog.blog3 },
  { typeset: { heading: 'Blog Section - 04', caption, figmaLink: FIGMA_LINK.blog.variant.blog4 }, src: PRIVIEW_PATH.blog.blog4 },
  { typeset: { heading: 'Blog Section - 05', caption, figmaLink: FIGMA_LINK.blog.variant.blog5 }, src: PRIVIEW_PATH.blog.blog5 },
  { typeset: { heading: 'Blog Section - 06', caption, figmaLink: FIGMA_LINK.blog.variant.blog6 }, src: PRIVIEW_PATH.blog.blog6 }
];

/***************************  SECTIONS - BLOG  ***************************/

export default function Blog() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Blog Section`, breadcrumbs }} />
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
