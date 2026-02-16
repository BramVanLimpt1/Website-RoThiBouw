'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';
import Image from 'next/image';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  ABOUT - 4 (TEASER)  ***************************/

export default function About4({ headingKey, highlightKey, captionKey, image, primaryBtn }) {
  const { t } = useTranslation();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
        {/* Left: Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionWrapper delay={0.2}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 300, sm: 400, md: 480 },
                borderRadius: { xs: 6, sm: 8, md: 10 },
                overflow: 'hidden'
              }}
            >
              <Image src={image} alt={t(headingKey)} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
            </Box>
          </MotionWrapper>
        </Grid>

        {/* Right: Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionWrapper delay={0.3}>
            <Stack spacing={3}>
              {/* Heading with highlight */}
              <Typography variant="h2">
                {t(headingKey)}{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {t(highlightKey)}
                </Box>
              </Typography>

              {/* Description */}
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {t(captionKey)}
              </Typography>

              {/* CTA Button */}
              <Box>
                <ButtonAnimationWrapper>
                  <Button component={NextLink} href={primaryBtn.href} variant="contained" size="large" sx={{ px: 4 }}>
                    {t(primaryBtn.children)}
                  </Button>
                </ButtonAnimationWrapper>
              </Box>
            </Stack>
          </MotionWrapper>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

About4.propTypes = {
  labelKey: PropTypes.string,
  headingKey: PropTypes.string,
  highlightKey: PropTypes.string,
  captionKey: PropTypes.string,
  image: PropTypes.string,
  primaryBtn: PropTypes.shape({
    href: PropTypes.string,
    children: PropTypes.string
  })
};
