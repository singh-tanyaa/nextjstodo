import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS5jktCY0gD7cNeV7jVQstQT53o3VZnAA",
  authDomain: "nextjstodo-74f0e.firebaseapp.com",
  projectId: "nextjstodo-74f0e",
  storageBucket: "nextjstodo-74f0e.appspot.com",
  messagingSenderId: "440349995040",
  appId: "1:440349995040:web:f7b3c6d19c38edc7f7cc45",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
