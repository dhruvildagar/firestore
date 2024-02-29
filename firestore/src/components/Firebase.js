import { firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQVUpaq7jMV1IG6zgjXBajss5IWdJyA8w",
    authDomain: "crud-firebase-1edf1.firebaseapp.com",
    databaseURL: "https://crud-firebase-1edf1-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-1edf1",
    storageBucket: "crud-firebase-1edf1.appspot.com",
    messagingSenderId: "451600165912",
    appId: "1:451600165912:web:84dd5a4d75ce200a26276d",
    measurementId: "G-4BNGXKPHDW"
  };
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  // Export firestore database
  // It will be imported into your react app whenever it is needed
  export const db = getFirestore(app);