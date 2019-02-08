import { createReducer } from "../createReducer";
import { LOGIN, LOGOUT, REGISTER, LOGIN_FAILED } from "../../actions/auth/constants";


const initialState = { authenticated: false };

export const login = (state, payload) => {
  return { authenticated: true, id: payload.id }
}

export const loginFailed = (state, payload) => {
  return { authenticated: false, message: payload.message }
}

export const logout = (state, payload) => {
  return { authenticated: false }
}

export const register = (state, payload) => {
  return {}
}

export default createReducer(initialState, {
  [LOGIN]: login,
  [LOGOUT]: logout,
  [REGISTER]: register,
  [LOGIN_FAILED]: loginFailed
});