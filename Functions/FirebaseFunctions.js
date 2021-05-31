import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import GetDate from "../Components/GetDate";
import StarRatingComponent from "../Components/StarRatingComponent";

//Anton.lindgren@hotmail.com
//password
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

const dbh = firebase.firestore();
const user = firebase.auth().currentUser;
var todaysDate = new Date().toDateString();

export const uploadFirebase = (sleep, focus, diet, training, happiness) => {
  if (user) {
    dbh.collection(user.email).doc(todaysDate).set({
      sleep: sleep,
      focus: focus,
      diet: diet,
      training: training,
      happiness: happiness,
    });
    console.log("Uploading to firebase...DONE");
  }
};

export const getData = () => {
  dbh
    .collection(user.email)
    .doc(todaysDate)
    .get()
    .then((documentSnapshot) => {
      console.log("User exists: ", documentSnapshot.exists);

      if (documentSnapshot.exists) {
        console.log("User data: ", documentSnapshot.data());
      }

      const allData = documentSnapshot.data();
      console.log(allData);
    });
};
