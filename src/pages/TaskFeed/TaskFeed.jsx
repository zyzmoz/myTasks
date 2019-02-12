import React, { Component } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { connect } from 'react-redux';
import { startTask, finishTask, getTaskFeed } from '../../actions/tasks';

const mapState = (state) => ({
  tasks: state.tasks
});

const actions = {
  startTask,
  finishTask,
  getTaskFeed
}

class TaskFeed extends Component {

  async componentDidMount() {
    await this.props.getTaskFeed();
  }

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