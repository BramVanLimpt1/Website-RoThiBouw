// Team member data configuration for About page
export const teamMembers = [
  {
    name: 'Roy van Strijdhoven',
    // role: 'Co-Founder & Lead Craftsman',
    avatar: '/assets/profiles/Roy.jpeg',
    phone: '+31612345678', // Add actual phone number
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/roy-van-strijdhoven-aa35a7231/', // Add LinkedIn URL here
      instagram: '',
      facebook: ''
    }
  },
  {
    name: 'Thijs van Gisbergen', // Update with actual name
    // role: 'Co-Founder & Craftsman',
    avatar: '/assets/profiles/placeholder.jpg', // Replace with actual image
    phone: '+31612345678', // Add actual phone number
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/thijs-van-gisbergen-70701226a/', // Add LinkedIn URL here
      instagram: '',
      facebook: ''
    }
  }
];

// Company history data
export const companyHistory = {
  image: '/assets/home/image_1.png', // Add appropriate image
  yearFounded: '2023',
  foundersCount: 2
};

// Company values/features data
export const companyValues = [
  {
    icon: 'tabler-certificate',
    title: 'values.quality.title',
    description: 'values.quality.description'
  },
  {
    icon: 'tabler-users',
    title: 'values.experience.title',
    description: 'values.experience.description'
  },
  {
    icon: 'tabler-award',
    title: 'values.contractor.title',
    description: 'values.contractor.description'
  },
  {
    icon: 'tabler-clock',
    title: 'values.reliability.title',
    description: 'values.reliability.description'
  }
];

// Company story sections (alternating images and text)
export const storySections = [
  {
    title: 'story.section1.title',
    description: 'story.section1.description',
    image: '/assets/home/image_1.png' // Add your image
  },
  {
    title: 'story.section2.title',
    description: 'story.section2.description',
    image: '/assets/home/image_2.png' // Add your image
  }
];

// Company timeline/milestones
export const timelineMilestones = [
  {
    icon: 'tabler-rocket',
    title: 'timeline.founded.title',
    description: 'timeline.founded.description',
    image: '/assets/about/milestone-founded.jpg' // Replace with actual image
  },
  {
    icon: 'tabler-users-group',
    title: 'timeline.team.title',
    description: 'timeline.team.description',
    image: '/assets/about/milestone-team.jpg' // Replace with actual image
  },
  {
    icon: 'tabler-building',
    title: 'timeline.office.title',
    description: 'timeline.office.description',
    image: '/assets/about/milestone-office.jpg' // Replace with actual image
  },
  {
    icon: 'tabler-trophy',
    title: 'timeline.projects.title',
    description: 'timeline.projects.description',
    image: '/assets/about/milestone-100projects.jpg' // Replace with actual image
  },
  {
    icon: 'tabler-certificate',
    title: 'timeline.certification.title',
    description: 'timeline.certification.description',
    image: '/assets/about/milestone-certification.jpg' // Replace with actual image
  }
];
