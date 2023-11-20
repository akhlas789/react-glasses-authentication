// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAVFhPRxqCJ9QFqfVxPILURdP138v29Gk",
  authDomain: "react-firebase-auth-62bb1.firebaseapp.com",
  projectId: "react-firebase-auth-62bb1",
  storageBucket: "react-firebase-auth-62bb1.appspot.com",
  messagingSenderId: "608364218410",
  appId: "1:608364218410:web:67fffd8732c97db7cd5b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;