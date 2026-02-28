export const projects = [
  {
    // General project info
    id: 'project-1',
    slug: 'project-1',
    category: 'dakwerken',
    year: 2026,
    location: 'Hooge Mierde',
    // Header info
    titleKey: 'projects.items.project1.title',
    subtitleKey: 'projects.items.project1.subtitle',
    // Gallery info
    images: [
      '/assets/projects/project1/hero.jpeg',
      '/assets/projects/project1/image_2.jpeg',
      '/assets/projects/project1/image_3.jpeg',
      '/assets/projects/project1/image_1.jpeg'
    ],
    thumbnail: '/assets/projects/project1/hero.jpeg',
    // Description info
    detailDescriptionKey: 'projects.items.project1.detailDescription',
    // Project information
    projectInformationDescriptionKey: 'projects.items.project1.projectInformationDescription',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Hooge Mierde' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2026' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Dakwerken' }
    ],
    // Review/Testimonial info
    testimonial: {
      name: '...',
      reviewKey: 'projects.items.project1.review'
    }
  },
  {
    id: 'project-2',
    slug: 'project-2',
    titleKey: 'projects.items.project2.title',
    subtitleKey: 'projects.items.project2.subtitle',
    projectInformationDescriptionKey: 'projects.items.project2.projectInformationDescription',
    category: 'timmerwerk',
    year: 2026,
    location: 'Reusel',
    images: [
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png',
      '/assets/temp/placeholder.png'
    ],
    thumbnail: '/assets/temp/placeholder.png',
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
    projectInformationDescriptionKey: 'projects.items.project3.projectInformationDescription',
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
    projectInformationDescriptionKey: 'projects.items.project4.projectInformationDescription',
    category: 'verduurzaming',
    year: 2025,
    location: 'Eindhoven',
    images: ['/assets/home/image_1.jpg', '/assets/home/image_2.jpg'],
    thumbnail: '/assets/home/image_3.jpg',
    primaryInfo: [
      { icon: 'tabler-map-pin', label: 'Locatie', value: 'Eindhoven' },
      { icon: 'tabler-calendar', label: 'Jaar', value: '2025' },
      { icon: 'tabler-folder', label: 'Categorie', value: 'Verduurzaming' }
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
    projectInformationDescriptionKey: 'projects.items.project5.projectInformationDescription',
    category: 'houtConstructies',
    year: 2024,
    location: 'Breda',
    images: ['/assets/temp/placeholder.png', '/assets/temp/placeholder.png'],
    thumbnail: '/assets/temp/placeholder.png',
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
