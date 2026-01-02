'use client';
import PropTypes from 'prop-types';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  ABOUT STORY - ALTERNATING IMAGES  ***************************/

export default function AboutStory({ heading, caption, sections }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 4, md: 6 } }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center' } },
              headingProps: { variant: 'h2', sx: { textAlign: 'center' } },
              captionProps: { sx: { maxWidth: 700, textAlign: 'center' } }
            }}
          />
        </motion.div>

        {/* Alternating Sections */}
        {sections?.map((section, index) => {
          const isEven = index % 2 === 0;
          const imageDelay = isEven ? 0.4 : 0.3;
          const textDelay = isEven ? 0.3 : 0.4;

          return (
            <Grid
              key={index}
              container
              spacing={{ xs: 3, md: 4 }}
              direction={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
              sx={{ alignItems: 'center' }}
            >
              {/* Image Side */}
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: imageDelay }}
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
              </Grid>

              {/* Text Side */}
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: textDelay }}
                >
                  <Stack sx={{ gap: { xs: 2, md: 2.5 }, px: { md: isEven ? 3 : 0 } }}>
                    {section.title && (
                      <Typography variant="h3" sx={{ color: 'text.primary' }}>
                        {section.title}
                      </Typography>
                    )}
                    {section.description && (
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        {section.description}
                      </Typography>
                    )}
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </ContainerWrapper>
  );
}

AboutStory.propTypes = {
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
