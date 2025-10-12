'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SocialIcons } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types

/***************************  NAVBAR - CONTENT 6  ***************************/

export default function NavbarContent6({ navItems, primaryBtn, secondaryBtn, customization }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  // Remove the last item from navItems
  const navItemsWithoutLast = navItems ? [...navItems] : []; // Create a copy of navItems
  if (!downSM) {
    navItemsWithoutLast.pop(); // Remove the last item
  }

  const lastItem = navItems?.slice(-1)[0];

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      {downMD && <Logo />}
      {navItems && !downMD && (
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 0.75, width: 1 }}>
          <Box>
            <NavMenu {...{ navItems: navItemsWithoutLast, menuTextColor: theme.palette.text.secondary }} />
          </Box>
          <Logo sx={{ mx: 1.5 }} />
          <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
            {lastItem && <NavMenu {...{ navItems: [lastItem], menuTextColor: theme.palette.text.secondary }} />}
            <SocialIcons sx={{ gap: 0.75 }} />
            {customization && <Customization />}
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </Stack>
        </Stack>
      )}
      {downMD && (
        <Box sx={{ display: 'flex' }}>
          {!downSM && (
            <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75, height: 40 }}>
              {lastItem && <NavMenu {...{ navItems: [lastItem], menuTextColor: theme.palette.text.secondary }} />}
              <SocialIcons sx={{ gap: 0.75 }} />
              {customization && <Customization />}
              {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <NavPrimaryButton {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          )}
          <MenuPopper
            offset={downSM ? 12 : 16}
            toggleProps={{
              children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
              color: 'inherit',
              sx: { minWidth: 40, width: 40, height: 40, p: 0 }
            }}
          >
            <ContainerWrapper>
              {navItems && (
                <Box sx={{ mx: -2 }}>
                  <NavMenuDrawer {...{ navItems: navItemsWithoutLast, menuTextColor: theme.palette.text.secondary }} />
                </Box>
              )}
              {downSM && (
                <>
                  <Divider />
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: { xs: 1, md: 1.5 }, py: 2.5, width: 1 }}>
                    <SocialIcons sx={{ gap: 0.75 }} />
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 0.75 }}>
                      {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
                      {primaryBtn && (
                        <ButtonAnimationWrapper>
                          <NavPrimaryButton {...primaryBtn} />
                        </ButtonAnimationWrapper>
                      )}
                    </Stack>
                  </Stack>
                </>
              )}
            </ContainerWrapper>
          </MenuPopper>
        </Box>
      )}
    </Stack>
  );
}

NavbarContent6.propTypes = {
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  customization: PropTypes.any
};
