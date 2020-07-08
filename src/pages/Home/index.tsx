import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Photo from '../../components/Photo';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Association from '../../components/Association';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Photo />
        <About />
        <Skills />
        <Association />
      </Container>
    </>
  );
};

export default Home;
