// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
   
    onAuthStateChanged,
    User
} from "firebase/auth";
import { sign } from "crypto";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUc8klBEIy0BodMqFvOfmJIOK5Z-4R7Gk",
  authDomain: "yt-clone-475319.firebaseapp.com",
  projectId: "yt-clone-475319",
  
  appId: "1:970510121173:web:03cade8c5e751b2d5b4a5c",
  measurementId: "G-YPP2W2160N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the signed-in user.    
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}
/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}
 /**
  * Trigers the callback whenever the authentication state changes.
  * @param callback - The callback to trigger on auth state changes.
  * @returns A function to unsubscribe the listener.
  */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}