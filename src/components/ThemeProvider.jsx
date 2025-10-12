import PropTypes from 'prop-types';
import { Suspense } from 'react';

// @next
import dynamic from 'next/dynamic';

// @project
import Loader from './Loader';
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';

// @types

// @ui-themes
const ThemeAI = dynamic(() => import(`@/views/landings/ai/theme`));
const ThemeCRM = dynamic(() => import(`@/views/landings/crm/theme`));
const ThemeHosting = dynamic(() => import(`@/views/landings/hosting/theme`));

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProvider({ children }) {
  const { currentTheme } = useConfig();

  return (
    <Suspense fallback={<Loader />}>
      {(() => {
        switch (currentTheme) {
          case Themes.THEME_CRM:
            return <ThemeCRM>{children}</ThemeCRM>;
          case Themes.THEME_HOSTING:
            return <ThemeHosting>{children}</ThemeHosting>;
          case Themes.THEME_AI:
          default:
            return <ThemeAI>{children}</ThemeAI>; // Or a default theme/component if needed
        }
      })()}
    </Suspense>
  );
}

ThemeProvider.propTypes = { children: PropTypes.any };
