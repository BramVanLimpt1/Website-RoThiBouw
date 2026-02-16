'use client';
import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import Typeset from '@/components/Typeset';
import { ProjectSlideshow, ProjectSpecsDescription, SimpleTestimonial } from '@/components/project';
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
      <Stack spacing={{ xs: 4, sm: 5, md: 6 }}>
        {/* 1. Header - Title & Subtitle */}
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

        {/* 2. Project Image Slideshow */}
        {project.images && project.images.length > 0 && (
          <MotionWrapper delay={0.2}>
            <ProjectSlideshow images={project.images} alt={t(project.titleKey)} />
          </MotionWrapper>
        )}

        {/* 3. Primary Section - Primary Info + Short Description */}
        {project.primaryInfo && project.primaryInfo.length > 0 && project.shortDescriptionKey && (
          <MotionWrapper delay={0.3}>
            <ProjectSpecsDescription
              specifications={project.primaryInfo}
              descriptionKey={project.shortDescriptionKey}
              specsTitleKey="projects.information"
            />
          </MotionWrapper>
        )}

        {/* 4. Secondary Section - Secondary Info + Full Description */}
        {project.secondaryInfo && project.secondaryInfo.length > 0 && project.descriptionKey && (
          <MotionWrapper delay={0.4}>
            <ProjectSpecsDescription
              specifications={project.secondaryInfo}
              descriptionKey={project.descriptionKey}
              specsTitleKey="projects.additionalInfo"
              reverse
            />
          </MotionWrapper>
        )}

        {/* 5. Testimonial / Review */}
        {project.testimonial && (project.testimonial.review || project.testimonial.reviewKey) && (
          <MotionWrapper delay={0.5}>
            <SimpleTestimonial
              name={project.testimonial.name}
              review={project.testimonial.review}
              reviewKey={project.testimonial.reviewKey}
              rating={project.testimonial.rating}
            />
          </MotionWrapper>
        )}
      </Stack>
    </ContainerWrapper>
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
