import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


const EventImageContainer = ({onPress,info}) => {
  
  // const info = props.info;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: info.image}} />
          <View style={{marginHorizontal:12}}>
            <Text style={styles.details}>{info.date}</Text>
            <Text numberOfLines={1} style={styles.details}>{info.title}</Text>
            <View style={styles.locationContainer}>
              <EvilIcons name='location' size={21} color='white' />
              <Text style={styles.details}>{info.location}</Text>
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

export default EventImageContainer;
