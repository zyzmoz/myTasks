import { createReducer } from "../createReducer";
import { SAVE_TASK, START_TASK, FINISH_TASK, GET_TASKFEED, GET_TASKARCHIVE, FILTER_TASK } from "../../actions/tasks/contants";


const initialState = {}

export const saveTask = (state, payload) => {
  let { list } = state;
  list.push(payload.task);
  return { ...state, list: list };
}

export const startTask = (state, payload) => {
  const { id } = payload;
  const newList = state.list.map(task =>
    task.id === id ? { ...task, started: true, startedAt: new Date() } : task
  );
  return { list: newList };
}

export const finishTask = (state, payload) => {
  const { id } = payload;
  const newList = state.list.filter(task => task.id != id);
  return { list: newList };
}

export const getTaskFeed = (state, payload) => {
  return { list: payload.list };
}

export const getTaskArchive = (state, payload) => {
  return { archive: payload.archive };
}

export const filterTask = (state, payload) => {
  let { list, archive } = state;
  if (list)
    list = list.filter(task => task.text.includes(payload.query));
  if (archive) {   
    archive = archive.filter(task => task.text.includes(payload.query));
  }

  return { archive, list };
}


export default createReducer(initialState, {
  [SAVE_TASK]: saveTask,
  [START_TASK]: startTask,
  [FINISH_TASK]: finishTask,
  [GET_TASKFEED]: getTaskFeed,
  [GET_TASKARCHIVE]: getTaskArchive,
  [FILTER_TASK]: filterTask
});