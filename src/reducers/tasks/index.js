import { createReducer } from "../createReducer";
import { SAVE_TASK } from "../../actions/tasks/contants";

const initialState = {}

export const saveTask = (state, payload) => {
  const { task } = payload;
  let list = state['list']? state.list : [];  
  return { list: [...list, Object.assign({}, task)] };
}



export default createReducer(initialState, {
  [SAVE_TASK]: saveTask
});