import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Pages/Firebase/firebase.init";
initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    //login with email and password
    const registerWithEmail = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                //change state immediately after register
                const newUser = { email, displayName: name };
                setUser(newUser)
                //save user to database 
                saveUser(email, name, 'POST')
                //save user name to firebase after creation
                updateUserProfile(name)
                navigate('/')
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
    //save user to the mongodb database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://radiant-stream-52438.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log('mongodb saved', data))

    }
    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    //login with login form
    const loginWithEmail = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                setAuthError('')
            })
            .catch(error => {
                setAuthError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }

    //login with Google
    const loginWithGoogle = (navigate, location) => {
        const provider = new GoogleAuthProvider();
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                navigate(destination)
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
    // finding a user is admin or not and user.email is put as depency of useEffect as user can be changed as well as their admin status
    useEffect(() => {
        axios.get(`https://radiant-stream-52438.herokuapp.com/users?email=${user.email}`)
            .then(res => setAdmin(res.data.admin))
    }, [user.email])
    return {
        user,
        admin,
        token,
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logout,
        isLoading,
        authError

    }
}


export default useFirebase