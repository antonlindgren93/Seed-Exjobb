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
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import GetDate from "../Components/GetDate";
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";
import StarRating from "react-native-star-rating";
import { uploadFirebase, getFirebaseData } from "../Functions/FirebaseFunctions";

const DailyCardRating = () => {
    
    return (
      <View
        style={{
          flex: 3,
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 50,
          height: 10,
          backgroundColor:'#00cc99'
        }}
      >
        <Text style={{color:'white'}}>
          
        </Text>
        <StarRating
          disabled={false}
          maxStars={5}


          fullStarColor="orange"
        />
      </View>
    );
    }


export default DailyCardRating;
