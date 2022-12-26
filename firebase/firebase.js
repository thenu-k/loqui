// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaJ6HNoWxBipuxbGtvHgFoJtoKJzSvEUU",
  authDomain: "loqui-132ce.firebaseapp.com",
  projectId: "loqui-132ce",
  storageBucket: "loqui-132ce.appspot.com",
  messagingSenderId: "23798468690",
  appId: "1:23798468690:web:2ca9be0651718b4c7bcf8b",
  measurementId: "G-JYVQ0YB48R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
