import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  apiKey: "AIzaSyAG59xDz-dhD402QS18ovBFTs8MIm5t99s",
  authDomain: "st-project-f2c80.firebaseapp.com",
  databaseURL: "https://st-project-f2c80-default-rtdb.firebaseio.com",
  projectId: "st-project-f2c80",
  storageBucket: "st-project-f2c80.appspot.com",
  messagingSenderId: "105374234602",
  appId: "1:105374234602:web:73556ef5ff52146623e493",
  measurementId: "G-GPRFGQPD3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
const auth = getAuth();