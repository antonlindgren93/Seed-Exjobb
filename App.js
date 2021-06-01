// @refresh reset
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useReducer } from "react";
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
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "./Components/Context";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            user: action.user,
            isSignout: false
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            user: action.user,
            isSignout: false
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            user: null,
            isSignout: true
          }
      }
    },
    {
      isSignout: true,
      user: null
    }
  )
  useEffect(() => {
    let isActive = true;
    const bootstrapAsync = async () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          if (isActive) {
            dispatch({ type: "RESTORE_TOKEN", user: user });
            setIsLoading(false);
          }
        } else {
          if (isActive) {
            dispatch({ type: "SIGN_OUT" });
            setIsLoading(false);
          }
        }
      });
    };

    bootstrapAsync();

    return () => {
      isActive = false;
    };
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data, successcallback, errorcallback) => {
        console.log(data.password);
        if (data.email != "" && data.password != "") {
          firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
              if (successcallback != null) {
                dispatch({ type: "SIGN_IN", user: user });
                successcallback(user);
              }
            })
            .catch((error) => {
              if (errorcallback != null) {
                errorcallback(error.message);
              }
              // Alert.alert('', error.message)
              console.log(error);
            });
        }
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data, successcallback, errorcallback) => {
        if (data.email != '' && data.password != '') {
          firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
              if (successcallback != null) {
                dispatch({ type: 'SIGN_IN', user: user })
                successcallback(user)
              }
            })
            .catch((error) => {
              if (errorcallback != null) {
                errorcallback(error.message)
              }
              // Alert.alert('', error.message)
              console.log(error)
            })
        }
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.user != null && !state.isSignout ? (
          <Stack.Navigator>
            <Stack.Screen
              name="HomePage"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RatingPage" component={BottomTabNavigator} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={StartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
