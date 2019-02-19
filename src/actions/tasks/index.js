import {
  GET_TASK,
  GET_TASKFEED,
  SAVE_TASK,
  DELETE_TASK,
  START_TASK,
  FINISH_TASK,
  GET_TASKARCHIVE,
  FILTER_TASK
} from './contants';
import firebase from '../../Firestore';


export const saveTask = (task) => {

  return async (dispatch) => {
    const db = firebase.firestore();
    await db.collection('tasks').add(task)
      .then(snap => {        
        const { id } = snap;
        const newTask = Object.assign({}, { ...task, id });        
        dispatch({
          type: SAVE_TASK,
          payload: { task: newTask }
        });
      });
  }
}

export const filterTask = (str) => {  
  return {
    type: FILTER_TASK,
    payload: { query: str }
  }
}

export const getTaskFeed = () => {
  return async (dispatch) => {
    const db = firebase.firestore();
    const userId = localStorage.getItem('@myTask:currentUser');
    await db.collection('tasks')
      .where('finished', '==', false)
      .where('userId', '==', userId)
      .get()
      .then(snap => {
        let tasks = [];
        snap.docs.map(doc => {
          const { id } = doc;
          const newDoc = Object.assign({}, { ...doc.data(), id });
          tasks.push(newDoc);
        });
        console.log(tasks);
        dispatch({
          type: GET_TASKFEED,
          payload: { list: tasks }
        });
      });
  }
}

export const getTaskArchive = () => {
  return async (dispatch) => {
    const db = firebase.firestore();
    const userId = localStorage.getItem('@myTask:currentUser');
    await db.collection('tasks')
      .where('finished', '==', true)
      .where('userId', '==', userId)
      .get()
      .then(snap => {
        let tasks = [];
        snap.docs.map(doc => {
          const { id } = doc;
          const newDoc = Object.assign({}, { ...doc.data(), id });
          tasks.push(newDoc);
        });
        
        dispatch({
          type: GET_TASKARCHIVE,
          payload: { archive: tasks }
        });
      });
  }
}

export const startTask = (id) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    await db.doc('tasks/' + id).update({
      started: true,
      startedAt: new Date()
    });

    dispatch({
      type: START_TASK,
      payload: { id }
    });
  }
}

export const finishTask = (id) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    await db.doc('tasks/' + id).update({
      finished: true,
      finishedAt: new Date()
    });

    dispatch({
      type: FINISH_TASK,
      payload: { id }
    });
  }
}

export const deleteTask = (id) => {

}