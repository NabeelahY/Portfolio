import React from 'react';
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython
} from 'react-icons/fa';
import postgres from '../assets/postgresql.svg';
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
    name: 'HTML',
    icon: <FaHtml5 />
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />
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
    icon: <img src={postgres} alt='PG icon'></img>
  }
];

const About = () => {
  return (
    <AboutStyle>
      <AboutImg />
      <ContentStyle>
        A passionate software engineer based in Lagos, Nigeria. If I am not on
        my desk trying to hack out HackerRank challenges, I'm probably neck-deep
        in a fantasy-genre novel or exploring new donut cafes.
        <>
          <h3>Stacks include:</h3>
          <StackStyle>
            {stacks.map(stack => (
              <div>
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
