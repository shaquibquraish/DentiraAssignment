import React from "react";
import { MyTask } from "../utils/taskService";
import './Task.scss';

const TaskCard = ({ id, title, status, startDate, endDate, handleDelete, handleUpdate }: any) => {
    return (

        <div className="col-md-3 col-sm-4 col-lg-3 col-xs-6 col-12">
            <div className="task-card mb-3">
                <div className="task-details">
                    <p>Title: <br /> {title}</p>
                    <p>Status: <br /> {status}</p>
                    <p>Start Date: <br /> {startDate.split('T')[0]}</p>
                    <p>End Date: <br /> {endDate.split('T')[0]}</p>
                </div>
                <div className="icons">
                    <div className="update-icon">
                        <i className="fa fa-pencil" onClick={() => handleUpdate({ id, title, status, startDate, endDate })}></i>
                    </div>
                    <div className="close-icon">
                        <i className="fa fa-times" onClick={() => handleDelete(id)}></i>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default TaskCard;
