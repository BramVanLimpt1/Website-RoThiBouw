import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const CryptoLayout = dynamic(() => import('@/views/landings/crypto/layout'));

/***************************  LAYOUT - CRYPTO  ***************************/

export default function Crypto({ children }) {
  return (
    <CryptoLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </CryptoLayout>
  );
}

Crypto.propTypes = { children: PropTypes.any };
