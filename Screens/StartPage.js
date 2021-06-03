import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native';



const StartPage = ({ navigation }) => {

  
    return (
        <View style={styles.container}>
          <Image source={require('../assets/seed-plant.png')}/>
          <TouchableOpacity
            style={styles.buttons}
            onPress={ () => navigation.navigate('SignIn')}
            >
          <Text style={{color:'#fff'}}>Sign in</Text>
          </TouchableOpacity>
              <Button
                style={styles.buttons}
                title="Create account"
                onPress={ () => navigation.navigate('SignUp')}
                color= '#00cc99'
              />
            </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#00cc99",
    padding: 10,
    borderRadius: 50,
    width: '50%'
  }
});

export default StartPage
