import React from 'react';
import { AboutStyle, AboutImg, ContentStyle } from './styles/Infostyles';

const About = () => {
  return (
    <AboutStyle>
      <AboutImg />
      <ContentStyle>
        A passionate software engineer who always believes that the devil is
        always in the details. Recently had a strong love for frontend and user
        experience. My stack includes Node JS, React, Express, Postgres,
        JavaScript, ES6. If I am not on my desk trying to hack out HackerRank
        challenges, I'm probably neck-deep in a fantasy-genre novel or exploring
        new donut cafes.
      </ContentStyle>
    </AboutStyle>
  );
};

export default About;
