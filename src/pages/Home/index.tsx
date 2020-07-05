import React from 'react';

import { useUserName } from '../../hooks/userName';

const Home: React.FC = () => {
  const { name } = useUserName();

  console.log('name:', name);
  return <h1>{name}</h1>;
};

export default Home;
