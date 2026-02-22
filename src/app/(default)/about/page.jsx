// @next
import dynamic from 'next/dynamic';

// @project
const AboutPage = dynamic(() => import('@/views/pages/about'));

/***************************  METADATA - ABOUT  ***************************/

export const metadata = {
  title: 'About Us'
};

/***************************  PAGE - ABOUT  ***************************/

export default function About() {
  return <AboutPage />;
}
