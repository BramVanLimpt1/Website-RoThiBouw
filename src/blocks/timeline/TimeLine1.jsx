'use client';
import PropTypes from 'prop-types';

import { useRef } from 'react';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import MotionWrapper from '@/components/MotionWrapper';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  TIMELINE - 1  ***************************/

export default function TimeLine1({ heading, caption, sections }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const containerRef = useRef(null);

  // Track scroll progress through the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Transform scroll progress to timeline height percentage
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 6, md: 8 } }} ref={containerRef}>
        {/* Header */}
        <Typeset
          {...{
            heading: t(heading),
            caption: t(caption),
            stackProps: { sx: { alignItems: 'center' } },
            headingProps: { variant: 'h2', sx: { textAlign: 'center' } },
            captionProps: { sx: { maxWidth: 700, textAlign: 'center' } }
          }}
        />

        {/* Timeline Container */}
        <Box sx={{ position: 'relative' }}>
          {/* Timeline Line - Background (gray) */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: 'divider',
              transform: 'translateX(-50%)',
              display: { xs: 'none', md: 'block' }
            }}
          />

          {/* Timeline Line - Progress (colored) */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: 2,
              height: timelineHeight,
              backgroundColor: theme.palette.primary.main,
              transform: 'translateX(-50%)',
              display: 'none',
              '@media (minwidth: 900px)': {
                display: 'block'
              }
            }}
          />

          {/* Timeline Items */}
          <Stack sx={{ gap: { xs: 6, md: 10 } }}>
            {sections?.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 3, md: 6 },
                    alignItems: 'center',
                    position: 'relative'
                  }}
                >
                  {/* Left Side Content */}
                  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                    {isEven ? (
                      // Image on left for even items (0, 2, 4...)
                      <MotionWrapper variant="slideInFromSide" direction="left" delay={0.2} duration={0.6}>
                        <GraphicsCard sx={{ height: { xs: 280, sm: 350, md: 400 }, overflow: 'hidden' }}>
                          <GraphicsImage
                            image={section.image}
                            sx={{
                              height: 1,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                        </GraphicsCard>
                      </MotionWrapper>
                    ) : (
                      // Text on left for odd items (1, 3, 5...)
                      <MotionWrapper variant="slideInFromSide" direction="left" delay={0.2} duration={0.6}>
                        <Stack sx={{ gap: { xs: 2, md: 2.5 } }}>
                          {section.title && (
                            <Typography variant="h3" sx={{ color: 'text.primary' }}>
                              {t(section.title)}
                            </Typography>
                          )}
                          {section.description && (
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                              {t(section.description)}
                            </Typography>
                          )}
                        </Stack>
                      </MotionWrapper>
                    )}
                  </Box>

                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: { xs: 'relative', md: 'absolute' },
                      left: { md: '50%' },
                      transform: { md: 'translateX(-50%)' },
                      zIndex: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      my: { xs: 0, md: 0 }
                    }}
                  >
                    <MotionWrapper delay={0.3} duration={0.4}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: `3px solid ${theme.palette.primary.main}`,
                          bgcolor: 'background.paper',
                          boxShadow: `0 0 0 4px ${theme.palette.background.paper}`
                        }}
                      />
                    </MotionWrapper>
                  </Box>

                  {/* Right Side Content */}
                  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                    {isEven ? (
                      // Text on right for even items (0, 2, 4...)
                      <MotionWrapper variant="slideInFromSide" direction="right" delay={0.2} duration={0.6}>
                        <Stack sx={{ gap: { xs: 2, md: 2.5 } }}>
                          {section.title && (
                            <Typography variant="h3" sx={{ color: 'text.primary' }}>
                              {t(section.title)}
                            </Typography>
                          )}
                          {section.description && (
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                              {t(section.description)}
                            </Typography>
                          )}
                        </Stack>
                      </MotionWrapper>
                    ) : (
                      // Image on right for odd items (1, 3, 5...)
                      <MotionWrapper variant="slideInFromSide" direction="right" delay={0.2} duration={0.6}>
                        <GraphicsCard sx={{ height: { xs: 280, sm: 350, md: 400 }, overflow: 'hidden' }}>
                          <GraphicsImage
                            image={section.image}
                            sx={{
                              height: 1,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                        </GraphicsCard>
                      </MotionWrapper>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </ContainerWrapper>
  );
}

TimeLine1.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
    })
  )
};
