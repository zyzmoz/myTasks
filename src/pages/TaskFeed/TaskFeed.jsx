import React, { Component } from 'react';
import TaskList from '../../components/TaskList/TaskList';

class TaskFeed extends Component {
  render() {
    return (
      <div className="content">
        <TaskList />
      </div>
    );
  }
}

export default TaskFeed;