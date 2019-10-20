import React from 'react';
import { GlobalStyle, TagLine, Wrapper } from './AppStyles';
import Hero from './components/Hero';
import Nav from './components/VerticalNav';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        <Nav />
      </Wrapper>
      <TagLine>I'm Nabeelah Yousuph</TagLine>

      
    </>
  );
};

export default App;
