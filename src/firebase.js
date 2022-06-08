// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBkz4wr40Vbv2MMKbHebojtcTFK6fFLWo",
  authDomain: "todo-9a0f3.firebaseapp.com",
  projectId: "todo-9a0f3",
  storageBucket: "todo-9a0f3.appspot.com",
  messagingSenderId: "135719462023",
  appId: "1:135719462023:web:f3eb6ceeca6dcf72c2c422",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
