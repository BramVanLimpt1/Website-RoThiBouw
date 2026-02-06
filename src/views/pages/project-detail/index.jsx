'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';
import Image from 'next/image';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  PROJECT DETAIL PAGE  ***************************/

export default function ProjectDetailPage({ project }) {
  useDataThemeMode();
  const { t } = useTranslation();

  if (!project) {
    return (
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Typography variant="h4">{t('projects.projectNotFound')}</Typography>
      </ContainerWrapper>
    );
  }

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={4}>
            {/* About Project */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Stack spacing={3}>
                <Typography variant="h3" component="h1">
                  {t('projects.aboutProject')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {t(project.detailDescriptionKey)}
                </Typography>
              </Stack>
            </motion.div>

            {/* Activities */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Typography variant="h4" component="h2">
                      {t('projects.activities')}
                    </Typography>
                    <Stack spacing={2}>
                      {project.activities.map((activityKey, index) => (
                        <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              bgcolor: 'success.lighter',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              mt: 0.25
                            }}
                          >
                            <SvgIcon name="tabler-check" size={16} color="success.main" stroke={3} />
                          </Box>
                          <Typography variant="body1" color="text.secondary">
                            {t(activityKey)}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Images */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Grid container spacing={2}>
                {project.images.map((image, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 300,
                        borderRadius: 2,
                        overflow: 'hidden'
                      }}
                    >
                      <Image src={image} alt={`${t(project.titleKey)} - Image ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Stack>
        </Grid>

        {/* Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={3} sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
            {/* Specifications Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2.5}>
                    <Typography variant="h5" component="h2">
                      {t('projects.specifications')}
                    </Typography>
                    <Divider />

                    {/* Material */}
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        {t('projects.specs.material')}
                      </Typography>
                      <Typography variant="h6">{project.specifications.material}</Typography>
                    </Stack>

                    <Divider />

                    {/* Surface Area */}
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        {t('projects.specs.surfaceArea')}
                      </Typography>
                      <Typography variant="h6">{project.specifications.surfaceArea}</Typography>
                    </Stack>

                    <Divider />

                    {/* Execution Time */}
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        {t('projects.specs.executionTime')}
                      </Typography>
                      <Typography variant="h6">{project.specifications.executionTime}</Typography>
                    </Stack>

                    <Divider />

                    {/* Warranty */}
                    <Stack spacing={0.5}>
                      <Typography variant="caption" color="text.secondary">
                        {t('projects.specs.warranty')}
                      </Typography>
                      <Typography variant="h6">{project.specifications.warranty}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Card sx={{ borderRadius: 2, bgcolor: 'grey.50' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" component="h3">
                      {t('projects.interestedTitle')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('projects.interestedDescription')}
                    </Typography>
                    <Button
                      component={NextLink}
                      href="/contact"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ borderRadius: 2, py: 1.5 }}
                    >
                      {t('projects.contactButton')}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

ProjectDetailPage.propTypes = {
  project: PropTypes.shape({
    titleKey: PropTypes.string.isRequired,
    detailDescriptionKey: PropTypes.string.isRequired,
    activities: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    specifications: PropTypes.shape({
      material: PropTypes.string.isRequired,
      surfaceArea: PropTypes.string.isRequired,
      executionTime: PropTypes.string.isRequired,
      warranty: PropTypes.string.isRequired
    }).isRequired
  })
};
