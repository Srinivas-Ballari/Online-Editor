// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqr9XtbguTlUqM0I2tPNK8BP-HRUZCbuQ",
  authDomain: "firstblogsite-fca7f.firebaseapp.com",
  projectId: "firstblogsite-fca7f",
  storageBucket: "firstblogsite-fca7f.appspot.com",
  messagingSenderId: "1026660422298",
  appId: "1:1026660422298:web:05dc0f151c6ec76e920523",
  measurementId: "G-69LWEDX9TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();