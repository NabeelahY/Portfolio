import React from 'react';

const Cards = ({ projects }) => {
  const { name, img, desc, link } = projects;
  return (
    <>
      <img src={img} alt={name} />
      <div class='content'>
        <h2>{name}</h2>
        <div>{desc}</div>
        <a href={link}>View Project</a>
      </div>
    </>
  );
};

export default Cards;
