import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
   const[user,setuser] = useState({});
   const [loading,setloading] = useState(true);

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
        //console.log("cur",currentuser);
        setuser(currentuser);
        setloading(false);

    });
    return()=>{
        unsubscribe();
    }
   },[]);

    const providerlogin =(provider)=>{
        setloading(true);
        
        return signInWithPopup(auth,provider);
    };
    
    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const updateuserprofile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const SignIn =(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const Signingout =()=>{
        setloading(true);
        return signOut(auth);

    };


    const  Authinfo ={
                    user,providerlogin,
                    Signingout,createUser,
                    SignIn,loading,updateuserprofile,
                    
    };



    return (
       <AuthContext.Provider value={Authinfo}>

        {children}


       </AuthContext.Provider>
    );
};

export default AuthProvider;