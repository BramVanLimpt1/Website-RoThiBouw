'use client';

// @mui
import Stack from '@mui/material/Stack';

// @project
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';

// @data
import { heroSlides, services, stats, processSteps } from './data';
import { projects } from '../projects/data';

// @sections
import { ServicesSection, StatsSection, FeaturedProjectsSection, ProcessSection, CtaSection } from './sections';

/***************************  HOME PAGE  ***************************/

export default function HomePage() {
  useDataThemeMode();
  const { t } = useTranslation();

  // Prepare slides with translated text
  const slides = heroSlides.map((slide) => ({
    image: slide.image,
    title: t(slide.titleKey),
    description: t(slide.descriptionKey)
  }));

  return (
    <Stack spacing={0}>
      {/* Hero Slideshow */}
      <HeroSlideshow slides={slides} height={{ xs: 400, sm: 500, md: 600 }} showText={true} />

      {/* Services Section */}
      <ServicesSection services={services} heading="home.services.heading" caption="home.services.caption" t={t} />

      {/* Stats Section */}
      {/* <StatsSection stats={stats} t={t} /> */}

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={projects} heading="home.projects.heading" caption="home.projects.caption" t={t} />

      {/* Process Section */}
      {/* <ProcessSection steps={processSteps} heading="home.process.heading" caption="home.process.caption" t={t} /> */}

      {/* CTA Section */}
      {/* <CtaSection heading="home.cta.heading" description="home.cta.description" buttonText="home.cta.button" t={t} /> */}
    </Stack>
  );
}
