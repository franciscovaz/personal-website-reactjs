import React from 'react';

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
          <h2>Sobre</h2>
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

          <p>
            <b>I have always one thought in my head: </b>
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
                <p>Frontend Developer - Angular 8 + Bootstrap</p>
              </TimelineContent>
              <div className="time">
                <h4>2019 - present</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Self-taught</h3>
                <p>Angular + Bootstrap 4: Build an app to regist occurences </p>
                <p>
                  HTML5 + CSS3 + Javascript: My personal website (where you are
                  now)
                </p>
                <p>
                  React | React Native | Node.js: Build some projects in the 10
                  Edition of GoStack - RocketSeat (On Going)
                </p>
                <p>
                  2017: Build Wordpress website to Soluções Electrónicas:
                  <a
                    href="https://solucoeselectronicas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.solucoeselectronicas.com
                  </a>{' '}
                  (changed already)
                </p>
                <p>
                  2016: Build and mantain Wordpress website to GJ a Tulha:{' '}
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
                <h4>2017 - present</h4>
              </div>
            </li>

            <li>
              <TimelineContent>
                <h3>Renault-Nissan-Mitsubishi</h3>
                <p>Software Developer. Angular 7 + Angular Material</p>
                <p>
                  Project Leader. Motivate team (internal and external) to work
                  together on Industry 4.0 project
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
