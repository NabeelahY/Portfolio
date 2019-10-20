import React from 'react';
import { HeroStyle, TagLine } from './styles/HeroStyles';

const Hero = () => {
  return (
    <>
      <HeroStyle>
        <h1>Hello</h1>
        <span role='img' aria-label='wave'>
          👋🏽
        </span>
      </HeroStyle>
      <TagLine>I'm Nabeelah Yousuph</TagLine>
    </>
  );
};

export default Hero;
