import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const CreatePollButton = ({
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
        <AntDesign name='plus' size={24} color='#FF7C7C' />
        <Text style={[styles.text, { color: textcolor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf:'flex-end',
    backgroundColor: "red",
  },
  text: {
    // color: '#FF7C7C',
    color: "#111",
    fontSize: 17,
    fontFamily: "Poppins-Regular",

    paddingBottom: 15,
    paddingLeft: "5%",
    paddingRight: "5%",
    textAlign: "center",
  },
});

export default CreatePollButton;
