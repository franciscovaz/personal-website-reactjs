import React, { useCallback, useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, Input } from './styles';

import { useUserName } from '../../hooks/userName';

const Intro: React.FC = () => {
  const [name, setName] = useState('');
  const { setUserName } = useUserName();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const handleNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      if (name) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    },
    [name],
  );

  const handleGoToWebsite = useCallback(() => {
    if (name) {
      setHasError(false);
      setUserName(name);
      history.push('/home');
    } else {
      setHasError(true);
    }
  }, [name, setUserName, history]);

  return (
    <Container>
      {/* <h1>Whats your name?</h1> */}
      {/* <img src={FVDark} alt="Francisco Vaz" /> */}
      <Input
        type="text"
        placeholder="Whats your name?"
        onChange={handleNameChange}
        hasError={hasError}
      />
      <button type="button" onClick={handleGoToWebsite}>
        <FiLogIn size={24} color="#ffcc13" />
      </button>
    </Container>
  );
};

export default Intro;
