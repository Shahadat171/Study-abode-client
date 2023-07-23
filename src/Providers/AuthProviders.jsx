import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider } from "firebase/auth";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ error, setError] = useState('')

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignIN = () =>{
       return signInWithPopup(auth, facebookProvider)
    }

    const profileUpdateData = (user, regName, photo)=> {
        return updateProfile(auth.currentUser, {
            displayName: regName, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error)
            // An error occurred
            // ...
          });
    }

    const logOut = () =>{
        return signOut(auth);

    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           console.log(currentUser)
           setUser(currentUser);
           setLoading(false)
       });
       return () =>{
           unsubscribe();
       }
   } ,[])



   const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        profileUpdateData,
        facebookSignIN
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;