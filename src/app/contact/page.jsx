// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const ContactPage = dynamic(() => import('@/views/pages/contact'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Contact'
};

/***************************  PAGE - CONTACT  ***************************/

export default function Contact() {
  return (
    <MainLayout>
      <ContactPage />
      <ScrollFab />
    </MainLayout>
  );
}
