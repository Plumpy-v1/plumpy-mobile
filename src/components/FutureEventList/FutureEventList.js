import React from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const FutureEventList = (props) => {
  return (
    <TouchableOpacity onPress={() => console.log("m")} style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/img/event.png")}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>12 Dec 2020</Text>
        <Text style={[styles.text, { fontSize: 20.4 }]}>React Native Event</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    display: "flex",
    position: "absolute",
    left: 60,
    // backgroundColor: "#FF7C7C",
    backgroundColor: "transparent",
    top: 120,
    overflow: "hidden",
  },
  text: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
  img: {
    // width: 280,
    // height: 156,
    aspectRatio: 5 / 3,
    //justifyContent:'center',
    alignSelf: "center",
    borderRadius: 10,
      margin: 5,
    opacity :0.4
  },
});

export default FutureEventList;
