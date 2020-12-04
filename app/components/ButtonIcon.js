import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonIcon = (props) => {
  const {
    iconColor = "#fff",
    isMaterialIcon = false,
    name,
    onPress,
    size = 60,
  } = props;

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      {isMaterialIcon ? (
        <MaterialIcons name={name} color={iconColor} size={size * 0.5} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
