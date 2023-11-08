// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA5qeOW4_Ff_2UZs1F6qu6YkcqodAYNic",
  authDomain: "assignment-11-225dc.firebaseapp.com",
  projectId: "assignment-11-225dc",
  storageBucket: "assignment-11-225dc.appspot.com",
  messagingSenderId: "48057504737",
  appId: "1:48057504737:web:a60db2940442780960f8a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;