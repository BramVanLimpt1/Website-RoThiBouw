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
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton, SearchInput } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types

/***************************  NAVBAR - CONTENT 3  ***************************/

export default function NavbarContent3({ navItems, primaryBtn, secondaryBtn, customization }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2, width: 1 }}>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 3 }}>
        <Logo />
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
      </Stack>
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 }, alignItems: 'center' }}>
        {!downSM && (
          <>
            <SearchInput sx={{ width: 172 }} />
            {customization && <Customization />}
            {secondaryBtn && <NavSecondaryButton {...secondaryBtn} />}
            {primaryBtn && (
              <ButtonAnimationWrapper>
                <NavPrimaryButton sx={{ minWidth: 105, px: 2 }} {...primaryBtn} />
              </ButtonAnimationWrapper>
            )}
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1, ...(!navItems && downMD && { display: { xs: 'flex', sm: 'none' } }) }}>
            {downSM && customization && <Customization />}
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="text.primary" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0, ...(downSM && { ml: 1 }) }
              }}
            >
              <ContainerWrapper>
                {downSM && <SearchInput sx={{ mt: 1 }} />}
                {navItems && (
                  <Box sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
                  </Box>
                )}
                {downSM && (
                  <>
                    <Divider />
                    {(primaryBtn || secondaryBtn) && (
                      <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, my: 2.5 }}>
                        {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                        {primaryBtn && (
                          <ButtonAnimationWrapper style={{ width: '100%' }}>
                            <NavPrimaryButton fullWidth {...primaryBtn} />
                          </ButtonAnimationWrapper>
                        )}
                      </Stack>
                    )}
                  </>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent3.propTypes = {
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  customization: PropTypes.any
};
