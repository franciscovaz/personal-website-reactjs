import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Photo from '../../components/Photo';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Photo />
      </Container>
    </>
  );
};

export default Home;
