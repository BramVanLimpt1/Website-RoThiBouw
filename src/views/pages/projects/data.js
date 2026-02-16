import { Subtitle } from "iconsax-react";

// Projects data configuration
export const projects = [
  {
    id: 'houten-overkapping-terrasvloer',
    slug: 'houten-overkapping-terrasvloer',
    titleKey: 'projects.items.project1.title',
    subtitleKey: 'projects.items.project1.subtitle',
    shortDescriptionKey: 'projects.items.project1.shortDescription',
    descriptionKey: 'projects.items.project1.description',
    category: 'buitenconstructies',
    year: 2024,
    location: 'Haag Munste',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', labelKey: 'Location', value: 'Haag Munste' },
      { icon: 'tabler-calendar', labelKey: 'Year', value: '2024' },
      { icon: 'tabler-folder', labelKey: 'Category', value: 'Buitenconstructies' }
    ],
    specifications: [
      { icon: 'tabler-hammer', labelKey: 'Material', value: 'Eikenhout' },
      { icon: 'tabler-ruler', labelKey: 'Surface Area', value: '~25m²' },
      { icon: 'tabler-clock', labelKey: 'Execution Time', value: '3 weken' },
      { icon: 'tabler-shield-check', labelKey: 'Warranty', value: '10 jaar' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Duurzaam ontwerp' },
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Weerbestendig' },
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Onderhoudsvriendelijk' }
    ],
    testimonial: {
      name: 'John Doe',
      reviewKey: 'project.review',
    }
  },
  {
    id: 'moderne-aanbouw-houtbekleding',
    slug: 'moderne-aanbouw-houtbekleding',
    titleKey: 'projects.items.project2.title',
    subtitleKey: 'projects.items.project2.subtitle',
    shortDescriptionKey: 'projects.items.project2.shortDescription',
    descriptionKey: 'projects.items.project2.description',
    category: 'aanbouw-renovatie',
    year: 2024,
    location: 'Amsterdam',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', labelKey: 'Location', value: 'Amsterdam' },
      { icon: 'tabler-calendar', labelKey: 'Year', value: '2024' },
      { icon: 'tabler-folder', labelKey: 'Category', value: 'Aanbouw & Renovatie' }
    ],
    specifications: [
      { icon: 'tabler-hammer', labelKey: 'Material', value: 'Hout' },
      { icon: 'tabler-ruler', labelKey: 'Surface Area', value: '~40m²' },
      { icon: 'tabler-clock', labelKey: 'Execution Time', value: '4 weken' },
      { icon: 'tabler-shield-check', labelKey: 'Warranty', value: '10 jaar' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Moderne architectuur' },
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Energieefficiënt' },
      { icon: 'tabler-check', labelKey: 'Feature', value: 'Milieuvriendelijk' }
    ],
    testimonial: {
      name: 'Jane Smith',
      reviewKey: 'project.review',
      rating: 5
    }
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
