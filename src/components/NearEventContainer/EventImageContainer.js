import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const EventImageContainer = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.warn("Event Tapped")}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/img/NearEvents/eventImg.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.details}>12-Dec-2020</Text>
            <Text style={styles.details}>Cooking is good</Text>
            <View style={styles.locationContainer}>
              <EvilIcons name='location' size={21} color='white' />
              <Text style={styles.details}>sardar bag hall,bardoli</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  details: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: -4,
  },
});

export default EventImageContainer;
