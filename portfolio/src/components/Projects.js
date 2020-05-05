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
    link: 'https://wheretocode.com',
    github: 'https://github.com/where-to-code'
  },

  {
    name: 'Bookr',
    img: bookr,
    desc:
      'Bookr is your source for all things textbooks, a social platform for peer-reviewed textbooks',
    link: 'https://bookrlambda.netlify.com/',
    github: 'https://github.com/bookr-buildweek/Back-End'
  },

  {
    name: 'MentorMe',
    img: mentorme,
    desc:
      'MentorMe lets you lend your business skills to an entrepreneurs across the globe',
    link: 'https://mentorme-eu.netlify.com/home',
    github: 'https://github.com/mentorme-app'
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
