import React from "react";
import { Modal } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Screen from "../components/Screen";
import ProblemGroup from "../components/ProblemGroup";
import GameTitle from "../components/GameTitle";
import CalculatorScreen from "./CalculatorScreen";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const problemId = useSelector((state) => state.math.problemId);

  return (
    <Screen>
      <Header showSetting={true} />
      {!problemId ? (
        <>
          <GameTitle />
          <ProblemGroup />
          <Footer />
        </>
      ) : (
        <Modal visible={true} animationType="fade">
          <CalculatorScreen problemId={problemId} />
        </Modal>
      )}
    </Screen>
  );
};

export default HomeScreen;
