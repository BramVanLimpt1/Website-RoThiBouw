'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton, Customization } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

// @types

/***************************  NAVBAR - CONTENT 9  ***************************/

export default function NavbarContent9({ navItems, primaryBtn, secondaryBtn, customization }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Stack direction="row" sx={{ alignItems: 'center', gap: 3 }}>
        <LogoSection isIcon={true} />
        {!downMD && navItems && (
          <Box>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {customization && <Customization />}
        {!downSM && (
          <>
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 24}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: 'grey.100' }}>
                    {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                    {primaryBtn && (
                      <ButtonAnimationWrapper style={{ width: '100%' }}>
                        <NavPrimaryButton fullWidth {...primaryBtn} />
                      </ButtonAnimationWrapper>
                    )}
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent9.propTypes = {
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  customization: PropTypes.any
};
