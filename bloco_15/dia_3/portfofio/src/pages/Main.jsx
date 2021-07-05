import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';

class Main extends React.Component {
  render() {

    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/works" component={ Works } />
        <Route path="/contact" component={ Contact} />
        <Route path="/about" component={ About } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Main;