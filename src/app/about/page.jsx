// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const AboutPage = dynamic(() => import('@/views/pages/about'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  METADATA - ABOUT  ***************************/

export const metadata = {
  title: 'About Us'
};

/***************************  PAGE - ABOUT  ***************************/

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
      <ScrollFab />
    </MainLayout>
  );
}
