import React, { Component } from 'react';
import HomePage from '../pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Modal from './Modal/Modal';
import { withAuthentication } from '../hoc/withAuthentication';

const App = () =>
  <Router >
    <div className="master wrapper">      
      <Modal />
      <Menu />
      <HomePage />      
    </div>
  </Router>

export default withAuthentication(App);