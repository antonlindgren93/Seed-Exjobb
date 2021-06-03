import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-gesture-handler";

const ProfilePage = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/profile.png")} />
      {/* <Text style={{alignSelf:'center'}}>Logged in as: {user.email}</Text> */}
      <TextInput style={styles.inputName} placeholder={"Namn"} />

      <TextInput style={styles.inputBio} placeholder={"Goals"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
    height: 200,
  },
  inputName: {
    marginTop: 50,
    alignSelf: "center",
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  inputBio: {
    marginTop: 50,
    alignSelf: "center",
    width: 200,
    height: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});

export default ProfilePage;
