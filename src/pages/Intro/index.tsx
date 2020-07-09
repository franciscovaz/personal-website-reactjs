import React, { useCallback, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container } from './styles';

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
      {/* <img src={FVDark} alt="Francisco Vaz" /> */}
      <input
        type="text"
        placeholder="Whats your name?"
        onChange={handleNameChange}
      />
      <Link to="Home">
        <button type="button" onClick={handleGoToWebsite}>
          <FiLogIn size={24} color="#ffcc13" />
        </button>
      </Link>
    </Container>
  );
};

export default Intro;
