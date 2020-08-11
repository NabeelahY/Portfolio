import React from 'react';

import Hero from '../components/Hero';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stacks />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
