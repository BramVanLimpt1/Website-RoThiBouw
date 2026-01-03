// @project
import branding from '@/branding.json';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName} ${branding.title}`;
const description = `${branding.brandName} add description here.`;

const ogCommonMetadata = {
  locale: 'en',
  type: 'website',
  siteName: `${branding.brandName}`,
  images: '' // recommended dimensions of 1200x630
};

export const mainMetadata = {
  title: {
    template: `%s | ${title}`,
    default: title // a default is required when creating a template
  },
  description,
  applicationName: title,
  keywords: [`${branding.brandName}`, 'Timmerwerken', 'Renovatie', 'Dakwerken'],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      {
        url: '/assets/logo/light.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/assets/logo/dark.png',
        media: '(prefers-color-scheme: dark)'
      }
    ],
    apple: '/assets/logo/light.png'
  },
  openGraph: {
    title,
    description,
    url: '/',
    ...ogCommonMetadata
  }
};
