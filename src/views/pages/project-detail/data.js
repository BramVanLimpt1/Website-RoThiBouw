// Project detail page configuration for LazySection

export const createProjectDetailSections = (project) => {
  if (!project) return [];

  const sections = [];

  // Page heading
  sections.push({
    importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectHeader })),
    props: {
      titleKey: project.titleKey,
      subtitleKey: project.subtitleKey
    }
  });

  // Project Image Gallery1
  if (project.images && project.images.length > 0) {
    sections.push({
      importFunc: () => import('@/blocks/gallery/Gallery1').then((module) => ({ default: module.default })),
      props: {
        images: project.images
      }
    });
  }

  // 2. Primary Section - Primary Info + Short Description (pull-quote style)
  if (project.primaryInfo && project.primaryInfo.length > 0 && project.shortDescriptionKey) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectSpecsDescription })),
      props: {
        specifications: project.primaryInfo,
        descriptionKey: project.shortDescriptionKey,
        specsTitleKey: 'projects.information',
        overlineKey: 'projects.aboutProject',
        descriptionHighlight: true
      }
    });
  }

  // 3. Secondary Section - Full Description + Secondary Info as highlight cards
  if (project.secondaryInfo && project.secondaryInfo.length > 0 && project.descriptionKey) {
    sections.push({
      importFunc: () => import('@/blocks/project').then((module) => ({ default: module.ProjectSpecsDescription })),
      props: {
        specifications: project.secondaryInfo,
        descriptionKey: project.descriptionKey,
        reverse: true,
        specsAsCards: true
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
