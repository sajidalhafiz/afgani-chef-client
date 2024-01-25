import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const passwordReset = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const updateUser = (userName, photoURL) => {

        updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photoURL
        });

    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const getUser = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser.uid, " is signed in")
            } else {
                setUser('')
                console.log("User Signed Out")
            }
        })

        return () => getUser();
    }, [])

    const authInfo = {
        user,
        auth,
        loading,
        passwordReset,
        updateUser,
        googleSignIn,
        githubSignIn,
        createUser,
        signIn,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;