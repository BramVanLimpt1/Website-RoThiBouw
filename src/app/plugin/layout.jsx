import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const PluginLayout = dynamic(() => import('@/views/landings/plugin/layout'));

/***************************  LAYOUT - PLUGIN  ***************************/

export default function Plugin({ children }) {
  return (
    <PluginLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </PluginLayout>
  );
}

Plugin.propTypes = { children: PropTypes.any };
