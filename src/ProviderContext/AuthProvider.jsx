import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //signin
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signin
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser)
            if (currentUser) {
                // $ npm install axios
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email,
                    name: currentUser.displayName,
                    // pass: currentUser.pass
                })
                    .then(res => {
                        // console.log(res);
                        localStorage.setItem('access-token', res.data.token)
                    })

            } else localStorage.removeItem('access-token')
            setLoading(false)
        });
        return () => unsubscribe;
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        googleSignIn,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;