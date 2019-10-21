import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainNav from './MainNav';
import { InfoWrapper } from './styles/Infostyles';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Info = ({ location }) => {
  return (
    <>
      <MainNav />
      <InfoWrapper>
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames='fade'
          >
            <section>
              <Switch location={location}>
                <Route exact path='/' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </InfoWrapper>
    </>
  );
};

export default withRouter(Info);
