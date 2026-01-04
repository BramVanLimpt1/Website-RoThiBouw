import PropTypes from 'prop-types';

import { Suspense } from 'react';

// @next
import dynamic from 'next/dynamic';

// @project
import Loader from './Loader';

// @theme
const Theme = dynamic(() => import(`@/theme`));

/***************************  THEME PROVIDER  ***************************/

/**
 * ThemeProvider Component
 * 
 * Wraps the application with MUI Theme and Suspense for dynamic theming support.
 * Ensures that the theme is loaded before rendering children components.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider
 * @returns {JSX.Element} A Theme component wrapping the children with Suspense
 * 
 * @example
 * // Basic usage
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export default function ThemeProvider({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>{children}</Theme>
    </Suspense>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
