import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

//Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyAxCUFd53KsIK7PGTq8LaE_4m4GvXiMPEM",
    authDomain: "reactblog-1b809.firebaseapp.com",
    projectId: "reactblog-1b809",
    storageBucket: "reactblog-1b809.appspot.com",
    messagingSenderId: "1428674049",
    appId: "1:1428674049:web:85ab85613fe0c9afcd9200",
    measurementId: "G-VGB7KQVN5R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});
//   firebase.analytics();

export default firebase;