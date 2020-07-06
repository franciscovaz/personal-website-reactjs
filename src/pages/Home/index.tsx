import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Photo from '../../components/Photo';
import About from '../../components/About';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Photo />
        <About />
      </Container>
    </>
  );
};

export default Home;
