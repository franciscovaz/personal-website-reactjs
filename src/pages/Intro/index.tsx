import React, { useCallback, useState, ChangeEvent } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

import { useUserName } from '../../hooks/userName';

const Intro: React.FC = () => {
  const [name, setName] = useState('');
  const { setUserName } = useUserName();

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleGoToWebsite = useCallback(() => {
    if (name) {
      setUserName(name);
    }
  }, [name, setUserName]);

  return (
    <Container>
      {/* <h1>Whats your name?</h1> */}
      <input
        type="text"
        placeholder="Whats your name?"
        onChange={handleNameChange}
      />
      <Link to="Home">
        <button type="button" onClick={handleGoToWebsite}>
          Entrar
        </button>
      </Link>
    </Container>
  );
};

export default Intro;
