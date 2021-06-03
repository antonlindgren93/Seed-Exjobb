import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  FlatList
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import StarRatingComponent from "../Components/StarRatingComponent";
import DailyCardRating from "../Components/DailyCardRating";
import { getData } from '../Functions/FirebaseFunctions'
import {AuthContext} from '../Components/Context'

const HomePage = ({ navigation }) => {
  const dbh = firebase.firestore();
  const user = firebase.auth().currentUser;
  var todaysDate = new Date().toDateString();
  const {signOut} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/ai-face.jpeg")} />
      <Button
        title="Edit profile"
        onPress={() => navigation.navigate("ProfilePage")}
      />
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{color: 'red', alignSelf:'center'}}>Sign out</Text>
      </TouchableOpacity>
     
      <DailyCardRating />
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    marginTop: 50,
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
    height: 200,
    borderRadius:50/2
  },
  stars: {
    color: "black",
  },
});

export default HomePage;
