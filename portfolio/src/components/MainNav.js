import React from 'react';
import { MainNavStyles } from './styles/NavStyles';

const MainNav = () => {
  return (
    <MainNavStyles>
      <a href='/'>About</a>
      <a href='/'>Projects</a>
      <a href='/'>Contact</a>
    </MainNavStyles>
  );
};

export default MainNav;
