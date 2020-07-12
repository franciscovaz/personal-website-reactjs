import React, { useCallback, useState, ChangeEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Particles from 'react-tsparticles';
import { ThemeContext } from 'styled-components';
import { Container, Input } from './styles';

import { useUserName } from '../../hooks/userName';

const Intro: React.FC = () => {
  const [name, setName] = useState('');
  const { setUserName } = useUserName();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const { colors } = useContext(ThemeContext);

  const handleNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      if (name) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    },
    [name],
  );

  const handleGoToWebsite = useCallback(() => {
    if (name) {
      setHasError(false);
      setUserName(name);
      history.push('/home');
    } else {
      setHasError(true);
    }
  }, [name, setUserName, history]);

  return (
    <Container>
      {/* <h1>Whats your name?</h1> */}
      {/* <img src={FVDark} alt="Francisco Vaz" /> */}
      <Input
        type="text"
        placeholder="Whats your name?"
        onChange={handleNameChange}
        hasError={hasError}
      />
      <button type="button" onClick={handleGoToWebsite}>
        <FiLogIn size={24} color="#ffcc13" />
      </button>
      <Particles
        params={{
          background: {
            color: {
              value: colors.primary,
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: colors.secundary,
            },
            links: {
              color: colors.secundary,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </Container>
  );
};

export default Intro;
