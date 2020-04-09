import React from 'react';
import { HeroWrap, HeroStyle, TagLine, HeroSocial } from './styles/HeroStyles';
import Nav from './VerticalNav';

const Hero = () => {
  return (
    <HeroWrap>
      <HeroSocial>
        <HeroStyle>
          <h1>Hello</h1>
          <span role='img' aria-label='wave'>
            👋🏽
          </span>
        </HeroStyle>
        <Nav />
      </HeroSocial>
      <TagLine>I'm Nabeelah Yousuph</TagLine>
    </HeroWrap>
  );
};

export default Hero;
