'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import Marquee from 'react-fast-marquee';

// @project
import { GraphicsCard } from '@/components/cards';
import { ProfileCard2 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  TESTIMONIAL - 9  ***************************/

export default function Testimonial9({ heading, caption, testimonials }) {
  const theme = useTheme();
  const [marqueeData1, setMarqueeData1] = useState([]);
  const [marqueeData2, setMarqueeData2] = useState([]);

  useEffect(() => {
    // Split testimonials into two sets if there are more than 5 testimonials
    if (testimonials.length > 5) {
      const mid = Math.ceil(testimonials.length / 2);
      setMarqueeData1(testimonials.slice(0, mid));
      setMarqueeData2(testimonials.slice(mid));
    } else {
      setMarqueeData1(testimonials);
    }
  }, [testimonials]);

  const gc = theme.palette.background.default;
  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `linear-gradient(90deg, ${alpha(gc, 0)} 0%, ${alpha(gc, 0.9)} 100%)`
      : `linear-gradient(90deg, ${gc} 0%, ${alpha(gc, 0)} 100%)`;

  const sharedGradient = {
    position: 'absolute',
    content: `' '`,
    top: 0,
    width: { xs: 24, sm: 97, md: 139 },
    height: 1,
    background: gradient,
    zIndex: 2
  };

  return (
    <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ py: SECTION_COMMON_PY }}>
      <Grid size={12}>
        <ContainerWrapper>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </ContainerWrapper>
      </Grid>
      <Grid size={12}>
        <Stack
          sx={{
            gap: { xs: 1, md: 1.5 },
            alignItems: 'center',
            position: 'relative',
            '& .rfm-initial-child-container': { height: 1 },
            '& .rfm-child': { height: 1, display: 'flex', justifyContent: 'space-between' },
            '&:before': { ...sharedGradient, left: 0 },
            '&:after': { ...sharedGradient, right: 0, transform: 'rotate(180deg)' }
          }}
        >
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'}>
            {marqueeData1.map((testimonial, index) => (
              <GraphicsCard
                key={index}
                sx={{ width: { xs: 375, sm: 395, md: 506 }, borderRadius: { xs: 4, sm: 6 }, mx: { xs: 0.5, md: 0.75 } }}
              >
                <Stack sx={{ justifyContent: 'space-between', gap: { xs: 2, md: 3 }, p: { xs: 1.5, sm: 2, md: 3 }, height: 1 }}>
                  <ProfileCard2 {...testimonial.profile} />
                  <Typography>{testimonial.review}</Typography>
                </Stack>
              </GraphicsCard>
            ))}
          </Marquee>
          {testimonials.length > 5 && (
            <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'}>
              {marqueeData2.map((testimonial, index) => (
                <GraphicsCard
                  key={index}
                  sx={{ width: { xs: 375, sm: 395, md: 506 }, borderRadius: { xs: 4, sm: 6 }, mx: { xs: 0.5, md: 0.75 } }}
                >
                  <Stack sx={{ justifyContent: 'space-between', gap: { xs: 2, md: 3 }, p: { xs: 1.5, sm: 2, md: 3 }, height: 1 }}>
                    <ProfileCard2 {...testimonial.profile} />
                    <Typography>{testimonial.review}</Typography>
                  </Stack>
                </GraphicsCard>
              ))}
            </Marquee>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

Testimonial9.propTypes = { heading: PropTypes.any, caption: PropTypes.any, testimonials: PropTypes.any };
