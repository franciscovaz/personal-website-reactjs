import React from 'react';
import { Container, PersonalInfo } from './styles';

import { useUserName } from '../../hooks/userName';

const Photo: React.FC = () => {
  const { name } = useUserName();
  return (
    <Container>
      <PersonalInfo>
        <h5>Hi {name},</h5>
        <h1>Francisco Vaz</h1>
        <h5>I&apos;m a Frontend Developer</h5>
      </PersonalInfo>
    </Container>
  );
};

export default Photo;
