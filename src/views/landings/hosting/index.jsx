'use client';

// @project
import { Clientele5 } from '@/blocks/clientele';
import { Hero11 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { benefit, blog, clientele, cta, faq, feature8, feature20, hero, integration, pricing, process, testimonial } from './data';

/***************************  LANDING - HOSTING  ***************************/

export default function Hosting() {
  useDataThemeMode();

  return (
    <>
      <Hero11 {...hero} />
      <Clientele5 {...clientele} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature8 })), props: feature8 },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature20 })), props: feature20 },
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/process').then((module) => ({ default: module.Process7 })), props: process },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration3 })), props: integration },
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial6 })), props: testimonial }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta8 })), props: cta },
          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing5 })), props: pricing },
          { importFunc: () => import('@/blocks/blog').then((module) => ({ default: module.Blog5 })), props: blog },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
