import React, { Component } from 'react';
import Task from '../Task/Task';

const TaskList = ({list, startTask, finishTask}) => {
  return (
    <div className="list wrapper">
      {list && list.map(task => <Task key={task.id} task={task} startTask={startTask} finishTask={finishTask} />)}
    </div>
  );
};
export default TaskList;