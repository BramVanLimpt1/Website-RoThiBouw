//@project
const baseUrl = process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000';

const routes = [
  { url: '', priority: 1 } // Home page
];

/***************************  SITEMAP  ***************************/

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    priority: route.priority
  }));
}
