import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const UpVoteButton = ({
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
        <FontAwesome
          style={styles.text}
          name='arrow-circle-up'
          size={29}
          color='#FFFFFF'
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    margin: 8,
    borderRadius: 12,
    alignSelf: "flex-end",
    backgroundColor: "red",
  },
  text: {
    // color: '#FF7C7C',

    fontSize: 25,
    margin: 5,

    paddingHorizontal: "30%",
  },
});

export default UpVoteButton;
