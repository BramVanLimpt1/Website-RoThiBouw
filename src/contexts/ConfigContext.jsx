'use client';
import PropTypes from 'prop-types';

// @react
import { createContext } from 'react';

// @project
import defaultConfig from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

// @initial
const initialState = {
  ...defaultConfig,
  onChangeThemeDirection: () => {},
  onChangeThemeMode: () => {},
  onChangeLanguage: () => {}
};

/***************************  CONFIG CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('sass-able-react-mui-next-ts', initialState);

  const onChangeThemeDirection = (direction) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeThemeMode = (mode) => {
    setConfig({
      ...config,
      mode
    });
  };

  const onChangeLanguage = (language) => {
    setConfig({
      ...config,
      language
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeThemeDirection,
        onChangeThemeMode,
        onChangeLanguage
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };

ConfigProvider.propTypes = { children: PropTypes.any };
