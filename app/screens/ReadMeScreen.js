import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ReadMe = (props) => {
  const {setShowReadMe} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: wp("13%") }}></View>
        <Text style={styles.readMe}>Read Me</Text>
        <TouchableOpacity
          onPress={() => setShowReadMe(false)}
        >
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.paragraph}>
          <Text style={styles.text}>The Mathematical Challenges game is the first in a series of games to provide practice in basic math operations.  This game provides practice in addition, subtraction, multiplication and division.  The student can both see and hear each problem.  Erroneous answers will be corrected both visually and aurally.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text}>The players will be asked to solve a set of problems.  Each set will be timed.  The goal of the game is for the player to reduce the time to solve the set of problems with no errors.  The numbers in each successive set will be randomly selected within operator defined boundaries.  A score is provided for each set of problems based on the number of correct answers and the time to complete the set.  The scores are cleared when a new game or setting is selected.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text}>Settings are provided to turn the speaker ON or OFF, to control the speed of the speaker, to select the number of problems in a set of problems, and to select the range of the whole numbers to be randomly used in the set of problems.  Default selections are Sound ON, speech speed 2, 10 problems in a set, and the range of whole numbers from 0 to 10 for addition, subtraction, multiplication, and division.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text}>Mystery math games are also provided for practice in determining the unknown whole number in an equation relating three whole numbers.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text}>The game is designed to support a subset of the Operations and Algebraic Thinking skills required in the Common Core State Standards for Grades 1, 2, and 3.  The game provides remedial practice for Grades 4, 5, and 6.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.text}>With a focus on self-improvement, the games develop mental arithmetic skills as the players race the clock to reduce the time they take to solve a set of problems.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    padding: 15,
  },
  container: {
    marginHorizontal: wp("2%"),
    height: hp("80%"),
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  done: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    paddingRight: 10,
  },
  header: {
    width: "100%",
    height: hp("6%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  paragraph: {
    marginBottom: 20,
  },
  readMe: {
    fontSize: wp("6%"),
    fontWeight: "bold",
  },
  text: {
    fontSize: wp("4%"),
  },
});

export default ReadMe;
