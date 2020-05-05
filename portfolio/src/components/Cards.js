import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Cards = ({ projects }) => {
  const { name, img, desc, link, github } = projects;
  return (
    <>
      <img src={img} alt={name} />
      <div className='content'>
        <a
          className='git'
          href={github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <h2>{name}</h2>
        <div>{desc}</div>

        <a
          className='link'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Project
        </a>
      </div>
    </>
  );
};

export default Cards;
