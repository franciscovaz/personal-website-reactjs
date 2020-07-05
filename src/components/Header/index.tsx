import React from 'react';

import { Nav } from './styles';
import Burger from './Burger/Burger';

const Header: React.FC = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Header;
