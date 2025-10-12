'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { Customization, MenuPopper, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import { NavMenu, NavMenuDrawer } from '@/components/navbar/NavItems';
import SvgIcon from '@/components/SvgIcon';

// @types

/***************************  NAVBAR - CONTENT 7  ***************************/

export default function NavbarContent7({ navItems, primaryBtn, secondaryBtn, customization }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
      <Logo />
      <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
        {navItems && !downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}
        {!downSM && (
          <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
            {secondaryBtn && <NavSecondaryButton variant="text" {...secondaryBtn} />}
            {primaryBtn && (
              <NavPrimaryButton
                variant="text"
                endIcon={<SvgIcon name="tabler-arrow-narrow-right" size={16} />}
                {...primaryBtn}
                sx={{ minWidth: 105, px: 2, ...(primaryBtn.sx && { ...primaryBtn.sx }) }}
              />
            )}
          </Stack>
        )}
        {customization && <Customization />}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 25}
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
                  <>
                    <Divider />
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center', my: 1.25 }}>
                      {secondaryBtn && <NavSecondaryButton fullWidth {...secondaryBtn} />}
                      {primaryBtn && (
                        <NavPrimaryButton
                          fullWidth
                          variant="text"
                          endIcon={<SvgIcon name="tabler-arrow-narrow-right" size={16} stroke={2.5} />}
                          {...primaryBtn}
                        />
                      )}
                    </Stack>
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

NavbarContent7.propTypes = {
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  customization: PropTypes.any
};
