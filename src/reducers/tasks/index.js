import { createReducer } from "../createReducer";
import { SAVE_TASK, START_TASK, FINISH_TASK } from "../../actions/tasks/contants";

const initialState = {}

export const saveTask = (state, payload) => {
  const { task } = payload;
  let list = state['list'] ? state.list : [];
  return { list: [...list, Object.assign({}, task)] };
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
  const newList = state.list.map(task =>
    task.id === id ? { ...task, finished: true, finishedAt: new Date() } : task
  );
  return { list: newList };
}


export default createReducer(initialState, {
  [SAVE_TASK]: saveTask,
  [START_TASK]: startTask,
  [FINISH_TASK]: finishTask
});