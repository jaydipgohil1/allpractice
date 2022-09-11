// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdKcqzCQ2xvfhIKOZVssw4Y3EWov2TXzU",
  authDomain: "angular-demo-1f962.firebaseapp.com",
  projectId: "angular-demo-1f962",
  storageBucket: "angular-demo-1f962.appspot.com",
  messagingSenderId: "123156195145",
  appId: "1:123156195145:web:077c9abefa0961b324dc98",
  measurementId: "G-K03MN155X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// address
// email
// name
// password
