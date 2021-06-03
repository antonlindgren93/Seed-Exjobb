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
import { TextInput } from "react-native-gesture-handler";

const StarRatingComponent = () => {
  const [sleep, setSleep] = useState(2.5);
  const [concentration, setConcentration] = useState(2.5);
  const [diet, setDiet] = useState(2.5);
  const [workout, setWorkout] = useState(2.5);
  const [socialLife, setSocialLife] = useState(2.5);
  const [dailyText, setDailyText] = useState(
    "Write something about your day..."
  );

  return (
    <View
      style={{
        flex: 3,
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 50,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          color: "black",
          paddingBottom: 20,
          paddingTop: 15,
        }}
      >
        Rate your day
      </Text>
      <GetDate />
      <Text style={styles.starBar}>How was your sleep?</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={sleep}
        selectedStar={(rating) => setSleep(rating)}
        fullStarColor="orange"
      />
      <Text style={styles.starBar}>Your concentration level?</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={concentration}
        selectedStar={(rating) => setConcentration(rating)}
        fullStarColor="orange"
      />
      <Text style={styles.starBar}>How has your diet been?</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={diet}
        selectedStar={(rating) => setDiet(rating)}
        fullStarColor="orange"
      />
      <Text style={styles.starBar}>How was your workout?</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={workout}
        selectedStar={(rating) => setWorkout(rating)}
        fullStarColor="orange"
      />
      <Text style={styles.starBar}>How was your social life today?</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={socialLife}
        selectedStar={(rating) => setSocialLife(rating)}
        fullStarColor="orange"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{ height: 200, width: "100%", borderWidth: 1 }}
          text={dailyText}
          onChangeText={(text) => setDailyText(text)}
          placeholder="Write something about your day...."
          multiline
        />
      </View>
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
        onPress={() =>
          uploadFirebase(
            sleep,
            concentration,
            diet,
            workout,
            socialLife,
            dailyText
          )
        }
      >
        <Text style={{ color: "white" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  starBar: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default StarRatingComponent;
