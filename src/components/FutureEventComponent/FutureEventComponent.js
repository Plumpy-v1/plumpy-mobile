import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const FutureEventComponent = ({ image, text }) => {
  return (
    <TouchableOpacity onPress={() => console.log("m")} style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/img/temp.jpg")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  img: {
    // width: 280,
    // height: 156,
    aspectRatio: 5 / 3,
    //justifyContent:'center',
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
  },
});

export default FutureEventComponent;
