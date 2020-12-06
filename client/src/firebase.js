import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey:  "AIzaSyDEy2xKyGAC0EwgriuaT_Bm3q0Gh9jvQDQ",
  authDomain: "challenge-development.firebaseapp.com",
  databaseURL: "https://challenge-development.firebaseio.com",
  projectId: "challenge-development",
  storageBucket:"challenge-development.appspot.com",
  messagingSenderId: "1082045758469",
  appId: "1:1082045758469:web:5f1a963aeb4061cb12306c"
})

export const auth = app.auth()
export default app
