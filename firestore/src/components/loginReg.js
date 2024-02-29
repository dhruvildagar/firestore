import React, { useEffect, useState } from 'react';
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


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

export default function LoginRegister() {
    const app = initializeApp(firebaseConfig);
    const auth  = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    function handleRegistration() {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user.email);
            setValue(data.user.email);
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    console.log(value);
    if (value !== null) {
        navigate('/login');
    }
  return (
    <div className='App' style={{marginTop:300}}>
    <button type="button" onClick={handleRegistration} className="btn btn-primary">Sign in with Google</button>
    </div>
  )
}