import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const GameTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mathematical Challenges</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    textAlign: "center",
    fontSize: wp("10%"),
    fontWeight: "bold",
  },
});

export default GameTitle;
