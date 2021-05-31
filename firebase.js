import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASTIlhBsLnCQS_TpsVDss7XCaChnX_01A",
  authDomain: "seed-b372c.firebaseapp.com",
  projectId: "seed-b372c",
  storageBucket: "seed-b372c.appspot.com",
  messagingSenderId: "1059429672340",
  appId: "1:1059429672340:web:20cf2095f24397682e1b81",
  measurementId: "G-XE0PL5JLPR",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
