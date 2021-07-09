import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP-Q0YwBgl_nzNDLQH4OjH-dKsMf3ap6A",
  authDomain: "mad-terminal-6181a.firebaseapp.com",
  projectId: "mad-terminal-6181a",
  storageBucket: "mad-terminal-6181a.appspot.com",
  messagingSenderId: "97549669301",
  appId: "1:97549669301:web:4c55506b114162c4f3bffc",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
