import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { VerticalNavStyle } from './styles/NavStyles';

const Nav = () => {
  return (
    <VerticalNavStyle>
      <a
        href='https://twitter.com/wanderluster_xo'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaTwitter />
      </a>
      <a
        href='https://www.linkedin.com/in/nabeelah-yousuph/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/NabeelahY/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub />
      </a>
    </VerticalNavStyle>
  );
};

export default Nav;
