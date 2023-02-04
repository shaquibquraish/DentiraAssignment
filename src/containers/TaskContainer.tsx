import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask';
import TaskCard from '../components/Task';
import UpdateTask from '../components/UpdateTask';
import { TaskState, TaskStatus } from '../utils/enums';
import { createTask, deleteTask, getTasks, MyTask, updateTask, updateTaskPriority } from '../utils/taskService';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskContainer = () => {

    const [tasks, setTasks] = useState<MyTask[]>([]);

    const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);

    const [taskToUpdate, setTaskToUpdate] = useState<MyTask>({ id: '', title: '', status: TaskStatus.TODO });

    const moveCard = (fromId: string, fromIndex: number, toIndex: number, toId: string) => {
        const listSize = tasks?.length;
        updateTaskPriority(fromId, (listSize - (toIndex + 1))).then(() => {
            updateTaskPriority(toId, (listSize - (fromIndex + 1))).then(() => {
                getTaskFromFireBase();
            })
        }
        )
    };

    const getTaskFromFireBase = () => {
        getTasks().then((snapshot) => {
            if (snapshot.exists()) {
                const activeTasks = Object.values(snapshot.val()).
                    filter((task: any) => task.isDeleted !== TaskState.DELETED).
                    map(task => task as MyTask)
                    .sort((task1, task2) => {
                        return (task2.priority as number) - (task1?.priority as number)
                    });
                setTasks(activeTasks);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

    }

    useEffect(() => {
        getTaskFromFireBase();

    }, []);



    const handleDataSubmitted = () => {
        getTaskFromFireBase();
    };



    const handleDelete = (id: string) => {
        deleteTask(id).then((data) => {
            getTaskFromFireBase();
            console.log('task deleted successfuly', JSON.stringify(data));
        }).catch((error) => {
            console.log('task deletion failed', JSON.stringify(error));
        })
    };

    const handleUpdate = (task: MyTask) => {
        console.log('yesyeys')
        setTaskToUpdate({ ...task })
        setShowUpdatePopUp(true);

    };
    const handleUpdateCLose = (task: MyTask) => {
        setShowUpdatePopUp(false);
    };



    return (
        <div>
            <div className="row">
                <DndProvider backend={HTML5Backend} >
                    {tasks?.length > 0 ? tasks.map((task, index) => <TaskCard key={task.id} id={task.id} title={task.title} status={task.status} startDate={task.startDate} endDate={task.endDate} index={index} moveCard={moveCard} handleDelete={handleDelete} handleUpdate={handleUpdate} />) : <div>Loading...</div>}
                </DndProvider>
            </div>
            <AddTask dataSubmitted={handleDataSubmitted} listSize={tasks?.length ? tasks?.length : 0} />
            {showUpdatePopUp ? <UpdateTask {...taskToUpdate} handlePopUp={handleUpdateCLose} dataSubmitted={handleDataSubmitted} /> : null}
        </div>
    )
}

export default TaskContainer