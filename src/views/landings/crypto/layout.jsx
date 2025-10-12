import PropTypes from 'prop-types';
// @project
import { Footer2 } from '@/blocks/footer';
import { Navbar2 } from '@/blocks/navbar';
import { NavbarContent2 } from '@/blocks/navbar/navbar-content';
import ThemeCustomization from './theme';

// @data
import { navbar } from './data';

// @types

/***************************  LAYOUT - CRYPTO  ***************************/

export default function CryptoLayout({ children }) {
  return (
    <ThemeCustomization>
      <>
        {/* header section */}
        <Navbar2>
          <NavbarContent2 {...navbar} />
        </Navbar2>

        {children}

        {/* footer section */}
        <Footer2 />
      </>
    </ThemeCustomization>
  );
}

CryptoLayout.propTypes = { children: PropTypes.any };
