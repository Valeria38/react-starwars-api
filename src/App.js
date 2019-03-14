import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Characters from './Characters';
import Planets from './Planets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/planets">Planets</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}>Home</Route>
          <Route exact path="/characters" component={Characters}>Characters</Route>
          <Route exact path="/planets" component={Planets}>Planets</Route>
          <Route render={() => (<div>Page not found.</div>)} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
