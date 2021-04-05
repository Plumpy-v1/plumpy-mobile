import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const FutureEventList = ({ info, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("JoinedEvent", {
          eventdata: {
            mapLat: info.node.mapLat,
            mapLag: info.node.mapLat,
            organizerInfo: info.node.organizerInfo,
            name: info.node.name,
            roomId: info.node.roomId,
          },
        })
      }
      style={styles.container}
    >
      <Image
        style={styles.img}
        source={require("../../../assets/img/event.png")}
      />

      <View style={styles.innerContainer}>
        <Text style={styles.text}>{info?.node.date}</Text>
        <Text style={[styles.text, { fontSize: 20.4 }]}>{info?.node.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    display: "flex",
    position: "absolute",
    left: 60,
    // backgroundColor: "#FF7C7C",
    backgroundColor: "transparent",
    top: 100,
    // overflow: "hidden",
    // height: "50%",
    width: 250,
  },
  text: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
  },
  img: {
    // width: 350,
    // height: 156,
    aspectRatio: 5 / 2.9,
    //justifyContent:'center',
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    opacity: 0.4,
  },
});

export default FutureEventList;
