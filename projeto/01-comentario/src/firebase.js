import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAACeUpzoKVIbotkYwTzRahc9WqNOfMtpE",
    authDomain: "react-comentarios-58387.firebaseapp.com",
    databaseURL: "https://react-comentarios-58387.firebaseio.com",
    projectId: "react-comentarios-58387",
    storageBucket: "react-comentarios-58387.appspot.com",
    messagingSenderId: "609600571223"
  };

  firebase.initializeApp(config);

  export const database = firebase.database();
  