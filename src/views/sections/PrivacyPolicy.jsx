// @mui
import Stack from '@mui/material/Stack';

// @project
import branding from '@/branding.json';
import PrivacyPolicy from '@/blocks/PrivacyPolicy';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionHero from '@/components/SectionHero';
import SimulatorTypeset from '@/components/SimulatorTypeset';

import { PRIVIEW_PATH, SECTION_PATH } from '@/path';
import { FIGMA_LINK } from '@/utils/constant';

// @types

/***************************  PRIVACY POLICY - BREADCRUMBS  ***************************/

let breadcrumbs = [
  { title: 'Home', to: process.env.NEXT_PUBLIC_BASE_NAME || '/' },
  { title: 'Blocks', to: SECTION_PATH },
  { title: 'Privacy Policy' }
];

/***************************  PRIVACY POLICY - DATA  ***************************/

const privcyPolicyData = {
  typeset: {
    heading: 'Privacy policy Sections',
    caption: '',
    figmaLink: FIGMA_LINK.privacyPolicy.link
  },
  src: PRIVIEW_PATH.privacyPolicy
};

/***************************  SECTIONS - PRIVACY POLICY ***************************/

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionHero {...{ heading: `${branding.brandName} Privacy Policy Section`, breadcrumbs }} />
      <ContainerWrapper>
        <Stack sx={{ gap: { xs: 1.5, md: 2.5 }, my: 6 }}>
          <SimulatorTypeset {...privcyPolicyData.typeset} />
          <PrivacyPolicy />
        </Stack>
      </ContainerWrapper>
    </>
  );
}
