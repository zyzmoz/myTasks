import { LOGIN, LOGOUT, REGISTER } from "./constants";
import firebase from '../../Firestore';


export const login = (username, password) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    db.collection('users')
      .where("username", "==", username)
      .where("password", "==", password)
      .get()
      .then((snap) => {

        if (snap.empty)
          dispatch({
            type: LOGIN_FAILED,
            payload: { message: 'Wrong username or password' }
          });

        snap.docs.map(doc => {
          localStorage.setItem('@myTask:currentUser', doc.id);
          dispatch({
            type: LOGIN,
            payload: { id: doc.id }
          })
        });
      });

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

