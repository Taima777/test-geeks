// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAivh2VhXqYLHoH-Lc3ttggOZHiKZyIvt4",
  authDomain: "vue-shop-5d758.firebaseapp.com",
  projectId: "vue-shop-5d758",
  storageBucket: "vue-shop-5d758.appspot.com",
  messagingSenderId: "206845083563",
  appId: "1:206845083563:web:651015b978db0278ec5cee",
  measurementId: "G-PZ105N54VL"
};
export const fb = firebase.initializeApp(config);


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);