import React from 'react';

import { SectionTitle, Container, CardContainer, BottomDots } from './styles';

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <SectionTitle>
        <h1>Interested Skills</h1>
        <h3>
          Through my studies and my works, I&apos;ve gained knowledge of some
          web development concepts, and at my free time i like to apply this
          concepts and learn new ones, build apps that you can see in my Github
        </h3>
      </SectionTitle>
      <Container>
        <CardContainer>
          <h1>Self-taught</h1>
          <p>
            Im allways looking for knowledge and try to build small projects to
            understand the framework or language that im studied
          </p>
        </CardContainer>

        <CardContainer>
          <h1>ReactJS</h1>
          <p>
            I have a passion for React since i was started developing with the
            framework. With a background in angular it was better to understand
            React faster
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Javascript</h1>
          <p>
            The power of this language motivate me a lot! First, because I
            prefer frontend development and the framework that i likely to use
            is React, based on JS like others (Angular and Vuew, p.e). And even,
            we can do backend with JS, using NodeJS
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Angular 7+</h1>
          <p>
            My first contact with frontend frameworks was with Angular7, i build
            some cool projects, in profissional context and personal.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>HTML &amp; CSS</h1>
          <p>
            No question with that. Frontend needs HTML and CSS and I&apos;m
            always looking to improve my skills in this two areas.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Styled-Components</h1>
          <p>
            When I started learning React, I started learning styled components
            to. I only see advantages using it. All my React applications use
            styled-components so you can see the way i like it!
          </p>
        </CardContainer>
        <CardContainer>
          <h1>GIT</h1>
          <p>
            In all my personal projects I like to use Git. I started using in
            command line but know, the extension for VS Code is so good that I
            haven&apos;t used the command line. Version control of all projects
            is much easier with the use of this tool &#128076;. Not to mention
            that all of my work can be demenstrated on GitHub, making
            Readme&apos;s to demonstrated the projects.
          </p>
        </CardContainer>

        <CardContainer>
          <h1>Agile</h1>
          <p>
            Working with agile methodology is great. I have been working like
            that since my intership in university and i saw a lot of good things
            on it. Even in my personal projects i like to create issues,
            estimate time and create some code reviews to me (after some time
            passed after developed some feature). I like to do introspectives to
            improve the way I code and the way I think.
          </p>
        </CardContainer>
        <CardContainer>
          <h1>Team Work</h1>
          <p>
            Since I was a child I like team work. With the participation in an
            association, this aspect was always growing within me. When I
            entered the worl of work, I only saw good things and when we create
            a good relationship and when we help each other, regardless of the
            area of work (backend/frontend, p.e.), to take the project on the
            right path.
          </p>
        </CardContainer>
      </Container>
      <BottomDots>
        <h1>...</h1>
      </BottomDots>
    </div>
  );
};

export default Skills;
