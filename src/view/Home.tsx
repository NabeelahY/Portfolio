import React from 'react';

import Hero from '../components/Hero';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
