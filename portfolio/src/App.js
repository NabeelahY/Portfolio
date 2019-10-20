import React from 'react';
import { GlobalStyle, HeroStyle, TagLine } from './AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
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

export default App;
