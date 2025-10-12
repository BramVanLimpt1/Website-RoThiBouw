'use client';
import PropTypes from 'prop-types';

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Slider from 'react-slick';

// @project
import { ThemeMode } from '@/config';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  TEAM - 2  ***************************/

export default function Team2({ heading, caption, members }) {
  const theme = useTheme();

  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    focusOnSelect: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '95px',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 1, centerPadding: '45px' }
      }
    ]
  };

  const gc1 = theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 900];
  const gc2 = theme.palette.primary.darker;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4 }}>
        <Typeset {...{ heading, caption }} />
        <Box sx={{ position: 'relative' }}>
          <Slider ref={sliderRef} {...settings}>
            {members.map((item, index) => (
              <Box key={index} sx={{ px: { xs: 0.25, sm: 0.5, md: 0.75 } }}>
                <GraphicsCard
                  bgImage={item.avatar}
                  sx={{ bgcolor: alpha(theme.palette.grey[600], 0.6), height: { xs: 250, sm: 300, md: 410 } }}
                  overLay={`linear-gradient(360deg, ${alpha(gc1, 0.5)} 0%, ${alpha(gc2, 0)} 100%)`}
                >
                  <Typeset
                    {...{
                      heading: item.name,
                      caption: item.role,
                      stackProps: { sx: { justifyContent: 'flex-end', gap: 0.75, height: 1, p: 3 } },
                      headingProps: {
                        variant: 'h5',
                        sx: { ...(theme.palette.mode === ThemeMode.LIGHT && { color: 'background.default' }) }
                      },
                      captionProps: {
                        variant: 'body1',
                        sx: { ...(theme.palette.mode === ThemeMode.LIGHT && { color: 'background.default' }) }
                      }
                    }}
                  />
                </GraphicsCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

Team2.propTypes = { heading: PropTypes.any, caption: PropTypes.any, members: PropTypes.any };
