// @next
import dynamic from 'next/dynamic';

// @project
const TermsConditionsPage = dynamic(() => import('@/views/pages/terms-conditions'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Terms & Conditions'
};

/***************************  PAGE - TERMS & CONDITIONS  ***************************/

export default function TermsConditions() {
  return <TermsConditionsPage />;
}
