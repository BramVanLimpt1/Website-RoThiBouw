'use client';

// @project
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { teamData, storyData } from './data';

/***************************  ABOUT PAGE  ***************************/

export default function AboutPage() {
  useDataThemeMode();

  return (
    <>
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/team').then((module) => ({ default: module.Team1 })), props: teamData },
          { importFunc: () => import('@/blocks/timeline').then((module) => ({ default: module.TimeLine1 })), props: storyData }
        ]}
        offset="200px"
      />
    </>
  );
}
