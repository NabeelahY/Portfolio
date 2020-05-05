import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { VerticalNavStyle } from './styles/NavStyles';

const links = [
  { link: 'https://twitter.com/wanderluster_xo', icon: <FaTwitter /> },
  {
    link: 'https://www.linkedin.com/in/nabeelah-yousuph/',
    icon: <FaLinkedin />,
  },
  {
    link: 'https://github.com/NabeelahY/',
    icon: <FaGithub />,
  },
];
const Nav = () => {
  return (
    <VerticalNavStyle>
      {links.map((link) => (
        <a href={link.link} target='_blank' rel='noopener noreferrer'>
          {link.icon}
        </a>
      ))}
    </VerticalNavStyle>
  );
};

export default Nav;
