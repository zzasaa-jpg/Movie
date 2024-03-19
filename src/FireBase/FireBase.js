// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAzrHGHIWT_rbjJFDd3koY9F72JhhwbOVU",
  authDomain: "movies-6eafa.firebaseapp.com",
  projectId: "movies-6eafa",
  storageBucket: "movies-6eafa.appspot.com",
  messagingSenderId: "919696399655",
  appId: "1:919696399655:web:7f993f8e365e6a85349d02",
  measurementId: "G-W90P8VHBBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;