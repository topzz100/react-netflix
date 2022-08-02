// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyChF5yqgy-JFf0JxpSIF-MrbWcKRjOQrSk",
  authDomain: "netflix-clone-2efec.firebaseapp.com",
  projectId: "netflix-clone-2efec",
  storageBucket: "netflix-clone-2efec.appspot.com",
  messagingSenderId: "259151554738",
  appId: "1:259151554738:web:a078ddc361c1ab951601ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export  {getAuth, createUserWithEmailAndPassword}