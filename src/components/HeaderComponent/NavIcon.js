import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";

const Profile = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image 
      source={require("../../../assets/img/NearEvents/eventImg.png")}
      style={styles.ProfileImg}
    />
  </TouchableOpacity>
);

const Back = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={require("../../../assets/img/Header/back.png")}
      style={styles.backImage}
    />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  ProfileImg: {
    width: 50,
    height: 50,
  },
  backImage: {
    width: 15,
    height: 20,
  },
});
export { Profile, Back };
