import React, { useState } from "react";
import { createTask, getTasks, MyTask } from "../utils/taskService";

import './AddTask.scss';

const AddTask = (props:any) => {
    const [taskName, setTaskName] = useState("");
    const [taskStatus, setTaskStatus] = useState("toDo");

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const taskData: MyTask = {
            title: taskName,
            status: taskStatus,
            isDeleted:0
          };
      
        createTask(taskData).then((data) => {
            console.log('task created successfuly', JSON.stringify(data));
            props.dataSubmitted();
            handleClose();
        }).catch((error) => {
            console.log('task creation failed', JSON.stringify(error));
            handleClose();
        })

      
    };

    return (
        <>
            <button type="button" onClick={handleShow}>
                Add Task
            </button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <h3>Add Task</h3>
                            <label>
                                Task Name:
                                <input
                                    type="text"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </label>
                            <label>
                                Status:
                                <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                                    <option value="toDo">To Do</option>
                                    <option value="inProgress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </label>
                            <button type="submit">Submit</button>
                            <span className="close" onClick={handleClose} >&times;</span>
                        </form>
                    </div>
                </div>)}
        </>
    );
};

export default AddTask;
