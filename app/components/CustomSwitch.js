import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const CustomSwitch = (props) => {
  const { value, onValueChange, style } = props;

  return (
    <View style={styles.container}>
      <Text>Sound {value ? "On" : "Off"}</Text>
      <Switch 
        value={value} 
        onValueChange={onValueChange} 
        style={[styles.switch, style]}
        trackColor={{true: "#81b0ff"}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginLeft: 5,
    transform: [{ scaleX: .7 }, { scaleY: .7 }],
  },
});

export default CustomSwitch;
