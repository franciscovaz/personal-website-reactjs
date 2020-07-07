import React from 'react';
import Routes from './routes';
import GloablStyles from './styles/global';

import { UserNameProvider } from './hooks/userName';

const App: React.FC = () => {
  return (
    <>
      <UserNameProvider>
        <Routes />
        <GloablStyles />
      </UserNameProvider>
    </>
  );
};

export default App;
