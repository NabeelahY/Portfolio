import React from 'react';

import Hero from '../components/Hero';
import Stacks from '../components/Stacks';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { HomeStyles } from './styles/Home';

const Home: React.FC = () => {
  return (
    <>
      <HomeStyles>
        <Hero />
        <Stacks />
        <Projects />
        <Contact />
      </HomeStyles>
      <Footer />
    </>
  );
};

export default Home;
