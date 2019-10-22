import React from 'react';
import mentorme from '../assets/MM.png';
import bookr from '../assets/Bookr.png';
import wtc from '../assets/WTC.png';
import { CardWrapper, ProjectWrapper } from './styles/CardStyle';
import Cards from './Cards';

const projects = [
  {
    name: 'Where To Code',
    img: wtc,
    desc:
      'WhereToCode is targeted at remote software developers looking for places to work and code on the go.',
    link: 'https://wheretocode.com'
  },

  {
    name: 'Bookr',
    img: bookr,
    desc:
      'Bookr is your source for all things Text Book. Picture the AirBNB of textbooks, a social platform for peer-reviewed textbooks',
    link: 'https://bookrlambda.netlify.com/'
  },

  {
    name: 'MentorMe',
    img: mentorme,
    desc:
      'MentorMe lets you lend your business skills to an entrepreneurs across the globe',
    link: 'https://mentorme-eu.netlify.com/home'
  }
];

const Projects = () => {
  return (
    <ProjectWrapper>
      {projects.map(project => (
        <CardWrapper key={project.name}>
          <Cards projects={project} />
        </CardWrapper>
      ))}
    </ProjectWrapper>
  );
};

export default Projects;
