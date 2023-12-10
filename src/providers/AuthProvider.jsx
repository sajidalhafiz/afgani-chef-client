import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const updateUser = (userName, photoURL) => {
        
            updateProfile(auth.currentUser, {
                displayName: `${userName}`,
                photoURL: `${photoURL}`
            });
            
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const getUser = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
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