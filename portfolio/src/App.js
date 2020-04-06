import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle, Main, Wrapper } from './AppStyles';
import Hero from './components/Hero';
import Nav from './components/VerticalNav';
import Info from './components/Info';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Nav />
        <Wrapper>
          <Hero />
          <Info />
        </Wrapper>
      </Main>
      <Footer />
    </Router>
  );
};

export default App;
