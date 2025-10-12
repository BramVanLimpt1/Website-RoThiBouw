// @project
import { Blog2 } from '@/blocks/blog';

/***************************  BLOG 2 - DATA  ***************************/

const data = {
  heading: 'Resource Center',
  caption: 'Discover the features that will transform your customer relationships',
  blogs: [
    {
      image: '/assets/images/blog/blog1.png',
      caption: 'The power of SaaS and how it can revolutionize.',
      link: { href: '#' }
    },
    {
      image: '/assets/images/blog/blog6.png',
      caption: 'Navigating the Future of AI and Machine Learning.',
      link: { href: '#' }
    },
    {
      image: '/assets/images/blog/blog4.jpg',
      caption: 'Best Practices for Scaling Your Startup.',
      link: { href: '#' }
    },
    {
      image: '/assets/images/blog/blog2.jpg',
      caption: 'Crafting a Customer-Centric Content Strategy.',
      link: { href: '#' }
    },
    {
      image: '/assets/images/blog/blog5.png',
      caption: 'Optimizing Sales Processes with Data-Driven Insights.',
      link: { href: '#' }
    },
    {
      image: '/assets/images/blog/blog3.jpg',
      caption: 'Designing User Experiences That Delight Customers.',
      link: { href: '#' }
    }
  ]
};

/***************************  BLOCK - BLOG 2  ***************************/

export default function BlockBlog2() {
  return <Blog2 {...data} />;
}
