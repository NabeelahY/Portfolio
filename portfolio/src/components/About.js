import React from 'react';
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython
} from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import graphql from '../assets/graphql.svg';
import {
  AboutStyle,
  AboutImg,
  ContentStyle,
  StackStyle
} from './styles/Infostyles';

const stacks = [
  {
    name: 'JavaScript',
    icon: <FaJs />
  },
  {
    name: 'React',
    icon: <FaReact />
  },
  {
    name: 'Python',
    icon: <FaPython />
  },
  {
    name: 'NodeJs',
    icon: <FaNode />
  },
  {
    name: 'ExpressJs',
    icon: <FaJs />
  },
  {
    name: 'PostgreSQL',
    icon: <DiPostgresql />
  },
  {
    name: 'GraphQL',
    icon: <img src={graphql} alt='GraphQl icon' />
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />
  }
];

const About = () => {
  return (
    <AboutStyle>
      <AboutImg />
      <ContentStyle>
        A passionate software engineer based in Lagos, Nigeria. If I am not on
        my desk trying to hack j out coding challenges, I'm probably neck-deep
        in a fantasy-genre novel or exploring new cafes.
        <>
          <h3>Stacks include:</h3>
          <StackStyle>
            {stacks.map(stack => (
              <div key={stack.name}>
                <span>{stack.name}</span>
                <span>{stack.icon}</span>
              </div>
            ))}
          </StackStyle>
        </>
      </ContentStyle>
    </AboutStyle>
  );
};

export default About;
