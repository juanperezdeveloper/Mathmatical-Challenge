import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Icon = (props) => {
  const {
    name,
    size = 40,
    backgroundColor = "#000",
    isMaterialIcon = false,
    hasBackground = false,
    iconColor = "#fff",
  } = props;

  return (
    <>
      {hasBackground ? (
        <View style={styles.container}>
          {isMaterialIcon ? (
            <MaterialIcons 
              name={name}
              color={iconColor}
              size={size * 0.5}
            />
          ) : (
            <MaterialCommunityIcons 
              name={name}
              color={iconColor}
              size={size * 0.5}
            />
          )}
        </View>
      ) : isMaterialIcon ? (
        <MaterialIcons 
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      ) : (
        <MaterialCommunityIcons 
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Icon;
