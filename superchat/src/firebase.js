import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-V6BLor247j5_CpYaQnOqy-pwygEr3b0",
  authDomain: "superchat-kim.firebaseapp.com",
  projectId: "superchat-kim",
  storageBucket: "superchat-kim.firebasestorage.app",
  messagingSenderId: "94430615720",
  appId: "1:94430615720:web:ef60b5c821b024296fca9d"
};


const app = initializeApp(firebaseConfig);

//인증 서비스
export const auth = getAuth(app);

 //구글인증 서비스
export const googleAuth = new GoogleAuthProvider(app);

//파이어베이스 DB 서비스
export const db = getFirestore(app);