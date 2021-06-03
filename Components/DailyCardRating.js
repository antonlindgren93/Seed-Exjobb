import "react-native-gesture-handler";
import React, { useState, useEffect, useReducer } from "react";
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
  SafeAreaView,
  FlatList,
  Modal,
  Dimensions,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import GetDate from "../Components/GetDate";
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";
import StarRating from "react-native-star-rating";
import {
  uploadFirebase,
  getData,
  allData,
} from "../Functions/FirebaseFunctions";
import { ScrollView, State, TextInput } from "react-native-gesture-handler";

const dbh = firebase.firestore();
var todaysDate = new Date().toDateString();
const user = firebase.auth().currentUser;

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: todaysDate,
//   },
// ];

const DailyCardRating = () => {
  const [post, setPost] = useState([]);

  const [sleep, setSleep] = useState();
  const [diet, setDiet] = useState();
  const [concentration, setConcentration] = useState();
  const [workout, setWorkout] = useState();
  const [socialLife, setSocialLife] = useState();
  const [dailyText, setDailyText] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const getData = (item) => {
    console.log(item)
    let isActive = true;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dbh
          .collection(user.email)
          .doc(item)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              if (isActive) {
                const allData = documentSnapshot.data();
                
                setSleep(allData.sleep);
                setDiet(allData.diet);
                setConcentration(allData.concentration);
                setWorkout(allData.workout);
                setSocialLife(allData.socialLife);
                setDailyText(allData.dailyText);
                setIsLoading(false);
              }
            } else {
              console.log("ingen data ");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
    return () => {
      isActive = false;
    };
  };


  useEffect(() => {
    let isActive = true;
    if (user) {
      dbh
        .collection(user.email)
        .get()
        .then((querySnapshot) => {
          var result = [];
          querySnapshot.forEach((doc) => {
            if (isActive) {
              //console.log(doc.id);
              result.push(doc.id);
            }
          });
          setPost(result);
        });
    }
    return () => {
      isActive = false;
    };
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        getData(item)
        setShowPopup(true)
      }}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={post.sort((a, b) => a.localeCompare(b))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal transparent={true} visible={showPopup}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
              margin: 40,
              padding: 40,
              borderRadius: 10,
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={{ alignSelf: "flex-end" }}
              onPress={() => {
                setShowPopup(false);
              }}
            >
              <Text>X</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 30 }}>{todaysDate}</Text>

            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>
                Sleep: {sleep} ⭐
              </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>
                Diet: {diet} ⭐
              </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>
                Concentration: {concentration} ⭐
              </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>
                Workout: {workout} ⭐
              </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10 }}>
                Social life: {socialLife} ⭐
              </Text>
              <Text style={{ fontSize: 20, paddingBottom: 10, paddingTop: 10 }}>
                Note of the day: {"\n"}
                {dailyText}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#00cc99",
  },
  title: {
    fontSize: 32,
    color:'white'
  },
});

export default DailyCardRating;
