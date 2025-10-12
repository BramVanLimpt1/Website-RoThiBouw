// @project
import branding from '@/branding.json';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName} ${branding.title}`;
const description = `${branding.brandName} is a cutting-edge software solution designed to revolutionize the way businesses operate. Our platform offers a comprehensive suite of features that enable businesses to streamline their operations, enhance productivity, and drive growth. With ${branding.brandName}, businesses can easily manage their customers, track sales, optimize marketing campaigns, and streamline their internal processes. Whether you're a startup or a large enterprise, ${branding.brandName} has the tools and expertise to help you succeed in today's fast-paced business landscape. Join the ${branding.brandName} community and experience the power of innovative software solutions for business success`;

const ogCommonMetadata = {
  locale: 'en_US',
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
  keywords: [
    'SaaS',
    `${branding.brandName}`,
    'Software as a Service',
    'Cloud-based software',
    'Project management tools',
    'Enterprise software'
  ],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title,
    description,
    url: '/',
    ...ogCommonMetadata
  }
};
