import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './AppStyles';
import Hero from './components/Hero';
import Nav from './components/VerticalNav';
import Info from './components/Info';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Hero />
        <Nav />
        <Info />
      </Wrapper>
    </Router>
  );
};

export default App;
