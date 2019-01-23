import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Switch, Route } from 'react-router-dom';
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
      <div className="page">
        <SearchBar />
        <div className="content padding">
          <Switch>
            <Route exact path="/" component={TaskFeed} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/people" component={People} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default HomePage;
