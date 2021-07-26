import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Episode from './pages/Episode';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/episode" component={ Episode } />
      <Route path="/about" component={ About } />
    </Switch>
  );
}

export default App;
