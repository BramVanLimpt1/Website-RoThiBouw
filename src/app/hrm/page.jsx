// @next
import dynamic from 'next/dynamic';

// @project
const HRM = dynamic(() => import('@/views/landings/hrm'));

/***************************  PAGE - HRM  ***************************/

export default function HRMPage() {
  return <HRM />;
}
