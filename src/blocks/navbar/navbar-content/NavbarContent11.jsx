'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import LogoSection from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, Customization } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';

/***************************  NAVBAR - CONTENT 11  ***************************/

export default function NavbarContent11({ navItems }) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Logo on the left */}
      <LogoSection isIcon={true} sx={{ '& img': { width: 56, height: 56 }, display: 'flex' }} />

      {/* Navigation items and customization on the right */}
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
        {!downMD && navItems && (
          <Box>
            <NavMenu {...{ navItems, menuTextColor: theme.palette.text.secondary }} />
          </Box>
        )}

        {/* Theme and language switcher */}
        {!downMD && <Customization showThemeToggle={true} showDirectionToggle={false} showLanguageSelector={true} />}

        {/* Mobile menu */}
        {downMD && (
          <MenuPopper
            offset={12}
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
            </ContainerWrapper>
          </MenuPopper>
        )}

        {/* Mobile customization */}
        {downMD && <Customization showThemeToggle={true} showDirectionToggle={false} showLanguageSelector={true} />}
      </Stack>
    </Stack>
  );
}

NavbarContent11.propTypes = {
  navItems: PropTypes.any
};
