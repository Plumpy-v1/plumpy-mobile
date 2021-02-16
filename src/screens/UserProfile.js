import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginTop: "4%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
              marginTop: "50%",
            }}
          >
            {/* <Image
              source={require("../../assets/")}
            /> */}
            <Text style={styles.text}>User Profile</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    // marginTop: 20,

    backgroundColor: "#FF5B5B",
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    flex: 1,
  },
  text: {
    fontSize: 22,
    textAlign: "left",
    margin: 10,
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    padding: 20,

    color: "#FFFFFF",
  },
  scroll: {
    marginBottom: 10,
  },
});

export default UserProfile;


