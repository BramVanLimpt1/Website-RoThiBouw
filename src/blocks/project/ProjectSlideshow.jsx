'use client';
import PropTypes from 'prop-types';

// @react
import { useRef } from 'react';

// @next
import Image from 'next/image';

// @mui
import Box from '@mui/material/Box';

// @third-party
import Slider from 'react-slick';

// @project
import SlickArrows from '@/components/SlickArrows';

/***************************  PROJECT SLIDESHOW  ***************************/

export default function ProjectSlideshow({ images, height = { xs: 350, sm: 450, md: 500 }, alt = 'Project image' }) {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        borderRadius: { xs: 6, sm: 8, md: 10 },
        '.slick-slider': {
          height: '100%'
        },
        '.slick-list, .slick-track': {
          height: '100%',
          borderRadius: { xs: 6, sm: 8, md: 10 }
        },
        '.slick-slide > div': {
          height: '100%'
        },
        '.slick-dots': {
          bottom: { xs: 16, md: 24 },
          zIndex: 2,
          'li button:before': {
            fontSize: 12,
            color: '#fff',
            opacity: 0.5
          },
          'li.slick-active button:before': {
            color: '#fff',
            opacity: 1
          }
        }
      }}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative', height: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
            >
              <Image src={image} alt={`${alt} ${index + 1}`} fill style={{ objectFit: 'cover' }} priority={index === 0} />
            </Box>
          </Box>
        ))}
      </Slider>
      <SlickArrows sliderRef={sliderRef} variant="contained" />
    </Box>
  );
}

ProjectSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.object,
  alt: PropTypes.string
};
