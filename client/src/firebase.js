import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByYWCMeIsTxKH0Kcn6kYt3K6kJtydXQ10",
    authDomain: "cllo-d4e64.firebaseapp.com",
    projectId: "cllo-d4e64",
    storageBucket: "cllo-d4e64.appspot.com",
    messagingSenderId: "210221026526",
    appId: "1:210221026526:web:be007addc346ba749a464f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;