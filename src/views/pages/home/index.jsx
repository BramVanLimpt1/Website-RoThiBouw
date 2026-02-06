'use client';

// @mui
import Stack from '@mui/material/Stack';

// @project
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import ContactUs3 from '@/blocks/contact-us/ContactUs3';

// @data
import { heroSlides, servicesData, stats, processSteps } from './data';
import { projects } from '../projects/data';

// @sections
import { StatsSection, FeaturedProjectsSection, ProcessSection, CtaSection } from './sections';

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
      <ContactUs3 {...servicesData} />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection projects={projects} heading="home.projects.heading" caption="home.projects.caption" t={t} />
    </Stack>
  );
}
