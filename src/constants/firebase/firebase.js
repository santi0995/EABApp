import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4lL0txRVd7R-XuSD7c6uoPCdimzOKu1I",
  authDomain: "eabapp-93479.firebaseapp.com",
  databaseURL: "https://eabapp-93479-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eabapp-93479",
  storageBucket: "eabapp-93479.appspot.com",
  messagingSenderId: "162108201836",
  appId: "1:162108201836:web:37d604f9f9a70e366ff149",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
