// @next
import dynamic from 'next/dynamic';

// @project
const Plugin = dynamic(() => import('@/views/landings/plugin'));

/***************************  PAGE - PLUGIN  ***************************/

export default function AIPage() {
  return <Plugin />;
}
