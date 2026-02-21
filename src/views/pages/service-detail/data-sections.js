// Service detail page configuration for LazySection
import NextLink from 'next/link';
import { projects } from '@/views/pages/projects/data';
import { serviceProcessSteps, servicesNavigationData } from './data';

export const createServiceDetailSections = (service, t) => {
  if (!service) return [];

  const sections = [];

  // 1. Hero Slideshow
  const heroSlides = [
    {
      image: service.heroImage,
      title: t(service.titleKey)
    }
  ];

  sections.push({
    importFunc: () => import('@/blocks/hero').then((module) => ({ default: module.HeroSlideshow })),
    props: {
      slides: heroSlides,
      height: { xs: 300, sm: 400, md: 500 },
      showText: true
    }
  });

  // 2. Service Description
  sections.push({
    importFunc: () => import('@/blocks/service').then((module) => ({ default: module.ServiceDescription })),
    props: {
      titleKey: service.descriptionTitleKey,
      descriptionKey: service.descriptionKey,
      image: service.descriptionImage
    }
  });

  // 3. Feature List
  const translatedFeatures = service.features.map((featureKey) => t(featureKey));

  sections.push({
    importFunc: () => import('@/blocks/service').then((module) => ({ default: module.ServiceFeatureList })),
    props: {
      features: translatedFeatures,
      image: service.featureImage,
      reverse: true
    }
  });

  // 4. Process Steps
  const translatedProcess = {
    heading: t(serviceProcessSteps.heading),
    caption: t(serviceProcessSteps.caption),
    cards: serviceProcessSteps.cards.map((card) => ({
      ...card,
      title: t(card.title),
      description: t(card.description)
    }))
  };

  sections.push({
    importFunc: () => import('@/blocks/process').then((module) => ({ default: module.Process6 })),
    props: translatedProcess
  });

  // 5. Related Projects (only if exists)
  const relatedProjects = projects.filter((project) => service.relatedCategories.includes(project.category));
  if (relatedProjects.length > 0) {
    sections.push({
      importFunc: () => import('@/blocks/projects').then((module) => ({ default: module.Project1 })),
      props: {
        heading: 'services.relatedProjects.heading',
        caption: 'services.relatedProjects.caption',
        projects: relatedProjects,
        showViewAll: false
      }
    });
  }

  // 6. CTA Block
  sections.push({
    importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta1 })),
    props: {
      heading: t('services.cta.heading'),
      primaryBtn: {
        children: t('services.cta.button'),
        component: NextLink,
        href: '/contact'
      }
    }
  });

  // 7. Services Navigation
  const filteredServicesNavigation = {
    ...servicesNavigationData,
    list: servicesNavigationData.list.filter((item) => item.title !== service.titleKey)
  };

  sections.push({
    importFunc: () => import('@/blocks/contact-us').then((module) => ({ default: module.ContactUs3 })),
    props: filteredServicesNavigation
  });

  return sections;
};
