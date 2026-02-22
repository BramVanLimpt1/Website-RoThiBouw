// @next
import dynamic from 'next/dynamic';

// @project
const ProjectsPage = dynamic(() => import('@/views/pages/projects'));

/***************************  METADATA  ***************************/

export const metadata = {
  title: 'Projects'
};

/***************************  PAGE - PROJECTS  ***************************/

export default function Projects() {
  return <ProjectsPage />;
}
