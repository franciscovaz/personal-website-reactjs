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
              <p>Styled Components</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <FaGithub /> Source
              </button>
              <button type="button">
                <FaExternalLinkAlt /> Visit
              </button>
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
                <FaGithub /> Source
              </button>
              <button type="button">
                <FaExternalLinkAlt /> Visit
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
            alt="Project XPTO"
          />
          <div>
            <p>
              Descrição do projeto com cenas aleatorias mas que de para ver que
              é uma descrição mais ou menos com bom conteudo e seja possivel ver
              corretamente como ira ficar nas varias plataformas
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>Styled Components</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <FaGithub /> Source
              </button>
              <button type="button">
                <FaExternalLinkAlt /> Visit
              </button>
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>RecolhaECO</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://github.com/franciscovaz/recolhaECO/blob/master/imgs/preview-nlw.png?raw=true"
            alt="Project XPTO"
          />
          <div>
            <p>
              Descrição do projeto com cenas aleatorias mas que de para ver que
              é uma descrição mais ou menos com bom conteudo e seja possivel ver
              corretamente como ira ficar nas varias plataformas
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>Styled Components</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <FaGithub /> Source
              </button>
              <button type="button">
                <FaExternalLinkAlt /> Visit
              </button>
            </ButtonsContainer>
          </div>
        </ProjectContainer>

        <ProjectTitle>
          <h1>BE THE HERO</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://raw.githubusercontent.com/franciscovaz/be-the-hero/master/shots/login-light.png"
            alt="Project XPTO"
          />
          <div>
            <p>
              Descrição do projeto com cenas aleatorias mas que de para ver que
              é uma descrição mais ou menos com bom conteudo e seja possivel ver
              corretamente como ira ficar nas varias plataformas
            </p>
            <TechnologiesContainer>
              <p>ReactJS</p>
              <p>Typescript</p>
              <p>Styled Components</p>
            </TechnologiesContainer>
            <ButtonsContainer>
              <button type="button">
                <FaGithub /> Source
              </button>
              <button type="button">
                <FaExternalLinkAlt /> Visit
              </button>
            </ButtonsContainer>
          </div>
        </ProjectContainer>
      </Container>
    </div>
  );
};

export default Projects;
