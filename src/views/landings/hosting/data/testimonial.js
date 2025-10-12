// @project
import { DynamicComponentType } from '@/enum';

/***************************  TESTIMONIAL 6 - DATA  ***************************/

export const testimonial = {
  heading: 'Real Stories, Real Results',
  caption: 'Get inspired by real stories of success and achievement from our valued clients. ',
  testimonials: [
    {
      title: 'Thanks for the service!',
      image: { component: 'testimonial/Twitch', type: DynamicComponentType.IMAGE },
      review: `As a small business owner, finding a reliable hosting platform was crucial for my online presence. I'm so glad I found this platform. It's easy to use, and my website has never experienced any downtime.`,
      profile: { avatar: '/assets/images/user/avatar2.png', name: 'John Smith', role: 'Small Business Owner' }
    },
    {
      title: 'Highly recommended!',
      image: { component: 'testimonial/GoogleImg', type: DynamicComponentType.IMAGE },
      review: `I've tried various hosting platforms in the past, but none have matched the level of service and support provided by this platform. The integration options are fantastic, and the performance is top-notch.`,
      profile: { avatar: '/assets/images/user/avatar1.png', name: 'Emily Davis', role: 'Digital Marketer' }
    }
  ]
};
