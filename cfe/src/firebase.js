// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJF_yERRhOX8AA3JLVcqfAJ50OE7S95UE",
  authDomain: "cfe-ieuw-71fa6.firebaseapp.com",
  projectId: "cfe-ieuw-71fa6",
  storageBucket: "cfe-ieuw-71fa6.appspot.com",
  messagingSenderId: "815781277295",
  appId: "1:815781277295:web:c768ab64449622dc1b679a",
  measurementId: "G-QQ3N5R5JMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
//const analytics = getAnalytics(app);