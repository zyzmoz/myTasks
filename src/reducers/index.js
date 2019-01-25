import { combineReducers } from 'redux';
import modalReducer from './modalManager';
import taskReducer from './tasks';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  modals: modalReducer,
  tasks: taskReducer
});

export default rootReducer;