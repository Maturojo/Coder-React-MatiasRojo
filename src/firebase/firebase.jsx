import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa2d8tuhm-OkbFn8JYBMV4fWNqz4a7ckk",
  authDomain: "react-matiasrojo.firebaseapp.com",
  projectId: "react-matiasrojo",
  storageBucket: "react-matiasrojo.firebasestorage.app",
  messagingSenderId: "964926389390",
  appId: "1:964926389390:web:135cfe17e478a5d4ba5ddf"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
