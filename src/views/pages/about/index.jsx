'use client';

// @project
import { TimeLine1 } from '@/blocks/timeline';
import { Team2Members } from '@/blocks/team';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import { teamData, storyData } from './data';

/***************************  ABOUT PAGE  ***************************/

export default function AboutPage() {
  useDataThemeMode();

  return (
    <>
      <Team2Members {...teamData} />
      <TimeLine1 {...storyData} />
    </>
  );
}
