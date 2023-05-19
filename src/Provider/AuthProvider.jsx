import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const singUp = (email, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singInGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const singOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('User unsubscribed', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    })

    const authInfo = {
        user,
        loading,
        singUp,
        signIn,
        singInGoogle,
        profileUpdate,
        resetPassword,
        singOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;