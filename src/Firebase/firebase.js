

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  // <----
let firebaseApp;
SetupFirebase();

/**
* Firebase Initialization Function
* This must be called before any firebase query
*/
function SetupFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCOh9GBLp03IjRQiRUTGreBvxmyISNYcu0",
        authDomain: "xm-website-d099f.firebaseapp.com",
        projectId: "xm-website-d099f",
        storageBucket: "xm-website-d099f.appspot.com",
        messagingSenderId: "346041263751",
        appId: "1:346041263751:web:f310b83db252657948fa22",
        measurementId: "G-53R1R7ZFSP"
    };
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;
