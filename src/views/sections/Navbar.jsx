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

/***************************  NAVBAR - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Navbar' }
];

/***************************  NAVBAR - DATA  ***************************/

const caption = '';

const sectionsData = [
  {
    typeset: { heading: 'Header with Social Icons - 01', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar1 },
    src: PRIVIEW_PATH.navbar.navbar1
  },
  {
    typeset: { heading: 'Header with Language Selection - 02', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar2 },
    src: PRIVIEW_PATH.navbar.navbar2
  },
  {
    typeset: { heading: 'Header with Search Input - 03', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar3 },
    src: PRIVIEW_PATH.navbar.navbar3
  },
  {
    typeset: { heading: 'Header with Center Logo - 04', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar4 },
    src: PRIVIEW_PATH.navbar.navbar4
  },
  {
    typeset: { heading: 'Header with Small Search Input - 05', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar5 },
    src: PRIVIEW_PATH.navbar.navbar5
  },
  {
    typeset: { heading: 'Header with Center Full Logo & Social Icons - 06', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar6 },
    src: PRIVIEW_PATH.navbar.navbar6
  },
  {
    typeset: { heading: 'Header with Right Align Menu Items - 07', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar7 },
    src: PRIVIEW_PATH.navbar.navbar7
  },
  {
    typeset: { heading: 'Header with Center Logo & Background - 08', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar8 },
    src: PRIVIEW_PATH.navbar.navbar8
  },
  {
    typeset: { heading: 'Default navbar section 09', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar9 },
    src: PRIVIEW_PATH.navbar.navbar9
  },
  {
    typeset: { heading: 'Default navbar section 10', caption, figmaLink: FIGMA_LINK.navbar.variant.navbar10 },
    src: PRIVIEW_PATH.navbar.navbar10
  }
];

/***************************  SECTIONS - NAVBAR  ***************************/

export default function Navbar() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Navbar Sections`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 }, my: 6 }}>
          {sectionsData.map((item, index) => (
            <Stack key={index} sx={{ gap: { xs: 1.5, md: 2.5 } }}>
              <SimulatorTypeset {...item.typeset} />
              <Simulator src={item.src} defaultHeight={320} />
            </Stack>
          ))}
        </Stack>
      </ContainerWrapper>
    </>
  );
}
