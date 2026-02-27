// Source of truth for all project data.
// Import from here in any file that needs project data.

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
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Haag Munste' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2024' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Buitenconstructies' }
    ],
    specifications: [
      { icon: 'tabler-hammer', label: 'Materiaal', value: 'Eikenhout' },
      { icon: 'tabler-ruler', label: 'Oppervlakte', value: '~25m²' },
      { icon: 'tabler-clock', label: 'Uitvoeringstijd', value: '3 weken' },
      { icon: 'tabler-shield-check', label: 'Garantie', value: '10 jaar' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Duurzaam ontwerp' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Weerbestendig' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Onderhoudsvriendelijk' }
    ],
    testimonial: {
      name: 'John Doe',
      reviewKey: 'projects.items.project1.review'
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
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Amsterdam' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2024' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Aanbouw & Renovatie' }
    ],
    specifications: [
      { icon: 'tabler-hammer', label: 'Materiaal', value: 'Hout' },
      { icon: 'tabler-ruler', label: 'Oppervlakte', value: '~40m²' },
      { icon: 'tabler-clock', label: 'Uitvoeringstijd', value: '4 weken' },
      { icon: 'tabler-shield-check', label: 'Garantie', value: '10 jaar' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Moderne architectuur' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Energieefficiënt' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Milieuvriendelijk' }
    ],
    testimonial: {
      name: 'Jane Smith',
      reviewKey: 'projects.items.project2.review',
      rating: 5
    }
  }
];
