import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Screen from "../components/Screen";
import ProblemGroup from "../components/ProblemGroup";
import GameTitle from "../components/GameTitle";
import CalculatorScreen from "./CalculatorScreen";
import { useSelector, useDispatch } from "react-redux";
import { SET_PROBLEM_ID } from "../store/actions/types";

const HomeScreen = () => {
  const problemId = useSelector((state) => state.math.problemId);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({ type: SET_PROBLEM_ID, payload: 0 });
  };

  return (
    <Screen>
      <Header 
        showSetting={true}
      />
      {!problemId ? (
        <>
          <GameTitle />
          <ProblemGroup />
          <Footer />
        </>
      ) : (
        <Modal visible={true} animationType="fade">
          <CalculatorScreen problemId={problemId} onPress={handleCancel} />
        </Modal>
      )}
    </Screen>
  );
};

export default HomeScreen;
