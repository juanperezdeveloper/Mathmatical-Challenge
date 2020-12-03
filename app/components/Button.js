import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const Button = (props) => {
  const { label, onPress, buttonStyle, labelStyle } = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[buttonStyle, styles.button]}
    >
      <LinearGradient colors={["#b2cee9", "#5184ca"]} style={styles.linear}>
        <Text style={[labelStyle, styles.label]}>{label}</Text>
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  linear: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default Button;
