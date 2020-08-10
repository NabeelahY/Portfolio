import React from 'react';

import Hero from '../components/Hero';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stacks />
      <Projects />
    </>
  );
};

export default Home;
