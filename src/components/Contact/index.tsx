import React, { useContext } from 'react';

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagramSquare,
} from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import { Container, SectionTitle, SocialIcons } from './styles';

const Contact: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <div id="contact">
      <Container>
        <SectionTitle>
          <h1>You wanna talk? </h1>
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
                <FaGithub color={colors.secundary} size={32} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-vaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaLinkedinIn color={colors.secundary} size={32} />
              </li>
            </a>
            <a
              href="https://www.instagram.com/franciscojtvaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaInstagramSquare color={colors.secundary} size={32} />
              </li>
            </a>
            <a
              href="https://www.facebook.com/franciscojtvaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaFacebook color={colors.secundary} size={32} />
              </li>
            </a>
          </ul>
        </SocialIcons>
      </Container>
    </div>
  );
};

export default Contact;
