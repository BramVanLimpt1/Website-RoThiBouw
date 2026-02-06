// @next
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// @project
const MainLayout = dynamic(() => import('@/views/layouts/main'));
const ProjectDetailPage = dynamic(() => import('@/views/pages/project-detail'));
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));

// Import projects data
import { projects } from '@/views/pages/projects/data';

/***************************  GENERATE STATIC PARAMS  ***************************/

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

/***************************  GENERATE METADATA  ***************************/

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }

  return {
    title: project.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  };
}

/***************************  PAGE - PROJECT DETAIL  ***************************/

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <MainLayout>
      <ProjectDetailPage project={project} />
      <ScrollFab />
    </MainLayout>
  );
}
