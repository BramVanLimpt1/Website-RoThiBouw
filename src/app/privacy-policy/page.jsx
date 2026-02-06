// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const PrivacyPolicyPage = dynamic(() => import('@/views/pages/privacy-policy'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Privacy Policy'
};

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <PrivacyPolicyPage />
      <ScrollFab />
    </MainLayout>
  );
}
