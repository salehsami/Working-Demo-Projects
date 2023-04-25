import { getAuth } from "firebase/auth"
import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyD0ArkQVZxTLk4ucHm_4vBbU4iaIY4IEck",
    authDomain: "react-auth-24dc3.firebaseapp.com",
    projectId: "react-auth-24dc3",
    storageBucket: "react-auth-24dc3.appspot.com",
    messagingSenderId: "944639054594",
    appId: "1:944639054594:web:cb188a66b7bb29cde3a81b",
    measurementId: "G-X0VV3WMHYQ"
};
  
const app = initializeApp(firebaseConfig); // added complete configuration with app

export const firebaseAuth = getAuth(app); // main auth functonality includeing complete firebase setup of web app
