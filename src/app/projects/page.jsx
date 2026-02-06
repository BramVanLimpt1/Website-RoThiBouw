// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const ProjectsPage = dynamic(() => import('@/views/pages/projects'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Projects'
};

/***************************  PAGE - PROJECTS  ***************************/

export default function Projects() {
  return (
    <MainLayout>
      <ProjectsPage />
      <ScrollFab />
    </MainLayout>
  );
}
