import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDh2xcKaAc8D1E8sJmYWID8oogw3XBfLpQ",
  authDomain: "mobi-2852c.firebaseapp.com",
  databaseURL: "https://mobi-2852c-default-rtdb.firebaseio.com",
  projectId: "mobi-2852c",
  storageBucket: "mobi-2852c.appspot.com",
  messagingSenderId: "432479934767",
  appId: "1:432479934767:web:f16b33a4e99f14d467a9da",
  measurementId: "G-P2PJMFW39P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;
