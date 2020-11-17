import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/firebase-database";
import "firebase/firebase-storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApGyKYUpnVhpxJGUlrnnue-9u_dopEbt4",
  authDomain: "skleppasjaart.firebaseapp.com",
  databaseURL: "https://skleppasjaart.firebaseio.com",
  projectId: "skleppasjaart",
  storageBucket: "gs://skleppasjaart.appspot.com/",
  messagingSenderId: "778247869941",
  appId: "1:778247869941:web:12484893b04d3ddb147cbc",
  measurementId: "G-C7BYHZ80SY",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const storage = firebase.storage();
const db = firebase.firestore();
export { db, storage };
