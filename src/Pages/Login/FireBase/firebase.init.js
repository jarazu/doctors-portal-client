import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const InitializeFireBase = () =>{
     initializeApp(firebaseConfig);
}

export default InitializeFireBase;