import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBF4daUkQEGeiJCvEkCETiZOFDgHyrM_u8",
    authDomain: "bombay-international-final.firebaseapp.com",
    databaseURL: "https://bombay-international-final.firebaseio.com",
    projectId: "bombay-international-final",
    storageBucket: "bombay-international-final.appspot.com",
    messagingSenderId: "216046228955",
    appId: "1:216046228955:web:4cf9cf2221fb246488c3fe"
  };




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

<<<<<<< HEAD
export default  firebase.firestore()
=======
export default  firebase.firestore();
>>>>>>> f4ca085667fa9ded6728c2ef7f97a8147cef91aa
