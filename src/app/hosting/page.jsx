// @next
import dynamic from 'next/dynamic';

// @project
const Hosting = dynamic(() => import('@/views/landings/hosting'));

/***************************  PAGE - HOSTING  ***************************/

export default function HostingPage() {
  return <Hosting />;
}
