import React, { useState } from 'react';

import { StyledBurger } from './styles';
import RightNav from '../RightNav/RightNav';

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={() => setOpen(!open)} />
    </>
  );
};

export default Burger;
