import firebase from "firebase/app";

import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCA0f4ryE31Ei8QdDvsH89FxfX43cCEkuI",
  authDomain: "caio-41d87.firebaseapp.com",
  databaseURL: "https://caio-41d87-default-rtdb.firebaseio.com",
  projectId: "caio-41d87",
  storageBucket: "caio-41d87.appspot.com",
  messagingSenderId: "1085718746235",
  appId: "1:1085718746235:web:525e99e75bcb5a6e377ede"
}

export const Firebase = firebase.initializeApp(firebaseConfig);
