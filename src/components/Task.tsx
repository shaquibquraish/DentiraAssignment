import React from "react";
import { MyTask } from "../utils/taskService";
import './Task.scss';

const TaskCard = ({ id, title, status, handleDelete }: any) => {
  return (
    <div className="task-card">
      <div className="task-details">
        <p>{title}</p>
        <p>{status}</p>
      </div>
      <div className="close-icon">
        <i className="fa fa-times" onClick={() => handleDelete(id)}></i>
      </div>
    </div>
  );
};

export default TaskCard;
