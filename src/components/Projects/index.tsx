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
          <h1>Francisco Vaz Portefolio</h1>
        </ProjectTitle>
        <ProjectContainer>
          <img
            src="https://user-images.githubusercontent.com/27808014/87099499-e5114b00-c241-11ea-910a-5a54a845fa61.png"
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
