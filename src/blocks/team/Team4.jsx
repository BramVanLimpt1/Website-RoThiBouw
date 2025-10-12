'use client';
import PropTypes from 'prop-types';

import { useRef } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import Slider from 'react-slick';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SlickArrows from '@/components/SlickArrows';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';

// @types

/***************************  TEAM - 4  ***************************/

export default function Team4({ heading, caption, members }) {
  const theme = useTheme();
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md - 1,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: theme.breakpoints.values.sm - 1,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        <Slider ref={sliderRef} {...settings}>
          {members.map((item, index) => (
            <Box key={index} sx={{ px: 0.75 }}>
              <GraphicsCard
                bgImage={GetImagePath(item.avatar)}
                sx={{ bgcolor: alpha(theme.palette.grey[600], 0.6), height: { xs: 200, sm: 260, md: 300 }, position: 'relative' }}
              >
                {item.badge && (
                  <Chip
                    label={
                      typeof item.badge === 'string' ? (
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                          <SvgIcon name="tabler-award" color="common.white" />
                          <Typography variant="body2" noWrap sx={{ color: 'common.white', textOverflow: 'ellipsis' }}>
                            {item.badge}
                          </Typography>
                        </Stack>
                      ) : (
                        item.badge
                      )
                    }
                    sx={{
                      bgcolor: alpha(theme.palette.grey[100], 0.4),
                      border: '1px solid',
                      borderColor: 'divider',
                      position: 'absolute',
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      '.MuiChip-label': { p: 1 }
                    }}
                  />
                )}
              </GraphicsCard>
              <Typeset
                {...{
                  heading: item.name,
                  caption: item.role,
                  stackProps: { sx: { textAlign: 'center', gap: 0.5, mt: { xs: 1.5, sm: 2 } } },
                  headingProps: { variant: 'h3' },
                  captionProps: { variant: 'body1' }
                }}
              />
            </Box>
          ))}
        </Slider>
        <SlickArrows sliderRef={sliderRef} />
      </Stack>
    </ContainerWrapper>
  );
}

Team4.propTypes = { heading: PropTypes.any, caption: PropTypes.any, members: PropTypes.any };
