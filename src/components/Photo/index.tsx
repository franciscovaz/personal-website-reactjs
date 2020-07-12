import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Container, PersonalInfo } from './styles';

import { useUserName } from '../../hooks/userName';

const Photo: React.FC = () => {
  const { name } = useUserName();
  return (
    <div id="profile">
      <Container>
        <PersonalInfo>
          <h5>Hi {name},</h5>
          <h1>Francisco Vaz</h1>
          <h5>
            I&apos;m a{' '}
            <ReactTypingEffect
              speed={100}
              typingDelay={1000}
              eraseDelay={1000}
              text={[
                'Frontend Developer',
                'Passionate to Learn',
                'Everything you need! 😁',
              ]}
            />
          </h5>
        </PersonalInfo>
      </Container>
    </div>
  );
};

export default Photo;
