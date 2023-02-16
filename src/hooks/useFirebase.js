import React, { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');


    //handle google popup sign in
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //handle sign out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(' ')
            })
            .catch(err => {
                setError(err)
            })
    }
    //remember user state
    onAuthStateChanged(auth, user=>{
        if(user){
            setUser(user)
        }
    })

    return (
        {
            user,
            error,
            setError,
            handleGoogleSignIn,
            handleSignOut

        }
    );
};

export default useFirebase;