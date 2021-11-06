import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Pages/Firebase/firebase.init";
initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const [authError, setAuthError] = useState('')

    //login with email and password
    const registerWithEmail = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                //change state immediately after register
                const newUser = { email, displayName: name };
                setUser(newUser)
                //save user in firebase
                updateUserProfile(name)
                history.push('/')
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }
    // update users profile
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // setAuthError('')
            console.log('profile is updated');
        }).catch((error) => {
            // setAuthError(error.message)
        });
    }
    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    const loginWithEmail = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }

    //login with Google
    const loginWithGoogle = (history, location) => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })

            .finally(setIsLoading(false))
    }
    const logout = () => {
        signOut(auth).then(() => {
            setIsLoading(true)
            // Sign-out successful.
        })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logout,
        isLoading,
        authError

    }
}


export default useFirebase