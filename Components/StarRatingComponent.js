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
import { uploadFirebase } from "../Functions/FirebaseFunctions";

const StarRatingComponent = () => {
  const [sleep, setSleep] = useState("5");
  const [focus, setFocus] = useState("5");
  const [diet, setDiet] = useState("5");
  const [training, setTraining] = useState("5");
  const [happiness, setHappniess] = useState("5");

  return (
    <View
      style={{
        flex: 3,
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 50,
      }}
    >
      
      <StarRating
        disabled={false}
        maxStars={5}
        rating={sleep}
        selectedStar={(rating) => setSleep(rating)}
        fullStarColor="orange"
      />
      <StarRating
        disabled={false}
        maxStars={5}
        rating={focus}
        selectedStar={(rating) => setFocus(rating)}
        fullStarColor="orange"
      />
      <StarRating
        disabled={false}
        maxStars={5}
        rating={diet}
        selectedStar={(rating) => setDiet(rating)}
        fullStarColor="orange"
      />
      <StarRating
        disabled={false}
        maxStars={5}
        rating={training}
        selectedStar={(rating) => setTraining(rating)}
        fullStarColor="orange"
      />
      <StarRating
        disabled={false}
        maxStars={5}
        rating={happiness}
        selectedStar={(rating) => setHappniess(rating)}
        fullStarColor="orange"
      />
      <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#00cc99",
            padding: 10,
            borderRadius: 50,
            width: "50%",
            marginTop: 20,
            marginLeft: "25%",
          }}
          onPress={() => uploadFirebase(sleep,focus,diet,training,happiness)}
        >
      <Text style={{ color: "white" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StarRatingComponent;
