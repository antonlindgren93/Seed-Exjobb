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
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import GetDate from "../Components/GetDate";
import Ratings from "../Components/Ratings";
import { uploadFirebase } from "../Functions/FirebaseFunctions";
import { FontAwesome } from "@expo/vector-icons";
import StarRatingComponent from "../Components/StarRatingComponent";
import StarRating from 'react-native-star-rating';



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



const RatingPage = (props) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <GetDate />
        <View
          style={{
            flex: 3,
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: "10%",
            paddingLeft: "10%",

          }}
        >
            
          {/* <Text style={styles.ratingText}>Sleep {}</Text> */}
          <StarRatingComponent />
          {/* <StarRatingComponent name="Focus"/>
          <StarRatingComponent name="Diet"/>
          <StarRatingComponent name="Traning"/>
          <StarRatingComponent name="Happiness"/> */}
          {/* <Text style={styles.ratingText}>Focus</Text>
          <StarRatingComponent />
          <Text style={styles.ratingText}>Diet</Text>
          <StarRatingComponent />
          <Text style={styles.ratingText}>Training</Text>
          <StarRatingComponent />
          <Text style={styles.ratingText}>Happiness</Text>
          <StarRatingComponent /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  ratingText: {
      fontSize: 15,
      fontWeight:'bold'
  }
});

export default RatingPage;
