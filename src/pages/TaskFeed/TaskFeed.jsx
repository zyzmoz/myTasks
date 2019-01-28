import React, { Component } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { connect } from 'react-redux';
import { startTask, finishTask } from '../../actions/tasks';

const mapState = (state) => ({
  tasks: state.tasks
});

const actions = {
  startTask,
  finishTask
}

class TaskFeed extends Component {
  render() {
    let { list } = this.props.tasks;
    return (
      <div className="content">
        <TaskList list={list} startTask={this.props.startTask} finishTask={this.props.finishTask} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TaskFeed);