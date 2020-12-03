import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Tooltip from "react-native-walkthrough-tooltip";
import SettingScreen from "../screens/SettingScreen";
import ButtonIcon from "./ButtonIcon";

const Header = (props) => {
  const { showCancel = false, showSetting = false, onCancelPress } = props;

  const [toolTipVisible, setToolTipVisible] = useState(false);

  const handleSetting = () => {
    setToolTipVisible(true);
  };

  return (
    <View style={styles.header}>
      <View style={styles.box1}>
        {showCancel && (
          <>
            <TouchableOpacity onPress={onCancelPress}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.box2}>
        {showSetting && (
          <Tooltip
            isVisible={toolTipVisible}
            content={<SettingScreen />}
            placement="bottom"
            onClose={() => setToolTipVisible(false)}
            displayInsets={{
              top: 0,
              bottom: 0,
              left: wp("25%"),
              right: wp("2%"),
            }}
          >
            <ButtonIcon
              name={"settings"}
              size={hp("8%")}
              iconColor={"#6695cf"}
              onPress={handleSetting}
            />
          </Tooltip>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
  },
  box2: {
    width: "50%",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: -20,
  },
  cancel: {
    fontSize: wp("5%"),
    color: "#6695cf",
  },
  header: {
    flexDirection: "row",
    height: hp("6%"),
  },
  settingModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: hp("80%"),
  },
});

export default Header;
