'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';

import { SECTION_COMMON_PY } from '@/utils/constant';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';

/***************************  COOKIE - 1  ***************************/

export default function Cookie1({ heading, primaryBtn, secondaryBtn, cookie }) {
  const theme = useTheme();
  const size = { xs: 48, md: 60 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ width: { xs: 1, sm: 326, md: 460 }, bgcolor: 'primary.main' }}>
        <Box sx={{ padding: { xs: 1.5, sm: 2, md: 4 } }}>
          <Stack sx={{ gap: { xs: 2, sm: 3, md: 4 } }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Avatar sx={{ width: size, height: size, bgcolor: 'primary.lighter' }}>
                <SvgIcon name="tabler-cookie" color="primary.darker" />
              </Avatar>
              <IconButton
                size="small"
                rel="noopener noreferrer"
                aria-label="cookie-close"
                sx={{
                  width: 32,
                  height: 32,
                  '&:hover': { bgcolor: 'primary.dark' },
                  ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default)
                }}
              >
                <SvgIcon name="tabler-x" color="primary.lighter" />
              </IconButton>
            </Stack>
            <Stack sx={{ gap: { xs: 1.5, sm: 2, md: 3 } }}>
              <Stack sx={{ gap: { xs: 0.5, md: 1 } }}>
                <Typography variant="h4" sx={{ color: 'background.default' }}>
                  {heading}
                </Typography>
                <Typography sx={{ color: 'primary.lighter' }}>
                  {cookie.caption}
                  {cookie.link && (
                    <>
                      &nbsp;
                      <Link
                        component={NextLink}
                        color="background.default"
                        {...cookie.link}
                        underline="always"
                        sx={{ ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default) }}
                      />
                    </>
                  )}
                </Typography>
              </Stack>

              {(primaryBtn || secondaryBtn) && (
                <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1.5 }}>
                  {primaryBtn && (
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ border: 0.25, ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default) }}
                      {...primaryBtn}
                    />
                  )}
                  {secondaryBtn && (
                    <Button
                      fullWidth
                      sx={{
                        bgcolor: 'background.default',
                        color: 'primary.main',
                        '&:hover': { bgcolor: 'primary.lighter' },
                        ':focus-visible': generateFocusVisibleStyles(theme.palette.background.default)
                      }}
                      {...secondaryBtn}
                    />
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </Box>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

Cookie1.propTypes = { heading: PropTypes.string, primaryBtn: PropTypes.any, secondaryBtn: PropTypes.any, cookie: PropTypes.object };
