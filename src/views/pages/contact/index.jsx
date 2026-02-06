'use client';

// @project
import ContactUs4 from '@/blocks/contact-us/ContactUs4';
import useDataThemeMode from '@/hooks/useDataThemeMode';
import { contactData } from './data';

/***************************  CONTACT PAGE  ***************************/

export default function ContactPage() {
  useDataThemeMode();

  return <ContactUs4 {...contactData} />;
}
