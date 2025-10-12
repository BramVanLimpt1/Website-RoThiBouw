import PropTypes from 'prop-types';
// @project
import { Footer6 } from '@/blocks/footer';
import { Navbar6 } from '@/blocks/navbar';
import { NavbarContent6 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types

/***************************  LAYOUT - PLUGIN  ***************************/

export default function PluginLayout({ children }) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar6>
          <NavbarContent6 {...navbar} />
        </Navbar6>

        {children}

        {/* footer section */}
        <Footer6 />
      </>
    </ThemeCustomization>
  );
}

PluginLayout.propTypes = { children: PropTypes.any };
