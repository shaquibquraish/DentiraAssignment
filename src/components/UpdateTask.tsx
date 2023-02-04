import React, { useEffect, useState } from "react";
import { TaskState, TaskStatus } from "../utils/enums";
import { createTask, getTasks, MyTask, updateTask } from "../utils/taskService";

import './UpdateTask.scss';

const UpdateTask = ({id, title, status, handlePopUp, dataSubmitted}: any) => {
    const [taskName, setTaskName] = useState(title);
    const [taskStatus, setTaskStatus] = useState(status);

    const [showModal, setShowModal] = useState(true);


    const handleClose = () => {
        setShowModal(false);
        handlePopUp(false);

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const taskData: MyTask = {
            id:id,
            title: taskName,
            status: taskStatus,
            isDeleted: TaskState.ACTIVE
        };

        updateTask(taskData).then((data) => {
            console.log('task created successfuly', JSON.stringify(data));
            dataSubmitted();
            handleClose();
        }).catch((error) => {
            console.log('task creation failed', JSON.stringify(error));
            handleClose();
        })


    };

    return (
        <>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <h3>Update Task</h3>
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
                                <option value={TaskStatus.TODO}>To Do</option>
                                    <option value={TaskStatus.INPROGRESS}>In Progress</option>
                                    <option value={TaskStatus.COMPLETED}>Completed</option>
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

export default UpdateTask;
