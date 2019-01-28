import React, { Component } from 'react';
import Task from '../Task/Task';
import { connect } from 'react-redux';
import { startTask, finishTask } from '../../actions/tasks';

const mapState = (state) => ({
  tasks: state.tasks
});

const actions = {
  startTask,
  finishTask
}

class TaskList extends Component {
  constructor() {
    super();

  }
  render() {
    let { list } = this.props.tasks;
    return (
      <div className="list wrapper">
        {list && list.map(task => <Task key={task.id} task={task} startTask={this.props.startTask} finishTask={this.props.finishTask} />)}
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskList);