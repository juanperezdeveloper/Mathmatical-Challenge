import React from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "./Button";

const Calculator = (props) => {
  const { answer, setAnswer } = props;
  const handleClicked = (value) => {
    if (value != "C") {
      setAnswer(answer * 10 + value);
    } else {
      setAnswer("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Button
          label={"1"}
          onPress={() => handleClicked(1)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"2"}
          onPress={() => handleClicked(2)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"3"}
          onPress={() => handleClicked(3)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
      <View style={styles.rowContainer}>
        <Button
          label={"4"}
          onPress={() => handleClicked(4)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"5"}
          onPress={() => handleClicked(5)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"6"}
          onPress={() => handleClicked(6)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
      <View style={styles.rowContainer}>
        <Button
          label={"7"}
          onPress={() => handleClicked(7)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"8"}
          onPress={() => handleClicked(8)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"9"}
          onPress={() => handleClicked(9)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={{ width: wp("15%"), margin: 5 }}></View>
        <Button
          label={"0"}
          onPress={() => handleClicked(0)}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
        <Button
          label={"C"}
          onPress={() => handleClicked("C")}
          buttonStyle={styles.button}
          labelStyle={styles.label}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp("15%"),
    height: wp("15%"),
    margin: 5,
  },
  container: {
    width: "100%",
    borderColor: "#1e9ecd",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: wp("5%"),
  },
  rowContainer: {
    flexDirection: "row",
  },
});

export default Calculator;
