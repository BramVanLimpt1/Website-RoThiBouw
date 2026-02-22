'use client';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import { GraphicsCard } from '@/components/cards';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CALL TO ACTION - 1  ***************************/

export default function Cta1({ bgImage, headingKey, primaryBtn }) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <MotionWrapper>
        <GraphicsCard
          {...(bgImage && {
            sx: {
              position: 'relative',
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:before': {
                content: `' '`,
                position: 'absolute',
                width: 1,
                height: 1,
                left: 0,
                bottom: 0,
                background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} -280%, ${theme.palette.grey[100]} 143.54%)`
              }
            }
          })}
        >
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, position: 'relative', width: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: { xs: 3, sm: 4 } }}>
              <Typography variant="h2" align="center">
                {t(headingKey)}
              </Typography>
              {primaryBtn && (
                <ButtonAnimationWrapper style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Button color="primary" size="large" variant="contained" sx={{ width: { xs: '100%', sm: 'auto' } }} {...primaryBtn} children={t(primaryBtn.children)} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </Box>
        </GraphicsCard>
      </MotionWrapper>
    </ContainerWrapper>
  );
}

Cta1.propTypes = { bgImage: PropTypes.any, headingKey: PropTypes.string, primaryBtn: PropTypes.any };
