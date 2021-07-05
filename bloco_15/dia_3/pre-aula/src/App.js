import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Início</Link>
        <br />
        <Link to="/about">Sobre</Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    );
  }
}
export default App;

