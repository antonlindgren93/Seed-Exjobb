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

//Anton.lindgren@hotmail.com
//password

const dbh = firebase.firestore();
const user = firebase.auth().currentUser;


const badToFirebase = () => {

}
const okejToFirebase = () => {
    
}
const goodToFirebase = () => {
    
}

const Ratings = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => badToFirebase()}>
          <Entypo name="emoji-sad" size={64} color="red" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => okejToFirebase()}>
          <Entypo name="emoji-neutral" size={64} color="orange" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goodToFirebase()}>
          <Entypo name="emoji-happy" size={64} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    marginTop: 10,
  },
});

export default Ratings;
