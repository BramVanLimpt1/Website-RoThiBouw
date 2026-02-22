// @next
import dynamic from 'next/dynamic';

// @project
const HomePage = dynamic(() => import('@/views/pages/home'));

/***************************  PAGE - ROOT  ***************************/

export default function RootPage() {
  return <HomePage />;
}
