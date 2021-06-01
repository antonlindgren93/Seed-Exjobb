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

const dbh = firebase.firestore();
var todaysDate = new Date().toDateString();

export const uploadFirebase = (
  sleep,
  concentration,
  diet,
  workout,
  socialLife
) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dbh.collection(user.email).doc(todaysDate).set({
        sleep: sleep,
        concentration: concentration,
        diet: diet,
        workout: workout,
        socialLife: socialLife,
      });
      console.log("Uploading to firebase...DONE");
    }
  });
};

export const getData = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
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
          console.log('this is all data: ' + allData);
        });
    }
  });
};
