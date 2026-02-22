// @next
import dynamic from 'next/dynamic';

// @project
const TermsConditionPage = dynamic(() => import('@/views/pages/terms-condition'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Terms & Conditions'
};

/***************************  PAGE - TERMS & CONDITIONS  ***************************/

export default function TermsCondition() {
  return <TermsConditionPage />;
}
