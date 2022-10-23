// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHWYEWUw_eDXMBbBAXIoMDlR-MP1yDGjU",
    authDomain: "unify-72b28.firebaseapp.com",
    projectId: "unify-72b28",
    storageBucket: "unify-72b28.appspot.com",
    messagingSenderId: "873611370153",
    appId: "1:873611370153:web:dbc574b833a53a93d953b8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
