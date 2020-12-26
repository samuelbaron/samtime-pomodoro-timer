import firebase from "firebase/app";
import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC3QXiIB101sJHkKetBDA00U3fwDcdInzs",
  authDomain: "samtime-pomodoro.firebaseapp.com",
  projectId: "samtime-pomodoro",
  storageBucket: "samtime-pomodoro.appspot.com",
  messagingSenderId: "201356244882",
  appId: "1:201356244882:web:ae49ee915f46db9b54334b",
  measurementId: "G-MGDR9SQRKK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export default db
