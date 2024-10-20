import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import {
  Container,
  TitleSection,
  ProjectContainer,
  ButtonsContainer,
  ProjectTitle,
  TechnologiesContainer,
} from './styles';

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

        <ProjectTitle>
          <h1>Registo de Ocorrências</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://user-images.githubusercontent.com/27808014/84532302-e9e3ed00-acdd-11ea-9012-7be40357f813.png"
            alt="Project XPTO"
          />
          <div>
            <p>
              Application that I have been developing, and that I started from
              scratch, to be able to assimilate many concepts of ReactJS. It
              consists of recording a specific occurrence in a city or town, and
              where the competent authorities, as administrators, will be able
              to see, handle and update the status of the occurrences. Each
              occurrence will be recorded by choosing the location on the map
              (leaflet) and sending a photo only (Firebase). I also developed
              the backend in NodeJS with express. I still have work ahead, but I
              see the progress and I feel very excited to move forward.
            </p>
            <TechnologiesContainer>
              <p>ReactJS / Angular 8</p>
              <p>Typescript</p>
              <p>API Context</p>
              {/* <p>Styled Components</p> */}
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/registo-de-ocorrencias-reactjs.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              {/* <button type="button">
                <FaExternalLinkAlt /> Visit
              </button> */}
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Francisco Vaz Portefolio</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://user-images.githubusercontent.com/27808014/87099499-e5114b00-c241-11ea-910a-5a54a845fa61.png"
            alt="Project XPTO"
          />
          <div>
            <p>
              This is the website that you&apos;re watching. I decided to do it
              in ReactJS with Typescript to improve my skills in this
              technology, and i keep it simple. Started with the portefolio
              section for people to se my projects and if they like it, ok go
              check about me section. Like lot of DEV&apos;s, I use dark mode in
              all I can, so my website have a cool switch between dark and light
              design.
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>Styled Components</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/website.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              <button type="button">
                <a
                  href="http://franciscovaz.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Visit
                </a>
              </button>
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>Go Barber</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://github.com/franciscovaz/gobarber-web-reactjs/blob/master/imgs/login_toast.png?raw=true"
            alt="GoBarber"
          />
          <div>
            <p>
              Application for a fictional beauty service provider, GoBarber.
              This project is part of a complete application involving backend,
              frontend and mobile and you can see all repositories in my Github.
              The application was developed during the Rocketseat bootcamp and
              was carried out throughout the classes. I need to finish the
              mobile part but I’m almost done. I learned most of the concepts
              that I need to know about ReactJS to feel confident to embrace
              others projects.
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>Styled Components</p>
              <p>Yup</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/gobarber-web-reactjs.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              {/* <button type="button">
                <FaExternalLinkAlt /> Visit
              </button> */}
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>RecolhaECO</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://github.com/franciscovaz/recolhaECO/blob/master/imgs/preview-nlw.png?raw=true"
            alt="RecolhaECO"
          />
          <div>
            <p>
              The application was built from scratch, on the backend using
              NodeJS with Express, multer, celebrate, frontend with ReactJS and
              Mobile with React Native. In all components, Typescript was used.
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>React Native</p>
              <p>NodeJS - Express</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/recolhaECO.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              {/* <button type="button">
                <FaExternalLinkAlt /> Visit
              </button> */}
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>BE THE HERO</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://raw.githubusercontent.com/franciscovaz/be-the-hero/master/shots/login-light.png"
            alt="BeTheHero"
          />
          <div>
            <p>
              Application to connect people who want to help ONG&apos;s.
              Developed from scratch with NodeJS, ReactJS and React Native
              technologies. I went beyond the application that was developed on
              OmniStack week from Rockeatseat&apos;s and added some features,
              like: Switch to dark/light theme - Only on web app,
              Styled-Components, EsLint and Prettier to standardize the code
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>API Context</p>
              <p>React Native</p>
              <p>NodeJS</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <a
                  href="https://github.com/franciscovaz/be-the-hero.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Source
                </a>
              </button>
              {/* <button type="button">
                <FaExternalLinkAlt /> Visit
              </button> */}
            </ButtonsContainer>
          </div>
        </ProjectContainer>
      </Container>
    </div>
  );
};

export default Projects;
