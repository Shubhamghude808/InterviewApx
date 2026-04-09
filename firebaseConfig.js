// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "learn2shift-5fee2.firebaseapp.com",
  projectId: "learn2shift-5fee2",
  storageBucket: "learn2shift-5fee2.firebasestorage.app",
  messagingSenderId: "371543256652",
  appId: "1:371543256652:web:3a3d070247e24c24a7cee9",
  measurementId: "G-K2Z6ZQH10T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);