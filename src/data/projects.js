// Source of truth for all project data.
// Import from here in any file that needs project data.

export const projects = [
  {
    id: 'project-1',
    slug: 'project-1',
    titleKey: 'projects.items.project1.title',
    subtitleKey: 'projects.items.project1.subtitle',
    shortDescriptionKey: 'projects.items.project1.shortDescription',
    descriptionKey: 'projects.items.project1.description',
    category: 'dakwerken',
    year: 2026,
    location: 'Hooge Mierde',
    images: [
      '/assets/home/image_1.jpg',
      '/assets/home/image_2.jpg',
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png'
    ],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Hooge Mierde' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2026' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Dakwerken' }
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
    id: 'project-2',
    slug: 'project-2',
    titleKey: 'projects.items.project2.title',
    subtitleKey: 'projects.items.project2.subtitle',
    shortDescriptionKey: 'projects.items.project2.shortDescription',
    descriptionKey: 'projects.items.project2.description',
    category: 'timmerwerk',
    year: 2026,
    location: 'Reusel',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Reusel' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2026' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Timmerwerk' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Moderne architectuur' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Energieefficiënt' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Milieuvriendelijk' }
    ],
    testimonial: {
      name: 'Jane Smith',
      reviewKey: 'projects.items.project2.review'
    }
  },
  {
    id: 'project-3',
    slug: 'project-3',
    titleKey: 'projects.items.project3.title',
    subtitleKey: 'projects.items.project3.subtitle',
    shortDescriptionKey: 'projects.items.project3.shortDescription',
    descriptionKey: 'projects.items.project3.description',
    category: 'renovaties',
    year: 2025,
    location: 'Tilburg',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Tilburg' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2025' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Renovaties' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Historische restauratie' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Authentieke materialen' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Vakmanschap' }
    ],
    testimonial: {
      name: 'Alice Johnson',
      reviewKey: 'projects.items.project3.review'
    }
  },
  {
    id: 'project-4',
    slug: 'project-4',
    titleKey: 'projects.items.project4.title',
    subtitleKey: 'projects.items.project4.subtitle',
    shortDescriptionKey: 'projects.items.project4.shortDescription',
    descriptionKey: 'projects.items.project4.description',
    category: 'verduurzaming',
    year: 2025,
    location: 'Eindhoven',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Eindhoven' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2025' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Verduurzaaming' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Innovatief ontwerp' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Duurzame houtsoorten' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Sterke constructie' }
    ],
    testimonial: {
      name: 'Bob Williams',
      reviewKey: 'projects.items.project4.review'
    }
  },
  {
    id: 'project-5',
    slug: 'project-5',
    titleKey: 'projects.items.project5.title',
    subtitleKey: 'projects.items.project5.subtitle',
    shortDescriptionKey: 'projects.items.project5.shortDescription',
    descriptionKey: 'projects.items.project5.description',
    category: 'houtConstructies',
    year: 2024,
    location: 'Breda',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Breda' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2024' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Hout Constructies' }
    ],
    secondaryInfo: [
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Energiezuinige renovatie' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Zonnepanelen integratie' },
      { icon: 'tabler-check', label: 'Kenmerk', value: 'Isolatie verbetering' }
    ],
    testimonial: {
      name: 'Charlie Brown',
      reviewKey: 'projects.items.project5.review'
    }
  }
];
