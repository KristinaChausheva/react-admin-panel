// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panel-3cc3b.firebaseapp.com",
  projectId: "react-admin-panel-3cc3b",
  storageBucket: "react-admin-panel-3cc3b.appspot.com",
  messagingSenderId: "379829323578",
  appId: "1:379829323578:web:15244f97aa91f9722d7203",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
