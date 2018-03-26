import React, { Component } from 'react';
import HomePage from '../pages/Home';
import MenuComponent from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router history={history}>
    <div>
      <MenuComponent />
      <Route exact path="/"
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default App;