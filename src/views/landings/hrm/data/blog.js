const blogImagePath = '/assets/images/blog';

export const blog = {
  heading: 'Resources for Strategic Growth',
  caption: 'Explore the latest trends, tips, and best practices in HR and workforce management.',
  blogs: [
    {
      image: `${blogImagePath}/blog1.png`,
      caption: 'Navigating the Digital Highway: Technology Trends Reshaping the Trucking Industry',
      chips: ['Technology'],
      link: { href: '#' },
      date: '24 Jan 2024'
    },
    {
      image: `${blogImagePath}/blog6.png`,
      caption: 'Sustainable Practices: The Future of Eco-Friendly Supply Chains',
      chips: ['Business', 'Productivity'],
      link: { href: '#' },
      date: '12 Feb 2024'
    },
    {
      image: `${blogImagePath}/blog4.jpg`,
      caption: 'Harnessing the Power of AI: Innovations in the Logistics Sector',
      chips: ['Business', 'AI'],
      link: { href: '#' },
      date: '19 Feb 2024'
    },
    {
      image: `${blogImagePath}/blog2.jpg`,
      caption: 'Global Trade Dynamics: Exploring New Markets and Opportunities',
      chips: ['Trade', 'Market'],
      link: { href: '#' },
      date: '26 Feb 2024'
    }
  ],
  exploreMore: { children: 'Explore All Blog' }
};
