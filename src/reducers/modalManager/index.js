import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modalManager/constants';
import { createReducer } from '../createReducer';

const initialState = null;

export const openModal = (state, payload) => {
  const { Component } = payload;
  return { Component };
}

export const closeModal = (state, payload) => {
  return null;
}

export default createReducer(initialState, {
  [CLOSE_MODAL]: closeModal,
  [OPEN_MODAL]: openModal
});