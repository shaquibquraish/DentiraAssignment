import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask';
import TaskCard from '../components/Task';
import UpdateTask from '../components/UpdateTask';
import { createTask, deleteTask, getTasks, MyTask } from '../utils/taskService'

const TaskContainer = () => {
   
    const [tasks , setTasks] = useState<MyTask[]>([]);

    const [showUpdatePopUp , setShowUpdatePopUp] = useState(false);

    const [taskToUpdate , setTaskToUpdate] = useState<MyTask>({id:'', title:'', status:''});



    const getTaskFromFireBase= () => {
        getTasks().then((snapshot) => {
            if (snapshot.exists()) {
              const activeTasks = Object.values(snapshot.val()).filter((task: any) => task.isDeleted !==1).map(task => task as MyTask);
              setTasks(activeTasks);
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

    }

    useEffect(() =>{
        getTaskFromFireBase();

    },[]);

   

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
        setTaskToUpdate({...task})
        setShowUpdatePopUp(true);
       
    };
    const handleUpdateCLose = (task: MyTask) => {
        setShowUpdatePopUp(false);
    };


    
  return (
    <div>
         <div className="row">
        {tasks?.length > 0 ? tasks.map(task => <TaskCard key={task.id} id={task.id} title={task.title} status={task.status} handleDelete={handleDelete} handleUpdate={handleUpdate}/>): <div>Loading...</div>}
        </div>
        <AddTask dataSubmitted={handleDataSubmitted}/>
        {showUpdatePopUp? <UpdateTask {...taskToUpdate} handlePopUp={handleUpdateCLose} dataSubmitted={handleDataSubmitted}/>: null}
    </div>
  )
}

export default TaskContainer