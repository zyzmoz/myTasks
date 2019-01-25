import { combineReducers } from 'redux';
import modalReducer from './modalManager';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  modals: modalReducer
});

export default rootReducer;