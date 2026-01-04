'use client';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

// @mui
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// @third-party
import rtlPlugin from 'stylis-plugin-rtl';

// @project
import { ThemeDirection } from '@/config';

import useConfig from '@/hooks/useConfig';

/***************************  RTL LAYOUT  ***************************/

/**
 * RTLLayout Component
 * 
 * A layout component that sets up right-to-left (RTL) text direction for its children.
 * It uses Emotion's CacheProvider to apply RTL styling when the theme direction is set to RTL.
 * The document's `dir` attribute is also updated accordingly.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The child components to render within the RTL layout
 * 
 * @returns {JSX.Element} A CacheProvider wrapping the children with appropriate RTL settings
 * 
 * @example
 * // Usage of RTLLayout
 * <RTLLayout>
 *   <YourComponent />
 * </RTLLayout>
 */
export default function RTLLayout({ children }) {
  const { themeDirection } = useConfig();

  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  const cacheRtl = createCache({
    key: themeDirection === ThemeDirection.RTL ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: themeDirection === ThemeDirection.RTL ? [rtlPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

RTLLayout.propTypes = { children: PropTypes.any };
