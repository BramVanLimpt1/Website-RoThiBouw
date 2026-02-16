'use client';

// @project
import { Project2 } from '@/blocks/projects';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { projects, projectCategories } from './data';

/***************************  PROJECTS OVERVIEW PAGE  ***************************/

export default function ProjectsPage() {
  useDataThemeMode();

  return (
    <Project2
      heading="projects.heading"
      caption="projects.caption"
      projects={projects}
      categories={projectCategories}
    />
  );
}
