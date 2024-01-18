// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsHoI2wSh6LjcGHd4NP4uVie_npbgp2zY",
  authDomain: "fir-demo-c7e7a.firebaseapp.com",
  databaseURL: "https://fir-demo-c7e7a-default-rtdb.firebaseio.com",
  projectId: "fir-demo-c7e7a",
  storageBucket: "fir-demo-c7e7a.appspot.com",
  messagingSenderId: "15004527098",
  appId: "1:15004527098:web:cd428a84fbd87f7a481c43",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
