'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import SvgIcon from '@/components/SvgIcon';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @third-party
import Marquee from 'react-fast-marquee';

// @assets
import Circles from '@/images/Circles';

/***************************  SMALL HERO - 5  ***************************/

export default function SmallHero5({ exploreBtn, list, heading, caption }) {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: { xs: 342, sm: 402, md: 600 },
        py: SECTION_COMMON_PY
      }}
    >
      <Circles />
      <Stack sx={{ py: { xs: 2, sm: 5, md: 6 }, width: 1, alignItems: 'center', position: 'absolute' }}>
        <Stack sx={{ gap: { xs: 1.5, sm: 2, md: 3 }, textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h1" sx={{ width: { xs: 343, sm: 558, md: 709 } }}>
            {heading}
          </Typography>
          <Typography variant="h6" sx={{ width: { xs: 343, sm: 516 } }}>
            {caption}
          </Typography>
        </Stack>
        {exploreBtn && <Button color="primary" variant="contained" sx={{ mt: { ...{ xs: 3, sm: 4, md: 5 } } }} {...exploreBtn} />}
        <Stack direction="row" sx={{ alignItems: 'center', width: 1, mt: { xs: 4, sm: 5, md: 8 } }}>
          <Marquee pauseOnHover autoFill {...(theme.direction === ThemeDirection.RTL && { direction: 'right' })}>
            {list.map((item, index) => (
              <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', mx: 0.75 }} key={index}>
                <Chip
                  label={
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  }
                  icon={<SvgIcon name="tabler-rosette-discount-check" stroke={1} color="text.secondary" />}
                  sx={{
                    p: { xs: 1, md: 1.5 },
                    bgcolor: 'grey.100',
                    borderRadius: 4,
                    '& .MuiChip-label': { p: 0, pl: 1 },
                    '& svg.tabler-rosette-discount-check': { width: { xs: 16, sm: 24 }, height: { xs: 16, sm: 24 } }
                  }}
                />
                <Stack sx={{ gap: 0.5, position: 'absolute', right: -12, bgcolor: 'grey.100', borderRadius: 6.25 }}>
                  <Box sx={{ width: 12, height: 12, bgcolor: 'background.default', borderRadius: 6.25 }}></Box>
                  <Box sx={{ width: 12, height: 12, bgcolor: 'background.default', borderRadius: 6.25 }}></Box>
                </Stack>
              </Box>
            ))}
          </Marquee>
        </Stack>
      </Stack>
    </Stack>
  );
}

SmallHero5.propTypes = { exploreBtn: PropTypes.any, list: PropTypes.array, heading: PropTypes.string, caption: PropTypes.string };
