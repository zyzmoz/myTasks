import config from '../../firebaseConfig';
import firebase from 'firebase';

firebase.initializeApp(config);
const db = firebase.firestore();

export default {
  firestore: firebase,
  db
};


