

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
        apiKey: "AIzaSyDpphrElc13p23XfdrzS_HvlZlz7VRiPgY",
        authDomain: "test-15878.firebaseapp.com",
        projectId: "test-15878",
        storageBucket: "test-15878.appspot.com",
        messagingSenderId: "208020795342",
        appId: "1:208020795342:web:7f06d1e05deb8b2ec1859f",
        measurementId: "G-4GDZ5QRGZ5"
    };
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;
