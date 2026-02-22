// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  LAYOUT - DEFAULT  ***************************/

export default function DefaultLayout({ children }) {
  return (
    <MainLayout>
      {children}
      <ScrollFab />
    </MainLayout>
  );
}
