import React from 'react';

import { Container, AboutInfo, Timeline, SectionTitle } from './styles';

const About: React.FC = () => {
  return (
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
          I&apos;m confident, naturally curious and I&apos;m easily inspired, by
          me and by others, to follow my thoughts wherever they take me. <br />I
          don&apos;t like to define myself by the work I&apos;ve done. I define
          myself by the work I want to do.
        </p>

        <p>
          I&apos;m fueled by high energy levels, passionate, expressive with a
          natural ability to entertain (at least I think &#128513;). <br />
          I&apos; m never satisfied to just come up with ideas. Instead i have
          an almost impulsive need to act on them. <br />
          Outside of my commitments, i work in my own office (my room!)
          <br />
          Skills can be taught but… I prefer to keep learning, continue
          challenging myself and do interesting things that matter, one line of
          code at the time.
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
      <Timeline />
    </Container>
  );
};

export default About;
