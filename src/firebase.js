import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh2xcKaAc8D1E8sJmYWID8oogw3XBfLpQ",
  authDomain: "mobi-2852c.firebaseapp.com",
  databaseURL: "https://mobi-2852c-default-rtdb.firebaseio.com",
  projectId: "mobi-2852c",
  storageBucket: "mobi-2852c.appspot.com",
  messagingSenderId: "432479934767",
  appId: "1:432479934767:web:f16b33a4e99f14d467a9da",
  measurementId: "G-P2PJMFW39P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };

export default db;
