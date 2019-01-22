import React, { Component } from 'react';
import HomePage from '../pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu/Menu';

const App = () =>
  <Router >
    <div>
      <Menu />
      <Route exact path="/"
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default App;