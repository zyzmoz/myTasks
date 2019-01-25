import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: [
        {
          id: 1,
          createdAt: '',
          text: 'Do Something',
          deadline: '',
          finished: true,
          finishedAt: '',
          started: true,
          startedAt: '',
          owner: 'Harry'
        },
        {
          id: 2,
          createdAt: '',
          text: 'Do another thing',
          deadline: '',
          finished: false,
          finishedAt: '',
          started: true,
          startedAt: '',
          owner: 'Draco'
        },
        {
          id: 3,
          createdAt: '',
          text: 'Do homework',
          deadline: '',
          finished: false,
          finishedAt: '',
          started: false,
          startedAt: '',
          owner: 'Draco'
        }
      ]
    }
  }
  render() {
    let taskList = this.state.taskList;
    return (
      <div className="list wrapper">
        {taskList && taskList.map(task => <Task key={task.id} task={task}/>)}
      </div>
    );
  }
}

export default TaskList;