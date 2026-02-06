// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const TermsConditionPage = dynamic(() => import('@/views/pages/terms-condition'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Terms & Conditions'
};

/***************************  PAGE - TERMS & CONDITIONS  ***************************/

export default function TermsCondition() {
  return (
    <MainLayout>
      <TermsConditionPage />
      <ScrollFab />
    </MainLayout>
  );
}
