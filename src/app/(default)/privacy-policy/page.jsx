// @next
import dynamic from 'next/dynamic';

// @project
const PrivacyPolicyPage = dynamic(() => import('@/views/pages/privacy-policy'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Privacy Policy'
};

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
