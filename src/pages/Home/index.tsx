import React from 'react';

import { useUserName } from '../../hooks/userName';

import Header from '../../components/Header';

const Home: React.FC = () => {
  const { name } = useUserName();

  console.log('name:', name);
  return (
    <>
      <Header />
      <h1>{name}</h1>
    </>
  );
};

export default Home;
