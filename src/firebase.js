import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASH7P6ubcU1hF9xj-lJRjne99ugk7Xm8A",
  authDomain: "reto-proyecto-redux.firebaseapp.com",
  projectId: "reto-proyecto-redux",
  storageBucket: "reto-proyecto-redux.appspot.com",
  messagingSenderId: "672365176151",
  appId: "1:672365176151:web:ea0d3f32dafab9a35fca12",
  measurementId: "G-2SR68SEWNG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, firebase, db }