import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import TaskFeed from '../TaskFeed/TaskFeed';
import Archive from '../Archive/Archive';
import People from '../People/People';



class HomePage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div >
        <SearchBar />
        <div className="page">
          <Switch>
            <Route exact path="/" component={TaskFeed} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/people" component={People} />      
            <Redirect to="/" />      
          </Switch>

        </div>
      </div>
    );
  }
}

export default HomePage;
