import React from 'react';
import './task.css';

const Task = ({ task, startTask, finishTask }) => {
  return (
    <div className="task-card">
      <div className="task-text">
        <p>{task.text}</p>
      </div>
      {!task.started && !task.finished &&
        <div className="task-actions start">
          <button onClick={() => startTask(task.id)} className="btn">Start</button>
        </div>
      }
      {task.started && !task.finished &&
        <div className="task-actions finish">
          <button onClick={() => finishTask(task.id)} className="btn">Finish</button>
        </div>
      }
      {task.finished && task.started &&
        <div className="task-actions done">
          Done!
        </div>
      }
    </div>
  );
};

export default Task;