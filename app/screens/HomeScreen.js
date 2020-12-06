import React from "react";
import { Modal, StyleSheet } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Screen from "../components/Screen";
import ProblemGroup from "../components/ProblemGroup";
import GameTitle from "../components/GameTitle";
import CalculatorScreen from "./CalculatorScreen";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const problemId = useSelector((state) => state.math.problemId);

  return !problemId ? (
    <Screen style={styles.screen}>
      <Header showSetting={true} />
      <GameTitle />
      <ProblemGroup />
      <Footer />
    </Screen>
  ) : (
    <Modal visible={true} animationType="fade">
      <CalculatorScreen problemId={problemId} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  }, 
});

export default HomeScreen;
