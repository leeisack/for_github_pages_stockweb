import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvILPMnJ6lPO8iV1VdxE4VaooZSeq0CsA",
  authDomain: "joogle-647f9.firebaseapp.com",
  projectId: "joogle-647f9",
  storageBucket: "joogle-647f9.appspot.com",
  messagingSenderId: "923063432776",
  appId: "1:923063432776:web:06672299583c84dbdc0a7d"
};
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();