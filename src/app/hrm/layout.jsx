import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const HRMLayout = dynamic(() => import('@/views/landings/hrm/layout'));

/***************************  LAYOUT - HRM  ***************************/

export default function HRM({ children }) {
  return (
    <HRMLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </HRMLayout>
  );
}

HRM.propTypes = { children: PropTypes.any };
