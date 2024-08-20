
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqvnHHlBN5bRmFu3SgBQGkDrioF0_CWyg",
  authDomain: "netflix-ui-8ac99.firebaseapp.com",
  projectId: "netflix-ui-8ac99",
  storageBucket: "netflix-ui-8ac99.appspot.com",
  messagingSenderId: "784662041349",
  appId: "1:784662041349:web:7091c8eec66dfa1d671d6c",
  measurementId: "G-JZ25D25DQL"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);