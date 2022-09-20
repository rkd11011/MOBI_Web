import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgmLdZfXvn5WYTNX1CjfUW2IPLNFExpPI",
  authDomain: "granadilla-dd513.firebaseapp.com",
  projectId: "granadilla-dd513",
  storageBucket: "granadilla-dd513.appspot.com",
  messagingSenderId: "120306619436",
  appId: "1:120306619436:web:5687f70c94d9f1155bed89",
  measurementId: "G-588723B11S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };

export default db;
