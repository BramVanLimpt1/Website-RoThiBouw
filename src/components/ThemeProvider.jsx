import PropTypes from 'prop-types';
import { Suspense } from 'react';

// @next
import dynamic from 'next/dynamic';

// @project
import Loader from './Loader';

// @theme
const Theme = dynamic(() => import(`@/theme`));

/***************************  AI THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>{children}</Theme>
    </Suspense>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
