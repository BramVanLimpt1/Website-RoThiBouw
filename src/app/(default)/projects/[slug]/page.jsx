// @next
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// @project
const ProjectDetailPage = dynamic(() => import('@/views/pages/project-detail'));

// Import projects data
import { projects } from '@/data/projects';

/***************************  GENERATE STATIC PARAMS  ***************************/

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

/***************************  GENERATE METADATA  ***************************/

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
