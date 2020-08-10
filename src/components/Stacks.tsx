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
import { StackStyles, IconStyles } from './styles/Stack';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

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
    <StackStyles>
      <h1>Tech I have used</h1>
      <Carousel autoplay adaptiveHeight={true} className='slide'>
        {stacks.map((stack, idx) => (
          <IconStyles key={idx}>
            <div>{stack.icon}</div>
            <p>{stack.name}</p>
          </IconStyles>
        ))}
      </Carousel>
    </StackStyles>
  );
};

export default Stacks;
