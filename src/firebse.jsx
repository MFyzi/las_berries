
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from 'firebase/auth' 
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "lasberries-d13a9.firebaseapp.com",
  databaseURL: "https://lasberries-d13a9-default-rtdb.firebaseio.com",
  projectId: "lasberries-d13a9",
  storageBucket: "lasberries-d13a9.appspot.com",
  messagingSenderId: "916931174792",
  appId: "1:916931174792:web:b69510a0b57bf0dac65a3d",
  measurementId: "G-E5729QM08Y"
};

// Initialize Firebasefd
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase()