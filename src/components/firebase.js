import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBNy3jNveHD-XO377NIwPcx3Iz2tY0WHrU",
    authDomain: "unichat2-4ee7d.firebaseapp.com",
    projectId: "unichat2-4ee7d",
    storageBucket: "unichat2-4ee7d.appspot.com",
    messagingSenderId: "217804918058",
    appId: "1:217804918058:web:f670b6c492f8f0810ee253"
}).auth();