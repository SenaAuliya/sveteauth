// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGIiuP6K7ghkJ1iF-4BBx0VYR-BcX9tw",
  authDomain: "class-online-e94ec.firebaseapp.com",
  projectId: "class-online-e94ec",
  storageBucket: "class-online-e94ec.appspot.com",
  messagingSenderId: "1030809837836",
  appId: "1:1030809837836:web:2a716d86283618d938e929"
};

let firebaseApp;
if (!getApps().length){
firebaseApp = initializeApp(firebaseConfig)
}else{
firebaseApp = getApp()
deleteApp(firebaseApp)
}

export const auth = getAuth(firebaseApp)