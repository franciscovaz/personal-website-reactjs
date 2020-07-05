import React from 'react';

import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Container, SocialNetWork } from './styles';

interface RightNavProps {
  open: boolean;
}

const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <Container open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Skills</Link>
      </li>
      <li>
        <Link to="/">Association</Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/">Articles</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <SocialNetWork>
        <li>
          <a
            href="https://github.com/franciscovaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/francisco-vaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={20} />
          </a>
        </li>
      </SocialNetWork>
    </Container>
  );
};

export default RightNav;
