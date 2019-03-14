import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
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

        <Route exact path="/" component={Home}>Home</Route>
        <Route path="/characters" component={Characters}>Characters</Route>
        <Route path="/planets" component={Planets}>Planets</Route>
      </div>
    );
  }
}

export default App;
