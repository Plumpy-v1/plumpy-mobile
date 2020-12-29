import React from "react";
import { View, Text,StyleSheet } from "react-native";

const NearEventDistanceLine = (props) => {
  return (
    <View>
      {/* line and text */}

      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.text}>2km+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "15.5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  line: {
    borderColor: "white",
    borderBottomWidth: 3,
    transform: [{ rotate: "90deg" }],
    width: "20%",
    height: "60%",
  },
  text:{
      color:'#FFFFFF',
      fontFamily: "Poppins-Regular",
  }
});

export default NearEventDistanceLine;
