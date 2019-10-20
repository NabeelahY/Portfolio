import React from 'react';
import { VerticalNavStyle } from './styles/NavStyles';

const Nav = () => {
  return (
    <VerticalNavStyle>
      <a href='/'>Twitter</a>
      <a href='/'>LinkedIn</a>
      <a href='/'>GitHub</a>
    </VerticalNavStyle>
  );
};

export default Nav;
