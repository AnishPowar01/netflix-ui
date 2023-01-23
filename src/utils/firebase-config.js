
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD2hfKuGGA_t8EqUShanIdtOuPoY58KDXU",
  authDomain: "react-netflix-clone-892de.firebaseapp.com",
  projectId: "react-netflix-clone-892de",
  storageBucket: "react-netflix-clone-892de.appspot.com",
  messagingSenderId: "215373262205",
  appId: "1:215373262205:web:17af5d06d6fa1f97e5b014",
  measurementId: "G-CF3BLE8XE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
