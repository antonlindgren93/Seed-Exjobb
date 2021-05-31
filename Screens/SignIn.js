import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      navigation.navigate("HomePage");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/seed-plant.png")} />
      <TextInput
        style={styles.textField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textField}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <TouchableOpacity style={styles.buttons} onPress={() => signIn()}>
        <Text style={{ color: "white" }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#00cc99",
    padding: 10,
    borderRadius: 50,
    width: "50%",
    marginTop: 20,
  },
  textField: {
    borderBottomColor: "#000000",
    borderBottomWidth: 0.5,
    width: "50%",
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: "#00cc99",
  },
});

export default SignIn;
