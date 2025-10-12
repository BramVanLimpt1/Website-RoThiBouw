'use client';

// @project
import { Clientele1 } from '@/blocks/clientele';
import { Hero1 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { benefit, blog, clientele, cta, faq, feature1, feature9, hero, integration, pricing, process } from './data';

/***************************  LANDING - CRM  ***************************/

export default function CRM() {
  useDataThemeMode();

  return (
    <>
      <Hero1 {...hero} />
      <Clientele1 {...clientele} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit1 })), props: benefit },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature1 })), props: feature1 },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature9 })), props: feature9 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/process').then((module) => ({ default: module.Process1 })), props: process },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration1 })), props: integration },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta1 })), props: cta }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing1 })), props: pricing },
          { importFunc: () => import('@/blocks/blog').then((module) => ({ default: module.Blog1 })), props: blog },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq1 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
