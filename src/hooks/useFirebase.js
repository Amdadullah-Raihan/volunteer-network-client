import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useLocation } from 'react-router-dom';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');
    const [isLoading, setIsLoading] = useState(true)


    //handle google popup sign in
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
                setIsLoading(false)
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
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            }
        })
    }, [])

    return (
        {
            user,
            setUser,
            error,
            setError,
            isLoading,
            setIsLoading,
            handleGoogleSignIn,
            handleSignOut

        }
    );
};

export default useFirebase;