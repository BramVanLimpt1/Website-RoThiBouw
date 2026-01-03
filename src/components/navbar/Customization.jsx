import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';

// @project
import MenuPopper from './MenuPopper';
import SvgIcon from '@/components/SvgIcon';
import { ThemeDirection, ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';
import useTranslation from '@/hooks/useTranslation';
import { SUPPORTED_LANGUAGES } from '@/i18n';

/***************************  NAVBAR - CUSTOMIZATION  ***************************/

export default function Customization({ showThemeToggle = true, showDirectionToggle = true, showLanguageSelector = true }) {
  const theme = useTheme();
  const { onChangeThemeMode, onChangeThemeDirection, onChangeLanguage } = useConfig();
  const { t, language } = useTranslation();

  // Get the inactive language (the one not currently selected)
  const inactiveLanguage = SUPPORTED_LANGUAGES.find((locale) => locale.code !== language);

  // Don't render if all options are disabled
  if (!showThemeToggle && !showDirectionToggle && !showLanguageSelector) {
    return null;
  }

  return (
    <MenuPopper
      offset={10}
      offsetX={15}
      toggleProps={{
        children: <SvgIcon name="tabler-settings" color="primary.main" size={18} />,
        color: 'primary',
        variant: 'outlined',
        'aria-label': 'settings',
        sx: { minWidth: 40, width: 40, height: 40, p: 0 }
      }}
      popperWidth={300}
    >
      <List sx={{ p: 1.5 }}>
        {/* Theme Toggle */}
        {showThemeToggle && (
          <ListItem sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <SvgIcon name="tabler-sun-moon" color="text.primary" stroke={1} />
            </ListItemIcon>
            <ListItemText color="grey.100">{t('customization.darkMode')}</ListItemText>
            <Switch
              inputProps={{ 'aria-label': 'dark-mode' }}
              checked={theme.palette.mode === ThemeMode.DARK}
              onChange={() => onChangeThemeMode(theme.palette.mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)}
            />
          </ListItem>
        )}

        {/* Direction Toggle */}
        {showDirectionToggle && (
          <ListItem sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <SvgIcon name="tabler-text-direction-ltr" color="text.primary" stroke={1} />
            </ListItemIcon>
            <ListItemText color="grey.100">{t('customization.rtl')}</ListItemText>
            <Switch
              inputProps={{ 'aria-label': 'direction-ltr' }}
              checked={theme.direction === ThemeDirection.RTL}
              onChange={() => onChangeThemeDirection(theme.direction === ThemeDirection.RTL ? ThemeDirection.LTR : ThemeDirection.RTL)}
            />
          </ListItem>
        )}

        {/* Language Switcher */}
        {showLanguageSelector && inactiveLanguage && (
          <ListItem
            component="button"
            onClick={() => onChangeLanguage(inactiveLanguage.code)}
            sx={{
              px: 1,
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              width: '100%',
              '&:hover': { bgcolor: 'grey.50' }
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <SvgIcon name="tabler-language" color="text.primary" stroke={1} />
            </ListItemIcon>
            <ListItemText color="grey.100">{inactiveLanguage.name}</ListItemText>
          </ListItem>
        )}
      </List>
    </MenuPopper>
  );
}

Customization.propTypes = {
  showThemeToggle: PropTypes.bool,
  showDirectionToggle: PropTypes.bool,
  showLanguageSelector: PropTypes.bool
};
