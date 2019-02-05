import { LOGIN, LOGOUT, REGISTER } from "./constants";
import { db } from '../../Firestore';


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

export const register = (user) => {
  db.collection('users').add(user);
  return {
    type: REGISTER,
    payload: {}
  }
}

