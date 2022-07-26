// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAQT8UJMgwCFtML5ryT8TPFCxZ7pOCtyk",
  authDomain: "loanpecar.firebaseapp.com",
  projectId: "loanpecar",
  storageBucket: "loanpecar.appspot.com",
  messagingSenderId: "556817974440",
  appId: "1:556817974440:web:d9e9732bf715bac1dd6e9d",
  measurementId: "G-Z9ESF2QWX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);