import {
  GET_TASK,
  GET_TASKS,
  SAVE_TASK,
  DELETE_TASK,
  START_TASK,
  FINISH_TASK
} from './contants';


export const saveTask =  (task) => {

  return  async (dispatch) =>{
    dispatch({
      type: SAVE_TASK,
      payload: { task }
    });    
  }  
}

export const getTask = () => {
  
}

export const getTasks = () => {
  return {
    type: GET_TASKS    
  }  
}

export const startTask = (id) => {
  return {
    type: START_TASK,
    payload: { id }
  }
}

export const finishTask = (id) => {  
  return {
    type: FINISH_TASK,
    payload: { id }
  }
}

export const deleteTask = (id) => {
  
}