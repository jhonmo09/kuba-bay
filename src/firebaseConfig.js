// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwgwgkaKSjbln9suzZwRUDUW-W8_KWifs",
  authDomain: "squeezzed-kuba-bay.firebaseapp.com",
  projectId: "squeezzed-kuba-bay",
  storageBucket: "squeezzed-kuba-bay.appspot.com",
  messagingSenderId: "580108584913",
  appId: "1:580108584913:web:48fbe3a9a077c4a9d502f0",
  measurementId: "G-19GLENTKW5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.database();

function getAnalytics() {
  if (typeof window !== "undefined") {
    return firebase.analytics();
  }
  return null;
}

export { firebase, getAnalytics, database };
