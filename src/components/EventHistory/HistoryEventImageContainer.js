import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { env } from "../../../env";
import {navigationiteam} from "../../navigation/MainNavigation"
const HistoryEventImageContainer = ({ info, navigation }) => {
  console.log({ info });
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(navigationiteam.EventDetails, {
          eventId: info?.node.eventId,
          isJoinShow : false
        })
      }
    >
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={onPress}> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `${env.serverUrl}/${
                info?.node.eventPic || env.defaultImageName
              }`,
            }}
          />
          <View style={{ marginHorizontal: 12 }}>
            <Text style={styles.details}>{info?.node.date}</Text>
            <Text numberOfLines={1} style={styles.details}>
              {info?.node.name}
            </Text>
            <View style={styles.locationContainer}>
              <EvilIcons name="location" size={21} color="white" />
              <Text style={styles.details}>{info?.node.address}</Text>
            </View>
          </View>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-evenly",
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

export default HistoryEventImageContainer;
