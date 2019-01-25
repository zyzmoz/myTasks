import React from 'react';
import './task.css';

const Task = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-text">
        <p>{task.text}</p>
      </div>
      {!task.started && !task.finished &&
        <div className="task-actions start">
          <button className="btn">Start</button>
        </div>
      }
      {task.started && !task.finished &&
        <div className="task-actions finish">
          <button className="btn">Finish</button>
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