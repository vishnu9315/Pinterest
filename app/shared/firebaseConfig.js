// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "pinterest-4d011.firebaseapp.com",
  projectId: "pinterest-4d011",
  storageBucket: "pinterest-4d011.appspot.com",
  messagingSenderId: "112121970438",
  appId: "1:112121970438:web:dc2322812234b4c4e4a887",
  measurementId: "G-5KZS5MJ78N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;