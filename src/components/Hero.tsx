import React from 'react';
import { HeroStyle } from './styles/Hero';
import img from '../assets/nab_bg.webp';
import Socials from './Socials';

const Hero: React.FC = () => {
  const link =
    'https://docs.google.com/document/d/1CXBIXt-V3c1So7yRu10hqqHY6gbbKwxCbJWB5J35j38/export?format=pdf';
  return (
    <HeroStyle>
      <div className="hero">
        <div className="info">
          <div className="greeting">
            Hello{' '}
            <span role="img" aria-label="wave">
              👋🏾
            </span>
          </div>

          <div className="intro">
            <div>I am </div>
            <h1>Nabeelah Yousuph</h1>
          </div>

          <p>
            A passionate software engineer based in Lagos, Nigeria. AWS
            certified and loves to experiment with various technologies. If I am
            not on my desk trying to hack out coding challenges, I'm probably
            neck-deep in a fantasy-genre novel or exploring new cafes.
          </p>
          <button
            onClick={() => {
              window.open(link);
            }}
          >
            Get Resume
          </button>
        </div>
        <div className="graphics">
          <div className="pic">
            <img src={img} alt="Nabeelah Yousuph" />
          </div>
          <Socials />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
