import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export const GetTodaysDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const todaysDate = new Date().toDateString();
    setCurrentDate(todaysDate);
  }, []);
};



