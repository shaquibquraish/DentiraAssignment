import React from "react";
import { MyTask } from "../utils/taskService";
import './Task.scss';

const TaskCard = ({ id, title, status, handleDelete, handleUpdate }: any) => {
    return (
        <div className="task-card">
            <div className="task-details">
                <p>Title: {title}</p>
                <p>Status: {status}</p>
            </div>
            <div className="icons">
                <div className="update-icon">
                    <i className="fa fa-pencil" onClick={() => handleUpdate(id)}></i>
                </div>
                <div className="close-icon">
                    <i className="fa fa-times" onClick={() => handleDelete(id)}></i>
                </div>

            </div>
        </div>
    );
};

export default TaskCard;
