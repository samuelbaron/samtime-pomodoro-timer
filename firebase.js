import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3QXiIB101sJHkKetBDA00U3fwDcdInzs",
  authDomain: "samtime-pomodoro.firebaseapp.com",
  projectId: "samtime-pomodoro",
  appId: "1:201356244882:web:ae49ee915f46db9b54334b",
  measurementId: "G-MGDR9SQRKK"
};
// Initialize Firebase
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : '';
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export const auth = firebase.auth();
// export const db = firebase.firestore()
// var db = firebase.firestore()
export default firebase
