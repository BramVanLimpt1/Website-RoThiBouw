// @next
import dynamic from 'next/dynamic';

// @project
const PMS = dynamic(() => import('@/views/landings/pms'));

/***************************  PAGE - PMS  ***************************/

export default function PMSPage() {
  return <PMS />;
}
