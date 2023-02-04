import { firebaseDB } from './firebase'

import { ref, push, update, get, child } from "firebase/database";
import { TaskState, TaskStatus } from './enums';

export interface MyTask {
    id?: string,
    title: string,
    status: TaskStatus,
    isDeleted?: TaskState
}

export const createTask = (task: MyTask) => {

    const newTaskKey = push(child(ref(firebaseDB), 'tasks')).key;
    const updates: any = {};
    const taskData = { ...task, id: newTaskKey };
    updates['/tasks/' + newTaskKey] = taskData;

    return update(ref(firebaseDB), updates);
};

export const getTasks = () => {
    return get(child(ref(firebaseDB), 'tasks'));

};

export const updateTask = (task: MyTask) => {
    return update(ref(firebaseDB, '/tasks/' + task.id), {
        title: task.title,
        status: task.status
    });
};

export const deleteTask = (id: string) => {
    return update(ref(firebaseDB, '/tasks/' + id), {
        isDeleted: TaskState.DELETED
    });
};
