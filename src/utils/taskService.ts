import { firebaseDB } from './firebase'

import { onValue, ref, set, push, update, get, child } from "firebase/database";

export interface MyTask {
    id? :string,
    title: string,
    status: string,
    isDeleted?: number

}

export const createTask = (task: MyTask) => {
   
    const newTaskKey = push(child(ref(firebaseDB), 'tasks')).key;
    const updates: any = {};
    const taskData = {...task, id: newTaskKey};
    updates['/tasks/' + newTaskKey] = taskData;

    return update(ref(firebaseDB), updates);
};

export const getTasks = () => {
   return get(child(ref(firebaseDB), 'tasks'));
   
};

export const updateTask =(task: MyTask) => {
    return  update(ref(firebaseDB,'/tasks/'+ task.id),{
        title: task.title,
        status: task.status
     }).then((data) => {
         console.log('task updated successfuly', JSON.stringify(data));
     }).catch((error) => {
         console.log('task updation failed', JSON.stringify(error));
     })
 };

export const deleteTask =(id: string) => {
   return  update(ref(firebaseDB,'/tasks/'+ id),{
        isDeleted: 1
    });
};
