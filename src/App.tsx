import React from 'react';

import Particles from 'react-particles-js';
import Routes from './routes';
import GloablStyles from './styles/global';

import { UserNameProvider } from './hooks/userName';

const App: React.FC = () => {
  return (
    <>
      <UserNameProvider>
        <Routes />
        <GloablStyles />
        <Particles
          /* style={{position: "fixed",
        width: '100%',
        height: '100%',
        z-index: '10',
        pointer-events: 'none'}} */
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
            background: {
              color: {
                value: '#000',
              },
            },
          }}
        />
      </UserNameProvider>
    </>
  );
};

export default App;
