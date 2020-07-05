import React from 'react';
import { Container } from './styles';

import { useUserName } from '../../hooks/userName';

import Header from '../../components/Header';
import Photo from '../../components/Photo';

const Home: React.FC = () => {
  const { name } = useUserName();

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
