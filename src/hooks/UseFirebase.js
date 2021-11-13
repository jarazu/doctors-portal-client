import { useState, useEffect } from 'react';
import InitializeFireBase from '../Pages/Login/FireBase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile,getIdToken } from "firebase/auth";


// initialize firebase app
InitializeFireBase();
const UserFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [checkAdmin, setCheckAdmin] = useState(false);
    const [token, setToken] = useState('');
    
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const newUser = {email, displayName: name}
            setUser(newUser);
            // save user to database
            saveuser(email, name, "post");
            updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                // Profile updated!
                // ...
                }).catch((error) => {
                // An error occurred
                // ...
            });
            history.replace('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
        .finally(() => setIsLoading(false));
    }

    // save user after registration
    const saveuser = (email, name, posttype) => {
        const user = {email, displayName: name};
        fetch('https://evening-peak-97843.herokuapp.com/users', {
            method: posttype,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    const loginUserByEmailPass = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const destination = location?.state?.from || '/'
            history.replace(destination);
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(() => setIsLoading(false));
    }

    const loginByGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                saveuser(user.email, user.displayName, "put");
                const destination = location?.state?.from || '/'
                history.replace(destination);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
        .finally(() => setIsLoading(false));
    }

    // observe user state 
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            getIdToken(user)
            .then(token => {
                setToken(token)
            })
        } else {
            setUser({})
        }
        setIsLoading(false);
        });

        return unsubscribed;
    },[]);

    useEffect(() =>{
        fetch(`https://evening-peak-97843.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setCheckAdmin(data.admin))
    },[user.email]);

    return{
        user,
        registerUser,
        logOut,
        loginUserByEmailPass,
        isLoading,
        loginByGoogle,
        checkAdmin,
        token
    }

}
export default UserFirebase;