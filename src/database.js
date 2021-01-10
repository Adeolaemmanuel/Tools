import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyBrsyqLGXHnFXUfgkfOzmtv1--ee3gNy5Q",
    authDomain: "tools-bf40e.firebaseapp.com",
    projectId: "tools-bf40e",
    storageBucket: "tools-bf40e.appspot.com",
    messagingSenderId: "397821847843",
    appId: "1:397821847843:web:4579fc704489bd715c0496",
    measurementId: "G-SCMWMPSDWP"
})

const db = firebase.firestore()
const storage = firebase.storage()


export { db, firebase, storage }