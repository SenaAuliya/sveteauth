import {async} from "@firebase/util"
import { writable } from "svelte/store";
import { auth } from "$lib/firebase/firebase.client"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";

export const authStore = writable({
isLoading: true,
currentUser: null,
})

export const authHandler = {
    login: async(email: string, password: string)=>{
        await signInWithEmailAndPassword(auth, email, password)
    },
    signUp: async(email:string, password:string) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    signOut: async()=>{
        await signOut(auth)
    },
    resetPassword: async(email:string)=>{
        await sendPasswordResetEmail(auth, email)
    },
    updatePassword:async(password:string)=>{
        await updatePassword(auth,password)
    }
}