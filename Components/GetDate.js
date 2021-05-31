import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const GetDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var todaysDate = new Date().toDateString();
    setCurrentDate(todaysDate);
    console.log(todaysDate)
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
});

export default GetDate;
