import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzPmZJaQTGMnsPrUVIhgWfHDvZUhL4Kcs",
  authDomain: "react-class-40d52.firebaseapp.com",
  projectId: "react-class-40d52",
  storageBucket: "react-class-40d52.appspot.com",
  messagingSenderId: "343637226592",
  appId: "1:343637226592:web:77d955b1c5733bd5acbf05",
  measurementId: "G-8VMG3ZEKDN"
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };