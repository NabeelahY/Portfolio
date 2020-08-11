import React from 'react';
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
} from 'react-icons/fa';
import { DiPostgresql, DiIonic } from 'react-icons/di';
import graphql from '../assets/graphql.svg';
import ts from '../assets/ts.svg';
import { StackStyles, IconStyles } from './styles/Stack';
import { Carousel } from 'antd';

const stacks = [
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'TypeScript',
    icon: <img src={ts} alt="TypeScript icon" />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'Ionic React',
    icon: <DiIonic />,
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
      <h1>Work with:</h1>
      <Carousel
        autoplay
        adaptiveHeight={true}
        className="slide"
        slidesToShow={2}
      >
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
