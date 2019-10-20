import React from 'react';
import { HeroStyle } from './styles/HeroStyles';

const Hero = () => {
  return (
    <HeroStyle>
      <h1>Hello</h1>
      <span role='img' aria-label='wave'>
        👋🏽
      </span>
    </HeroStyle>
  );
};

export default Hero;
