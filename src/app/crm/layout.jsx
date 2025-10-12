import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const CRMLayout = dynamic(() => import('@/views/landings/crm/layout'));

/***************************  LAYOUT - CRM  ***************************/

export default function CRM({ children }) {
  return (
    <CRMLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </CRMLayout>
  );
}

CRM.propTypes = { children: PropTypes.any };
