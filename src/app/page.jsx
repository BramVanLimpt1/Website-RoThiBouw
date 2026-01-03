// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const HomePage = dynamic(() => import('@/views/pages/home'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  PAGE - ROOT  ***************************/

export default function RootPage() {
  return (
    <MainLayout>
      <HomePage />
      <ScrollFab />
    </MainLayout>
  );
}
