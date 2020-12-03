import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ButtonIcon from "../components/ButtonIcon";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";
import { 
  sliderMinValue, 
  sliderMaxValue,
  speechMinValue,
  speechMaxValue,
 } from "../common/Constants";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_PROBLEM_COUNT,
  SET_MAX_VALUE,
  SET_SPEECH,
} from "../store/actions/types";

const Settings = () => {
  const dispatch = useDispatch();
  const numberOfProblems = useSelector((state) => state.math.problemCount);
  const maxValue = useSelector((state) => state.math.maxValue);
  const speech = useSelector((state) => state.math.speech);

  const toggleSwitch = () => {
    dispatch({ type: SET_SPEECH, payload: { ...speech, state: !speech.state } });
  };

  const handleReset = () => {
    dispatch({ type: null, payload: null });
  }

  const handleReadMe = () => {

  }

  const handleChangeValue = (val, id) => {
    switch (id) {
      case 1:
        dispatch({ type: SET_PROBLEM_COUNT, payload: val });
        break;
      case 2:
        dispatch({ type: SET_MAX_VALUE, payload: { ...maxValue, add: val } });
        break;
      case 3:
        dispatch({ type: SET_MAX_VALUE, payload: { ...maxValue, sub: val } });
        break;
      case 4:
        dispatch({
          type: SET_MAX_VALUE,
          payload: { ...maxValue, multiDiv: val },
        });
        break;
      case 5:
        dispatch({ type: SET_SPEECH, payload: { ...speech, speed: val } });
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <ButtonIcon 
          name={"information-outline"}
          size={hp("8%")}
          iconColor={"#000"}
          onPress={handleReadMe}
        />
        <Text style={styles.settings}>Settings</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleReset}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.controlContainer}>
        <CustomSwitch 
          value={speech.state} 
          onValueChange={toggleSwitch}
          style={styles.controlSpace} 
        />
        <CustomSlider
          text={"Number Of Problems"}
          min={sliderMinValue}
          max={sliderMaxValue}
          onValueChange={(val) => handleChangeValue(val, 1)}
          value={numberOfProblems}
          style={styles.controlSpace} 
        />
        <CustomSlider
          text={"Addition"}
          min={sliderMinValue}
          max={sliderMaxValue}
          onValueChange={(val) => handleChangeValue(val, 2)}
          value={maxValue.add}
          style={styles.controlSpace} 
        />
        <CustomSlider
          text={"Subtraction"}
          min={sliderMinValue}
          max={sliderMaxValue}
          onValueChange={(val) => handleChangeValue(val, 3)}
          value={maxValue.sub}
          style={styles.controlSpace} 
        />
        <CustomSlider
          text={"Multiplication/Division"}
          min={sliderMinValue}
          max={sliderMaxValue}
          onValueChange={(val) => handleChangeValue(val, 4)}
          value={maxValue.multiDiv}
          style={styles.controlSpace} 
        />
        <CustomSlider
          text={"Speech speed"}
          min={speechMinValue}
          max={speechMaxValue}
          onValueChange={(val) => handleChangeValue(val, 5)}
          value={speech.speed}
          style={styles.controlSpace} 
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© SCG Productions</Text>
        <Text style={styles.footerText}>Version 1.2.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  controlContainer: {
    width: wp("80%"),
    margin: 5,
  },
  controlSpace: {
    marginVertical: 5,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: wp("3%"),
  },
  header: {
    width: "100%",
    height: hp("5%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 1,
    width: 500,
    marginLeft: -50,
  },
  settings: {
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
});

export default Settings;
