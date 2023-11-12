// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvkS04zmaTR3HS3NxqgUpIHyFjmCrnyKw",
  authDomain: "admin-dashboard-d53d0.firebaseapp.com",
  projectId: "admin-dashboard-d53d0",
  storageBucket: "admin-dashboard-d53d0.appspot.com",
  messagingSenderId: "164697776374",
  appId: "1:164697776374:web:a1bd50edb07f6ce7dcccd7",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
