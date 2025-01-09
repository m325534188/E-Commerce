// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmIlf9AC-MxMb80R8A-gxaNn0qsZhYrco",
  authDomain: "e-commerce-1a093.firebaseapp.com",
  projectId: "e-commerce-1a093",
  storageBucket: "e-commerce-1a093.firebasestorage.app",
  messagingSenderId: "224688296152",
  appId: "1:224688296152:web:13a5cc263e0f223695c7ad"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore Database
export const analytics = getAnalytics(app); // Optional: Analytics