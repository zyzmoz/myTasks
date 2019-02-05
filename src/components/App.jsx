import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dash from './Dash/Dash';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { firestore } from '../Firestore';



const App = () =>
  <Router >
    <div>
      {/* <Dash /> */}
      <Route path="/" component={Dash} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>

export default App;