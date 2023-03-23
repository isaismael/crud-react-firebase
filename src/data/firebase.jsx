// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkkgCnRAbqeTdQ9DCrhVbR88TPq16O8I",
  authDomain: "fir-crud-4aed3.firebaseapp.com",
  projectId: "fir-crud-4aed3",
  storageBucket: "fir-crud-4aed3.appspot.com",
  messagingSenderId: "777615491767",
  appId: "1:777615491767:web:4c263164a6a2645acb4332",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }