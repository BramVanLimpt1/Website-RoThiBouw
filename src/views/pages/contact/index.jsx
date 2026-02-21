'use client';

// @project
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { contactData } from './data';

/***************************  CONTACT PAGE  ***************************/

export default function ContactPage() {
  useDataThemeMode();

  return (
    <LazySection
      sections={{
        importFunc: () => import('@/blocks/contact-us').then((module) => ({ default: module.ContactUs4 })),
        props: contactData
      }}
      offset="200px"
    />
  );
}
