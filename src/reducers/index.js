import { combineReducers } from 'redux';
import modalReducer from './modalManager';
import taskReducer from './tasks';
import authReducer from './auth';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  modals: modalReducer,
  tasks: taskReducer,
  auth: authReducer
});

export default rootReducer;