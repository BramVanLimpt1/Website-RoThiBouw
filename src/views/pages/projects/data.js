// Projects data configuration
export const projects = [
  {
    id: 'houten-overkapping-terrasvloer',
    slug: 'houten-overkapping-terrasvloer',
    titleKey: 'projects.items.project1.title',
    descriptionKey: 'projects.items.project1.description',
    category: 'buitenconstructies',
    year: 2024,
    location: 'Haag Munste',
    images: ['/assets/projects/project1-1.jpg', '/assets/projects/project1-2.jpg'],
    thumbnail: '/assets/projects/project1-thumb.jpg',
    specifications: {
      material: 'Eikenhout',
      surfaceArea: '~25m²',
      executionTime: '3 weken',
      warranty: '10 jaar'
    },
    detailDescriptionKey: 'projects.items.project1.detailDescription',
    activities: [
      'projects.items.project1.activities.activity1',
      'projects.items.project1.activities.activity2',
      'projects.items.project1.activities.activity3',
      'projects.items.project1.activities.activity4',
      'projects.items.project1.activities.activity5'
    ]
  },
  {
    id: 'moderne-aanbouw-houtbekleding',
    slug: 'moderne-aanbouw-houtbekleding',
    titleKey: 'projects.items.project2.title',
    descriptionKey: 'projects.items.project2.description',
    category: 'aanbouw-renovatie',
    year: 2024,
    location: 'Location',
    images: ['/assets/projects/project2-1.jpg', '/assets/projects/project2-2.jpg'],
    thumbnail: '/assets/projects/project2-thumb.jpg',
    specifications: {
      material: 'Hout',
      surfaceArea: '~40m²',
      executionTime: '4 weken',
      warranty: '10 jaar'
    },
    detailDescriptionKey: 'projects.items.project2.detailDescription',
    activities: [
      'projects.items.project2.activities.activity1',
      'projects.items.project2.activities.activity2',
      'projects.items.project2.activities.activity3'
    ]
  }
];

// Project categories
export const projectCategories = [
  {
    id: 'all',
    labelKey: 'projects.categories.all'
  },
  {
    id: 'buitenconstructies',
    labelKey: 'projects.categories.buitenconstructies'
  },
  {
    id: 'aanbouw-renovatie',
    labelKey: 'projects.categories.aanbouwRenovatie'
  },
  {
    id: 'dakwerken',
    labelKey: 'projects.categories.dakwerken'
  },
  {
    id: 'renovatie',
    labelKey: 'projects.categories.renovatie'
  }
];
