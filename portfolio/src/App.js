import React from 'react';
import { GlobalStyle, Wrapper } from './AppStyles';
import Hero from './components/Hero';
import Nav from './components/VerticalNav';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        <Nav />
        <MainNav />
      </Wrapper>
    </>
  );
};

export default App;
