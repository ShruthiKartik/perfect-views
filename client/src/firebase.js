// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3294.firebaseapp.com",
  projectId: "mern-estate-b3294",
  storageBucket: "mern-estate-b3294.appspot.com",
  messagingSenderId: "562624697747",
  appId: "1:562624697747:web:fa21621915bba389430466"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
