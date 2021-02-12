import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjeyXoSahY7tNj6NseRDYNiAwPiYOEJME",
    authDomain: "switter-4686c.firebaseapp.com",
    projectId: "switter-4686c",
    storageBucket: "switter-4686c.appspot.com",
    messagingSenderId: "1029374224828",
    appId: "1:1029374224828:web:8827c851f41bd1a38563b9"
  };

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();