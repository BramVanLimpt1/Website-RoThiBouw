'use client';

// @mui
import Stack from '@mui/material/Stack';

// @project
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { About4 } from '@/blocks/about';
import ContactUs3 from '@/blocks/contact-us/ContactUs3';
import { Project1 } from '@/blocks/projects';

// @data
import { heroSlides, servicesData, aboutTeaserData } from './data';
import { projects } from '../projects/data';

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

      {/* About Us Teaser */}
      <About4 {...aboutTeaserData} />

      {/* Featured Projects Section */}
      <Project1 heading="home.projects.heading" caption="home.projects.caption" projects={projects} />
    </Stack>
  );
}
