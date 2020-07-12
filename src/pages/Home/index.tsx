import React, { useContext } from 'react';
import Particles from 'react-tsparticles';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import Header from '../../components/Header';
import Photo from '../../components/Photo';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Association from '../../components/Association';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Container>
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
        <Header />
        <Photo />
        <Projects />
        <About />
        <Skills />
        <Association />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
