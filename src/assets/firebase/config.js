// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpSnEj4STpSc9vg0PuvnmuXC8T2Bu-XGQ",
  authDomain: "kodigo-music-8c33f.firebaseapp.com",
  projectId: "kodigo-music-8c33f",
  storageBucket: "kodigo-music-8c33f.appspot.com",
  messagingSenderId: "267684999874",
  appId: "1:267684999874:web:ec7a457ba07b1d88fd815b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);