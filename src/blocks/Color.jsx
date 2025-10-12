'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { ThemeMode } from '@/config';
import { GraphicsCard } from '@/components/cards';
import useConfig from '@/hooks/useConfig';
import { useTranslation } from '@/i18n';

// AI theme color string
const colorString = 'AI';

// get primary/secondary color offset
function getColorCode(index, mode) {
  const lightModeCodes = [90, 80, 40, 30, 10];
  const darkModeCodes = [30, 60, 80, 90, 95];

  return mode === ThemeMode.DARK ? darkModeCodes[index] : lightModeCodes[index];
}

// get grey color offset
function getGreyCode(index, mode) {
  const lightModeCodes = [98, 96, 94, 92, 90, 87, 80, 50, 30, 10];
  const darkModeCodes = [6, 10, 12, 17, 22, 4, 30, 60, 80, 90];

  return mode === ThemeMode.DARK ? darkModeCodes[index] : lightModeCodes[index];
}

/***************************  COLOR - CARD  ***************************/

function ColorBox({ value, color, muiLabel, figmaLabel, figmaValue, main = false }) {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <GraphicsCard
        sx={{
          borderRadius: 4,
          ...(main && { border: '1px dashed', borderColor: 'primary.main' }),
          ...(muiLabel === 'grey.100' && { bgcolor: 'grey.200' })
        }}
      >
        <Box sx={{ p: 1.5 }}>
          <GraphicsCard sx={{ py: 3, borderRadius: 3, bgcolor: value, color }}>
            <Stack sx={{ gap: 0.75, alignItems: 'center' }}>
              <Typography variant="h3">{value}</Typography>
              <Typography>{figmaLabel}</Typography>
            </Stack>
          </GraphicsCard>
          <Stack direction="row" sx={{ justifyContent: 'space-between', mt: 1.5 }}>
            <Typography variant="subtitle1">{muiLabel}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{figmaValue}</Typography>
          </Stack>
        </Box>
      </GraphicsCard>
    </Grid>
  );
}

function ColorPalette({ title, palette }) {
  return (
    <Stack sx={{ gap: 3 }}>
      <Typography variant="h2">{title}</Typography>
      <Grid container spacing={{ xs: 1.5, sm: 3 }} sx={{ alignItems: 'center' }}>
        {palette.map((item, index) => (
          <ColorBox key={index} {...item} />
        ))}
      </Grid>
    </Stack>
  );
}

/***************************  SECTIONS - COLOR  ***************************/

