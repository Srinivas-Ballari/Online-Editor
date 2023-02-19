// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHWCmvEAv_Rak6wB4_6vtbDaAwp3YWrJc",
  authDomain: "onlineeditor-65191.firebaseapp.com",
  projectId: "onlineeditor-65191",
  storageBucket: "onlineeditor-65191.appspot.com",
  messagingSenderId: "455795341159",
  appId: "1:455795341159:web:8827e6ea8a63a96091a1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();