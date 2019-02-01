import { LOGIN, LOGOUT, REGISTER } from "./constants";


export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: {}
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {}
  }
}

export const register = () => {
  return {
    type: REGISTER,
    payload: {}
  }
}

