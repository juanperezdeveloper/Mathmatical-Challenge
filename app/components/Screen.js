import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

const image = require("../assets/images/1x/background.png");

const Screen = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <ImageBackground source={image} style={styles.image}>
      {children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },
});

export default Screen;
