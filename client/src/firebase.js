import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoxykwVsuZe3dkkk_8eqzW1hna0so69Iw",
  authDomain: "cllo-project.firebaseapp.com",
  projectId: "cllo-project",
  storageBucket: "cllo-project.appspot.com",
  messagingSenderId: "969798915118",
  appId: "1:969798915118:web:115834e7e657e38cde7bbf",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
