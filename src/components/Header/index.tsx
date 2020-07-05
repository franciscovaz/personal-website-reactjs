import React from 'react';
import { Link } from 'react-router-dom';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { SocialNetWork } from './styles';
import './style.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="menu-section">
          <div className="menu-toggle">
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </div>
          <nav>
            <ul>
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
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/francisco-vaz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </li>
              </SocialNetWork>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
