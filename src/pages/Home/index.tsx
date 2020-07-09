import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Photo from '../../components/Photo';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Association from '../../components/Association';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Photo />
        <About />
        <Skills />
        <Projects />
        <Association />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
