import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const CustomSlider = (props) => {
  const { text, min, max, onValueChange, value, style } = props;
  return (
    <View style={style}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={min}
          maximumValue={max}
          step={1}
          value={value}
          onValueChange={onValueChange}
        />
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: wp("60%"),
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: wp("4%"),
  },
  thumbStyle: {
    width: 26,
    height: 26,
  },
  value: {
    fontSize: wp("4%"),
    marginLeft: 5,
  },
});

export default CustomSlider;
