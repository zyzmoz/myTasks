import { createReducer } from "../createReducer";
import { LOGIN, LOGOUT, REGISTER } from "../../actions/auth/constants";


const initialState = {authenticated: false};

export const login = (state, payload) => {
  return {authenticated: true}
}

export const logout = (state, payload) => {
  return {authenticated: false}
}

export const register = (state, payload) => {
  return {}
}

export default createReducer(initialState, {
  [LOGIN]: login,
  [LOGOUT]: logout,
  [REGISTER]: register
});