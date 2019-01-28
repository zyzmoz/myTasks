import React, { Component } from 'react';
import Task from '../Task/Task';
import { connect } from 'react-redux';
import { startTask, finishTask } from '../../actions/tasks';



const TaskList = ({list, startTask, finishTask}) => {
  return (
    <div className="list wrapper">
      {list && list.map(task => <Task key={task.id} task={task} startTask={startTask} finishTask={finishTask} />)}
    </div>
  );
};
export default TaskList;