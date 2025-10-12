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

/***************************  UNDER MAINTENANCE - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Under Maintenance' }
];

/***************************  UNDER MAINTENANCE - DATA  ***************************/

const sectionsData = {
  typeset: {
    heading: 'Under Maintenance',
    caption: '',
    figmaLink: FIGMA_LINK.underMaintenance.link
  },
  src: PRIVIEW_PATH.underMaintenance
};

/***************************  SECTION - UNDER MAINTENANCE  ***************************/

export default function Maintenance() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Under Maintenance Sections`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...sectionsData.typeset} />
          <Simulator src={sectionsData.src} />
        </Stack>
      </ContainerWrapper>
    </>
  );
}
