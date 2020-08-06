import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDheVq0N7gJ_aYfoKw4xltIcAmHtyVGvQw",
    authDomain: "wily-app-aa8ad.firebaseapp.com",
    databaseURL: "https://wily-app-aa8ad.firebaseio.com",
    projectId: "wily-app-aa8ad",
    storageBucket: "wily-app-aa8ad.appspot.com",
    messagingSenderId: "373690307779",
    appId: "1:373690307779:web:b11b041e533f6463913e76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()