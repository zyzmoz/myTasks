import { LOGIN, LOGOUT, REGISTER } from "./constants";
import firebase from '../../Firestore';


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
  const db = firebase.firestore();
  db.collection('users').add(user);
  return {
    type: REGISTER,
    payload: {}
  }
}

