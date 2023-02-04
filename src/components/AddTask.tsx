import React, { useState } from "react";
import { TaskState, TaskStatus } from "../utils/enums";
import { createTask, getTasks, MyTask } from "../utils/taskService";

import './AddTask.scss';

const AddTask = (props: any) => {
    const [taskName, setTaskName] = useState("");
    const [taskStatus, setTaskStatus] = useState<TaskStatus>(TaskStatus.TODO);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () =>{
        setTaskName("");
        setTaskStatus(TaskStatus.TODO);
        setShowModal(true);

    } 

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const taskData: MyTask = {
            title: taskName,
            status: taskStatus,
            isDeleted: TaskState.ACTIVE
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
            <div className="text-center">
                <button className="btn btn-primary mt-2 " type="button" onClick={handleShow}>
                    Add Task
                </button>
            </div>
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
                                <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}>
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

export default AddTask;
