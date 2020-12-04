import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Modal from "react-native-modal";
import Header from "../components/Header";
import Screen from "../components/Screen";
import Button from "../components/Button";
import Calculator from "../components/Calculator";
import {
  sliderMinValue,
  sliderMaxValue,
  correctMessage,
  errorMessage,
  delaySeconds,
} from "../common/Constants";
import { useSelector, useDispatch } from "react-redux";
import { SET_PROBLEM_ID } from "../store/actions/types";

const CalculatorScreen = ({ problemId }) => {
  const numberOfProblems = useSelector((state) => state.math.numberOfProblems);
  const dispatch = useDispatch();
  const [correctCount, setCorrectCount] = useState(0);
  const [solvedCount, setSolvedCount] = useState(1);
  const [wrongCount, setWrongCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [checkClicked, setCheckClicked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerState, setAnswerState] = useState(0);
  const [formula, setFormula] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [scoreArray, setScoreArray] = useState([]);
  const [startTime, setStartTime] = useState(Date.now() / 1000);
  const [endTime, setEndTime] = useState(Date.now() / 1000);
  const correctIcon = require("../assets/images/1x/correctIcon.png");
  const wrongIcon = require("../assets/images/1x/wrongIcon.png");
  const maxValue = useSelector((state) => state.math.maxValue);
  let correctCnt = 0;

  const setFormulaItems = () => {
    let op1, op2, symbol, result, answer, value1, value2;
    switch (problemId) {
      case 1: // addition
        op1 = getRandomInt(sliderMinValue, maxValue.add);
        op2 = getRandomInt(sliderMinValue, maxValue.add);
        symbol = "+";
        result = op1 + op2;
        answer = 3;
        break;
      case 2: // subtraction
        value1 = getRandomInt(sliderMinValue, maxValue.sub);
        value2 = getRandomInt(sliderMinValue, maxValue.sub);
        op1 = value1 >= value2 ? value1 : value2;
        op2 = value1 >= value2 ? value2 : value1;
        symbol = "-";
        result = op1 - op2;
        answer = 3;
        break;
      case 3: // multiplication
        op1 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        op2 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        symbol = "...";
        result = op1 * op2;
        answer = 3;
        break;
      case 4: // division
        op2 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        result = getRandomInt(sliderMinValue, maxValue.multiDiv);
        symbol = "/";
        op1 = op2 * result;
        answer = 3;
        break;
      case 5: // mystery additon
        op1 = getRandomInt(sliderMinValue, sliderMaxValue);
        op2 = getRandomInt(sliderMinValue, sliderMaxValue);
        symbol = "+";
        result = op1 * op2;
        answer = getRandomInt(1, 3);
        break;
      case 6: // mystery subtraction
        value1 = getRandomInt(sliderMinValue, sliderMaxValue);
        value2 = getRandomInt(sliderMinValue, sliderMaxValue);
        op1 = value1 >= value2 ? value1 : value2;
        op2 = value1 >= value2 ? value2 : value1;
        symbol = "-";
        result = op1 - op2;
        answer = getRandomInt(1, 3);
        break;
      case 7: // mystery multiplication
        op1 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        op2 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        symbol = "*";
        result = op1 * op2;
        answer = getRandomInt(1, 3);
        break;
      case 8: // mystery division
        result = getRandomInt(sliderMinValue, maxValue.multiDiv);
        op2 = getRandomInt(sliderMinValue, maxValue.multiDiv);
        symbol = "/";
        op1 = op2 * result;
        answer = getRandomInt(1, 3);
        break;
      default:
        break;
    }
    const formula = {
      op1: op1,
      op2: op2,
      symbol: symbol,
      result: result,
      answer: answer, // 1: op1, 2: op2, 3: result
    };
    return formula;
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleCheck = () => {
    if (answer != "") {
      setCheckClicked(true);
    } else {
      setAnswerState(3);
      setTimeout(() => {
        setAnswerState(4);
      }, delaySeconds * 1000);
    }
  };

  const delay = () => {
    setTimeout(() => {
      setCheckClicked(false);
      setAnswer("");
      setAnswerState(0);
      setSolvedCount(solvedCount + 1);
      setFormula(setFormulaItems());
    }, delaySeconds * 1000);
  };

  const delayShowingModal = () => {
    setTimeout(() => {
      setModalVisible(true);
    }, delaySeconds * 1000);
  };

  const handleCancel = () => {
    dispatch({ type: SET_PROBLEM_ID, payload: 0 });
  };

  const sec2Time = (sec) => {
    const pad = (num, size) => {
      return ("000" + num).slice(size * -1);
    };
    const time = parseFloat(sec).toFixed(3);
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time - minutes * 60);
    return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
  };

  const setCount = () => {
    let correctValue;
    if (formula.answer == 1) {
      correctValue = formula.op1;
    } else if (formula.answer == 2) {
      correctValue = formula.op2;
    } else {
      correctValue = formula.result;
    }
    setCorrectAnswer(correctValue);
    if (answer == correctValue && checkClicked) {
      setAnswerState(1);
      setCorrectCount(correctCount + 1);
      correctCnt++;
    } else if (answer != "" && checkClicked) {
      setAnswerState(2);
      setWrongCount(wrongCount + 1);
    }
  };

  const handleStartOver = () => {
    setStartTime(Date.now() / 1000);
    setModalVisible(false);
    setCheckClicked(false);
    setCorrectAnswer(0);
    setCorrectCount(0);
    setWrongCount(0);
    setSolvedCount(1);
    setAnswerState(4);
    setAnswer("");
    correctCnt = 0;
    setFormula(setFormulaItems());
  };

  const handleExitGame = () => {
    handleCancel();
  };

  useEffect(() => {
    setFormula(setFormulaItems());
  }, []);

  useEffect(() => {
    if (checkClicked) {
      setCount();
      if (solvedCount <= numberOfProblems - 1) {
        delay();
      } else {
        let eTime = Date.now() / 1000;
        setEndTime(eTime);
        setScoreArray([
          ...scoreArray,
          Math.floor((correctCnt / (eTime - startTime)) * 1000),
        ]);
        delayShowingModal();
      }
    }
  }, [checkClicked]);

  return (
    <Screen>
      <Header showCancel={true} onCancelPress={handleCancel} />
      <View style={styles.container}>
        <View style={styles.markContainer}>
          <View style={styles.box1}>
            <Text style={styles.problemText}>
              Problem: {solvedCount}/{numberOfProblems}
            </Text>
          </View>
          <View style={styles.box2}>
            <Image source={correctIcon} style={styles.resultIcon} />
            <Text style={styles.resultCount}>{correctCount}</Text>
            <Image source={wrongIcon} style={styles.resultIcon} />
            <Text style={styles.resultCount}>{wrongCount}</Text>
          </View>
        </View>
        <View style={styles.messageContainer}>
          {answerState == 1 ? (
            <Text style={[styles.message, { color: "#0f0" }]}>
              {correctMessage}
            </Text>
          ) : answerState == 2 ? (
            <Text style={[styles.message, { color: "#f00" }]}>
              {errorMessage} {correctAnswer}
            </Text>
          ) : answerState == 3 ? (
            <Text style={[styles.message, { color: "#f00" }]}>
              Please type answer.
            </Text>
          ) : (
            <Text style={styles.message}></Text>
          )}
        </View>
        <View style={styles.problemContainer}>
          {formula && formula.answer != 1 ? (
            <Text style={styles.problem}>{formula.op1}</Text>
          ) : (
            <Text style={[styles.problem, styles.emptyBox]}>{answer}</Text>
          )}
          <Text style={styles.problem}>{formula && formula.symbol}</Text>
          {formula && formula.answer != 2 ? (
            <Text style={styles.problem}>{formula.op2}</Text>
          ) : (
            <Text style={[styles.problem, styles.emptyBox]}>{answer}</Text>
          )}
          <Text style={styles.problem}>=</Text>
          {formula && formula.answer != 3 ? (
            <Text style={styles.problem}>{formula.result}</Text>
          ) : (
            <Text style={[styles.problem, styles.emptyBox]}>{answer}</Text>
          )}
        </View>
        <View style={styles.checkContainer}>
          <Button
            label={"Check"}
            onPress={handleCheck}
            buttonStyle={styles.checkButton}
            labelStyle={styles.checkButtonLable}
          />
        </View>
        <View style={styles.calculatorContainer}>
          <View style={styles.boxHighScore}>
            <Text style={styles.scoreText}>High Score</Text>
            <Text style={styles.scoreText}>
              {scoreArray.length > 0 ? Math.max(...scoreArray) : ""}
            </Text>
          </View>
          <View style={styles.calculator}>
            <Calculator answer={answer} setAnswer={setAnswer} />
          </View>
          <View style={styles.boxLastScore}>
            <Text style={styles.scoreText}>Last 5 Scores</Text>
            {scoreArray.length > 0 &&
              scoreArray.slice(-5).map((score, index) => (
                <View key={index}>
                  <Text style={styles.scoreText}>
                    {index + 1}. {score}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        <Modal
          isVisible={modalVisible}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropOpacity={0}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Game Complete!</Text>
            </View>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                How many correct Answers: {correctCount}
              </Text>
              <Text style={styles.modalText}>
                How many missed Answers: {wrongCount}
              </Text>
              <Text style={styles.modalText}>
                Your time: {sec2Time(endTime - startTime)}
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button
                label={"START OVER"}
                onPress={handleStartOver}
                buttonStyle={styles.modalButton}
                labelStyle={styles.modalButtonLabel}
              />
              <Button
                label={"EXIT GAME"}
                onPress={handleExitGame}
                buttonStyle={styles.modalButton}
                labelStyle={styles.modalButtonLabel}
              />
            </View>
          </View>
        </Modal>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: wp("50%"),
    height: hp("6.5%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
  },
  box2: {
    width: wp("50%"),
    height: hp("6.5%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxHighScore: {
    width: wp("22%"),
    height: hp("35%"),
    justifyContent: "center",
    alignItems: "center",
  },
  boxLastScore: {
    width: wp("22%"),
    height: hp("35%"),
    justifyContent: "center",
    alignItems: "center",
  },
  calculator: {
    width: wp("56%"),
  },
  calculatorContainer: {
    height: hp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkButton: {
    width: wp("45%"),
    height: hp("9%"),
  },
  checkButtonLable: {
    fontSize: wp("8%"),
  },
  checkContainer: {
    height: hp("13.5%"),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  emptyBox: {
    height: hp("6.5%"),
    backgroundColor: "#fff",
    borderWidth: 5,
  },
  markContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp("6%"),
  },
  message: {
    fontSize: wp("7%"),
  },
  messageContainer: {
    height: hp("6.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  modalButton: {
    width: "40%",
    height: "50%",
  },
  modalButtonContainer: {
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modalButtonLabel: {
    fontSize: wp("4%"),
  },
  modalContainer: {
    marginHorizontal: wp("5%"),
    height: hp("45%"),
    backgroundColor: "#000",
  },
  modalText: {
    fontSize: wp("5%"),
    textAlign: "center",
    color: "#fff",
  },
  modalTextContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: wp("10%"),
    textAlign: "center",
    color: "#fff",
  },
  modalTitleContainer: {
    height: "40%",
    marginHorizontal: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  problem: {
    fontSize: wp("10%"),
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  problemContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  problemText: {
    fontSize: wp("5%"),
    color: "#000",
  },
  resultCount: {
    fontSize: wp("6%"),
    color: "#000",
    marginHorizontal: 10,
  },
  resultIcon: {
    width: hp("4%"),
    height: hp("4%"),
  },
  scoreText: {
    fontSize: wp("4%"),
    textAlign: "center",
    marginBottom: 5,
  },
});

export default CalculatorScreen;
