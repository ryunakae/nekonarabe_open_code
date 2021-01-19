import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
    apiKey: "******************",
    authDomain: "*****************",
    databaseURL: "*****************",
    projectId: "*****************",
    storageBucket: "*****************",
    messagingSenderId: "*****************"
});

export const db = firebaseApp.firestore();