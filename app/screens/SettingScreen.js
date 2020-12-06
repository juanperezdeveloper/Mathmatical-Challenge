import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";

import ButtonIcon from "../components/ButtonIcon";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";
import {
  SLIDER_MIN_VALUE,
  SLIDER_MAX_VALUE,
  SPEECH_MIN_VALUE,
  SPEECH_MAX_VALUE,
} from "../common/Constants";
import {
  SET_PROBLEM_COUNT,
  SET_MAX_VALUE,
  SET_SPEECH,
} from "../store/actions/types";
import ReadMe from "./ReadMeScreen";

const Settings = () => {
  const dispatch = useDispatch();
  const numberOfProblems = useSelector((state) => state.math.numberOfProblems);
  const maxValue = useSelector((state) => state.math.maxValue);
  const speech = useSelector((state) => state.math.speech);
  const [showReadMe, setShowReadMe] = useState(false);

  const toggleSwitch = () => {
    dispatch({
      type: SET_SPEECH,
      payload: { ...speech, state: !speech.state },
    });
  };

  const handleReset = () => {
    dispatch({ type: null, payload: null });
  };

  const handleReadMe = () => {
    setShowReadMe(true);
  };

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
        <TouchableOpacity onPress={handleReset}>
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
          min={SLIDER_MIN_VALUE}
          max={SLIDER_MAX_VALUE}
          onValueChange={(val) => handleChangeValue(val, 1)}
          value={numberOfProblems}
          style={styles.controlSpace}
        />
        <CustomSlider
          text={"Addition"}
          min={SLIDER_MIN_VALUE}
          max={SLIDER_MAX_VALUE}
          onValueChange={(val) => handleChangeValue(val, 2)}
          value={maxValue.add}
          style={styles.controlSpace}
        />
        <CustomSlider
          text={"Subtraction"}
          min={SLIDER_MIN_VALUE}
          max={SLIDER_MAX_VALUE}
          onValueChange={(val) => handleChangeValue(val, 3)}
          value={maxValue.sub}
          style={styles.controlSpace}
        />
        <CustomSlider
          text={"Multiplication/Division"}
          min={SLIDER_MIN_VALUE}
          max={SLIDER_MAX_VALUE}
          onValueChange={(val) => handleChangeValue(val, 4)}
          value={maxValue.multiDiv}
          style={styles.controlSpace}
        />
        <CustomSlider
          text={"Speech speed"}
          min={SPEECH_MIN_VALUE}
          max={SPEECH_MAX_VALUE}
          onValueChange={(val) => handleChangeValue(val, 5)}
          value={speech.speed}
          style={styles.controlSpace}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© SCG Productions</Text>
        <Text style={styles.footerText}>Version 1.2.0</Text>
      </View>
      <Modal
        isVisible={showReadMe}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={300}
        animationOutTiming={300}
        backdropOpacity={0.2}
      >
        <ReadMe setShowReadMe={setShowReadMe}/>
      </Modal>
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
    width: 500,
    marginLeft: -50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  settings: {
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
});

export default Settings;
