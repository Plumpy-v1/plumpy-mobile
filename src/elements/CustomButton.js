import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 *
 * @param {{title,onPress,colorbg,width,height,textcolor}} param0
 */
const CustomButton = ({
  title,
  onPress,
  colorbg,
  width,
  height,
  textcolor,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.button, { backgroundColor: colorbg, width, height }]}
      >
        <Text style={[styles.text, { color: textcolor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
    // paddingLeft:'15%',
    // paddingRight:'15%',
    paddingHorizontal: "18%",
  },
  text: {
    // color: '#FF7C7C',
    color: "#111",
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: "5%",
    paddingRight: "5%",
    textAlign: "center",
  },
});

export default CustomButton;
