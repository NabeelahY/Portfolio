import React from 'react';
import { HeroStyle } from './styles/Hero';
import img from '../assets/nab_bg.png';

const Hero: React.FC = () => {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="info">
          <div>
            Hello{' '}
            <span role="img" aria-label="wave">
              👋🏾
            </span>
          </div>
          <h1>I am Nabeelah Yousuph</h1>
          <p>
            A passionate software engineer based in Lagos, Nigeria. AWS
            certified and loves to experiment and dabble with various
            technologies.
          </p>
          <button>Get Resume</button>
        </div>
        <div className="pic">
          <img src={img} alt="Nabeelah Yousuph" />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
