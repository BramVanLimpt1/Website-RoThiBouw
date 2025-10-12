// @mui
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS } from '@/components/footer';
import LogoSection from '@/components/logo';

import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 8  ***************************/

export default function Footer8() {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-8" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 8" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        {/* Logo Section */}
        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <LogoSection />
        </Stack>

        {/* Divider */}
        <Divider />

        {/* Bottom Bar - Copyright and Social */}
        <Stack direction={{ md: 'row' }} sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, gap: 4 }}>
          <FollowUS heading={false} color="background.default" />
          <Copyright type={CopyrightType.TYPE2} isDivider={false} />
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
