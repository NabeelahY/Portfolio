import React from 'react';
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
} from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import graphql from '../assets/graphql.svg';

const stacks = [
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'Python',
    icon: <FaPython />,
  },
  {
    name: 'NodeJs',
    icon: <FaNode />,
  },
  {
    name: 'ExpressJs',
    icon: <FaJs />,
  },
  {
    name: 'PostgreSQL',
    icon: <DiPostgresql />,
  },
  {
    name: 'GraphQL',
    icon: <img src={graphql} alt="GraphQl icon" />,
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
  },
];

const Stacks: React.FC = () => {
  return (
    <section>
      <h1>Tech I have used</h1>
      <div>
        {stacks.map((stack, idx) => (
          <div key={idx}>
            <div>{stack.icon}</div>
            <div>{stack.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
