// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWzhp9gi9VOwDJV-z9PF7VCwhE9kWQH2k",
  authDomain: "envoy-learn.firebaseapp.com",
  projectId: "envoy-learn",
  storageBucket: "envoy-learn.appspot.com",
  messagingSenderId: "667617441026",
  appId: "1:667617441026:web:3c27a282ad89268e25be1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;