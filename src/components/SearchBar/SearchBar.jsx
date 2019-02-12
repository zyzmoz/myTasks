import React, { Component } from 'react';
import './search-bar.css';
import SearchInput from '../../Util/SearchInput/SearchInput';
import { connect } from 'react-redux';
import { filterTask } from '../../actions/tasks';


const mapState = (state) => ({
  tasks: state.tasks
});

const actions = {
  filterTask
}

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  
  handleChange = (value) => {
    this.setState({ query: value });
  }

  render() {
    let { query } = this.state;    
    return (
      <div className="search-bar">
        <div className="content">
          <SearchInput value={query} onChange={this.handleChange} event={this.props.filterTask} />
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(SearchBar);