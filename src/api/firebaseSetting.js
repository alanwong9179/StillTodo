// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7fBzMDIRKcVhfr6wijb7ZGpmzYI4swnc",
  authDomain: "still-todo.firebaseapp.com",
  projectId: "still-todo",
  storageBucket: "still-todo.appspot.com",
  messagingSenderId: "691671352010",
  appId: "1:691671352010:web:8d129ef6735f4381952a33",
  measurementId: "G-4B14322038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app)

