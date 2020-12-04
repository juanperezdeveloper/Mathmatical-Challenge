import React from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { SET_PROBLEM_ID } from "../store/actions/types";

const ProblemGroup = () => {
  const dispatch = useDispatch();
  const handleButtonClick = (id) => {
    dispatch({ type: SET_PROBLEM_ID, payload: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Button
          label={"ADDITION"}
          onPress={() => handleButtonClick(1)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"SUBTRACTION"}
          onPress={() => handleButtonClick(2)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"MULTIPLICATION"}
          onPress={() => handleButtonClick(3)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"DIVISION"}
          onPress={() => handleButtonClick(4)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
      <View style={styles.rowContainer}>
        <Button
          label={"MYSTERY ADDITION"}
          onPress={() => handleButtonClick(5)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"MYSTERY SUBTRACTION"}
          onPress={() => handleButtonClick(6)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"MYSTERY MULTPLICATION"}
          onPress={() => handleButtonClick(7)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"MYSTERY DIVISION"}
          onPress={() => handleButtonClick(8)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    width: wp("17%"),
    height: hp("12%"),
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: wp("3%"),
  },
  rowContainer: {
    width: wp("100%"),
    height: hp("18.4%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProblemGroup;
