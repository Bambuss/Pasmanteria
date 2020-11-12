import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "...",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
export { db };
