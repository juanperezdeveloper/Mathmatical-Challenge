import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

const image = require("../assets/images/1x/background.png");

const Screen = ({ children }) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      {children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },
});

export default Screen;
