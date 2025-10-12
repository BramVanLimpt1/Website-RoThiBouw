// @project
import { Blog5 } from '@/blocks/blog';

/***************************  BLOG 5 - DATA  ***************************/

const blogImagePath = '/assets/images/blog';

const data = {
  heading: 'Resource Center',
  caption: 'Discover the features that will transform your customer relationships',
  viewMore: { children: 'View All' },
  blogs: [
    {
      image: `${blogImagePath}/blog7.png`,
      caption: 'Global Trade Dynamics: Exploring New Markets and Opportunities',
      link: { href: '#' },
      date: '28 Jan 2024 · 8 Min Read'
    },
    {
      image: `${blogImagePath}/blog8.png`,
      caption: 'The power of SaaS and how it can revolutionize.',
      link: { href: '#' },
      date: '10 Feb 2024 · 3 Min Read'
    },
    {
      image: '/assets/images/graphics/ai/background1.svg',
      caption: 'Maximize Efficiency and Productivity Compression with Our Comprehensive CRM Solution',
      link: { href: '#' },
      date: '25 Feb 2024 · 10 Min Read'
    }
  ]
};

/***************************  BLOCK - BLOG 5  ***************************/

export default function BlockBlog5() {
  return <Blog5 {...data} />;
}
