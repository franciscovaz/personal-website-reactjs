import React from 'react';

import { FaGithub } from 'react-icons/fa';
import {
  Container,
  AboutInfo,
  Timeline,
  SectionTitle,
  TimelineContent,
} from './styles';

const About: React.FC = () => {
  return (
    <div id="about">
      <Container>
        <SectionTitle>
          <h2>About me</h2>
        </SectionTitle>

        <AboutInfo>
          <p>
            Hey there! I&apos;m a Frontend Web Developer for Altice Labs and
            Dellent in Aveiro, Portugal.
          </p>

          <p>
            I&apos;m confident, naturally curious and I&apos;m easily inspired,
            by me and by others, to follow my thoughts wherever they take me.{' '}
            <br />I don&apos;t like to define myself by the work I&apos;ve done.
            I define myself by the work I want to do.
          </p>

          <p>
            I&apos;m fueled by high energy levels, passionate, expressive with a
            natural ability to entertain (at least I think &#128513;). <br />
            I&apos; m never satisfied to just come up with ideas. Instead i have
            an almost impulsive need to act on them. <br />
            Outside of my commitments, i work in my own office (my room!)
            <br />
            Skills can be taught but… I prefer to keep learning, continue
            challenging myself and do interesting things that matter, one line
            of code at the time.
          </p>

          <p>
            I&apos;m fast learner and work hard to be able to pick up new skills
            and grab different projects and roles with some ease.
            <br />
            I&apos;m a people-person with deep empathy and I&apos;m at my best
            when I&apos;m feeling that I&apos;m sharing my knowledge and
            experiences with others.
          </p>

          <p style={{ textAlign: 'center' }}>
            <b>I have always one thought in my head: </b>
          </p>
          <p style={{ textAlign: 'center' }}>
            <i>
              &apos;To have results above the average, we have to do what the
              average doesn&apos;t&apos;
            </i>
          </p>
        </AboutInfo>
        <Timeline>
          <ul>
            <li>
              <TimelineContent>
                <h3>Altice Labs</h3>
                <p>Frontend Developer: Angular 8 + Bootstrap + Javascript</p>
                <p>Machine 2 Machine project to SFR, MEO and OI</p>
                <p>Implement interfaces/features and fix issues</p>
              </TimelineContent>
              <div className="time">
                <h4>2019 - present</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Self-taught</h3>
                <p style={{ textAlign: 'center' }}>
                  <b>Applications:</b>
                </p>
                <p>
                  <b>Registo de Ocorrências:</b> ReactJS + React Native + NodeJS
                </p>
                <p>
                  <b>Registo de Ocorrências:</b> Angular 7+ + Bootstrap 4 +
                  NodeJS{' '}
                  <a
                    href="https://github.com/franciscovaz/occurrence-log.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </p>
                <p>
                  <b>Francisco Vaz Portefolio:</b> ReactJS + Typescript +
                  Context API + Styled-Components + usePersistedState
                </p>
                <p>
                  <b>GoBarber:</b> ReactJS + React Native + NodeJS
                </p>
                <p>
                  <b>RecolhaECO:</b> ReactJS + React Native + NodeJS
                </p>
                <p>
                  <b>Be The Hero:</b> ReactJS + React Native + NodeJS{' '}
                </p>

                <p>
                  <b>1st. Version of Francisco Vaz Portefolio:</b> HTML5 + CSS3
                  + Javascript{' '}
                  <a
                    href="https://github.com/franciscovaz/portefolio-site.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </p>
                <p>
                  <b>Bootcamp GoStack - Rocketseat:</b> React | React Native |
                  Node.js: Build projects (On Going)
                </p>
                <p style={{ textAlign: 'center' }}>
                  <b>Websites:</b>
                </p>
                <p>
                  2017: Wordpress website to Soluções Electrónicas:{' '}
                  <a
                    href="https://solucoeselectronicas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.solucoeselectronicas.com
                  </a>
                </p>
                <p>
                  2016: Wordpress website to GJ a Tulha:{' '}
                  <a
                    href="http://www.atulha.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    www.atulha.com
                  </a>
                </p>
              </TimelineContent>
              <div className="time">
                <h4>2014 - present</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Renault-Nissan-Mitsubishi</h3>
                <p>
                  Software Developer: Angular 7 + Typescript + Angular Material
                </p>
                <p>
                  Developed an application to register the maintenance of the
                  factory&apos;s machines. The app was used in 5 Reanult
                  factories (3 in Spain/1 in Portugal/1 in Slovenia).
                </p>
                <p>
                  Project Leader. Motivate internal and external team to work
                  together on Industry 4.0 project.
                </p>
              </TimelineContent>
              <div className="time">
                <h4>2018 - 2019</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Coimbra Institute of Engineering</h3>
                <p>Informatics Engineering Degree at ISEC</p>
              </TimelineContent>
              <TimelineContent>
                <h3>
                  CISUC - Center for Informatics and Systems of the University
                  of Coimbra
                </h3>
                <p>
                  2017: Intership project. Android app (frontend and backend)
                  for control the female fertility period
                </p>
              </TimelineContent>
              <div className="time">
                <h4>2013 - 2017</h4>
              </div>
            </li>
          </ul>
        </Timeline>
      </Container>
    </div>
  );
};

export default About;
