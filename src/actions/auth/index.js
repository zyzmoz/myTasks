import { LOGIN, LOGOUT, REGISTER, LOGIN_FAILED } from "./constants";
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

export const loginWithId = (id) => {
  return async (dispatch) => {
    const db = firebase.firestore();
    db.collection('users')
      .doc(id)
      .get()
      .then((snap) => {
        console.log(snap);
        if (!snap.exists) {
          localStorage.removeItem('@myTask:currentUser');
          dispatch({
            type: LOGIN_FAILED,
            payload: { message: 'Wrong username or password' }
          });
        } else {          
          dispatch({
            type: LOGIN,
            payload: { id: id }
          })
        }
      });
  }
}

export const logout = () => {
  localStorage.removeItem('@myTask:currentUser');
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

