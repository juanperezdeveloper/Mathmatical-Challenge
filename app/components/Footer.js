import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ages 4+, Made for ages 6-8, Remedial Practice for ages 9-12
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("4.5%"),
  },
  text: {
    padding: 10,
    fontSize: wp("5%"),
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Footer;
