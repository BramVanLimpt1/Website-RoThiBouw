import PropTypes from 'prop-types';
// @project
import { Footer5 } from '@/blocks/footer';
import { Navbar3 } from '@/blocks/navbar';
import { NavbarContent3 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types

/***************************  LAYOUT - HOSTING  ***************************/

export default function HostingLayout({ children }) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar3>
          <NavbarContent3 {...navbar} />
        </Navbar3>

        {children}

        {/* footer section */}
        <Footer5 />
      </>
    </ThemeCustomization>
  );
}

HostingLayout.propTypes = { children: PropTypes.any };
