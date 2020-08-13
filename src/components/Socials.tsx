import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { SocialStyles } from './styles/Socials';

const links = [
  {
    link: 'https://twitter.com/wanderluster_xo',
    icon: <FaTwitter />,
    aria: 'Twitter link',
  },
  {
    link: 'https://www.linkedin.com/in/nabeelah-yousuph/',
    icon: <FaLinkedin />,
    aria: 'LinkedIn Profile link',
  },
  {
    link: 'https://github.com/NabeelahY/',
    icon: <FaGithub />,
    aria: 'GitHub Profile link',
  },
  {
    link: 'https://dev.to/nabeelahy',
    icon: <FaDev />,
    aria: 'Dev.to Profile link',
  },
];
const Socials: React.FC = () => {
  return (
    <SocialStyles>
      {links.map((link, idx) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={idx}
          aria-label={link.aria}
        >
          {link.icon}
        </a>
      ))}
    </SocialStyles>
  );
};

export default Socials;
