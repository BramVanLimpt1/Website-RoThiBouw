'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import { SECTION_COMMON_PY } from '@/utils/constant';


/***************************  FEATURED PROJECTS SECTION  ***************************/

export function FeaturedProjectsSection({ projects, heading, caption, t }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack spacing={5}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h2">{t(heading)}</Typography>
            <Typography variant="body1" color="text.secondary">
              {t(caption)}
            </Typography>
          </Stack>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {projects.slice(0, 3).map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 6 }}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Stack direction="row" justifyContent="center">
            <Button component={NextLink} href="/projects" variant="outlined" size="large" sx={{ px: 4 }}>
              {t('home.viewAllProjects')}
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

FeaturedProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};
