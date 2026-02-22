// @next
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// @project
const ServiceDetailPage = dynamic(() => import('@/views/pages/service-detail'));

// Import services data
import { services } from '@/views/pages/service-detail/data';

/***************************  GENERATE STATIC PARAMS  ***************************/

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

/***************************  GENERATE METADATA  ***************************/

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: service.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  };
}

/***************************  PAGE - SERVICE DETAIL  ***************************/

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
