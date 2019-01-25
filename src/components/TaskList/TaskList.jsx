import React, { Component } from 'react';
import Task from '../Task/Task';
import {connect} from 'react-redux';

const mapState = (state) => ({
  tasks: state.tasks
});

class TaskList extends Component {
  constructor() {
    super();
    
  }
  render() {
    let { list } = this.props.tasks;    
    return (
      <div className="list wrapper">
        {list && list.map(task => <Task key={task.id} task={task}/>)}
      </div>
    );
  }
}

export default connect(mapState)(TaskList);