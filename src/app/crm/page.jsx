// @next
import dynamic from 'next/dynamic';

// @project
const CRM = dynamic(() => import('@/views/landings/crm'));

/***************************  PAGE - CRM  ***************************/

export default function CRMPage() {
  return <CRM />;
}
