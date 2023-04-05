// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// import dotenv from 'dotenv';
// dotenv.config();


const firebaseConfig = {
  apiKey: "AIzaSyB9pQ-uYTfZzNX05bkRofpWktOQpKwPixA",
  authDomain: "njac-editor.firebaseapp.com",
  projectId: "njac-editor",
  storageBucket: "njac-editor.appspot.com",
  messagingSenderId: "122165091841",
  appId: "1:122165091841:web:866046fce38087a134ea00"
};

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
