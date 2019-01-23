import React, { Component } from 'react';
import HomePage from '../pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Modal from './Modal/Modal';

const App = () =>
  <Router >
    <div className="wrapper">
      {/* <Modal component={() => <HomePage />}/> */}
      <Menu />
      <HomePage />      
    </div>
  </Router>

export default App;