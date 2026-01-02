'use client';

// @project
import { AboutStory } from '@/blocks/about';
import { Feature5, Feature8 } from '@/blocks/feature';
import { Team2Members } from '@/blocks/team';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import useTranslation from '@/hooks/useTranslation';
import { teamMembers, companyValues, storySections, timelineMilestones } from './data';

/***************************  ABOUT PAGE  ***************************/

export default function AboutPage() {
  useDataThemeMode();
  const { t } = useTranslation();

  // Company story section (alternating images and text)
  const storyData = {
    heading: t('about.story.heading'),
    caption: t('about.story.caption'),
    sections: storySections.map((section) => ({
      title: t(section.title),
      description: t(section.description),
      image: section.image
    }))
  };

  // Company timeline/milestones
  const timelineData = {
    heading: t('about.timeline.heading'),
    caption: t('about.timeline.caption'),
    cards: timelineMilestones.map((milestone) => ({
      icon: milestone.icon,
      title: t(milestone.title),
      description: t(milestone.description),
      image: milestone.image
    }))
  };

  // Company values section
  const valuesData = {
    heading: t('about.values.heading'),
    caption: t('about.values.caption'),
    features: companyValues.map((value) => ({
      icon: value.icon,
      title: t(value.title),
      description: t(value.description)
    }))
  };

  // Team section
  const teamData = {
    heading: t('about.team.heading'),
    caption: t('about.team.caption'),
    members: teamMembers
  };

  return (
    <>
      <AboutStory {...storyData} />
      <Feature8 {...timelineData} />
      <Feature5 {...valuesData} />
      <Team2Members {...teamData} />
    </>
  );
}
