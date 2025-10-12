import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const PMSLayout = dynamic(() => import('@/views/landings/pms/layout'));

/***************************  LAYOUT - PMS  ***************************/

export default function PMS({ children }) {
  return (
    <PMSLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </PMSLayout>
  );
}

PMS.propTypes = { children: PropTypes.any };
