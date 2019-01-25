import {
  GET_TASK,
  GET_TASKS,
  SAVE_TASK,
  DELETE_TASK
} from './contants';


export const saveTask = (task) => {
  return {
    type: SAVE_TASK,
    payload: { task }
  }
}

export const getTask = () => {
  
}

export const getTasks = () => {
  return {
    type: GET_TASKS,
    payload: { list: []}
  }  
}

export const deleteTask = (id) => {
  
}