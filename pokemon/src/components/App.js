import React from 'react';
import {Switch, Route} from 'react-router-dom'
import '../styles/index.css';
import Nav from './Nav.js';
import Home from './Home.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
