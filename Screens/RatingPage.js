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
import StarRating from "react-native-star-rating";

const RatingPage = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        
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
          <StarRatingComponent />
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
    fontWeight: "bold",
  },
});

export default RatingPage;
