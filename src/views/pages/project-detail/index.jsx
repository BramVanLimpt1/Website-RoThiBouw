'use client';
import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import LazySection from '@/components/LazySection';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import Typeset from '@/components/Typeset';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @data
import { createProjectDetailSections } from './data';

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

  // Generate sections for lazy loading
  const sections = createProjectDetailSections(project);

  return (
    <Stack spacing={0}>
      {/* Header - Title & Subtitle */}
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <MotionWrapper>
          <Typeset
            heading={t(project.titleKey)}
            caption={project.subtitleKey ? t(project.subtitleKey) : undefined}
            stackProps={{
              sx: {
                textAlign: 'center',
                alignItems: 'center'
              }
            }}
          />
        </MotionWrapper>
      </ContainerWrapper>

      {/* Content sections - lazy loaded */}
      <LazySection sections={sections} offset="200px" />
    </Stack>
  );
}

ProjectDetailPage.propTypes = {
  project: PropTypes.shape({
    titleKey: PropTypes.string.isRequired,
    subtitleKey: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    shortDescriptionKey: PropTypes.string,
    descriptionKey: PropTypes.string,
    primaryInfo: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
        labelKey: PropTypes.string,
        value: PropTypes.string,
        valueKey: PropTypes.string
      })
    ),
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
        labelKey: PropTypes.string,
        value: PropTypes.string,
        valueKey: PropTypes.string
      })
    ),
    secondaryInfo: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          label: PropTypes.string,
          labelKey: PropTypes.string,
          value: PropTypes.string,
          valueKey: PropTypes.string
        })
      ),
      PropTypes.string
    ]),
    testimonial: PropTypes.shape({
      name: PropTypes.string,
      review: PropTypes.string,
      reviewKey: PropTypes.string,
      rating: PropTypes.number
    })
  })
};

ProjectDetailPage.propTypes = {
  project: PropTypes.shape({
    titleKey: PropTypes.string.isRequired,
    subtitleKey: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    shortDescriptionKey: PropTypes.string,
    descriptionKey: PropTypes.string,
    primaryInfo: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
        labelKey: PropTypes.string,
        value: PropTypes.string,
        valueKey: PropTypes.string
      })
    ),
    specifications: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
        labelKey: PropTypes.string,
        value: PropTypes.string,
        valueKey: PropTypes.string
      })
    ),
    secondaryInfo: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          label: PropTypes.string,
          labelKey: PropTypes.string,
          value: PropTypes.string,
          valueKey: PropTypes.string
        })
      ),
      PropTypes.string
    ]),
    testimonial: PropTypes.shape({
      name: PropTypes.string,
      review: PropTypes.string,
      reviewKey: PropTypes.string,
      rating: PropTypes.number
    })
  })
};
