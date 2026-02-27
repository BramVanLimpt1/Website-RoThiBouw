// Project detail page configuration for LazySection

export const createProjectDetailSections = (project) => {
  if (!project) return [];

  const sections = [];

  // 1. Page heading
  sections.push({
    importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectHeader })),
    props: {
      titleKey: project.titleKey,
      subtitleKey: project.subtitleKey
    }
  });

  // 2. Project Image Slideshow
  if (project.images && project.images.length > 0) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectSlideshow })),
      props: {
        images: project.images,
        alt: project.titleKey
      }
    });
  }

  // 2. Primary Section - Primary Info + Short Description
  if (project.primaryInfo && project.primaryInfo.length > 0 && project.shortDescriptionKey) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectSpecsDescription })),
      props: {
        specifications: project.primaryInfo,
        descriptionKey: project.shortDescriptionKey,
        specsTitleKey: 'projects.information'
      }
    });
  }

  // 3. Secondary Section - Secondary Info + Full Description
  if (project.secondaryInfo && project.secondaryInfo.length > 0 && project.descriptionKey) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectSpecsDescription })),
      props: {
        specifications: project.secondaryInfo,
        descriptionKey: project.descriptionKey,
        specsTitleKey: 'projects.additionalInfo',
        reverse: true
      }
    });
  }

  // 4. Testimonial / Review
  if (project.testimonial && (project.testimonial.review || project.testimonial.reviewKey)) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.SimpleTestimonial })),
      props: {
        name: project.testimonial.name,
        review: project.testimonial.review,
        reviewKey: project.testimonial.reviewKey,
        rating: project.testimonial.rating
      }
    });
  }

  return sections;
};
