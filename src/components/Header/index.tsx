import React from 'react';

import { Nav } from './styles';
import RightNav from './RightNav/RightNav';
import Burger from './Burger/Burger';

const Header: React.FC = () => {
  return (
    <Nav>
      <div className="logo" />
      <Burger />
    </Nav>
  );
};

export default Header;