export default function Color() {
  const theme = useTheme();
  const { t } = useTranslation();

  const { mode } = useConfig();

  const primaryPalette = [
    {
      value: theme.palette.primary.lighter,
      color: 'primary.darker',
      muiLabel: 'primary.lighter',
      figmaLabel: mode === 'dark' ? t('color.primaryContainerOnPrimaryFixedVariant') : t('color.primaryContainerPrimaryFixed'),
      figmaValue: `${colorString}/primary/${getColorCode(0, mode)}`
    },
    {
      value: theme.palette.primary.light,
      color: 'primary.dark',
      muiLabel: 'primary.light',
      figmaLabel: t('color.primaryFixedDim'),
      figmaValue: `${colorString}/primary/${getColorCode(1, mode)}`
    },
    {
      value: theme.palette.primary.main,
      color: 'background.default',
      muiLabel: 'primary.main',
      figmaLabel: t('color.primary'),
      main: true,
      figmaValue: `${colorString}/primary/${getColorCode(2, mode)}`
    },
    {
      value: theme.palette.primary.dark,
      color: 'primary.light',
      muiLabel: 'primary.dark',
      figmaLabel: mode === 'dark' ? t('color.onPrimaryContainerPrimaryFixed') : t('color.onPrimaryFixedVariant'),
      figmaValue: `${colorString}/primary/${getColorCode(3, mode)}`
    },
    {
      value: theme.palette.primary.darker,
      color: 'primary.lighter',
      muiLabel: 'primary.darker',
      figmaLabel: t('color.onPrimaryContainerOnPrimaryFixed'),
      figmaValue: `${colorString}/primary/${getColorCode(4, mode)}`
    }
  ];

  const secondaryPalette = [
    {
      value: theme.palette.secondary.lighter,
      color: 'secondary.darker',
      muiLabel: 'secondary.lighter',
      figmaLabel: mode === 'dark' ? t('color.secondaryContainerOnSecondaryFixedVariant') : t('color.secondaryContainerSecondaryFixed'),
      figmaValue: `${colorString}/secondary/${getColorCode(0, mode)}`
    },
    {
      value: theme.palette.secondary.light,
      color: 'secondary.dark',
      muiLabel: 'secondary.light',
      figmaLabel: t('color.secondaryFixedDim'),
      figmaValue: `${colorString}/secondary/${getColorCode(1, mode)}`
    },
    {
      value: theme.palette.secondary.main,
      color: 'background.default',
      muiLabel: 'secondary.main',
      figmaLabel: t('color.secondary'),
      main: true,
      figmaValue: `${colorString}/secondary/${getColorCode(2, mode)}`
    },
    {
      value: theme.palette.secondary.dark,
      color: 'secondary.light',
      muiLabel: 'secondary.dark',
      figmaLabel: mode === 'dark' ? t('color.onSecondaryContainerSecondaryFixed') : t('color.onSecondaryFixedVariant'),
      figmaValue: `${colorString}/secondary/${getColorCode(3, mode)}`
    },
    {
      value: theme.palette.secondary.darker,
      color: 'secondary.lighter',
      muiLabel: 'secondary.darker',
      figmaLabel: t('color.onSecondaryContainerOnSecondaryFixed'),
      figmaValue: `${colorString}/secondary/${getColorCode(4, mode)}`
    }
  ];

  const greyPalette = [
    {
      value: theme.palette.grey[50],
      color: 'grey.900',
      muiLabel: 'grey.50',
      figmaLabel: mode === 'dark' ? t('color.surfaceSurfaceDim') : t('color.surfaceSurfaceBright'),
      figmaValue: `${colorString}/neutral/${getGreyCode(0, mode)}`
    },
    {
      value: theme.palette.grey[100],
      color: 'grey.900',
      muiLabel: 'grey.100',
      figmaLabel: t('color.surfaceContainerLow'),
      figmaValue: `${colorString}/neutral/${getGreyCode(1, mode)}`
    },
    {
      value: theme.palette.grey[200],
      color: 'grey.900',
      muiLabel: 'grey.200',
      figmaLabel: t('color.surfaceContainer'),
      figmaValue: `${colorString}/neutral/${getGreyCode(2, mode)}`
    },
    {
      value: theme.palette.grey[300],
      color: 'grey.900',
      muiLabel: 'grey.300',
      figmaLabel: t('color.surfaceContainerHigh'),
      figmaValue: `${colorString}/neutral/${getGreyCode(3, mode)}`
    },
    {
      value: theme.palette.grey[400],
      color: 'grey.900',
      muiLabel: 'grey.400',
      figmaLabel: t('color.surfaceContainerHighest'),
      figmaValue: `${colorString}/neutral/${getGreyCode(4, mode)}`
    },
    {
      value: theme.palette.grey[500],
      color: 'grey.900',
      muiLabel: 'grey.500',
      figmaLabel: t('color.surfaceContainerHighest'),
      figmaValue: `${colorString}/neutral/${getGreyCode(5, mode)}`
    },
    {
      value: theme.palette.grey[600],
      color: 'grey.800',
      muiLabel: 'grey.600',
      figmaLabel: t('color.outlineVariant'),
      figmaValue: `${colorString}/neutral variant/${getGreyCode(6, mode)}`
    },
    {
      value: theme.palette.grey[700],
      color: 'grey.600',
      muiLabel: 'grey.700',
      figmaLabel: t('color.outline'),
      figmaValue: `${colorString}/neutral variant/${getGreyCode(7, mode)}`
    },
    {
      value: theme.palette.grey[800],
      color: 'grey.600',
      muiLabel: 'grey.800',
      figmaLabel: t('color.onSurfaceVariant'),
      figmaValue: `${colorString}/neutral variant/${getGreyCode(8, mode)}`
    },
    {
      value: theme.palette.grey[900],
      color: 'grey.50',
      muiLabel: 'grey.900',
      figmaLabel: t('color.onSurface'),
      figmaValue: `${colorString}/neutral/${getGreyCode(9, mode)}`
    }
  ];

  const palettes = [
    { title: t('color.primary'), palette: primaryPalette },
    { title: t('color.secondary'), palette: secondaryPalette },
    { title: t('color.neutral'), palette: greyPalette }
  ];

  return (
    <Stack sx={{ gap: 6 }}>
      {palettes.map((palette, index) => (
        <ColorPalette key={index} {...palette} />
      ))}
    </Stack>
  );
}

ColorBox.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string,
  muiLabel: PropTypes.string,
  figmaLabel: PropTypes.string,
  figmaValue: PropTypes.string,
  main: PropTypes.bool
};

ColorPalette.propTypes = { title: PropTypes.string, palette: PropTypes.array };
