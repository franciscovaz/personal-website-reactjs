import React, { useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Routes from './routes';
import GloablStyles from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';
import SwitchComponent from './components/Switch';

import usePersistedState from './utils/usePersistedState';

import { UserNameProvider } from './hooks/userName';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }, [setTheme, theme.title]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <UserNameProvider>
          <Routes />
          <GloablStyles />
        </UserNameProvider>
        <SwitchComponent toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
};

export default App;
