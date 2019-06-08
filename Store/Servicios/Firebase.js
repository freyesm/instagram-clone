import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDBWfOtimaFU5NXBq_W0yONrTq4hqtcMZg",
    authDomain: "instagram-clone-4b841.firebaseapp.com",
    databaseURL: "https://instagram-clone-4b841.firebaseio.com",
    projectId: "instagram-clone-4b841",
    storageBucket: "instagram-clone-4b841.appspot.com",
    messagingSenderId: "1099301233991",
    appId: "1:1099301233991:web:d6a1152992cde671"
};
firebase.initializeApp(config);


export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
