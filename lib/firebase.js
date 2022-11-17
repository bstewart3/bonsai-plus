import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoydMsA8SoYTe44E2SoOpaahP5aFb7LEI",
  authDomain: "nextfire-app-de65d.firebaseapp.com",
  projectId: "nextfire-app-de65d",
  storageBucket: "nextfire-app-de65d.appspot.com",
  messagingSenderId: "328572614028",
  appId: "1:328572614028:web:c1c76899d9b290d32352a9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
