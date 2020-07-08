import React from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagramSquare,
} from 'react-icons/fa';

import { Container, SectionTitle, SocialIcons } from './styles';

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <Container>
        <SectionTitle>
          <h1>You wanna talk? </h1>
          <h3>Reach me out at: </h3>
        </SectionTitle>

        <h2>ftomasvaz@gmail.com</h2>
        <SocialIcons>
          <ul>
            <a
              href="https://github.com/franciscovaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaGithub color="#fff" size={32} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-vaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaLinkedinIn color="#fff" size={32} />
              </li>
            </a>
            <a
              href="https://www.instagram.com/franciscojtvaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaInstagramSquare color="#fff" size={32} />
              </li>
            </a>
            <a
              href="https://www.facebook.com/franciscojtvaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaFacebook color="#fff" size={32} />
              </li>
            </a>
          </ul>
        </SocialIcons>
      </Container>
    </div>
  );
};

export default Contact;
