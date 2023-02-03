import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({})
    const [loading , setLoading] = useState(true)

    // Create New User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Name and Photo
    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // 5. Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //6. LogIn with Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        });

        return () =>{
            unsubscribe();
        }
    },[]);

    console.log(currentUser);

    const authInfo ={
        currentUser,
        createUser,
        updateUserProfile,
        loading,
        logOut,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
    

}