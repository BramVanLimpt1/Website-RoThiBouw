// @next
import dynamic from 'next/dynamic';

// @project
const ContactPage = dynamic(() => import('@/views/pages/contact'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Contact'
};

/***************************  PAGE - CONTACT  ***************************/

export default function Contact() {
  return <ContactPage />;
}
