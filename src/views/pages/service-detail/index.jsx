'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import { ServiceDescription, ServiceFeatureList } from '@/components/service';
import ContainerWrapper from '@/components/ContainerWrapper';
import ContactUs3 from '@/blocks/contact-us/ContactUs3';
import Cta1 from '@/blocks/cta/Cta1';
import Process6 from '@/blocks/process/Process6';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { Project1 } from '@/blocks/projects';
import { projects } from '@/views/pages/projects/data';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @data
import { serviceProcessSteps, servicesNavigationData } from './data';

/***************************  SERVICE DETAIL PAGE  ***************************/

export default function ServiceDetailPage({ service }) {
  useDataThemeMode();
  const { t } = useTranslation();

  if (!service) {
    return (
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Typography variant="h4">Service not found</Typography>
      </ContainerWrapper>
    );
  }

  // Prepare hero slide
  const heroSlides = [
    {
      image: service.heroImage,
      title: t(service.titleKey)
    }
  ];

  // Translate process steps
  const translatedProcess = {
    heading: t(serviceProcessSteps.heading),
    caption: t(serviceProcessSteps.caption),
    cards: serviceProcessSteps.cards.map((card) => ({
      ...card,
      title: t(card.title),
      description: t(card.description)
    }))
  };

  // Filter related projects
  const relatedProjects = projects.filter((project) => service.relatedCategories.includes(project.category));

  // Translate features
  const translatedFeatures = service.features.map((featureKey) => t(featureKey));

  // Filter services navigation to exclude current service
  const filteredServicesNavigation = {
    ...servicesNavigationData,
    list: servicesNavigationData.list.filter((item) => item.title !== service.titleKey)
  };

  return (
    <Stack spacing={0}>
      {/* 1. Hero */}
      <HeroSlideshow slides={heroSlides} height={{ xs: 300, sm: 400, md: 500 }} showText={true} />

      {/* 2. Service Description */}
      <ServiceDescription
        title={t(service.descriptionTitleKey)}
        description={t(service.descriptionKey)}
        image={service.descriptionImage}
      />

      {/* 3. Feature List */}
      <ServiceFeatureList features={translatedFeatures} image={service.featureImage} reverse />

      {/* 4. Process Steps */}
      <Process6 {...translatedProcess} />

      {/* 5. Related Projects */}
      {relatedProjects.length > 0 && (
        <Project1
          heading="services.relatedProjects.heading"
          caption="services.relatedProjects.caption"
          projects={relatedProjects}
          showViewAll={false}
        />
      )}

      {/* 6. CTA */}
      <Cta1
        heading={t('services.cta.heading')}
        primaryBtn={{
          children: t('services.cta.button'),
          component: NextLink,
          href: '/contact'
        }}
      />

      {/* 7. Services Navigation */}
      <ContactUs3 {...filteredServicesNavigation} />
    </Stack>
  );
}

ServiceDetailPage.propTypes = {
  service: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    titleKey: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired,
    descriptionTitleKey: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
    descriptionImage: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    featureImage: PropTypes.string.isRequired,
    relatedCategories: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
