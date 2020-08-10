import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { SocialStyles } from './styles/Socials';

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
  {
    link: 'https://dev.to/nabeelahy',
    icon: <FaDev />,
  },
];
const Socials = () => {
  return (
    <SocialStyles>
      {links.map((link, idx) => (
        <a href={link.link} target="_blank" rel="noopener noreferrer" key={idx}>
          {link.icon}
        </a>
      ))}
    </SocialStyles>
  );
};

export default Socials;
