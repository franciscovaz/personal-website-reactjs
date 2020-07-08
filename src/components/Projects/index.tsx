import React from 'react';

import { Container, TitleSection } from './styles';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <Container>
        <TitleSection>
          <h1>What I&apos;ve been working on lately</h1>
          <h3>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications that I&apos;ve dedicated my time
            to.
          </h3>
        </TitleSection>
      </Container>
    </div>
  );
};

export default Projects;
