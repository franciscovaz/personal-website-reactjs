import React from 'react';

import { SectionTitle, Container, CardContainer } from './styles';

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <SectionTitle>
        <h1>Skills</h1>
      </SectionTitle>
      <Container>
        <CardContainer>
          <img
            src="https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg"
            width={150}
            alt="React Skill"
          />
          <h1>ReactJS</h1>
          <p>
            I have a passion for React since i was started developing with the
            framework. With a background in angular it was better to understand
            React faster
          </p>
        </CardContainer>

        <CardContainer>
          <img
            src="https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg"
            width={150}
            alt="React Skill"
          />
          <h1>ReactJS</h1>
          <p>
            I have a passion for React since i was started developing with the
            framework. With a background in angular it was better to understand
            React faster
          </p>
        </CardContainer>

        <CardContainer>
          <img
            src="https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg"
            width={150}
            alt="React Skill"
          />
          <h1>ReactJS</h1>
          <p>
            I have a passion for React since i was started developing with the
            framework. With a background in angular it was better to understand
            React faster
          </p>
        </CardContainer>
      </Container>
    </div>
  );
};

export default Skills;
