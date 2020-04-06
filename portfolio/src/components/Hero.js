import React from 'react';
import { HeroWrap, HeroStyle, TagLine } from './styles/HeroStyles';

const Hero = () => {
  return (
    <HeroWrap>
      <HeroStyle>
        <h1>Hello</h1>
        <span role='img' aria-label='wave'>
          👋🏽
        </span>
      </HeroStyle>
      <TagLine>I'm Nabeelah Yousuph</TagLine>
    </HeroWrap>
  );
};

export default Hero;
