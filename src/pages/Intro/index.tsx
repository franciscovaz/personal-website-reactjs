import React, { useCallback, useState, ChangeEvent } from 'react';
import { Container } from './styles';

const Intro: React.FC = () => {
  const [name, setName] = useState('');

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  }, []);

  const handleGoIn = useCallback(() => {
    console.log(name);
  }, [name]);

  return (
    <Container>
      {/* <h1>Whats your name?</h1> */}
      <input
        type="text"
        placeholder="Whats your name?"
        onChange={handleNameChange}
      />
      <button type="button" onClick={handleGoIn}>
        Entrar
      </button>
    </Container>
  );
};

export default Intro;
