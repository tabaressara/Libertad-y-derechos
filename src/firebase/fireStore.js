
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBq6yqF0d-cJodER1h7efxQNEs4H6Iv6vQ",
  authDomain: "volei-209ca.firebaseapp.com",
  projectId: "volei-209ca",
  storageBucket: "volei-209ca.appspot.com",
  messagingSenderId: "566455916951",
  appId: "1:566455916951:web:d8025924c97bd1593f4cd2",
  measurementId: "G-CDTN012F37"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);