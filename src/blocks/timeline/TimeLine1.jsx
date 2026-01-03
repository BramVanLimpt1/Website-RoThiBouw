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
import Typeset from '@/components/Typeset';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  TIMELINE - 1  ***************************/

/**
 * TimeLine1 Component
 *
 * Displays company story/milestones in a vertical timeline layout with
 * scroll-triggered animations and progressive timeline lighting.
 *
 * @param {Object} props - Component props
 * @param {string} props.heading - Section heading text
 * @param {string} props.caption - Section caption/description text
 * @param {Array<Object>} props.sections - Array of timeline milestone objects
 * @param {string} props.sections[].title - Milestone title
 * @param {string} props.sections[].description - Milestone description
 * @param {string} props.sections[].image - Path to milestone image
 *
 * @example
 * ```jsx
 * const data = {
 *   heading: "Our Story",
 *   caption: "The journey that brought us here",
 *   sections: [
 *     {
 *       title: "2023 - Company Founded",
 *       description: "Started our journey...",
 *       image: "/assets/milestone1.jpg"
 *     }
 *   ]
 * };
 * <TimeLine1 {...data} />
 * ```
 */
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
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        viewport={{ once: false, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
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
                      </motion.div>
                    ) : (
                      // Text on left for odd items (1, 3, 5...)
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        viewport={{ once: false, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
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
                      </motion.div>
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
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
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
                    </motion.div>
                  </Box>

                  {/* Right Side Content */}
                  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                    {isEven ? (
                      // Text on right for even items (0, 2, 4...)
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        viewport={{ once: false, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
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
                      </motion.div>
                    ) : (
                      // Image on right for odd items (1, 3, 5...)
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        viewport={{ once: false, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
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
                      </motion.div>
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
