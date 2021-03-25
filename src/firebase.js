import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoOYXqI_-1Dqiv2B0vjxkvC7B_gP7U8Ro",
  authDomain: "socialmonkey-79747.firebaseapp.com",
  projectId: "socialmonkey-79747",
  storageBucket: "socialmonkey-79747.appspot.com",
  messagingSenderId: "876257796560",
  appId: "1:876257796560:web:e1c37897acc12012a1d9d5",
  measurementId: "G-CPN2EV7H81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
