import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGd072cj4HCn6NkG1YUanm9stysjZMrcc",
  authDomain: "chatgpt-messenger-443b8.firebaseapp.com",
  projectId: "chatgpt-messenger-443b8",
  storageBucket: "chatgpt-messenger-443b8.appspot.com",
  messagingSenderId: "608711809464",
  appId: "1:608711809464:web:8e2727eb60134067ec174d",
  measurementId: "G-4K1CH8ZP9B"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };