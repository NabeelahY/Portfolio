import React from 'react';
import { Link } from "react-router-dom";
import { MainNavStyles } from './styles/NavStyles';

const MainNav = () => {
  return (
    <MainNavStyles>
      <Link to='/'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </MainNavStyles>
  );
};

export default MainNav;
