// @refresh reset
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import HomePage from "./Screens/HomePage";
import RatingPage from "./Screens/RatingPage";
import StartPage from "./Screens/StartPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfilePage from "./Screens/ProfilePage";
import BottomTabNavigator from "./Components/BottomTabNavigator";
import { FontAwesome } from "@expo/vector-icons";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs(true);

//USE BOTH TAB AND STACK
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="HomePage"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RatingPage" component={BottomTabNavigator} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
