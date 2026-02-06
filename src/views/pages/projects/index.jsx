'use client';
import { useState } from 'react';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import ProjectCard from '@/components/cards/ProjectCard';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @data
import { projects, projectCategories } from './data';

/***************************  PROJECTS OVERVIEW PAGE  ***************************/

export default function ProjectsPage() {
  useDataThemeMode();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack spacing={5}>
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h2" component="h1">
              {t('projects.heading')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('projects.caption')}
            </Typography>
          </Stack>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Stack spacing={2}>
            <Typography variant="h6" component="h2">
              {t('projects.filterByCategory')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5
              }}
            >
              {projectCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'contained' : 'outlined'}
                  onClick={() => setSelectedCategory(category.id)}
                  sx={{
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 3
                  }}
                >
                  {t(category.labelKey)}
                </Button>
              ))}
            </Box>
          </Stack>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                {t('projects.noProjects')}
              </Typography>
            </Box>
          </motion.div>
        )}
      </Stack>
    </ContainerWrapper>
  );
}
